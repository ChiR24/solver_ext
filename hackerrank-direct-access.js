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
      
      // Check HackerRank specific globals
      const hrLocations = [
        'hackerrank_r_krackjack',
        '_monaco',
        'monaco',
        'MonacoEnvironment',
        'MonacoEditor'
      ];
      
      // First try to find in globals
      for (const loc of hrLocations) {
        if (window[loc]?.editor) {
          const editors = window[loc].editor.getEditors?.();
          if (editors && editors.length > 0) {
            result.found = true;
            result.location = loc;
            result.editor = editors[0];
            result.model = editors[0].getModel();
            log.info('Found editor in global:', loc);
            break;
          }
        }
      }
      
      // If not found in globals, try to find in DOM
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
        // Method 1: Use pushEditOperations
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
        // Method 2: Use setValue
        editorInfo.model.setValue(value);
      }
      
      // Verify the change
      const newValue = editorInfo.model.getValue();
      const success = newValue === value;
      
      // If verification failed, try one more time
      if (!success) {
        log.warn('Value verification failed, trying again');
        editorInfo.model.setValue(value);
        const retryValue = editorInfo.model.getValue();
        return {
          success: retryValue === value,
          error: retryValue !== value ? 'Value verification failed after retry' : null
        };
      }
      
      log.info('Successfully set editor value');
      return { success: true };
    } catch (e) {
      log.error('Error setting value:', e);
      return { success: false, error: e.message };
    }
  }
  
  // Create a global function that can be called directly
  window.hackerrankDirectSetValue = function(value) {
    return setEditorValue(value);
  };
  
  // Create a global function to get editor value directly
  window.hackerrankDirectGetValue = function() {
    return getEditorValue();
  };
  
  // Notify that direct access is ready
  window.postMessage({
    type: 'HR_DIRECT_READY'
  }, '*');
  
  log.info('Direct access initialized');
})(); 