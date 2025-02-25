// HackerRank Direct Access Script
(function() {
  console.log('[HackerRank Direct] Initializing direct access to Monaco editor');
  
  // Create a communication channel with the extension
  window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'HR_DIRECT_ACCESS') {
      const { action, payload, requestId } = event.data;
      
      try {
        if (action === 'GET_EDITOR') {
          // Find Monaco editor in HackerRank's globals
          const editorInfo = findHackerRankEditor();
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
          const editorInfo = findHackerRankEditor();
          if (editorInfo.found && editorInfo.model) {
            const value = editorInfo.model.getValue();
            window.postMessage({
              type: 'HR_DIRECT_RESPONSE',
              action: 'GET_VALUE',
              success: true,
              payload: { value },
              requestId
            }, '*');
          } else {
            window.postMessage({
              type: 'HR_DIRECT_RESPONSE',
              action: 'GET_VALUE',
              success: false,
              error: 'Editor not found',
              requestId
            }, '*');
          }
        }
      } catch (e) {
        console.error('[HackerRank Direct] Error handling message:', e);
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
            console.log('[HackerRank Direct] Found editor in global:', loc);
            break;
          }
        }
      }
      
      // If not found in globals, try to find in DOM
      if (!result.found) {
        // Look for editor wrappers
        const wrappers = document.querySelectorAll('.hr-monaco-editor-wrapper');
        if (wrappers.length > 0) {
          console.log('[HackerRank Direct] Found editor wrappers:', wrappers.length);
          
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
                console.log('[HackerRank Direct] Found editor in DOM');
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
          console.log('[HackerRank Direct] Found editor in monaco.editor');
        }
      }
    } catch (e) {
      console.error('[HackerRank Direct] Error finding editor:', e);
    }
    
    return result;
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
        console.warn('[HackerRank Direct] pushEditOperations failed, trying setValue');
        // Method 2: Use setValue
        editorInfo.model.setValue(value);
      }
      
      // Verify the change
      const newValue = editorInfo.model.getValue();
      const success = newValue === value;
      
      // If verification failed, try one more time
      if (!success) {
        console.warn('[HackerRank Direct] Value verification failed, trying again');
        editorInfo.model.setValue(value);
        const retryValue = editorInfo.model.getValue();
        return {
          success: retryValue === value,
          error: retryValue !== value ? 'Value verification failed after retry' : null
        };
      }
      
      return { success: true };
    } catch (e) {
      console.error('[HackerRank Direct] Error setting value:', e);
      return { success: false, error: e.message };
    }
  }
  
  // Create a global function that can be called directly
  window.hackerrankDirectSetValue = function(value) {
    return setEditorValue(value);
  };
  
  // Notify that direct access is ready
  window.postMessage({
    type: 'HR_DIRECT_READY'
  }, '*');
  
  console.log('[HackerRank Direct] Direct access initialized');
})(); 