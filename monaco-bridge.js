// Universal Editor Bridge Script
(() => {
  // Only initialize when explicitly requested or auto-solve is enabled
  const shouldInitialize = () => {
    return new Promise(resolve => {
      // Check if auto-solve is enabled
      chrome.storage.local.get(['autoSolve'], (result) => {
        if (result.autoSolve) {
          resolve(true);
          return;
        }
        
        // Listen for initialization message
        const initListener = (event) => {
          if (event.source !== window) return;
          if (!event.data) return;
          
          if (event.data.type === 'EDITOR_BRIDGE' && event.data.action === 'INITIALIZE') {
            window.removeEventListener('message', initListener);
            resolve(true);
          }
        };
        
        window.addEventListener('message', initListener);
        
        // Also initialize if a solve message is received
        chrome.runtime.onMessage.addListener((request) => {
          if (request.action === 'solve') {
            window.removeEventListener('message', initListener);
            resolve(true);
          }
        });
      });
    });
  };

  // Cache for editor instances and states with performance optimizations
  const editorCache = {
    monaco: null,
    ace: null,
    codemirror: null,
    lastCheck: 0,
    refreshInterval: 1000, // Minimum time between checks
    pendingRequests: new Map() // Track pending requests to avoid duplicates
  };

  // Function to get any available editor instance with improved caching
  const getEditorInstance = () => {
    const now = Date.now();
    if (now - editorCache.lastCheck < editorCache.refreshInterval) {
      // Return cached result if checked recently
      return editorCache.monaco || editorCache.ace || editorCache.codemirror;
    }

    editorCache.lastCheck = now;

    // Try Monaco editor
    if (!editorCache.monaco) {
      const monaco = window.monaco || window._monaco;
      if (monaco?.editor) {
        editorCache.monaco = { type: 'monaco', instance: monaco };
      }
    }

    // Try Ace editor - only if Monaco not found
    if (!editorCache.monaco && !editorCache.ace) {
      if (window.ace?.edit) {
        const aceElement = document.querySelector('.ace_editor');
        if (aceElement) {
          try {
            const aceEditor = window.ace.edit(aceElement);
            editorCache.ace = { type: 'ace', instance: aceEditor };
          } catch (e) {
            // Silent fail - editor not ready
          }
        }
      }
    }

    // Try CodeMirror - only if others not found
    if (!editorCache.monaco && !editorCache.ace && !editorCache.codemirror) {
      if (window.CodeMirror) {
        const cmElement = document.querySelector('.CodeMirror');
        if (cmElement?.CodeMirror) {
          editorCache.codemirror = { type: 'codemirror', instance: cmElement.CodeMirror };
        }
      }
    }

    return editorCache.monaco || editorCache.ace || editorCache.codemirror;
  };

  // Function to get editor state with caching
  const getEditorState = () => {
    const editor = getEditorInstance();
    if (!editor) return null;

    try {
      let state = {
        hasEditor: true,
        editorType: editor.type,
        value: ''
      };

      switch (editor.type) {
        case 'monaco':
          // Use cached editors/models if available
          const editors = editor.instance.editor.getEditors();
          const models = editor.instance.editor.getModels();
          state = {
            ...state,
            hasMonaco: true,
            hasEditors: editors.length > 0,
            hasModels: models.length > 0,
            value: editors[0]?.getValue() || ''
          };
          break;

        case 'ace':
          state = {
            ...state,
            value: editor.instance.getValue() || ''
          };
          break;

        case 'codemirror':
          state = {
            ...state,
            value: editor.instance.getValue() || ''
          };
          break;
      }

      return state;
    } catch (e) {
      // Silent fail - return null
      return null;
    }
  };

  // Function to get editor value with error handling
  const getEditorValue = () => {
    const editor = getEditorInstance();
    if (!editor) return { success: false };

    try {
      let value = '';
      switch (editor.type) {
        case 'monaco':
          value = editor.instance.editor.getEditors()[0]?.getValue() || '';
          break;
        case 'ace':
          value = editor.instance.getValue() || '';
          break;
        case 'codemirror':
          value = editor.instance.getValue() || '';
          break;
      }
      return { success: true, value };
    } catch (e) {
      return { success: false };
    }
  };

  // Function to set editor value with optimized retry logic
  const setEditorValue = (value) => {
    const editor = getEditorInstance();
    if (!editor) return false;

    try {
      switch (editor.type) {
        case 'monaco':
          // Get all editor instances
          const editors = editor.instance.editor.getEditors();
          let monacoEditor = editors[0];
          
          // If no editor instance, try to get the model directly
          if (!monacoEditor) {
            const models = editor.instance.editor.getModels();
            if (models && models.length > 0) {
              models[0].setValue(value);
              return true;
            }
            return false;
          }

          // Ensure the editor is ready
          if (!monacoEditor.getModel()) {
            return false;
          }

          // Set value with optimized retry mechanism
          let retryCount = 0;
          const maxRetries = 3;
          
          // Use a more efficient approach for retries
          const setValueWithRetry = () => {
            try {
              // Use pushEditOperations for better performance when available
              const model = monacoEditor.getModel();
              if (model && model.pushEditOperations) {
                model.pushEditOperations(
                  [],
                  [{ range: model.getFullModelRange(), text: value }],
                  () => null
                );
              } else {
                monacoEditor.setValue(value);
              }
              
              // Focus and position cursor at start
              monacoEditor.focus();
              monacoEditor.setPosition({ lineNumber: 1, column: 1 });
              return true;
            } catch (e) {
              retryCount++;
              if (retryCount < maxRetries) {
                return setValueWithRetry();
              }
              return false;
            }
          };

          return setValueWithRetry();

        case 'ace':
          editor.instance.setValue(value, 1);
          editor.instance.focus();
          editor.instance.navigateFileStart();
          break;

        case 'codemirror':
          editor.instance.setValue(value);
          editor.instance.focus();
          editor.instance.setCursor(0, 0);
          break;

        default:
          return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  };

  // Function to reinitialize the editor with improved error handling
  const reinitEditor = () => {
    const editor = getEditorInstance();
    if (!editor) return false;

    try {
      switch (editor.type) {
        case 'monaco':
          const editors = editor.instance.editor.getEditors();
          editors.forEach(e => {
            try {
              e.dispose();
            } catch (err) {
              // Silently fail individual editor dispose
            }
          });
          
          const editorElement = document.querySelector('#editor');
          if (!editorElement) return false;
          
          try {
            editor.instance.editor.create(editorElement);
            return true;
          } catch (err) {
            return false;
          }

        case 'ace':
          try {
            editor.instance.destroy();
            const aceElement = document.querySelector('.ace_editor');
            if (!aceElement) return false;
            window.ace.edit(aceElement);
            return true;
          } catch (err) {
            return false;
          }

        case 'codemirror':
          try {
            editor.instance.refresh();
            return true;
          } catch (err) {
            return false;
          }

        default:
          return false;
      }
    } catch (e) {
      return false;
    }
  };

  // Message handler with improved debouncing
  let messageTimeout = null;
  const pendingMessages = new Map();
  
  const handleMessage = (event) => {
    if (event.source !== window) return;
    if (!event.data || event.data.type !== 'EDITOR_BRIDGE') return;

    const { action, payload, id = Date.now() } = event.data;
    
    // Skip if this exact message is already being processed
    if (pendingMessages.has(id)) return;
    pendingMessages.set(id, true);
    
    // Clear existing timeout
    if (messageTimeout) {
      clearTimeout(messageTimeout);
    }

    // Debounce message handling
    messageTimeout = setTimeout(() => {
      processMessage(action, payload, id);
      messageTimeout = null;
    }, 50); // 50ms debounce
  };
  
  // Separate message processing function for better organization
  const processMessage = (action, payload, id) => {
    try {
      switch (action) {
        case 'GET_EDITOR_STATE':
          const state = getEditorState();
          if (state) {
            window.postMessage({
              type: 'EDITOR_BRIDGE',
              action: 'EDITOR_STATE',
              payload: state,
              id
            }, '*');
          }
          break;

        case 'GET_VALUE':
          const { success, value } = getEditorValue();
          window.postMessage({
            type: 'EDITOR_BRIDGE',
            action: 'GET_VALUE_RESULT',
            payload: { success, value },
            id
          }, '*');
          break;

        case 'SET_VALUE':
          const setSuccess = setEditorValue(payload);
          window.postMessage({
            type: 'EDITOR_BRIDGE',
            action: 'SET_VALUE_RESULT',
            payload: { success: setSuccess },
            id
          }, '*');
          break;

        case 'REINIT_EDITOR':
          const reinitSuccess = reinitEditor();
          window.postMessage({
            type: 'EDITOR_BRIDGE',
            action: 'REINIT_RESULT',
            payload: { success: reinitSuccess },
            id
          }, '*');
          break;
      }
    } finally {
      // Clean up pending message tracking
      pendingMessages.delete(id);
    }
  };

  // Initialize only when requested
  shouldInitialize().then(shouldInit => {
    if (!shouldInit) {
      console.log('[Editor Bridge] Waiting for explicit initialization');
      return;
    }
    
    console.log('[Editor Bridge] Initializing');
    
    // Listen for messages with debouncing
    window.addEventListener('message', handleMessage);

    // Optimized observer setup with reduced DOM operations
    const observerCallback = () => {
      const state = getEditorState();
      if (state?.hasEditor) {
        window.postMessage({
          type: 'EDITOR_BRIDGE',
          action: 'EDITOR_STATE',
          payload: state
        }, '*');
        observer.disconnect();
      }
    };

    // Use requestIdleCallback if available, otherwise use setTimeout
    const scheduleCheck = (callback) => {
      if (window.requestIdleCallback) {
        window.requestIdleCallback(callback, { timeout: 1000 });
      } else {
        setTimeout(callback, 100);
      }
    };

    // Create a single observer with optimized options
    const observer = new MutationObserver(() => {
      scheduleCheck(observerCallback);
    });

    // Start observing with optimized configuration
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: false,
      characterData: false
    });

    // Initial check
    scheduleCheck(observerCallback);
  });
})(); 