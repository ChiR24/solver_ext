// Debug logger utility with performance optimizations
const DEBUG = {
  NONE: 0,     // No logs
  ERROR: 1,    // Only errors
  WARN: 2,     // Errors and warnings
  INFO: 3,     // Standard info
  VERBOSE: 4,  // Detailed info
  ALL: 5       // All debug messages
};

// Set the current debug level - change to DEBUG.VERBOSE or DEBUG.ALL when debugging
const currentDebugLevel = DEBUG.ERROR;

// Optimized logger with conditional function creation
const logger = (() => {
  // Only create functions for levels that are enabled
  return {
    error: currentDebugLevel >= DEBUG.ERROR ? 
      (message, ...args) => console.error(`ERROR - ${message}`, ...args) : 
      () => {},
    warn: currentDebugLevel >= DEBUG.WARN ? 
      (message, ...args) => console.warn(`WARN - ${message}`, ...args) : 
      () => {},
    info: currentDebugLevel >= DEBUG.INFO ? 
      (message, ...args) => console.log(`INFO - ${message}`, ...args) : 
      () => {},
    debug: currentDebugLevel >= DEBUG.VERBOSE ? 
      (message, ...args) => console.log(`DEBUG - ${message}`, ...args) : 
      () => {},
    trace: currentDebugLevel >= DEBUG.ALL ? 
      (message, ...args) => console.log(`TRACE - ${message}`, ...args) : 
      () => {}
  };
})();

// Keyboard shortcut configuration
const DEFAULT_SHORTCUT = {
  ctrlKey: true,
  altKey: true,
  shiftKey: false,
  key: 's',
  code: 'KeyS'
};

// Current keyboard shortcut configuration
let currentShortcut = DEFAULT_SHORTCUT;

// Load keyboard shortcut from storage - with lazy loading
let shortcutLoaded = false;
function loadKeyboardShortcut() {
  if (shortcutLoaded) return Promise.resolve(currentShortcut);
  
  return new Promise(resolve => {
    chrome.storage.local.get(['keyboardShortcut'], (result) => {
      if (result.keyboardShortcut) {
        currentShortcut = result.keyboardShortcut;
        logger.info('Loaded keyboard shortcut:', currentShortcut);
      } else {
        // Save default if not found
        chrome.storage.local.set({ keyboardShortcut: DEFAULT_SHORTCUT });
        logger.info('Using default keyboard shortcut:', DEFAULT_SHORTCUT);
      }
      shortcutLoaded = true;
      resolve(currentShortcut);
    });
  });
}

// Initialize keyboard shortcut - lazy load on first use
let shortcutPromise = null;
function getShortcut() {
  if (!shortcutPromise) {
    shortcutPromise = loadKeyboardShortcut();
  }
  return shortcutPromise;
}

// Listen for shortcut changes with debouncing
let autoSolveTimeout = null;
chrome.storage.onChanged.addListener((changes) => {
  // Handle keyboard shortcut changes
  if (changes.keyboardShortcut) {
    currentShortcut = changes.keyboardShortcut.newValue;
    shortcutLoaded = true;
    logger.info('Keyboard shortcut updated:', currentShortcut);
  }
  
  // Handle auto-solve toggle changes with debouncing
  if (changes.autoSolve) {
    if (autoSolveTimeout) {
      clearTimeout(autoSolveTimeout);
    }
    
    autoSolveTimeout = setTimeout(() => {
      if (changes.autoSolve.newValue) {
        startAutoSolve();
      } else {
        stopAutoSolve();
      }
      autoSolveTimeout = null;
    }, 100);
  }
});

