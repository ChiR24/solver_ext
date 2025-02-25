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

  // Handle debug request to get editor state
  if (request.action === 'debugEditor') {
    debugEditorState()
      .then(debugInfo => {
        console.log('DEBUG - Editor debug info:', debugInfo);
        sendResponse({ success: true, debugInfo });
      })
      .catch(error => {
        console.error('DEBUG - Error debugging editor:', error);
        sendResponse({ success: false, error: error.message });
      });
    return true;
  }
});

// Debug function to check editor state
async function debugEditorState() {
  console.log('DEBUG - Checking editor state');
  
  // Check if we're on HackerRank
  const isHackerRank = window.location.hostname.includes('hackerrank.com');
  
  // Basic DOM info
  const domInfo = {
    url: window.location.href,
    title: document.title,
    readyState: document.readyState,
    monacoElements: document.querySelectorAll('.monaco-editor').length,
    hrMonacoElements: document.querySelectorAll('.hr-monaco-editor').length,
    hrMonacoWrappers: document.querySelectorAll('.hr-monaco-editor-wrapper').length,
    iframes: Array.from(document.querySelectorAll('iframe')).map(iframe => ({
      id: iframe.id,
      className: iframe.className,
      src: iframe.src
    }))
  };
  
  // Check for Monaco global
  const monacoInfo = {
    hasMonaco: !!window.monaco,
    hasMonacoEditor: !!window.monaco?.editor,
    modelCount: window.monaco?.editor?.getModels()?.length || 0,
    editorCount: window.monaco?.editor?.getEditors()?.length || 0
  };
  
  // Check for HackerRank specific globals
  const hackerrankInfo = isHackerRank ? {
    hasHackerrankBridge: !!window.HackerRankBridge,
    bridgeInitialized: !!window.HackerRankBridge?.initialized,
    hasHrMonaco: !!window.hackerrank_r_krackjack,
    hasMonacoEnv: !!window.MonacoEnvironment,
    hasMonacoEditor: !!window.MonacoEditor,
    has_monaco: !!window._monaco,
    debugHistory: window.HackerRankBridge?.debugHistory || []
  } : {};
  
  // Try to manually find Monaco in HackerRank's specific locations
  if (isHackerRank) {
    try {
      // Check for Monaco in various HackerRank-specific globals
      const hrLocations = [
        'hackerrank_r_krackjack',
        '_monaco',
        'monaco',
        'MonacoEnvironment',
        'MonacoEditor'
      ];
      
      for (const loc of hrLocations) {
        const value = window[loc];
        if (value?.editor) {
          console.log(`Found Monaco in ${loc}:`, value);
          hackerrankInfo[`${loc}_details`] = {
            hasEditor: !!value.editor,
            hasGetEditors: typeof value.editor.getEditors === 'function',
            editorCount: value.editor.getEditors?.()?.length || 0
          };
        }
      }
      
      // Try to find editor in DOM
      const editorWrappers = document.querySelectorAll('.hr-monaco-editor-wrapper');
      if (editorWrappers.length > 0) {
        console.log('Found HR Monaco editor wrappers:', editorWrappers.length);
        hackerrankInfo.wrapperDetails = Array.from(editorWrappers).map(wrapper => ({
          id: wrapper.id,
          className: wrapper.className,
          childCount: wrapper.children.length,
          hasMonacoEditor: !!wrapper.querySelector('.monaco-editor')
        }));
      }
    } catch (e) {
      console.error('Error checking HackerRank specifics:', e);
    }
  }
  
  return {
    timestamp: new Date().toISOString(),
    domInfo,
    monacoInfo,
    hackerrankInfo
  };
}

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

    // For HackerRank, ensure the bridge is initialized
    if (window.location.hostname.includes('hackerrank.com')) {
      console.log('DEBUG - HackerRank detected, checking editor bridge');
      
      // If bridge not initialized or failed, try to reinitialize
      if (!window.HackerRankBridge || window.HackerRankBridge.initializationAttempts > 50) {
        console.log('DEBUG - Reinitializing HackerRank bridge');
        
        // Try to reinitialize the bridge
        if (typeof initializeEditorBridges === 'function') {
          initializeEditorBridges();
        } else {
          // If function not available, try to reload the bridge script
          const script = document.createElement('script');
          script.src = chrome.runtime.getURL('editor-bridges.js');
          document.head.appendChild(script);
          
          // Wait for script to load
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
      
      // Check if Monaco is available in HackerRank's custom locations
      const hrLocations = [
        'hackerrank_r_krackjack',
        '_monaco',
        'monaco',
        'MonacoEnvironment',
        'MonacoEditor'
      ];
      
      for (const loc of hrLocations) {
        const value = window[loc];
        if (value?.editor) {
          console.log(`Found Monaco in ${loc}, making it globally available`);
          window.monaco = window.monaco || value;
          break;
        }
      }
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

    // For HackerRank, collect additional debug info
    if (window.location.hostname.includes('hackerrank.com')) {
      try {
        const debugInfo = await debugEditorState();
        console.log('DEBUG - HackerRank debug info:', debugInfo);
      } catch (e) {
        console.error('DEBUG - Error collecting debug info:', e);
      }
    }

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
    } else if (errorMessage.includes('Failed to apply solution')) {
      // For HackerRank specific errors
      if (window.location.hostname.includes('hackerrank.com')) {
        errorMessage = 'Failed to apply solution to HackerRank editor. The editor may not be fully loaded or initialized. Try refreshing the page and waiting a few seconds before trying again.';
      } else {
        errorMessage = 'Failed to apply solution to editor. Please make sure the editor is fully loaded.';
      }
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

// Log initialization
console.log('Content script initialized for', window.location.href); 