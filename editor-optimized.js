/**
 * Optimized Editor Detection and Handling
 * This module provides efficient DOM operations and editor interactions
 * for the Smart Solver Extension.
 */

// Constants for platform detection and timeouts
const PLATFORMS = {
  HACKERRANK: 'hackerrank',
  LEETCODE: 'leetcode',
  GEEKSFORGEEKS: 'geeksforgeeks',
  ATCODER: 'atcoder',
  CODECHEF: 'codechef',
  UNKNOWN: 'unknown'
};

// Platform-specific timeouts to reduce waiting time
const PLATFORM_TIMEOUTS = {
  [PLATFORMS.HACKERRANK]: {
    EDITOR_WAIT: 3000,    // Reduced from 10000ms
    RETRY_DELAY: 300,     // Reduced from 1000ms
    MAX_ATTEMPTS: 3       // Reduced from 5
  },
  DEFAULT: {
    EDITOR_WAIT: 5000,    // Reduced from 10000ms
    RETRY_DELAY: 500,
    MAX_ATTEMPTS: 4
  }
};

// DOM query cache for efficient element lookups
const domQueryCache = {
  elements: new Map(),
  timestamp: 0,
  expiry: 500 // Cache expires after 500ms
};

// Editor cache for faster lookups
const editorCache = {
  monaco: null,
  ace: null,
  codemirror: null,
  lastCheck: 0,
  refreshInterval: 500, // Reduced from 1000ms
  isSearching: false
};

/**
 * Get the current platform type from hostname
 */
function getPlatformType(hostname) {
  const host = hostname || window.location.hostname;
  if (host.includes('hackerrank.com')) return PLATFORMS.HACKERRANK;
  if (host.includes('leetcode.com')) return PLATFORMS.LEETCODE;
  if (host.includes('geeksforgeeks.org')) return PLATFORMS.GEEKSFORGEEKS;
  if (host.includes('atcoder.jp')) return PLATFORMS.ATCODER;
  if (host.includes('codechef.com')) return PLATFORMS.CODECHEF;
  return PLATFORMS.UNKNOWN;
}

/**
 * Get timeouts based on the current platform
 */
function getTimeouts() {
  const platform = getPlatformType();
  return PLATFORM_TIMEOUTS[platform] || PLATFORM_TIMEOUTS.DEFAULT;
}

/**
 * Check if an element is visible using optimized DOM operations
 */
function isElementVisible(element) {
  if (!element) return false;
  
  // Use requestAnimationFrame for DOM reads for better performance
  return new Promise(resolve => {
    requestAnimationFrame(() => {
      try {
        const style = window.getComputedStyle(element);
        const isVisible = style.display !== 'none' && 
                          style.visibility !== 'hidden' && 
                          style.opacity !== '0';
        resolve(isVisible);
      } catch (e) {
        console.debug('Error checking visibility:', e);
        resolve(false);
      }
    });
  });
}

/**
 * Wait for an element with DOM caching and exponential backoff
 */
async function waitForElement(selector, timeout = 2000) {
  const startTime = Date.now();
  let element = null;
  
  // Check cache first if not expired
  const now = Date.now();
  if (domQueryCache.elements.has(selector) && 
      now - domQueryCache.timestamp < domQueryCache.expiry) {
    element = domQueryCache.elements.get(selector);
    if (element && await isElementVisible(element)) {
      return element;
    }
  }
  
  // Implement exponential backoff for polling
  let pollInterval = 50; // Start with a shorter interval
  const maxInterval = 500; // Maximum polling interval
  
  while (Date.now() - startTime < timeout) {
    // Use requestAnimationFrame for DOM operations
    element = await new Promise(resolve => {
      requestAnimationFrame(() => {
        resolve(document.querySelector(selector));
      });
    });
    
    if (element && await isElementVisible(element)) {
      // Cache the found element
      domQueryCache.elements.set(selector, element);
      domQueryCache.timestamp = Date.now();
      return element;
    }
    
    // Use exponential backoff to reduce CPU usage
    await new Promise(resolve => setTimeout(resolve, pollInterval));
    pollInterval = Math.min(maxInterval, pollInterval * 1.5);
  }
  
  throw new Error(`Timeout waiting for element: ${selector}`);
}

/**
 * Detect Monaco editor with caching
 */