// Optimized event listener with debouncing
let keydownTimeout = null;
document.addEventListener('keydown', (event) => {
  // Skip processing if another keydown is being processed
  if (keydownTimeout) return;
  
  keydownTimeout = setTimeout(() => {
    // Ensure shortcut is loaded
    getShortcut().then(() => {
      // Check if event matches the configured shortcut
      if (event.ctrlKey === currentShortcut.ctrlKey &&
          event.altKey === currentShortcut.altKey &&
          event.shiftKey === currentShortcut.shiftKey &&
          (event.key.toLowerCase() === currentShortcut.key.toLowerCase() || 
           event.code === currentShortcut.code)) {
        
        logger.info('Keyboard shortcut triggered');
        event.preventDefault(); // Prevent default browser behavior
        
        // Handle the solve request
        handleSolveRequest();
      }
      
      keydownTimeout = null;
    });
  }, 50); // Short debounce for keyboard events
});

// Listen for messages from popup and background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  logger.debug('Received message:', request);

  // Handle ping message to check if content script is loaded
  if (request.action === 'ping') {
    sendResponse({ success: true });
    return true;
  }

  if (request.action === 'solve') {
    handleSolveRequest()
      .then(response => {
        logger.debug('Solve request completed:', response);
        sendResponse(response);
      })
      .catch(error => {
        logger.error('Error in solve request:', error);
        logger.error('Error stack:', error.stack);
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
        logger.debug('Editor debug info:', debugInfo);
        sendResponse({ success: true, debugInfo });
      })
      .catch(error => {
        logger.error('Error debugging editor:', error);
        sendResponse({ success: false, error: error.message });
      });
    return true;
  }
});

