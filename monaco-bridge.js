// Universal Editor Bridge Script
(() => {
  // Cache for editor instances and states
  const editorCache = {
    monaco: null,
    ace: null,
    codemirror: null,
    lastCheck: 0,
    refreshInterval: 1000 // Minimum time between checks
  };

  // Function to get any available editor instance
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

    // Try Ace editor
    if (!editorCache.ace) {
      if (window.ace?.edit) {
        const aceElement = document.querySelector('.ace_editor');
        if (aceElement) {
          try {
            const aceEditor = window.ace.edit(aceElement);
            editorCache.ace = { type: 'ace', instance: aceEditor };
          } catch (e) {
            console.debug('Ace editor not ready:', e);
          }
        }
      }
    }

    // Try CodeMirror
    if (!editorCache.codemirror) {
      if (window.CodeMirror) {
        const cmElement = document.querySelector('.CodeMirror');
        if (cmElement?.CodeMirror) {
          editorCache.codemirror = { type: 'codemirror', instance: cmElement.CodeMirror };
        }
      }
    }

    return editorCache.monaco || editorCache.ace || editorCache.codemirror;
  };

  // Function to get editor state
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
      console.error('Error getting editor state:', e);
      return null;
    }
  };

  // Function to get editor value
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
      console.error('Error getting editor value:', e);
      return { success: false };
    }
  };

  // Function to set editor value
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
            console.debug('Editor model not ready');
            return false;
          }

          // Set value with retry mechanism
          let retryCount = 0;
          const maxRetries = 3;
          const setValueWithRetry = () => {
            try {
              monacoEditor.setValue(value);
              monacoEditor.focus();
              return true;
            } catch (e) {
              console.debug('Retry attempt', retryCount + 1, 'failed:', e);
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
      console.error('Error setting editor value:', e);
      return false;
    }
  };

  // Function to reinitialize the editor
  const reinitEditor = () => {
    const editor = getEditorInstance();
    if (!editor) return false;

    try {
      switch (editor.type) {
        case 'monaco':
          const editors = editor.instance.editor.getEditors();
          editors.forEach(e => e.dispose());
          const editorElement = document.querySelector('#editor');
          if (!editorElement) return false;
          editor.instance.editor.create(editorElement);
          break;

        case 'ace':
          editor.instance.destroy();
          const aceElement = document.querySelector('.ace_editor');
          if (!aceElement) return false;
          window.ace.edit(aceElement);
          break;

        case 'codemirror':
          editor.instance.refresh();
          break;

        default:
          return false;
      }
      return true;
    } catch (e) {
      console.error('Error reinitializing editor:', e);
      return false;
    }
  };

  // Message handler with debouncing
  let messageTimeout = null;
  const handleMessage = (event) => {
    if (event.source !== window) return;
    if (!event.data || event.data.type !== 'EDITOR_BRIDGE') return;

    // Clear existing timeout
    if (messageTimeout) {
      clearTimeout(messageTimeout);
    }

    // Debounce message handling
    messageTimeout = setTimeout(() => {
      const { action, payload } = event.data;
      
      switch (action) {
        case 'GET_EDITOR_STATE':
          const state = getEditorState();
          if (state) {
            window.postMessage({
              type: 'EDITOR_BRIDGE',
              action: 'EDITOR_STATE',
              payload: state
            }, '*');
          }
          break;

        case 'GET_VALUE':
          const { success, value } = getEditorValue();
          window.postMessage({
            type: 'EDITOR_BRIDGE',
            action: 'GET_VALUE_RESULT',
            payload: { success, value }
          }, '*');
          break;

        case 'SET_VALUE':
          const setSuccess = setEditorValue(payload);
          window.postMessage({
            type: 'EDITOR_BRIDGE',
            action: 'SET_VALUE_RESULT',
            payload: { success: setSuccess }
          }, '*');
          break;

        case 'REINIT_EDITOR':
          const reinitSuccess = reinitEditor();
          window.postMessage({
            type: 'EDITOR_BRIDGE',
            action: 'REINIT_RESULT',
            payload: { success: reinitSuccess }
          }, '*');
          break;
      }
    }, 50); // 50ms debounce
  };

  // Listen for messages with debouncing
  window.addEventListener('message', handleMessage);

  // Optimized observer setup
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

  const observer = new MutationObserver(() => {
    scheduleCheck(observerCallback);
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  // Initial check
  scheduleCheck(observerCallback);
})(); 