async function detectMonacoEditor() {
  // Cache Monaco detection results
  if (window._cachedMonaco && (Date.now() - window._cachedMonacoTimestamp < 10000)) {
    return window._cachedMonaco;
  }
  
  // Check in prioritized order
  const monacoSources = [
    () => window.monaco,
    () => window._monaco,
    () => window.MonacoEnvironment && window.monaco,
    () => {
      // Detect Monaco in iframes
      const iframes = document.querySelectorAll('iframe');
      for (const iframe of iframes) {
        try {
          return iframe.contentWindow.monaco;
        } catch (e) {
          // Cross-origin errors are expected
        }
      }
      return null;
    }
  ];
  
  // Try each source
  for (const source of monacoSources) {
    try {
      const monaco = source();
      if (monaco?.editor) {
        // Cache the result
        window._cachedMonaco = monaco;
        window._cachedMonacoTimestamp = Date.now();
        return monaco;
      }
    } catch (e) {
      // Continue to next source
    }
  }
  
  return null;
}

/**
 * Set Monaco editor value with optimized error handling
 */
async function setMonacoValue(monaco, value) {
  if (!monaco?.editor) return false;
  
  // Get all editor instances
  const editors = monaco.editor.getEditors();
  let monacoEditor = editors[0];
  
  // If no editor instance, try to get the model directly
  if (!monacoEditor) {
    const models = monaco.editor.getModels();
    if (models && models.length > 0) {
      return new Promise(resolve => {
        requestAnimationFrame(() => {
          try {
            models[0].setValue(value);
            resolve(true);
          } catch (e) {
            console.debug('Error setting model value:', e);
            resolve(false);
          }
        });
      });
    }
    return false;
  }

  // Ensure the editor is ready
  if (!monacoEditor.getModel()) {
    console.debug('Editor model not ready');
    return false;
  }

  // Set value with retry mechanism
  return new Promise(resolve => {
    requestAnimationFrame(async () => {
      let retryCount = 0;
      const maxRetries = 3;
      
      const setValueWithRetry = () => {
        try {
          monacoEditor.setValue(value);
          monacoEditor.focus();
          resolve(true);
          return true;
        } catch (e) {
          console.debug('Retry attempt', retryCount + 1, 'failed:', e);
          retryCount++;
          if (retryCount < maxRetries) {
            setTimeout(setValueWithRetry, 50 * retryCount); // Increasing delays
            return false;
          }
          resolve(false);
          return false;
        }
      };

      setValueWithRetry();
    });
  });
}

/**
 * Detect ACE editor in the page
 */
async function detectAceEditor() {
  if (window.ace?.edit) {
    const aceElements = document.querySelectorAll('.ace_editor');
    for (const aceElement of aceElements) {
      try {
        const aceEditor = window.ace.edit(aceElement);
        if (aceEditor) {
          return aceEditor;
        }
      } catch (e) {
        console.debug('ACE editor not ready:', e);
      }
    }
  }
  return null;
}

/**
 * Set ACE editor value with optimized event handling
 */
async function setAceValue(aceEditor, value) {
  if (!aceEditor) return false;
  
  return new Promise(resolve => {
    requestAnimationFrame(() => {
      try {
        aceEditor.setValue(value, 1);
        aceEditor.focus();
        aceEditor.navigateFileStart();
        resolve(true);
      } catch (e) {
        console.debug('Error setting ACE editor value:', e);
        resolve(false);
      }
    });
  });
}

/**
 * Apply solution to editor with batched DOM operations and optimized detection
 */