// Debug function to check editor state
async function debugEditorState() {
  logger.debug('Checking editor state');
  
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
    hasDirectSetValue: typeof window.hackerrankDirectSetValue === 'function',
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
          logger.info(`Found Monaco in ${loc}:`, value);
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
        logger.info('Found HR Monaco editor wrappers:', editorWrappers.length);
        hackerrankInfo.wrapperDetails = Array.from(editorWrappers).map(wrapper => ({
          id: wrapper.id,
          className: wrapper.className,
          childCount: wrapper.children.length,
          hasMonacoEditor: !!wrapper.querySelector('.monaco-editor')
        }));
      }
    } catch (e) {
      logger.error('Error checking HackerRank specifics:', e);
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
  logger.info('Starting solve request...');
  try {
    // Check if we're on a supported page
    const type = detectProblemType();
    logger.info('Detected problem type:', type);
    
    if (type === 'unknown') {
      throw new Error('No code editor found on this page. Please navigate to a page with a code editor or a supported coding platform.');
    }

    // For HackerRank, ensure the bridge is initialized
    if (window.location.hostname.includes('hackerrank.com')) {
      logger.info('HackerRank detected, checking editor bridge');
      
      // Try to initialize direct access first
      try {
        // Check if direct access script is already loaded
        if (typeof window.hackerrankDirectSetValue !== 'function') {
          logger.debug('Direct access not initialized, loading script');
          
          // Load the direct access script
          const script = document.createElement('script');
          script.src = chrome.runtime.getURL('hackerrank-direct-access.js');
          script.type = 'text/javascript';
          document.head.appendChild(script);
          
          // Wait for script to load
          await new Promise(resolve => {
            script.onload = resolve;
            // Timeout after 2 seconds
            setTimeout(resolve, 2000);
          });
          
          logger.debug('Direct access script loaded');
        }
      } catch (e) {
        logger.error('Error initializing direct access:', e);
      }
      
      // If bridge not initialized or failed, try to reinitialize
      if (!window.HackerRankBridge || window.HackerRankBridge.initializationAttempts > 3) {
        logger.info('Reinitializing HackerRank bridge');
        
        // Try to reinitialize the bridge
        try {
          if (typeof initializeEditorBridges === 'function') {
            initializeEditorBridges();
          } else {
            // If function not available, try to reload the bridge script
            const script = document.createElement('script');
            script.src = chrome.runtime.getURL('editor-bridges.js');
            script.type = 'text/javascript';
            document.head.appendChild(script);
            
            // Wait for script to load
            await new Promise(resolve => {
              script.onload = resolve;
              // Timeout after 2 seconds
              setTimeout(resolve, 2000);
            });
          }
        } catch (e) {
          logger.error('Error reinitializing bridge:', e);
        }
      }
      
      // Try to find Monaco in the page directly
      const monacoEditors = document.querySelectorAll('.monaco-editor');
      if (monacoEditors.length > 0) {
        logger.info('Found Monaco editors in the page:', monacoEditors.length);
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
          logger.debug(`Found Monaco in ${loc}, making it globally available`);
          window.monaco = window.monaco || value;
          break;
        }
      }
    }

    // Extract problem details
    logger.info('Attempting to extract problem details...');
    const problemDetails = await extractProblemDetails();
    logger.debug('Raw problem details:', JSON.stringify(problemDetails, null, 2));
    
    if (!problemDetails) {
      throw new Error('Could not extract problem details from the page. Please make sure all problem elements are loaded.');
    }

    // Validate extracted data
    if (!problemDetails.title || !problemDetails.description) {
      logger.error('Missing required data:', {
        hasTitle: !!problemDetails.title,
        hasDescription: !!problemDetails.description,
        titleLength: problemDetails.title?.length,
        descriptionLength: problemDetails.description?.length
      });
      throw new Error('Could not find all required problem information. Please ensure the problem page is fully loaded.');
    }

    logger.info('Sending problem to solver:', {
      type: problemDetails.type,
      titleLength: problemDetails.title.length,
      descriptionLength: problemDetails.description.length,
      hasTemplate: !!problemDetails.codeTemplate,
      language: problemDetails.language
    });

    // Send problem to background script for solving
    logger.debug('Sending message to background script');
    const solution = await chrome.runtime.sendMessage({
      action: 'getSolution',
      problem: problemDetails
    });

    logger.debug('Received solution from background');
    if (!solution) {
      throw new Error('No response received from the solver');
    }
    if (!solution.answer) {
      logger.error('Invalid solution format:', solution);
      throw new Error('No valid solution received from the API');
    }

    // Apply the solution
    logger.info('Attempting to apply solution...');
    
    // For HackerRank, try direct DOM manipulation if the bridge fails
    if (window.location.hostname.includes('hackerrank.com')) {
      try {
        // First try using the direct access function if available
        if (typeof window.hackerrankDirectSetValue === 'function') {
          logger.info('Using direct access function');
          const result = window.hackerrankDirectSetValue(solution.answer);
          if (result && result.success) {
            logger.info('Successfully set editor value using direct function');
            return { success: true };
          }
          logger.warn('Direct function failed:', result?.error || 'Unknown error');
        }
        
        // Then try using the bridge
        await applySolution(solution.answer, problemDetails.type);
      } catch (e) {
        logger.warn('Bridge failed, trying direct DOM manipulation:', e.message);
        
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
    
    logger.info('Solution applied successfully');
    return { success: true };
  } catch (error) {
    logger.error('Error solving problem:', error);
    logger.error('Error stack:', error.stack);

    // For HackerRank, collect additional debug info
    if (window.location.hostname.includes('hackerrank.com')) {
      try {
        const debugInfo = await debugEditorState();
        logger.debug('HackerRank debug info:', debugInfo);
      } catch (e) {
        logger.error('Error collecting debug info:', e);
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
  logger.info('Attempting direct solution application');
  
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
      logger.debug('Using hackerrankDirectSetValue function');
      const result = window.hackerrankDirectSetValue(cleanSolution);
      if (result && result.success) {
        logger.info('Successfully set editor value using direct function');
        return true;
      }
      logger.warn('Direct function failed:', result?.error || 'Unknown error');
    }
  } catch (e) {
    logger.error('Error using direct function:', e);
  }
  
  // Try to find Monaco editor directly
  const editorWrappers = document.querySelectorAll('.hr-monaco-editor-wrapper');
  if (editorWrappers.length === 0) {
    logger.error('No editor wrappers found');
    return false;
  }
  
  logger.debug('Found editor wrappers:', editorWrappers.length);
  
  // Try to find Monaco editor in wrapper
  for (const wrapper of editorWrappers) {
    const monacoElement = wrapper.querySelector('.monaco-editor');
    if (!monacoElement) continue;
    
    logger.debug('Found Monaco editor element');
    
    // Try to access Monaco editor
    if (!window.monaco?.editor) {
      logger.warn('Monaco editor not available in window');
      
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
          logger.debug(`Found Monaco in ${loc}, using it`);
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
                  logger.info('Successfully set editor value using', loc);
                  return true;
                } catch (e) {
                  logger.warn(`pushEditOperations failed for ${loc}, trying setValue:`, e);
                  try {
                    model.setValue(cleanSolution);
                    logger.info('Successfully set editor value using setValue on', loc);
                    return true;
                  } catch (e2) {
                    logger.error(`setValue also failed for ${loc}:`, e2);
                  }
                }
              }
            }
          } catch (e) {
            logger.error(`Error using ${loc}:`, e);
          }
        }
      }
      
      if (!foundMonaco) {
        continue;
      }
    }
    
    const editors = window.monaco.editor.getEditors();
    if (!editors || editors.length === 0) {
      logger.warn('No editors found in monaco.editor.getEditors()');
      continue;
    }
    
    logger.debug('Found', editors.length, 'Monaco editors');
    
    // Try each editor
    for (const editor of editors) {
      try {
        const model = editor.getModel();
        if (!model) {
          logger.warn('Editor has no model');
          continue;
        }
        
        logger.debug('Found editor model, setting value');
        
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
          logger.warn('pushEditOperations failed, trying setValue:', e);
          // Method 2: Use setValue
          model.setValue(cleanSolution);
        }
        
        // Verify the change
        const newValue = model.getValue();
        if (newValue !== cleanSolution) {
          logger.warn('Value verification failed, trying again');
          model.setValue(cleanSolution);
        }
        
        logger.info('Successfully set editor value');
        return true;
      } catch (e) {
        logger.error('Error setting editor value:', e);
      }
    }
  }
  
  // Try one more approach - create a script element with src
  try {
    logger.debug('Trying script with src as last resort');
    
    // Create a temporary script file with the solution
    const tempScript = document.createElement('script');
    tempScript.type = 'text/javascript';
    tempScript.src = chrome.runtime.getURL('hackerrank-direct-access.js');
    
    // Add the script to the page
    document.head.appendChild(tempScript);
    
    // Wait for the script to load
    await new Promise(resolve => {
      tempScript.onload = resolve;
      // Timeout after 2 seconds
      setTimeout(resolve, 2000);
    });
    
    // Try to use the direct access function
    if (typeof window.hackerrankDirectSetValue === 'function') {
      logger.debug('Using hackerrankDirectSetValue function after loading script');
      const result = window.hackerrankDirectSetValue(cleanSolution);
      if (result && result.success) {
        logger.info('Successfully set editor value using direct function');
        return true;
      }
    }
    
    // Clean up
    tempScript.remove();
  } catch (e) {
    logger.error('Error with script src approach:', e);
  }
  
  logger.error('Failed to apply solution directly');
  return false;
}

// Auto-solve feature
let autoSolveObserver = null;

// Start observing for new problems
function startAutoSolve() {
  logger.info('Starting auto-solve...');
  if (autoSolveObserver) {
    logger.info('Auto-solve already running');
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

      logger.info('New problem detected, attempting to solve...');
      await handleSolveRequest();
    } catch (error) {
      logger.error('Error in auto-solve:', error);
    }
  });

  autoSolveObserver.observe(document.body, config);
  logger.info('Auto-solve observer started');
}

// Stop auto-solve
function stopAutoSolve() {
  logger.info('Stopping auto-solve...');
  if (autoSolveObserver) {
    autoSolveObserver.disconnect();
    autoSolveObserver = null;
    logger.info('Auto-solve stopped');
  }
}

// Listen for auto-solve toggle
chrome.storage.local.get(['autoSolve'], (result) => {
  if (result.autoSolve) {
    logger.info('Auto-solve enabled, starting...');
    startAutoSolve();
  }
});

// Log initialization
logger.info('Content script initialized for', window.location.href); 