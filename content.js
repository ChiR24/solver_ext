// Smart Solver Extension - Content Script
// Integrates with optimizers for better performance

// Initialize platform-specific optimizers
(function initializeOptimizers() {
  // Debug logger
  const logger = {
    DEBUG: true,
    log: function(...args) {
      if (this.DEBUG) {
        console.log('[Solver]', ...args);
      }
    }
  };

  // Detect current platform
  function detectPlatform() {
    const host = window.location.hostname;
    if (host.includes('hackerrank.com')) return 'hackerrank';
    if (host.includes('leetcode.com')) return 'leetcode';
    if (host.includes('geeksforgeeks.org')) return 'geeksforgeeks';
    if (host.includes('atcoder.jp')) return 'atcoder';
    if (host.includes('codechef.com')) return 'codechef';
    return 'unknown';
  }

  // Load platform-specific optimizers if not already loaded
  function ensureOptimizersLoaded() {
    const platform = detectPlatform();
    logger.log(`Ensuring optimizers are loaded for ${platform}`);

    // Check if optimizers are already loaded
    if (window.HackerRankOptimizer || window.EditorOptimized || window.SolverEarlyOptimizer) {
      logger.log('Optimizers already loaded');
      return;
    }

    // Load appropriate optimizer
    if (platform === 'hackerrank') {
      loadScript('hackerrank-optimizer.js');
    } else {
      loadScript('editor-optimized.js');
    }
  }

  // Helper to load a script
  function loadScript(scriptName) {
    logger.log(`Loading script: ${scriptName}`);
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL(scriptName);
    script.onload = function() {
      logger.log(`Loaded ${scriptName}`);
    };
    (document.head || document.documentElement).appendChild(script);
  }

  // Initialize optimizers
  ensureOptimizersLoaded();
})();

// Debug logger utility
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

// Logger functions
const logger = {
  error: (message, ...args) => {
    if (currentDebugLevel >= DEBUG.ERROR) {
      console.error(`ERROR - ${message}`, ...args);
    }
  },
  warn: (message, ...args) => {
    if (currentDebugLevel >= DEBUG.WARN) {
      console.warn(`WARN - ${message}`, ...args);
    }
  },
  info: (message, ...args) => {
    if (currentDebugLevel >= DEBUG.INFO) {
      console.log(`INFO - ${message}`, ...args);
    }
  },
  debug: (message, ...args) => {
    if (currentDebugLevel >= DEBUG.VERBOSE) {
      console.log(`DEBUG - ${message}`, ...args);
    }
  },
  trace: (message, ...args) => {
    if (currentDebugLevel >= DEBUG.ALL) {
      console.log(`TRACE - ${message}`, ...args);
    }
  }
};

// OPTIMIZED: Add constant for platform detection
const isHackerRank = window.location.hostname.includes('hackerrank.com');

// OPTIMIZATION: For HackerRank, initialize direct access immediately on page load
if (isHackerRank) {
  // Load the direct access script immediately
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('hackerrank-direct-access.js');
  script.type = 'text/javascript';
  (document.head || document.documentElement).appendChild(script);
  
  logger.info('HackerRank detected - Direct access script loaded preemptively');
}

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

// Load keyboard shortcut from storage
function loadKeyboardShortcut() {
  chrome.storage.local.get(['keyboardShortcut'], (result) => {
    if (result.keyboardShortcut) {
      currentShortcut = result.keyboardShortcut;
      logger.info('Loaded keyboard shortcut:', currentShortcut);
    } else {
      // Save default if not found
      chrome.storage.local.set({ keyboardShortcut: DEFAULT_SHORTCUT });
      logger.info('Using default keyboard shortcut:', DEFAULT_SHORTCUT);
    }
  });
}

// Initialize keyboard shortcut
loadKeyboardShortcut();

// Listen for shortcut changes
chrome.storage.onChanged.addListener((changes) => {
  // Handle keyboard shortcut changes
  if (changes.keyboardShortcut) {
    currentShortcut = changes.keyboardShortcut.newValue;
    logger.info('Keyboard shortcut updated:', currentShortcut);
  }
  
  // Handle auto-solve toggle changes
  if (changes.autoSolve) {
    if (changes.autoSolve.newValue) {
      startAutoSolve();
    } else {
      stopAutoSolve();
    }
  }
});