async function applyCodeSolution(solution) {
  console.log('Attempting to apply code solution with optimized approach');
  const platform = getPlatformType();
  const timeouts = getTimeouts();
  
  // For HackerRank, use direct access approach first
  if (platform === PLATFORMS.HACKERRANK) {
    console.log('Detected HackerRank platform, using optimized approach');
    try {
      // If direct solution function exists, try that first
      if (typeof applyDirectSolution === 'function') {
        const directResult = await applyDirectSolution(solution);
        if (directResult && directResult.success) {
          console.log('Successfully applied solution using direct access');
          return true;
        }
      }
      console.log('Direct solution not available or failed, falling back to universal method');
    } catch (e) {
      console.log('Error with direct solution, falling back to universal method:', e);
    }
  }
  
  // Clean up the solution
  let cleanSolution = solution;
  if (solution.includes('```')) {
    const matches = solution.match(/```(?:\w+\n)?([\s\S]*?)```/);
    cleanSolution = matches ? matches[1].trim() : solution.trim();
  }
  
  // Use Promise.race to implement timeout in a more efficient way
  try {
    const result = await Promise.race([
      applyUniversalSolution(cleanSolution, platform),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Editor timeout')), timeouts.EDITOR_WAIT)
      )
    ]);
    
    return result;
  } catch (error) {
    console.error('Failed to apply solution:', error);
    
    // Fallback to textarea or contentEditable if available
    try {
      const textareas = document.querySelectorAll('textarea');
      for (const textarea of textareas) {
        if (textarea.offsetParent !== null) { // Element is visible
          // Batch DOM operations in one tick with requestAnimationFrame
          await new Promise(resolve => {
            requestAnimationFrame(() => {
              textarea.value = cleanSolution;
              // Dispatch events in batch
              const events = ['input', 'change', 'keyup'];
              events.forEach(eventType => {
                textarea.dispatchEvent(new Event(eventType, { bubbles: true }));
              });
              resolve();
            });
          });
          console.log('Applied solution to textarea');
          return true;
        }
      }
      
      // Try contentEditable elements as fallback
      const editableElements = document.querySelectorAll('[contenteditable="true"]');
      for (const element of editableElements) {
        if (element.offsetParent !== null) { // Element is visible
          await new Promise(resolve => {
            requestAnimationFrame(() => {
              element.textContent = cleanSolution;
              element.dispatchEvent(new Event('input', { bubbles: true }));
              resolve();
            });
          });
          console.log('Applied solution to contentEditable element');
          return true;
        }
      }
    } catch (fallbackError) {
      console.error('Fallback methods failed:', fallbackError);
    }
    
    // Last resort: inject a script to try all methods
    try {
      if (typeof injectEditorScript === 'function') {
        return await injectEditorScript(cleanSolution);
      }
    } catch (injectError) {
      console.error('Script injection failed:', injectError);
    }
    
    throw new Error('Failed to apply solution to editor');
  }
}

/**
 * Apply universal solution with optimized editor detection
 */
async function applyUniversalSolution(solution, platform, hasSolutionClass = false, solutionClassContent = '') {
  console.log(`Applying universal solution for platform: ${platform}`);
  
  // Try to detect and use Monaco editor first (most platforms use this)
  const monaco = await detectMonacoEditor();
  if (monaco) {
    try {
      const success = await setMonacoValue(monaco, solution);
      if (success) {
        console.log('Applied solution using Monaco editor');
        return true;
      }
    } catch (e) {
      console.log('Monaco editor set value failed:', e);
    }
  }
  
  // Try ACE editor
  const aceEditor = await detectAceEditor();
  if (aceEditor) {
    try {
      const success = await setAceValue(aceEditor, solution);
      if (success) {
        console.log('Applied solution using ACE editor');
        return true;
      }
    } catch (e) {
      console.log('ACE editor set value failed:', e);
    }
  }
  
  // Try finding textareas
  const textareas = document.querySelectorAll('textarea');
  for (const textarea of textareas) {
    if (textarea.offsetParent !== null) { // Element is visible
      try {
        await new Promise(resolve => {
          requestAnimationFrame(() => {
            textarea.value = solution;
            // Dispatch events in batch
            const events = ['input', 'change', 'keyup'];
            events.forEach(eventType => {
              textarea.dispatchEvent(new Event(eventType, { bubbles: true }));
            });
            resolve();
          });
        });
        console.log('Applied solution to textarea');
        return true;
      } catch (e) {
        console.log('Error with textarea:', e);
      }
    }
  }
  
  // Platform-specific handling as last resort
  if (platform === PLATFORMS.ATCODER && typeof applyAtCoderSolution === 'function') {
    try {
      const result = await applyAtCoderSolution(solution);
      if (result) {
        return true;
      }
    } catch (e) {
      console.error('AtCoder solution application failed:', e);
    }
  }
  
  return false;
}

// Export the optimized functions
window.EditorOptimized = {
  getPlatformType,
  getTimeouts,
  isElementVisible,
  waitForElement,
  detectMonacoEditor,
  setMonacoValue,
  detectAceEditor,
  setAceValue,
  applyCodeSolution,
  applyUniversalSolution
}; 