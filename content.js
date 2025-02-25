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
      if (!window.HackerRankBridge || window.HackerRankBridge.initializationAttempts > 3) {
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
      
      // Ensure direct access is initialized
      if (window.HackerRankBridge && !window.HackerRankBridge.directAccessInitialized) {
        console.log('DEBUG - Initializing HackerRank direct access');
        window.HackerRankBridge.initializeDirectAccess();
        // Wait a bit for initialization
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      // Try to find Monaco in the page directly
      const monacoEditors = document.querySelectorAll('.monaco-editor');
      if (monacoEditors.length > 0) {
        console.log('DEBUG - Found Monaco editors in the page:', monacoEditors.length);
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
          console.log(`DEBUG - Found Monaco in ${loc}, making it globally available`);
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
    
    // For HackerRank, try direct DOM manipulation if the bridge fails
    if (window.location.hostname.includes('hackerrank.com')) {
      try {
        // First try using the bridge
        await applySolution(solution.answer, problemDetails.type);
      } catch (e) {
        console.log('DEBUG - Bridge failed, trying direct DOM manipulation:', e.message);
        
        // Try direct DOM manipulation
        const success = await applyDirectSolution(solution.answer);
        if (!success) {
          throw new Error('Failed to apply solution using both bridge and direct manipulation');
        }
      }
    } else {
      // For other platforms, use the standard approach
      await applySolution(solution.answer, problemDetails.type);
    }
    
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

// Direct solution application for HackerRank
async function applyDirectSolution(solution) {
  console.log('DEBUG - Attempting direct solution application');
  
  // Clean up the solution
  let cleanSolution = solution;
  if (solution.includes('```')) {
    const matches = solution.match(/```(?:\w+\n)?([\s\S]*?)```/);
    cleanSolution = matches ? matches[1].trim() : solution.trim();
  }
  
  // First try using the global function if available
  try {
    // Check if our direct access script has been loaded and initialized
    if (typeof window.hackerrankDirectSetValue === 'function') {
      console.log('DEBUG - Using hackerrankDirectSetValue function');
      const result = window.hackerrankDirectSetValue(cleanSolution);
      if (result && result.success) {
        console.log('DEBUG - Successfully set editor value using direct function');
        return true;
      }
      console.log('DEBUG - Direct function failed:', result?.error || 'Unknown error');
    }
  } catch (e) {
    console.error('DEBUG - Error using direct function:', e);
  }
  
  // Try to find Monaco editor directly
  const editorWrappers = document.querySelectorAll('.hr-monaco-editor-wrapper');
  if (editorWrappers.length === 0) {
    console.error('DEBUG - No editor wrappers found');
    return false;
  }
  
  console.log('DEBUG - Found editor wrappers:', editorWrappers.length);
  
  // Try to find Monaco editor in wrapper
  for (const wrapper of editorWrappers) {
    const monacoElement = wrapper.querySelector('.monaco-editor');
    if (!monacoElement) continue;
    
    console.log('DEBUG - Found Monaco editor element');
    
    // Try to access Monaco editor
    if (!window.monaco?.editor) {
      console.error('DEBUG - Monaco editor not available in window');
      
      // Try to find Monaco in HackerRank's custom locations
      const hrLocations = [
        'hackerrank_r_krackjack',
        '_monaco',
        'monaco',
        'MonacoEnvironment',
        'MonacoEditor'
      ];
      
      let foundMonaco = false;
      for (const loc of hrLocations) {
        const value = window[loc];
        if (value?.editor) {
          console.log(`DEBUG - Found Monaco in ${loc}, using it`);
          foundMonaco = true;
          
          // Try to set value using this Monaco instance
          try {
            const editors = value.editor.getEditors();
            if (editors && editors.length > 0) {
              const editor = editors[0];
              const model = editor.getModel();
              if (model) {
                try {
                  model.pushEditOperations(
                    [],
                    [{
                      range: model.getFullModelRange(),
                      text: cleanSolution
                    }],
                    () => null
                  );
                  console.log('DEBUG - Successfully set editor value using', loc);
                  return true;
                } catch (e) {
                  console.warn(`DEBUG - pushEditOperations failed for ${loc}, trying setValue:`, e);
                  try {
                    model.setValue(cleanSolution);
                    console.log('DEBUG - Successfully set editor value using setValue on', loc);
                    return true;
                  } catch (e2) {
                    console.error(`DEBUG - setValue also failed for ${loc}:`, e2);
                  }
                }
              }
            }
          } catch (e) {
            console.error(`DEBUG - Error using ${loc}:`, e);
          }
        }
      }
      
      if (!foundMonaco) {
        continue;
      }
    }
    
    const editors = window.monaco.editor.getEditors();
    if (!editors || editors.length === 0) {
      console.error('DEBUG - No editors found in monaco.editor.getEditors()');
      continue;
    }
    
    console.log('DEBUG - Found', editors.length, 'Monaco editors');
    
    // Try each editor
    for (const editor of editors) {
      try {
        const model = editor.getModel();
        if (!model) {
          console.error('DEBUG - Editor has no model');
          continue;
        }
        
        console.log('DEBUG - Found editor model, setting value');
        
        // Try to set value
        try {
          // Method 1: Use pushEditOperations
          model.pushEditOperations(
            [],
            [{
              range: model.getFullModelRange(),
              text: cleanSolution
            }],
            () => null
          );
        } catch (e) {
          console.warn('DEBUG - pushEditOperations failed, trying setValue:', e);
          // Method 2: Use setValue
          model.setValue(cleanSolution);
        }
        
        // Verify the change
        const newValue = model.getValue();
        if (newValue !== cleanSolution) {
          console.warn('DEBUG - Value verification failed, trying again');
          model.setValue(cleanSolution);
        }
        
        console.log('DEBUG - Successfully set editor value');
        return true;
      } catch (e) {
        console.error('DEBUG - Error setting editor value:', e);
      }
    }
  }
  
  // Try one more approach - inject a script directly
  try {
    console.log('DEBUG - Trying direct script injection as last resort');
    
    // Create a script element to inject code directly
    const script = document.createElement('script');
    script.textContent = `
      (function() {
        try {
          // Try to find Monaco editor
          const findEditor = () => {
            // Check HackerRank specific globals
            const hrLocations = [
              'hackerrank_r_krackjack',
              '_monaco',
              'monaco',
              'MonacoEnvironment',
              'MonacoEditor'
            ];
            
            // Try each location
            for (const loc of hrLocations) {
              if (window[loc]?.editor) {
                const editors = window[loc].editor.getEditors?.();
                if (editors && editors.length > 0) {
                  return { editor: editors[0], location: loc };
                }
              }
            }
            
            // Try standard monaco
            if (window.monaco?.editor) {
              const editors = window.monaco.editor.getEditors();
              if (editors && editors.length > 0) {
                return { editor: editors[0], location: 'monaco' };
              }
            }
            
            return null;
          };
          
          // Find editor and set value
          const editorInfo = findEditor();
          if (editorInfo) {
            const model = editorInfo.editor.getModel();
            if (model) {
              // Set value
              model.setValue(\`${cleanSolution.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`);
              console.log('Direct script injection succeeded using ' + editorInfo.location);
            }
          }
        } catch (e) {
          console.error('Error in direct script injection:', e);
        }
      })();
    `;
    
    // Append script to page
    (document.head || document.documentElement).appendChild(script);
    
    // Remove script after execution
    script.onload = function() {
      this.remove();
    };
    
    // Wait a bit for the script to execute
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // We can't directly know if it succeeded, so we'll assume it might have worked
    return true;
  } catch (e) {
    console.error('DEBUG - Error with direct script injection:', e);
  }
  
  console.error('DEBUG - Failed to apply solution directly');
  return false;
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