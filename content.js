// Listen for messages from popup and background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('DEBUG - Received message:', request);

  // Handle ping message to check if content script is loaded
  if (request.action === 'ping') {
    sendResponse({ success: true });
    return true;
  }

  if (request.action === 'solve') {
    handleSolveRequest()
      .then(response => {
        console.log('DEBUG - Solve request completed:', response);
        sendResponse(response);
      })
      .catch(error => {
        console.error('DEBUG - Error in solve request:', error);
        console.error('DEBUG - Error stack:', error.stack);
        sendResponse({ 
          success: false, 
          error: error.message || 'Unknown error occurred while solving'
        });
      });
    return true; // Required for async response
  }
});

// Handle solve request
async function handleSolveRequest() {
  console.log('DEBUG - Starting solve request...');
  try {
    // Check if we're on a supported page
    const type = detectProblemType();
    console.log('DEBUG - Detected problem type:', type);
    
    if (type === 'unknown') {
      throw new Error('No code editor found on this page. Please navigate to a page with a code editor or a supported coding platform.');
    }

    // Extract problem details
    console.log('DEBUG - Attempting to extract problem details...');
    const problemDetails = await extractProblemDetails();
    console.log('DEBUG - Raw problem details:', JSON.stringify(problemDetails, null, 2));
    
    if (!problemDetails) {
      throw new Error('Could not extract problem details from the page. Please make sure all problem elements are loaded.');
    }

    // Validate extracted data
    if (!problemDetails.title || !problemDetails.description) {
      console.error('DEBUG - Missing required data:', {
        hasTitle: !!problemDetails.title,
        hasDescription: !!problemDetails.description,
        titleLength: problemDetails.title?.length,
        descriptionLength: problemDetails.description?.length
      });
      throw new Error('Could not find all required problem information. Please ensure the problem page is fully loaded.');
    }

    console.log('DEBUG - Sending problem to solver:', {
      type: problemDetails.type,
      titleLength: problemDetails.title.length,
      descriptionLength: problemDetails.description.length,
      hasTemplate: !!problemDetails.codeTemplate,
      language: problemDetails.language
    });

    // Send problem to background script for solving
    console.log('DEBUG - Sending message to background script');
    const solution = await chrome.runtime.sendMessage({
      action: 'getSolution',
      problem: problemDetails
    });

    console.log('DEBUG - Received solution from background:', solution);
    if (!solution) {
      throw new Error('No response received from the solver');
    }
    if (!solution.answer) {
      console.error('DEBUG - Invalid solution format:', solution);
      throw new Error('No valid solution received from the API');
    }

    // Apply the solution
    console.log('DEBUG - Attempting to apply solution...');
    await applySolution(solution.answer, problemDetails.type);
    
    console.log('DEBUG - Solution applied successfully');
    return { success: true };
  } catch (error) {
    console.error('DEBUG - Error solving problem:', error);
    console.error('DEBUG - Error stack:', error.stack);

    // Convert error to a more user-friendly message
    let errorMessage = error.message;
    if (errorMessage.includes('No code editor found')) {
      errorMessage = 'No code editor found on this page. Please navigate to a supported coding platform or a page with a code editor.';
    } else if (errorMessage.includes('API call failed')) {
      errorMessage = 'Failed to get solution from AI. Please check your API key and try again.';
    } else if (errorMessage.includes('editor not found')) {
      errorMessage = 'Could not find code editor. Please make sure you are on a page with a code editor.';
    } else if (errorMessage.includes('Could not find problem title or description')) {
      errorMessage = 'Could not find problem details. Please make sure the problem has fully loaded.';
    }

    throw new Error(errorMessage);
  }
}

// Auto-solve feature
let autoSolveObserver = null;

// Start observing for new problems
function startAutoSolve() {
  console.log('Starting auto-solve...');
  if (autoSolveObserver) {
    console.log('Auto-solve already running');
    return;
  }

  const config = { childList: true, subtree: true };
  autoSolveObserver = new MutationObserver(async (mutations) => {
    try {
      const type = detectProblemType();
      if (type === 'unknown') return;

      // Check if new problem loaded
      const problemDetails = extractProblemDetails();
      if (!problemDetails) return;

      console.log('New problem detected, attempting to solve...');
      await handleSolveRequest();
    } catch (error) {
      console.error('Error in auto-solve:', error);
    }
  });

  autoSolveObserver.observe(document.body, config);
  console.log('Auto-solve observer started');
}

// Stop auto-solve
function stopAutoSolve() {
  console.log('Stopping auto-solve...');
  if (autoSolveObserver) {
    autoSolveObserver.disconnect();
    autoSolveObserver = null;
    console.log('Auto-solve stopped');
  }
}

// Listen for auto-solve toggle
chrome.storage.local.get(['autoSolve'], (result) => {
  if (result.autoSolve) {
    console.log('Auto-solve enabled, starting...');
    startAutoSolve();
  }
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.autoSolve) {
    if (changes.autoSolve.newValue) {
      startAutoSolve();
    } else {
      stopAutoSolve();
    }
  }
}); 