// HackerRank Direct Access Script
(function() {
  // Debug logger utility
  const LOG_LEVEL = {
    NONE: 0,     // No logs
    ERROR: 1,    // Only errors
    WARN: 2,     // Errors and warnings
    INFO: 3,     // Standard info
    DEBUG: 4,    // Detailed info
    TRACE: 5     // All debug messages
  };

  // Set to LOG_LEVEL.DEBUG or LOG_LEVEL.TRACE when debugging issues
  const currentLogLevel = LOG_LEVEL.INFO;

  // Logger functions
  const log = {
    error: (message, ...args) => {
      if (currentLogLevel >= LOG_LEVEL.ERROR) {
        console.error(`[HackerRank Direct] ERROR - ${message}`, ...args);
      }
    },
    warn: (message, ...args) => {
      if (currentLogLevel >= LOG_LEVEL.WARN) {
        console.warn(`[HackerRank Direct] WARN - ${message}`, ...args);
      }
    },
    info: (message, ...args) => {
      if (currentLogLevel >= LOG_LEVEL.INFO) {
        console.log(`[HackerRank Direct] ${message}`, ...args);
      }
    },
    debug: (message, ...args) => {
      if (currentLogLevel >= LOG_LEVEL.DEBUG) {
        console.log(`[HackerRank Direct] DEBUG - ${message}`, ...args);
      }
    },
    trace: (message, ...args) => {
      if (currentLogLevel >= LOG_LEVEL.TRACE) {
        console.log(`[HackerRank Direct] TRACE - ${message}`, ...args);
      }
    }
  };

  log.info('Initializing direct access to Monaco editor');
  
  // Store editor reference when found
  let cachedEditor = null;
  let cachedModel = null;
  let lastFoundLocation = null;
  
  // Declare editorCheckInterval at the top of the file or module scope
  let editorCheckInterval = null;
  
  // OPTIMIZATION: Call this immediately on script load to find editor faster
  initializeDirectAccess();
  
  // Create a communication channel with the extension
  window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'HR_DIRECT_ACCESS') {
      const { action, payload, requestId } = event.data;
      
      try {
        if (action === 'GET_EDITOR') {
          // Find Monaco editor in HackerRank's globals
          const editorInfo = findHackerRankEditor();
          
          // Cache the editor if found
          if (editorInfo.found) {
            cachedEditor = editorInfo.editor;
            cachedModel = editorInfo.model;
            lastFoundLocation = editorInfo.location;
          }
          
          window.postMessage({
            type: 'HR_DIRECT_RESPONSE',
            action: 'GET_EDITOR',
            success: !!editorInfo.editor,
            payload: {
              found: editorInfo.found,
              location: editorInfo.location
            },
            requestId
          }, '*');
        } else if (action === 'SET_VALUE') {
          // Set value in editor
          const result = setEditorValue(payload.value);
          window.postMessage({
            type: 'HR_DIRECT_RESPONSE',
            action: 'SET_VALUE',
            success: result.success,
            payload: {
              success: result.success,
              error: result.error
            },
            requestId
          }, '*');
        } else if (action === 'GET_VALUE') {
          // Get value from editor
          const value = getEditorValue();
          window.postMessage({
            type: 'HR_DIRECT_RESPONSE',
            action: 'GET_VALUE',
            success: !!value,
            payload: { value: value || '' },
            requestId
          }, '*');
        }
      } catch (e) {
        log.error('Error handling message:', e);
        window.postMessage({
          type: 'HR_DIRECT_RESPONSE',
          action,
          success: false,
          error: e.message,
          requestId
        }, '*');
      }
    }
  });
  
  // OPTIMIZATION: Prioritize locations based on their likelihood of success for HackerRank
  const PRIORITIZED_LOCATIONS = [
    'monaco',           // Standard global
    'MonacoEditor',     // HackerRank specific
    'hackerrank_r_krackjack', // HackerRank specific
    '_monaco',          // HackerRank specific
    'MonacoEnvironment' // Less commonly used
  ];
  
  // Function to find HackerRank's Monaco editor
  function findHackerRankEditor() {
    const result = {
      found: false,
      location: null,
      editor: null,
      model: null
    };
    
    try {
      // If we already have a cached editor, verify it's still valid
      if (cachedEditor && cachedModel) {
        try {
          // Try to access a property to verify the editor is still valid
          const test = cachedModel.getValue();
          if (test !== undefined) {
            result.found = true;
            result.location = lastFoundLocation;
            result.editor = cachedEditor;
            result.model = cachedModel;
            log.debug('Using cached editor from', lastFoundLocation);
            return result;
          }
        } catch (e) {
          // Editor is no longer valid, clear cache
          log.debug('Cached editor is no longer valid, finding new one');
          cachedEditor = null;
          cachedModel = null;
          lastFoundLocation = null;
        }
      }
      
      // OPTIMIZATION: First check standard monaco global - fastest path
      if (window.monaco?.editor) {
        const editors = window.monaco.editor.getEditors();
        if (editors && editors.length > 0) {
          const editor = editors[0];
          if (editor && editor.getModel()) {
            result.found = true;
            result.location = 'monaco';
            result.editor = editor;
            result.model = editor.getModel();
            log.info('Found editor in standard monaco global');
            return result;
          }
        }
      }
      
      // Check HackerRank specific globals using prioritized locations
      for (const loc of PRIORITIZED_LOCATIONS) {
        if (window[loc]?.editor) {
          const editors = window[loc].editor.getEditors?.();
          if (editors && editors.length > 0) {
            result.found = true;
            result.location = loc;
            result.editor = editors[0];
            result.model = editors[0].getModel();
            log.info('Found editor in global:', loc);
            
            // OPTIMIZATION: Make the editor globally available to improve future lookups
            if (!window.monaco) {
              window.monaco = window[loc];
              log.debug('Made monaco globally available from', loc);
            }
            
            break;
          }
        }
      }
      
      // OPTIMIZATION: Check DOM only if globals didn't work
      if (!result.found) {
        // Look for editor wrappers
        const wrappers = document.querySelectorAll('.hr-monaco-editor-wrapper');
        if (wrappers.length > 0) {
          log.debug('Found editor wrappers:', wrappers.length);
          
          // Try to find Monaco editor in wrapper
          for (const wrapper of wrappers) {
            const monacoElement = wrapper.querySelector('.monaco-editor');
            if (monacoElement && window.monaco?.editor) {
              const editors = window.monaco.editor.getEditors();
              if (editors && editors.length > 0) {
                result.found = true;
                result.location = 'DOM';
                result.editor = editors[0];
                result.model = editors[0].getModel();
                log.info('Found editor in DOM');
                break;
              }
            }
          }
        }
      }
      
      // If still not found, try to find any Monaco editor
      if (!result.found && window.monaco?.editor) {
        const editors = window.monaco.editor.getEditors();
        if (editors && editors.length > 0) {
          result.found = true;
          result.location = 'monaco.editor';
          result.editor = editors[0];
          result.model = editors[0].getModel();
          log.info('Found editor in monaco.editor');
        }
      }
      
      // Cache the result if found
      if (result.found) {
        cachedEditor = result.editor;
        cachedModel = result.model;
        lastFoundLocation = result.location;
        
        // OPTIMIZATION: The editor is now found - we can clear the interval if it exists
        if (editorCheckInterval) {
          clearInterval(editorCheckInterval);
          editorCheckInterval = null;
          log.debug('Cleared editor check interval after finding editor');
        }
      } else {
        log.warn('No editor found');
      }
    } catch (e) {
      log.error('Error finding editor:', e);
    }
    
    return result;
  }
  
  // Function to get editor value
  function getEditorValue() {
    try {
      const editorInfo = findHackerRankEditor();
      if (!editorInfo.found || !editorInfo.model) {
        return null;
      }
      
      return editorInfo.model.getValue();
    } catch (e) {
      log.error('Error getting value:', e);
      return null;
    }
  }
  
  // Function to set value in editor
  function setEditorValue(value) {
    try {
      const editorInfo = findHackerRankEditor();
      if (!editorInfo.found || !editorInfo.editor || !editorInfo.model) {
        return { success: false, error: 'Editor not found' };
      }
      
      try {
        // OPTIMIZATION: Use try/catch for each technique - try multiple approaches in sequence
        try {
          // Method 1: Use pushEditOperations - preferred for complex changes
          editorInfo.model.pushEditOperations(
            [],
            [{
              range: editorInfo.model.getFullModelRange(),
              text: value
            }],
            () => null
          );
        } catch (e) {
          log.warn('pushEditOperations failed, trying setValue:', e);
          
          // Method 2: Use setValue - simpler but may not preserve undo history
          editorInfo.model.setValue(value);
        }
        
        // OPTIMIZATION: Update cursor position and ensure visibility
        try {
          editorInfo.editor.setPosition({ lineNumber: 1, column: 1 });
          editorInfo.editor.revealLine(1);
        } catch (cursorError) {
          log.warn('Failed to update cursor position:', cursorError);
          // Non-critical error, continue
        }
        
        // OPTIMIZATION: Apply layout refresh to ensure editor updates visually
        try {
          editorInfo.editor.layout();
        } catch (layoutError) {
          log.warn('Failed to refresh layout:', layoutError);
          // Non-critical error, continue
        }
        
        log.info('Successfully set editor value');
        return { success: true };
      } catch (e) {
        log.error('Error setting value:', e);
        return { success: false, error: e.message };
      }
    } catch (e) {
      log.error('Error in setEditorValue:', e);
      return { success: false, error: e.message };
    }
  }
  
  // OPTIMIZATION: Initialization function to set up global references
  function initializeDirectAccess() {
    try {
      log.info('Initializing direct access');
      
      // Expose the function globally so it can be called directly
      window.hackerrankDirectSetValue = function(value) {
        return setEditorValue(value);
      };
      
      window.hackerrankDirectGetValue = function() {
        return getEditorValue();
      };
      
      // OPTIMIZATION: Set up a short interval to check for editor initialization
      // This will try to find the editor quickly after page load and then cache it
      if (!editorCheckInterval) {
        editorCheckInterval = setInterval(() => {
          const editorInfo = findHackerRankEditor();
          if (editorInfo.found) {
            // Editor found, clear interval
            clearInterval(editorCheckInterval);
            editorCheckInterval = null;
            log.debug('Found editor during interval check');
          }
        }, 500); // Check every 500ms
        
        // OPTIMIZATION: Clear interval after 10 seconds max to avoid resource waste
        setTimeout(() => {
          if (editorCheckInterval) {
            clearInterval(editorCheckInterval);
            editorCheckInterval = null;
            log.debug('Cleared editor check interval after timeout');
          }
        }, 10000);
      }
      
      // OPTIMIZATION: Look for DOM changes that might indicate editor is ready
      const observer = new MutationObserver((mutations) => {
        const editorRelatedChange = mutations.some(mutation => {
          // Check if any Monaco editor or HR editor elements were added
          return Array.from(mutation.addedNodes).some(node => {
            if (node.nodeType !== Node.ELEMENT_NODE) return false;
            
            // Check element and its children for editor elements
            const element = node;
            return element.classList?.contains('monaco-editor') ||
                   element.classList?.contains('hr-monaco-editor') ||
                   element.querySelector?.('.monaco-editor, .hr-monaco-editor');
          });
        });
        
        if (editorRelatedChange) {
          log.debug('Detected editor-related DOM change, checking for editor');
          findHackerRankEditor();
        }
      });
      
      // Start observing the document body for editor-related changes
      observer.observe(document.body, { 
        childList: true, 
        subtree: true,
        attributes: false,
        characterData: false
      });
      
      // Clean up observer after 15 seconds to avoid resource usage
      setTimeout(() => {
        observer.disconnect();
        log.debug('Disconnected mutation observer after timeout');
      }, 15000);
      
      return true;
    } catch (e) {
      log.error('Error initializing direct access:', e);
      return false;
    }
  }
})(); 