// Listen for keyboard events
document.addEventListener('keydown', (event) => {
  // Check if event matches the configured shortcut
  if (event.ctrlKey === currentShortcut.ctrlKey &&
      event.altKey === currentShortcut.altKey &&
      event.shiftKey === currentShortcut.shiftKey &&
      (event.key.toLowerCase() === currentShortcut.key.toLowerCase() || 
       event.code === currentShortcut.code)) {
    
    logger.info('Keyboard shortcut triggered');
    event.preventDefault(); // Prevent default browser behavior
    
    // Trigger solve request
    handleSolveRequest()
      .then(response => {
        logger.info('Solve request completed via keyboard shortcut:', response);
      })
      .catch(error => {
        logger.error('Error in keyboard shortcut solve request:', error);
      });
  }
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

    // OPTIMIZATION: For HackerRank, use dedicated fast-path with shorter timeouts
    if (isHackerRank) {
      logger.info('HackerRank detected, using optimized handling');
      
      // OPTIMIZATION: Directly check for direct access function and retry faster if needed
      // Skip the bridge initialization if direct access is available
      if (typeof window.hackerrankDirectSetValue !== 'function') {
        logger.debug('Direct access not initialized, checking if script is loaded');
        
        // Check if script is already in the page
        const scriptExists = Array.from(document.scripts).some(s => 
          s.src && s.src.includes('hackerrank-direct-access.js'));
        
        // If not already added, add it now
        if (!scriptExists) {
          const script = document.createElement('script');
          script.src = chrome.runtime.getURL('hackerrank-direct-access.js');
          script.type = 'text/javascript';
          document.head.appendChild(script);
        }
        
        // OPTIMIZATION: Reduced wait time from 2000ms to 500ms
        // Wait for direct access to be available with shorter timeout
        let directAccessAvailable = false;
        const startTime = Date.now();
        while (Date.now() - startTime < 500) {
          if (typeof window.hackerrankDirectSetValue === 'function') {
            directAccessAvailable = true;
            logger.debug('Direct access available after', Date.now() - startTime, 'ms');
            break;
          }
          // Use a very short sleep to avoid blocking the main thread
          await new Promise(resolve => setTimeout(resolve, 50));
        }
        
        if (!directAccessAvailable) {
          logger.warn('Direct access not available after timeout, falling back to bridge');
        }
      }
      
      // OPTIMIZATION: Skip bridge initialization attempts if direct access is available
      if (typeof window.hackerrankDirectSetValue !== 'function' && 
          (!window.HackerRankBridge || window.HackerRankBridge.initializationAttempts > 3)) {
        // Only try to initialize bridge if direct access failed
        logger.info('Direct access failed, initializing HackerRank bridge');
        
        try {
          if (typeof initializeEditorBridges === 'function') {
            initializeEditorBridges();
          } else {
            // Fast loading of bridge script
            const script = document.createElement('script');
            script.src = chrome.runtime.getURL('editor-bridges.js');
            script.type = 'text/javascript';
            document.head.appendChild(script);
            
            // OPTIMIZATION: Reduced wait time to 500ms
            await new Promise(resolve => setTimeout(resolve, 500));
          }
        } catch (e) {
          logger.error('Error initializing bridge:', e);
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
    
    // OPTIMIZATION: For HackerRank, try direct access first with early return on success
    if (isHackerRank) {
      try {
        // First try using the direct access function if available
        if (typeof window.hackerrankDirectSetValue === 'function') {
          logger.info('Using HackerRank direct access function');
          const result = window.hackerrankDirectSetValue(solution.answer);
          if (result && result.success) {
            logger.info('Successfully set editor value using direct function');
            return { success: true };
          }
          logger.warn('Direct function failed:', result?.error || 'Unknown error');
        }
        
        // Try using the bridge as fallback
        try {
          await applySolution(solution.answer, problemDetails.type);
          return { success: true };
        } catch (e) {
          logger.warn('Bridge failed, trying direct DOM manipulation:', e.message);
          
          // Try direct DOM manipulation as last resort
          const success = await applyDirectSolution(solution.answer);
          if (success) {
            return { success: true };
          }
          throw new Error('Failed to apply solution using all available methods');
        }
      } catch (error) {
        throw new Error(`HackerRank editor could not be updated: ${error.message}`);
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

// OPTIMIZATION: Add HackerRank-specific direct DOM manipulation function with faster timeouts
async function applyDirectSolution(solution) {
  logger.info('Applying solution via direct DOM manipulation');
  
  try {
    // First try to use our optimized HackerRank solution if available
    if (window.HackerRankOptimizer?.applyHackerRankSolution) {
      logger.debug('Using HackerRank optimizer');
      const result = await window.HackerRankOptimizer.applyHackerRankSolution(solution);
      if (result && result.success) {
        logger.info('Successfully applied solution using HackerRank optimizer');
        return { success: true };
      }
      logger.warn('HackerRank optimizer failed, falling back to standard method');
    } else if (window.EditorOptimized?.applyCodeSolution) {
      // Try using the universal editor optimizer
      logger.debug('Using universal editor optimizer');
      try {
        const result = await window.EditorOptimized.applyCodeSolution(solution);
        if (result) {
          logger.info('Successfully applied solution using universal editor optimizer');
          return { success: true };
        }
      } catch (e) {
        logger.warn('Universal editor optimizer failed:', e);
      }
    }
    
    // Fall back to the original implementation
    logger.debug('Falling back to original implementation');
    
    // Try to find the Monaco editor element
    const monacoElements = document.querySelectorAll('.monaco-editor');
    if (monacoElements.length > 0) {
      logger.debug('Found Monaco editor elements:', monacoElements.length);
      
      // Try to inject a script to directly modify the editor
      const script = document.createElement('script');
      script.textContent = `
        (function() {
          try {
            // Get all editor locations
            const locations = [
              'monaco',
              'hackerrank_r_krackjack',
              '_monaco',
              'MonacoEnvironment',
              'MonacoEditor'
            ];
            
            // Try each location
            for (const loc of locations) {
              if (window[loc]?.editor) {
                const editors = window[loc].editor.getEditors();
                if (editors && editors.length > 0) {
                  const editor = editors[0];
                  const model = editor.getModel();
                  if (model) {
                    // Set value and update cursor
                    editor.setValue(${JSON.stringify(solution)});
                    editor.focus();
                    console.log('Successfully set editor value via direct script injection');
                    return true;
                  }
                }
                
                // If no editor instances but models exist
                const models = window[loc].editor.getModels();
                if (models && models.length > 0) {
                  models[0].setValue(${JSON.stringify(solution)});
                  console.log('Successfully set model value via direct script injection');
                  return true;
                }
              }
            }
            
            console.log('Could not find Monaco editor instance');
            return false;
          } catch (e) {
            console.error('Error in direct editor manipulation:', e);
            return false;
          }
        })();
      `;
      document.body.appendChild(script);
      document.body.removeChild(script);
      
      // Wait a bit to see if the script worked
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Check if the content was set correctly
      const success = await checkEditorContent(solution);
      if (success) {
        logger.info('Successfully applied solution via direct script injection');
        return { success: true };
      }
    }
    
    // If we got here, try the textarea approach
    const textareas = document.querySelectorAll('textarea');
    for (const textarea of textareas) {
      if (textarea.offsetParent !== null) { // Element is visible
        textarea.value = solution;
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
        textarea.dispatchEvent(new Event('change', { bubbles: true }));
        logger.info('Applied solution to textarea');
        return { success: true };
      }
    }
    
    logger.error('Failed to apply solution via direct DOM manipulation');
    return { success: false, error: 'Could not find editor' };
  } catch (e) {
    logger.error('Error in applyDirectSolution:', e);
    return { success: false, error: e.message };
  }
}

// OPTIMIZATION: Helper to check if content was set successfully
async function checkEditorContent(expectedContent) {
  try {
    // Try getting value through direct access
    if (typeof window.hackerrankDirectGetValue === 'function') {
      const currentValue = window.hackerrankDirectGetValue();
      // Compare first 50 chars to avoid long string comparison
      if (currentValue && currentValue.substring(0, 50) === expectedContent.substring(0, 50)) {
        return true;
      }
    }
    
    // Check through bridge if available
    if (window.HackerRankBridge?.getEditorValue) {
      const value = await window.HackerRankBridge.getEditorValue();
      if (value && value.substring(0, 50) === expectedContent.substring(0, 50)) {
        return true;
      }
    }
    
    return false;
  } catch (e) {
    logger.debug('Error checking editor content:', e);
    return false;
  }
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

// ADDED: Problem type detection function
// This function detects the type of coding problem based on the current page
function detectProblemType() {
  const url = window.location.href;
  const hostname = window.location.hostname;
  
  // Detect platform based on hostname
  if (hostname.includes('leetcode.com')) {
    return 'leetcode';
  } else if (hostname.includes('hackerrank.com')) {
    return 'hackerrank';
  } else if (hostname.includes('geeksforgeeks.org')) {
    return 'geeksforgeeks';
  } else if (hostname.includes('atcoder.jp')) {
    return 'atcoder';
  } else if (hostname.includes('codechef.com')) {
    return 'codechef';
  } else if (hostname.includes('codeforces.com')) {
    return 'codeforces';
  } else if (hostname.includes('hackerearth.com')) {
    return 'hackerearth';
  } else if (hostname.includes('spoj.com')) {
    return 'spoj';
  } else if (hostname.includes('interviewbit.com')) {
    return 'interviewbit';
  }
  
  return 'unknown';
}

// ADDED: Extract problem details from the current page
function extractProblemDetails() {
  try {
    const type = detectProblemType();
    const url = window.location.href;
    let title = '';
    let problemId = '';
    
    // Extract title based on platform
    switch (type) {
      case 'leetcode':
        title = document.querySelector('title')?.textContent?.replace(' - LeetCode', '') || '';
        problemId = url.match(/problems\/([^/]+)/)?.[1] || '';
        break;
      case 'hackerrank':
        title = document.querySelector('.challenge-title')?.textContent?.trim() || 
                document.querySelector('h1.title')?.textContent?.trim() || '';
        problemId = url.match(/challenges\/([^/]+)/)?.[1] || '';
        break;
      case 'geeksforgeeks':
        title = document.querySelector('.problem-tab h1')?.textContent?.trim() || '';
        problemId = url.match(/problems\/([^/]+)/)?.[1] || '';
        break;
      // Add more platforms as needed
      default:
        title = document.title || '';
    }
    
    return {
      type,
      title,
      problemId,
      url
    };
  } catch (error) {
    logger.error('Error extracting problem details:', error);
    return null;
  }
} 