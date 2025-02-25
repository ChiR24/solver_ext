/**
 * HackerRank Optimizer
 * This script optimizes the solution application process for HackerRank.
 * It dramatically reduces timeouts and improves editor detection.
 */

// Execute optimizer immediately
(function() {
  // Debug logging utility
  const logger = {
    INFO: 0,
    DEBUG: 1,
    WARN: 2,
    ERROR: 3,
    level: 1, // Set to DEBUG by default
    
    log: function(level, ...args) {
      if (level >= this.level) {
        const prefix = ['[INFO]', '[DEBUG]', '[WARN]', '[ERROR]'][level];
        console.log(prefix, ...args);
      }
    },
    
    info: function(...args) { this.log(this.INFO, ...args); },
    debug: function(...args) { this.log(this.DEBUG, ...args); },
    warn: function(...args) { this.log(this.WARN, ...args); },
    error: function(...args) { this.log(this.ERROR, ...args); }
  };

  // Cache for discovered Monaco editors
  const editorCache = {
    monaco: null,
    editor: null,
    model: null,
    lastCheck: 0,
    TTL: 5000, // Cache TTL in ms
    
    isValid: function() {
      return this.monaco && 
             (Date.now() - this.lastCheck) < this.TTL;
    },
    
    update: function(monaco, editor, model) {
      this.monaco = monaco;
      this.editor = editor;
      this.model = model;
      this.lastCheck = Date.now();
      logger.debug('Editor cache updated', {monaco: !!monaco, editor: !!editor, model: !!model});
    },
    
    clear: function() {
      this.monaco = null;
      this.editor = null;
      this.model = null;
      this.lastCheck = 0;
      logger.debug('Editor cache cleared');
    }
  };

  // Optimized timeouts for HackerRank
  const TIMEOUTS = {
    EDITOR_SEARCH: 1500,  // How long to search for editor
    RETRY_DELAY: 200,     // Delay between retries
    MAX_RETRIES: 3,       // Maximum retry attempts
    MUTATION_THROTTLE: 100 // Throttle for mutation observer
  };

  // Prioritized locations to search for Monaco in HackerRank
  const EDITOR_SEARCH_LOCATIONS = [
    // Main window
    () => window.monaco,
    // Global variable sometimes used
    () => window._monaco,
    // HackerRank-specific globals
    () => window.MonacoEnvironment && window.monaco,
    // HackerRank test case editor
    () => {
      const testcaseFrame = document.querySelector('#testcase-iframe');
      if (testcaseFrame) {
        try {
          return testcaseFrame.contentWindow.monaco;
        } catch (e) {
          // Cross-origin errors expected
        }
      }
      return null;
    },
    // Editor iframe (common in HackerRank challenges)
    () => {
      const iframes = document.querySelectorAll('iframe');
      for (const iframe of iframes) {
        try {
          return iframe.contentWindow.monaco;
        } catch (e) {
          // Cross-origin errors expected
        }
      }
      return null;
    }
  ];

  /**
   * Find Monaco editor in HackerRank with optimized search
   */
  async function findMonacoEditor() {
    // Use cache if valid
    if (editorCache.isValid()) {
      logger.debug('Using cached Monaco editor');
      return {
        monaco: editorCache.monaco,
        editor: editorCache.editor,
        model: editorCache.model
      };
    }
    
    logger.debug('Searching for Monaco editor...');
    
    // Try each search location
    for (const searchFn of EDITOR_SEARCH_LOCATIONS) {
      try {
        const monaco = searchFn();
        if (!monaco || !monaco.editor) continue;
        
        // Found Monaco, now find editor instance and model
        const editors = monaco.editor.getEditors();
        let editor = editors && editors.length > 0 ? editors[0] : null;
        let model = editor ? editor.getModel() : null;
        
        // If no editor but have models, use first model
        if (!editor && monaco.editor.getModels) {
          const models = monaco.editor.getModels();
          if (models && models.length > 0) {
            model = models[0];
          }
        }
        
        // Update cache and return result
        editorCache.update(monaco, editor, model);
        logger.info('Monaco editor found');
        return { monaco, editor, model };
      } catch (e) {
        logger.debug('Error searching location:', e);
        // Continue to next location
      }
    }
    
    // No Monaco found
    logger.warn('Monaco editor not found');
    return { monaco: null, editor: null, model: null };
  }

  /**
   * Set value in Monaco editor with optimized error handling
   */
  async function setMonacoValue(value) {
    const { monaco, editor, model } = await findMonacoEditor();
    
    if (!monaco) {
      logger.error('Monaco not found for value setting');
      return false;
    }
    
    // Try using editor instance first
    if (editor && editor.getModel()) {
      return await new Promise(resolve => {
        // Use requestAnimationFrame for smoother DOM interaction
        requestAnimationFrame(() => {
          try {
            editor.setValue(value);
            editor.focus();
            // Some editors need this to trigger change events
            editor.trigger('keyboard', 'type', { text: ' ' });
            editor.trigger('keyboard', 'press', { keyCode: 8 }); // Backspace
            
            logger.info('Successfully set editor value');
            resolve(true);
          } catch (e) {
            logger.error('Error setting editor value:', e);
            resolve(false);
          }
        });
      });
    }
    
    // Fallback to model if available
    if (model) {
      return await new Promise(resolve => {
        requestAnimationFrame(() => {
          try {
            model.setValue(value);
            logger.info('Successfully set model value');
            resolve(true);
          } catch (e) {
            logger.error('Error setting model value:', e);
            resolve(false);
          }
        });
      });
    }
    
    logger.error('No usable editor or model found');
    return false;
  }

  /**
   * Efficiently apply solution to HackerRank editor with retries and fallbacks
   */
  async function applyHackerRankSolution(solution) {
    logger.info('Applying solution to HackerRank editor');
    
    // Clean solution if needed
    let cleanSolution = solution;
    if (solution.includes('```')) {
      const matches = solution.match(/```(?:\w+\n)?([\s\S]*?)```/);
      cleanSolution = matches ? matches[1].trim() : solution.trim();
    }
    
    // Try direct Monaco approach with retries
    for (let retry = 0; retry < TIMEOUTS.MAX_RETRIES; retry++) {
      try {
        const success = await Promise.race([
          setMonacoValue(cleanSolution),
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Editor timeout')), TIMEOUTS.EDITOR_SEARCH)
          )
        ]);
        
        if (success) {
          logger.info(`Solution applied successfully on attempt ${retry + 1}`);
          return { success: true };
        }
        
        logger.warn(`Attempt ${retry + 1} failed`);
        
        if (retry < TIMEOUTS.MAX_RETRIES - 1) {
          logger.debug(`Retrying in ${TIMEOUTS.RETRY_DELAY}ms...`);
          await new Promise(resolve => setTimeout(resolve, TIMEOUTS.RETRY_DELAY));
        }
      } catch (error) {
        logger.error(`Error on attempt ${retry + 1}:`, error);
        
        if (retry < TIMEOUTS.MAX_RETRIES - 1) {
          logger.debug(`Retrying in ${TIMEOUTS.RETRY_DELAY}ms...`);
          await new Promise(resolve => setTimeout(resolve, TIMEOUTS.RETRY_DELAY));
        }
      }
    }
    
    // Fallback to textarea/contentEditable
    try {
      const textareas = document.querySelectorAll('textarea');
      for (const textarea of textareas) {
        if (textarea.offsetParent !== null) { // Element is visible
          textarea.value = cleanSolution;
          textarea.dispatchEvent(new Event('input', { bubbles: true }));
          textarea.dispatchEvent(new Event('change', { bubbles: true }));
          logger.info('Applied solution to textarea as fallback');
          return { success: true };
        }
      }
      
      // Try contentEditable elements
      const editableElements = document.querySelectorAll('[contenteditable="true"]');
      for (const element of editableElements) {
        if (element.offsetParent !== null) { // Element is visible
          element.textContent = cleanSolution;
          element.dispatchEvent(new Event('input', { bubbles: true }));
          logger.info('Applied solution to contentEditable element as fallback');
          return { success: true };
        }
      }
    } catch (fallbackError) {
      logger.error('Fallback methods failed:', fallbackError);
    }
    
    // Last resort: script injection
    try {
      // Create a script element to access internal editor
      const script = document.createElement('script');
      script.textContent = `
        (function() {
          try {
            // Try to find any Monaco instance
            const monaco = window.monaco || window._monaco;
            if (monaco && monaco.editor) {
              const editors = monaco.editor.getEditors();
              if (editors && editors.length > 0) {
                editors[0].setValue(${JSON.stringify(cleanSolution)});
                console.log("HackerRank optimizer: Injected script set editor value");
              } else {
                const models = monaco.editor.getModels();
                if (models && models.length > 0) {
                  models[0].setValue(${JSON.stringify(cleanSolution)});
                  console.log("HackerRank optimizer: Injected script set model value");
                }
              }
            }
          } catch (e) {
            console.error("HackerRank optimizer: Injected script error", e);
          }
        })();
      `;
      document.body.appendChild(script);
      document.body.removeChild(script);
      logger.info('Attempted solution via script injection');
      
      // Wait a bit to see if script injection worked
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // We can't reliably tell if script injection worked, so return tentative success
      return { success: true, method: 'scriptInjection' };
    } catch (injectionError) {
      logger.error('Script injection failed:', injectionError);
    }
    
    logger.error('All methods failed to apply solution');
    return { success: false };
  }

  // Set up Monaco editor detection on page load
  let monitoringStarted = false;
  
  function startEditorMonitoring() {
    if (monitoringStarted) return;
    monitoringStarted = true;
    
    logger.info('Starting editor monitoring');
    
    // Initial editor search
    findMonacoEditor().then(result => {
      if (result.monaco) {
        logger.info('Initial Monaco editor found');
      } else {
        logger.info('Initial Monaco editor search: not found yet');
      }
    });
    
    // Set up mutation observer to detect editor changes
    const observer = new MutationObserver(throttle(() => {
      // Clear cache on DOM changes that might affect editor
      editorCache.clear();
      // Re-search for editor
      findMonacoEditor().then(result => {
        if (result.monaco) {
          logger.debug('Monaco editor found after DOM change');
        }
      });
    }, TIMEOUTS.MUTATION_THROTTLE));
    
    // Observe document for changes to catch editor initialization
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    // Also poll periodically
    const editorCheckInterval = setInterval(() => {
      if (!editorCache.isValid()) {
        findMonacoEditor().then(result => {
          if (result.monaco) {
            logger.debug('Monaco editor found during interval check');
          }
        });
      }
    }, 2000);
    
    // Clean up after 30 seconds to avoid memory leaks
    setTimeout(() => {
      observer.disconnect();
      clearInterval(editorCheckInterval);
      logger.info('Editor monitoring stopped after timeout');
    }, 30000);
  }
  
  // Throttle function to limit mutation observer calls
  function throttle(func, limit) {
    let inThrottle = false;
    return function() {
      if (!inThrottle) {
        inThrottle = true;
        func.apply(this, arguments);
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  }
  
  // Start monitoring immediately
  startEditorMonitoring();
  
  // Export functions for external use
  window.HackerRankOptimizer = {
    applyHackerRankSolution,
    findMonacoEditor,
    startEditorMonitoring
  };
  
  logger.info('HackerRank optimizer initialized');
})(); 