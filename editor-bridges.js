// Universal Editor Bridge System
(() => {
  // Editor type definitions
  const EDITOR_TYPES = {
    MONACO: 'monaco',
    ACE: 'ace',
    CODEMIRROR: 'codemirror',
    GENERIC: 'generic'
  };

  // Bridge implementations for different editors
  const EditorBridges = {
    // Monaco Editor Bridge
    [EDITOR_TYPES.MONACO]: {
      getInstance: () => {
        const monaco = window.monaco || window._monaco;
        if (!monaco?.editor) return null;
        
        // Try to get editor instance
        const editors = monaco.editor.getEditors();
        if (!editors || editors.length === 0) {
          console.debug('No Monaco editor instances found');
          return null;
        }

        const editor = editors[0];
        if (!editor || !editor.getModel()) {
          console.debug('Monaco editor instance not ready');
          return null;
        }

        return {
          type: EDITOR_TYPES.MONACO,
          editor: editor,
          model: editor.getModel(),
          element: document.querySelector('.monaco-editor')
        };
      },
      getValue: (instance) => {
        try {
          return instance.model.getValue() || '';
        } catch (e) {
          console.debug('Monaco getValue error:', e);
          return '';
        }
      },
      setValue: (instance, value) => {
        try {
          // Get current model and editor
          const model = instance.model;
          const editor = instance.editor;

          if (!model || !editor) {
            console.debug('Monaco editor or model not available');
            return false;
          }

          // Set value and update cursor
          model.pushEditOperations(
            [],
            [
              {
                range: model.getFullModelRange(),
                text: value
              }
            ],
            () => null
          );

          // Update cursor and scroll
          editor.setPosition({ lineNumber: 1, column: 1 });
          editor.revealLine(1);
          editor.focus();

          // Force editor to refresh
          editor.layout();
          return true;
        } catch (e) {
          console.debug('Monaco setValue error:', e);
          return false;
        }
      },
      focus: (instance) => {
        try {
          instance.editor.focus();
        } catch (e) {
          console.debug('Monaco focus error:', e);
        }
      },
      dispose: (instance) => {
        try {
          instance.editor.dispose();
        } catch (e) {
          console.debug('Monaco dispose error:', e);
        }
      }
    },

    // Ace Editor Bridge
    [EDITOR_TYPES.ACE]: {
      getInstance: () => {
        if (!window.ace?.edit) return null;
        const element = document.querySelector('.ace_editor');
        if (!element) return null;
        
        try {
          const editor = window.ace.edit(element);
          return {
            type: EDITOR_TYPES.ACE,
            editor: editor,
            element: element
          };
        } catch (e) {
          console.debug('Ace getInstance error:', e);
          return null;
        }
      },
      getValue: (instance) => {
        try {
          return instance.editor.getValue() || '';
        } catch (e) {
          console.debug('Ace getValue error:', e);
          return '';
        }
      },
      setValue: (instance, value) => {
        try {
          instance.editor.setValue(value, 1);
          instance.editor.focus();
          instance.editor.navigateFileStart();
          return true;
        } catch (e) {
          console.debug('Ace setValue error:', e);
          return false;
        }
      },
      focus: (instance) => {
        try {
          instance.editor.focus();
        } catch (e) {
          console.debug('Ace focus error:', e);
        }
      },
      dispose: (instance) => {
        try {
          instance.editor.destroy();
        } catch (e) {
          console.debug('Ace dispose error:', e);
        }
      }
    },

    // CodeMirror Bridge
    [EDITOR_TYPES.CODEMIRROR]: {
      getInstance: () => {
        if (!window.CodeMirror) return null;
        const element = document.querySelector('.CodeMirror');
        if (!element?.CodeMirror) return null;
        
        return {
          type: EDITOR_TYPES.CODEMIRROR,
          editor: element.CodeMirror,
          element: element
        };
      },
      getValue: (instance) => {
        try {
          return instance.editor.getValue() || '';
        } catch (e) {
          console.debug('CodeMirror getValue error:', e);
          return '';
        }
      },
      setValue: (instance, value) => {
        try {
          instance.editor.setValue(value);
          instance.editor.focus();
          instance.editor.setCursor(0, 0);
          return true;
        } catch (e) {
          console.debug('CodeMirror setValue error:', e);
          return false;
        }
      },
      focus: (instance) => {
        try {
          instance.editor.focus();
        } catch (e) {
          console.debug('CodeMirror focus error:', e);
        }
      },
      dispose: (instance) => {
        try {
          instance.editor.toTextArea();
        } catch (e) {
          console.debug('CodeMirror dispose error:', e);
        }
      }
    },

    // Generic Editor Bridge (for textarea and contenteditable)
    [EDITOR_TYPES.GENERIC]: {
      getInstance: () => {
        const element = document.querySelector('textarea.code-editor, [contenteditable="true"]');
        if (!element) return null;
        
        return {
          type: EDITOR_TYPES.GENERIC,
          editor: element,
          element: element
        };
      },
      getValue: (instance) => {
        try {
          return instance.element.tagName.toLowerCase() === 'textarea' 
            ? instance.element.value 
            : instance.element.textContent || '';
        } catch (e) {
          console.debug('Generic getValue error:', e);
          return '';
        }
      },
      setValue: (instance, value) => {
        try {
          if (instance.element.tagName.toLowerCase() === 'textarea') {
            instance.element.value = value;
          } else {
            instance.element.textContent = value;
          }
          instance.element.focus();
          return true;
        } catch (e) {
          console.debug('Generic setValue error:', e);
          return false;
        }
      },
      focus: (instance) => {
        try {
          instance.element.focus();
        } catch (e) {
          console.debug('Generic focus error:', e);
        }
      },
      dispose: () => {} // No disposal needed for generic editors
    }
  };

  // Editor Manager Class
  class EditorManager {
    constructor() {
      this.currentInstance = null;
      this.currentType = null;
      this.lastCheck = 0;
      this.refreshInterval = 1000;
      this.setupMessageHandler();
      this.setupObserver();
    }

    // Get current editor instance
    getInstance() {
      const now = Date.now();
      if (now - this.lastCheck < this.refreshInterval && this.currentInstance) {
        return this.currentInstance;
      }

      this.lastCheck = now;
      this.currentInstance = null;
      this.currentType = null;

      // Try each editor type in order of preference
      for (const type of Object.values(EDITOR_TYPES)) {
        const instance = EditorBridges[type].getInstance();
        if (instance) {
          this.currentInstance = instance;
          this.currentType = type;
          break;
        }
      }

      return this.currentInstance;
    }

    // Get editor state
    getEditorState() {
      const instance = this.getInstance();
      if (!instance) return null;

      try {
        const bridge = EditorBridges[instance.type];
        return {
          hasEditor: true,
          editorType: instance.type,
          value: bridge.getValue(instance)
        };
      } catch (e) {
        console.error('Error getting editor state:', e);
        return null;
      }
    }

    // Set editor value
    setEditorValue(value) {
      const instance = this.getInstance();
      if (!instance) return false;

      try {
        const bridge = EditorBridges[instance.type];
        return bridge.setValue(instance, value);
      } catch (e) {
        console.error('Error setting editor value:', e);
        return false;
      }
    }

    // Reinitialize editor
    reinitEditor() {
      const instance = this.getInstance();
      if (!instance) return false;

      try {
        const bridge = EditorBridges[instance.type];
        bridge.dispose(instance);
        this.currentInstance = null;
        this.lastCheck = 0;
        return true;
      } catch (e) {
        console.error('Error reinitializing editor:', e);
        return false;
      }
    }

    // Setup message handler
    setupMessageHandler() {
      let messageTimeout = null;
      window.addEventListener('message', (event) => {
        if (event.source !== window) return;
        if (!event.data || event.data.type !== 'EDITOR_BRIDGE') return;

        if (messageTimeout) {
          clearTimeout(messageTimeout);
        }

        messageTimeout = setTimeout(() => {
          const { action, payload } = event.data;
          
          switch (action) {
            case 'GET_EDITOR_STATE':
              const state = this.getEditorState();
              if (state) {
                window.postMessage({
                  type: 'EDITOR_BRIDGE',
                  action: 'EDITOR_STATE',
                  payload: state
                }, '*');
              }
              break;

            case 'GET_VALUE':
              const instance = this.getInstance();
              const value = instance ? EditorBridges[instance.type].getValue(instance) : '';
              window.postMessage({
                type: 'EDITOR_BRIDGE',
                action: 'GET_VALUE_RESULT',
                payload: { success: !!instance, value }
              }, '*');
              break;

            case 'SET_VALUE':
              const success = this.setEditorValue(payload);
              window.postMessage({
                type: 'EDITOR_BRIDGE',
                action: 'SET_VALUE_RESULT',
                payload: { success }
              }, '*');
              break;

            case 'REINIT_EDITOR':
              const reinitSuccess = this.reinitEditor();
              window.postMessage({
                type: 'EDITOR_BRIDGE',
                action: 'REINIT_RESULT',
                payload: { success: reinitSuccess }
              }, '*');
              break;
          }
        }, 50);
      });
    }

    // Setup observer for editor changes
    setupObserver() {
      const observerCallback = () => {
        const state = this.getEditorState();
        if (state?.hasEditor) {
          window.postMessage({
            type: 'EDITOR_BRIDGE',
            action: 'EDITOR_STATE',
            payload: state
          }, '*');
          observer.disconnect();
        }
      };

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

      scheduleCheck(observerCallback);
    }
  }

  // Initialize the editor manager
  window._editorManager = new EditorManager();

  // Helper function to query through shadow DOM
  const queryShadowDom = (root, selector) => {
    // Try regular DOM first
    let element = root.querySelector(selector);
    if (element) return element;

    // Search through shadow roots
    const shadowRoots = Array.from(root.querySelectorAll('*'))
      .map(el => el.shadowRoot)
      .filter(Boolean);

    for (const shadowRoot of shadowRoots) {
      element = queryShadowDom(shadowRoot, selector);
      if (element) return element;
    }

    return null;
  };

  // Helper function to find editor in shadow DOM
  const findEditorInShadowDom = (root) => {
    // Try Monaco editor
    const monacoElement = queryShadowDom(root, '.monaco-editor');
    if (monacoElement) {
      const hostElement = monacoElement.getRootNode().host;
      const monaco = hostElement.monaco || window.monaco;
      if (monaco?.editor) {
        console.log('Found Monaco editor in shadow DOM');
        return {
          type: 'monaco',
          element: monacoElement,
          getValue: () => {
            const model = monaco.editor.getModels()[0];
            return model ? model.getValue() : '';
          },
          setValue: (value) => {
            const model = monaco.editor.getModels()[0];
            if (model) {
              model.setValue(value);
              return true;
            }
            return false;
          }
        };
      }
    }

    // Try Ace editor
    const aceElement = queryShadowDom(root, '.ace_editor');
    if (aceElement) {
      const hostElement = aceElement.getRootNode().host;
      const ace = hostElement.ace || window.ace;
      if (ace?.edit) {
        console.log('Found Ace editor in shadow DOM');
        const editor = ace.edit(aceElement);
        return {
          type: 'ace',
          element: aceElement,
          getValue: () => editor.getValue() || '',
          setValue: (value) => {
            editor.setValue(value, -1);
            return true;
          }
        };
      }
    }

    // Try CodeMirror
    const cmElement = queryShadowDom(root, '.CodeMirror');
    if (cmElement?.CodeMirror) {
      console.log('Found CodeMirror in shadow DOM');
      return {
        type: 'codemirror',
        element: cmElement,
        getValue: () => cmElement.CodeMirror.getValue() || '',
        setValue: (value) => {
          cmElement.CodeMirror.setValue(value);
          return true;
        }
      };
    }

    // Try finding any editor-like element
    const editorElement = queryShadowDom(root, '[class*="editor"], [class*="code-area"], textarea.code');
    if (editorElement) {
      console.log('Found generic editor in shadow DOM');
      return {
        type: 'generic',
        element: editorElement,
        getValue: () => editorElement.value || editorElement.textContent || '',
        setValue: (value) => {
          if (editorElement.tagName.toLowerCase() === 'textarea') {
            editorElement.value = value;
          } else {
            editorElement.textContent = value;
          }
          return true;
        }
      };
    }

    return null;
  };

  // HackerRank Editor Bridge
  const HackerRankBridge = {
    lastState: null,
    editorInstance: null,
    lastEditorCheck: 0,
    checkInterval: 300, // Reduced from 500 to 300 for faster checks
    debugHistory: [],
    maxDebugHistory: 20,
    initializationAttempts: 0,
    maxInitAttempts: 100, // Increased from 50 to 100 for more attempts
    directAccessInitialized: false,

    // Helper to log debug info - only for critical editor issues
    logDebug: (message, data = {}, isError = false) => {
      // Only log if it's an error or a critical state change
      if (!isError && !message.includes('Editor') && !message.includes('Monaco')) {
        return;
      }

      const debugEntry = {
        timestamp: new Date().toISOString(),
        message,
        data
      };

      // Only log to console if it's an error or important editor state change
      if (isError || message.includes('Error') || message.includes('failed')) {
        console.error(`[HackerRank Bridge] ${message}`, data);
      } else if (message.includes('Found') || message.includes('initialized') || message.includes('created')) {
        console.log(`[HackerRank Bridge] ${message}`, data);
      }

      HackerRankBridge.debugHistory.unshift(debugEntry);
      if (HackerRankBridge.debugHistory.length > HackerRankBridge.maxDebugHistory) {
        HackerRankBridge.debugHistory.pop();
      }
    },

    // Initialize direct access to HackerRank's Monaco editor
    initializeDirectAccess: () => {
      if (HackerRankBridge.directAccessInitialized) {
        return;
      }

      try {
        // Create a script element to inject code directly into the page context
        const script = document.createElement('script');
        script.textContent = `
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
                      payload: editorInfo,
                      requestId
                    }, '*');
                  } else if (action === 'SET_VALUE') {
                    // Set value in editor
                    const result = setEditorValue(payload.value);
                    window.postMessage({
                      type: 'HR_DIRECT_RESPONSE',
                      action: 'SET_VALUE',
                      success: result.success,
                      payload: result,
                      requestId
                    }, '*');
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
              
              return result;
            }
            
            // Function to set value in editor
            function setEditorValue(value) {
              const editorInfo = findHackerRankEditor();
              if (!editorInfo.found || !editorInfo.editor || !editorInfo.model) {
                return { success: false, error: 'Editor not found' };
              }
              
              try {
                // Try multiple methods to set value
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
                    expected: value.length,
                    actual: retryValue.length
                  };
                }
                
                return { success: true };
              } catch (e) {
                console.error('[HackerRank Direct] Error setting value:', e);
                return { success: false, error: e.message };
              }
            }
            
            // Notify that direct access is ready
            window.postMessage({
              type: 'HR_DIRECT_READY'
            }, '*');
            
            console.log('[HackerRank Direct] Direct access initialized');
          })();
        `;
        
        // Append script to page
        (document.head || document.documentElement).appendChild(script);
        
        // Remove script after execution
        script.onload = function() {
          this.remove();
        };
        
        // Set up listener for direct access responses
        window.addEventListener('message', (event) => {
          if (event.source !== window) return;
          if (!event.data || event.data.type !== 'HR_DIRECT_RESPONSE') return;
          
          const { action, success, payload, requestId, error } = event.data;
          
          // Handle response based on action
          if (action === 'GET_EDITOR') {
            if (success && payload.found) {
              HackerRankBridge.logDebug('Direct access found editor', payload);
              
              // Create editor instance from direct access info
              if (!HackerRankBridge.editorInstance) {
                HackerRankBridge.editorInstance = {
                  type: 'monaco',
                  editor: { _directAccess: true },
                  model: { _directAccess: true },
                  element: document.querySelector('.hr-monaco-editor-wrapper'),
                  getValue: () => {
                    return new Promise((resolve, reject) => {
                      const requestId = Date.now().toString();
                      
                      const handler = (event) => {
                        if (event.source !== window) return;
                        if (!event.data || event.data.type !== 'HR_DIRECT_RESPONSE') return;
                        if (event.data.requestId !== requestId) return;
                        
                        window.removeEventListener('message', handler);
                        
                        if (event.data.success) {
                          resolve(event.data.payload.value || '');
                        } else {
                          reject(new Error(event.data.error || 'Failed to get value'));
                        }
                      };
                      
                      window.addEventListener('message', handler);
                      
                      window.postMessage({
                        type: 'HR_DIRECT_ACCESS',
                        action: 'GET_VALUE',
                        requestId
                      }, '*');
                      
                      // Timeout after 2 seconds
                      setTimeout(() => {
                        window.removeEventListener('message', handler);
                        reject(new Error('Timeout getting value'));
                      }, 2000);
                    });
                  },
                  setValue: (value) => {
                    return new Promise((resolve, reject) => {
                      const requestId = Date.now().toString();
                      
                      const handler = (event) => {
                        if (event.source !== window) return;
                        if (!event.data || event.data.type !== 'HR_DIRECT_RESPONSE') return;
                        if (event.data.requestId !== requestId) return;
                        
                        window.removeEventListener('message', handler);
                        
                        if (event.data.success) {
                          resolve(true);
                        } else {
                          reject(new Error(event.data.error || 'Failed to set value'));
                        }
                      };
                      
                      window.addEventListener('message', handler);
                      
                      window.postMessage({
                        type: 'HR_DIRECT_ACCESS',
                        action: 'SET_VALUE',
                        payload: { value },
                        requestId
                      }, '*');
                      
                      // Timeout after 2 seconds
                      setTimeout(() => {
                        window.removeEventListener('message', handler);
                        reject(new Error('Timeout setting value'));
                      }, 2000);
                    });
                  }
                };
              }
            } else {
              HackerRankBridge.logDebug('Direct access failed to find editor', { error });
            }
          }
        });
        
        // Listen for direct access ready message
        window.addEventListener('message', (event) => {
          if (event.source !== window) return;
          if (!event.data || event.data.type !== 'HR_DIRECT_READY') return;
          
          HackerRankBridge.logDebug('Direct access ready');
          HackerRankBridge.directAccessInitialized = true;
          
          // Try to get editor
          window.postMessage({
            type: 'HR_DIRECT_ACCESS',
            action: 'GET_EDITOR',
            requestId: 'init'
          }, '*');
        });
        
      } catch (e) {
        HackerRankBridge.logDebug('Error initializing direct access', { error: e.message }, true);
      }
    },

    // Check if we're in an iframe and try to access parent if needed
    getWindowContext: () => {
      try {
        // If we're in an iframe, try to access parent window's monaco
        if (window !== window.parent && window.parent.monaco) {
          HackerRankBridge.logDebug('Found Monaco in parent window');
          return window.parent;
        }
      } catch (e) {
        // Cross-origin access will fail, which is expected
      }
      return window;
    },

    // Find all possible Monaco editor instances in the page
    findAllMonacoInstances: () => {
      const instances = [];
      try {
        // Check standard Monaco location
        if (window.monaco?.editor) {
          const editors = window.monaco.editor.getEditors();
          if (editors && editors.length > 0) {
            instances.push(...editors);
          }
        }

        // Check for Monaco in iframes
        const iframes = document.querySelectorAll('iframe');
        for (const iframe of iframes) {
          try {
            const iframeWindow = iframe.contentWindow;
            if (iframeWindow.monaco?.editor) {
              const editors = iframeWindow.monaco.editor.getEditors();
              if (editors && editors.length > 0) {
                instances.push(...editors);
              }
            }
          } catch (e) {
            // Cross-origin access will fail, which is expected
          }
        }

        // Check HackerRank specific locations
        const hrLocations = [
          'hackerrank_r_krackjack',
          '_monaco',
          'monaco',
          'MonacoEnvironment',
          'MonacoEditor'
        ];

        for (const loc of hrLocations) {
          try {
            const value = window[loc];
            if (value?.editor?.getEditors && typeof value.editor.getEditors === 'function') {
              const editors = value.editor.getEditors();
              if (editors && editors.length > 0) {
                instances.push(...editors);
              }
            }
          } catch (e) {
            continue;
          }
        }
      } catch (e) {
        HackerRankBridge.logDebug('Error finding Monaco instances', { error: e.message }, true);
      }

      return instances;
    },

    getEditor: () => {
      try {
        const now = Date.now();
        if (now - HackerRankBridge.lastEditorCheck < HackerRankBridge.checkInterval && HackerRankBridge.editorInstance) {
          return HackerRankBridge.editorInstance;
        }
        HackerRankBridge.lastEditorCheck = now;

        // First check for cached instance
        if (HackerRankBridge.editorInstance) {
          try {
            // Verify the instance is still valid
            const value = HackerRankBridge.editorInstance.getValue();
            if (value !== undefined) {
              return HackerRankBridge.editorInstance;
            }
          } catch (e) {
            HackerRankBridge.logDebug('Cached editor instance is invalid', { error: e.message }, true);
            HackerRankBridge.editorInstance = null;
          }
        }

        // Look for editor containers in order of specificity
        const editorContainers = [
          document.querySelector('.hr-monaco-editor-wrapper'),
          document.querySelector('.hr-monaco-editor'),
          document.querySelector('.monaco-editor-container'),
          document.querySelector('.monaco-editor'),
          document.querySelector('[class*="monaco"]'),
          document.querySelector('[class*="editor"]')
        ];

        const editorContainer = editorContainers.find(container => container !== null);
        if (!editorContainer) {
          HackerRankBridge.logDebug('No editor container found', {
            containers: document.querySelectorAll('[class*="editor"]').length,
            monacoElements: document.querySelectorAll('[class*="monaco"]').length
          }, true);
          return null;
        }

        // Track critical state changes only
        const currentState = {
          hasMonaco: !!window.monaco,
          hasEditor: !!window.monaco?.editor,
          editorModels: window.monaco?.editor?.getModels()?.length || 0,
          containerFound: !!editorContainer,
          containerClass: editorContainer?.className || ''
        };

        // Log only significant state changes
        if (JSON.stringify(currentState) !== JSON.stringify(HackerRankBridge.lastState)) {
          if (!currentState.hasMonaco || !currentState.hasEditor || currentState.editorModels === 0) {
            HackerRankBridge.logDebug('Critical editor state change', {
              previous: HackerRankBridge.lastState,
              current: currentState
            }, true);
          }
          HackerRankBridge.lastState = currentState;
        }

        // Try to find Monaco in window context
        const windowContext = HackerRankBridge.getWindowContext();
        if (!windowContext.monaco) {
          // Try to find Monaco in HackerRank's specific locations
          const hrLocations = [
            'hackerrank_r_krackjack',
            '_monaco',
            'monaco',
            'MonacoEnvironment',
            'MonacoEditor'
          ];

          for (const loc of hrLocations) {
            try {
              const value = windowContext[loc];
              if (value?.editor) {
                HackerRankBridge.logDebug(`Found Monaco in ${loc}`);
                windowContext.monaco = value;
                break;
              }
            } catch (e) {
              continue;
            }
          }
        }

        // Find all Monaco instances
        const allInstances = HackerRankBridge.findAllMonacoInstances();
        if (allInstances.length > 0) {
          HackerRankBridge.logDebug(`Found ${allInstances.length} Monaco editor instances`);
          
          // Prefer the instance in our container
          let selectedEditor = allInstances[0]; // Default to first instance
          
          // Try to find the editor instance that's in our container
          for (const instance of allInstances) {
            if (editorContainer.contains(instance._domElement) || 
                editorContainer.querySelector(`[data-uri="${instance.getModel()?.uri?.toString()}"]`)) {
              selectedEditor = instance;
              break;
            }
          }
          
          const model = selectedEditor.getModel();
          if (model) {
            HackerRankBridge.logDebug('Created editor instance');

            HackerRankBridge.editorInstance = {
              type: 'monaco',
              editor: selectedEditor,
              model: model,
              element: editorContainer,
              getValue: () => {
                try {
                  return model.getValue() || '';
                } catch (e) {
                  HackerRankBridge.logDebug('Error getting editor value', {
                    error: e.message
                  }, true);
                  return '';
                }
              },
              setValue: (value) => {
                try {
                  // Force editor to be ready
                  selectedEditor.focus();
                  selectedEditor.layout();

                  // Use atomic operation to update content
                  model.pushEditOperations(
                    [],
                    [{
                      range: model.getFullModelRange(),
                      text: value
                    }],
                    () => null
                  );

                  // Update cursor and scroll
                  selectedEditor.setPosition({ lineNumber: 1, column: 1 });
                  selectedEditor.revealLine(1);

                  // Force layout refresh
                  requestAnimationFrame(() => selectedEditor.layout());

                  // Verify the change
                  const newValue = model.getValue();
                  const success = newValue === value;
                  if (!success) {
                    // Try alternative approach if first method failed
                    model.setValue(value);
                    const retryValue = model.getValue();
                    const retrySuccess = retryValue === value;
                    
                    if (!retrySuccess) {
                      HackerRankBridge.logDebug('Failed to update editor value after retry', {
                        expectedLength: value.length,
                        actualLength: retryValue.length,
                        expectedFirstLine: value.split('\n')[0],
                        actualFirstLine: retryValue.split('\n')[0]
                      }, true);
                    }
                    
                    return retrySuccess;
                  }
                  return true;
                } catch (e) {
                  HackerRankBridge.logDebug('Error setting editor value', {
                    error: e.message
                  }, true);
                  
                  // Try a fallback approach
                  try {
                    model.setValue(value);
                    return true;
                  } catch (e2) {
                    HackerRankBridge.logDebug('Fallback setValue also failed', {
                      error: e2.message
                    }, true);
                    return false;
                  }
                }
              }
            };
            return HackerRankBridge.editorInstance;
          }
        }

        // If we still don't have an editor, check for Monaco editor directly in the DOM
        const monacoEditorElement = editorContainer.querySelector('.monaco-editor');
        if (monacoEditorElement && windowContext.monaco?.editor) {
          // Try to create a new editor instance
          try {
            const textModel = windowContext.monaco.editor.createModel('', 'javascript');
            const editor = windowContext.monaco.editor.create(monacoEditorElement, {
              model: textModel,
              automaticLayout: true
            });
            
            HackerRankBridge.logDebug('Created new Monaco editor instance');
            
            HackerRankBridge.editorInstance = {
              type: 'monaco',
              editor: editor,
              model: textModel,
              element: editorContainer,
              getValue: () => {
                try {
                  return textModel.getValue() || '';
                } catch (e) {
                  return '';
                }
              },
              setValue: (value) => {
                try {
                  textModel.setValue(value);
                  return true;
                } catch (e) {
                  return false;
                }
              }
            };
            return HackerRankBridge.editorInstance;
          } catch (e) {
            HackerRankBridge.logDebug('Failed to create new editor instance', {
              error: e.message
            }, true);
          }
        }

        HackerRankBridge.logDebug('Failed to create editor instance', {}, true);
        HackerRankBridge.editorInstance = null;
        return null;
      } catch (e) {
        HackerRankBridge.logDebug('Error in getEditor', {
          error: e.message
        }, true);
        HackerRankBridge.editorInstance = null;
        return null;
      }
    },

    initialize: () => {
      // Initialize direct access for HackerRank
      HackerRankBridge.initializeDirectAccess();

      // Function to wait for Monaco
      const waitForMonaco = (callback, maxAttempts = HackerRankBridge.maxInitAttempts) => {
        HackerRankBridge.initializationAttempts = 0;
        const check = () => {
          HackerRankBridge.initializationAttempts++;
          const editor = HackerRankBridge.getEditor();
          if (editor) {
            HackerRankBridge.logDebug('Editor initialized successfully', {
              attempts: HackerRankBridge.initializationAttempts
            });
            callback(editor);
          } else if (HackerRankBridge.initializationAttempts < maxAttempts) {
            // Exponential backoff with a cap
            const delay = Math.min(100 * Math.pow(1.1, Math.min(HackerRankBridge.initializationAttempts, 20)), 500);
            setTimeout(check, delay);
          } else {
            HackerRankBridge.logDebug('Failed to initialize editor after max attempts', {
              attempts: HackerRankBridge.initializationAttempts
            }, true);
          }
        };
        check();
      };

      // Set up mutation observer
      const observer = new MutationObserver((mutations) => {
        const relevantMutations = mutations.filter(mutation => {
          if (mutation.type === 'childList') {
            return Array.from(mutation.addedNodes).some(node => {
              if (node instanceof Element) {
                return node.classList?.contains('monaco-editor') || 
                       node.querySelector?.('.monaco-editor') ||
                       node.classList?.contains('hr-monaco-editor') ||
                       node.querySelector?.('.hr-monaco-editor') ||
                       node.classList?.contains('hr-monaco-editor-wrapper') ||
                       node.querySelector?.('.hr-monaco-editor-wrapper');
              }
              return false;
            });
          }
          return false;
        });

        if (relevantMutations.length > 0) {
          waitForMonaco((editor) => {
            if (editor) {
              observer.disconnect();
            }
          });
        }
      });

      // Start observing
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
      });

      // Initial check
      waitForMonaco((editor) => {
        if (editor) {
          observer.disconnect();
        }
      });
    }
  };

  // Initialize HackerRank bridge if on HackerRank
  if (window.location.hostname.includes('hackerrank.com')) {
    HackerRankBridge.initialize();
  }

  // Export for use in other files
  window.HackerRankBridge = HackerRankBridge;

  // GeeksForGeeks Editor Bridge
  const GeeksForGeeksEditor = {
    getEditor: () => {
      try {
        // Log current DOM state
        console.log('DEBUG - GeeksForGeeks editor state:', {
          aceEditor: !!document.querySelector('.ace_editor'),
          hasAceGlobal: !!window.ace,
          editorContainer: !!document.querySelector('#editor'),
          problemContainer: !!document.querySelector('.problems_problem_content__Xm_eO'),
          codeEditor: !!document.querySelector('[data-cy="code-editor"]')
        });

        // Try to get Ace editor instance
        const editorElement = document.querySelector('.ace_editor');
        if (!editorElement) {
          console.log('No Ace editor element found');
          return null;
        }

        // Try to get global ace instance
        if (!window.ace?.edit) {
          console.log('No global ace instance found');
          return null;
        }

        try {
          const editor = window.ace.edit(editorElement);
          console.log('Found Ace editor instance');
          
          return {
            type: 'ace',
            element: editorElement,
            getValue: () => {
              try {
                return editor.getValue() || '';
              } catch (e) {
                console.error('Error getting editor value:', e);
                return '';
              }
            },
            setValue: (value) => {
              try {
                // Find the Solution class in the new code
                const solutionMatch = value.match(/class\s+Solution[^{]*{([^}]*)}/);
                if (!solutionMatch) {
                  console.error('No Solution class found in new code');
                  return false;
                }

                // Get the current editor content
                const currentCode = editor.getValue();
                
                // Find the Solution class in the current code
                const currentSolutionMatch = currentCode.match(/class\s+Solution[^{]*{([^}]*)}/);
                if (!currentSolutionMatch) {
                  console.error('No Solution class found in current code');
                  return false;
                }

                // Replace just the Solution class implementation
                const newCode = currentCode.replace(
                  /class\s+Solution[^{]*{[^}]*}/,
                  `class Solution:\n${solutionMatch[1]}\n}`
                );

                editor.setValue(newCode, -1);
                editor.clearSelection();
                editor.moveCursorTo(0, 0);
                editor.focus();
                return true;
              } catch (e) {
                console.error('Error setting editor value:', e);
                return false;
              }
            }
          };
        } catch (e) {
          console.error('Error creating Ace editor instance:', e);
          return null;
        }
      } catch (e) {
        console.error('Error in GeeksForGeeks editor bridge:', e);
        return null;
      }
    },

    initialize: () => {
      console.log('Initializing GeeksForGeeks editor bridge');

      // Function to inject Ace editor helper
      const injectAceHelper = () => {
        try {
          const script = document.createElement('script');
          script.textContent = `
            window.addEventListener('message', (event) => {
              if (event.data?.type !== 'GFG_EDITOR') return;
              
              const { action, value } = event.data;
              try {
                const editorElement = document.querySelector('.ace_editor');
                if (!editorElement || !window.ace?.edit) {
                  throw new Error('Editor not found');
                }

                const editor = window.ace.edit(editorElement);
                
                if (action === 'getValue') {
                  window.postMessage({
                    type: 'GFG_EDITOR_RESPONSE',
                    action: 'getValue',
                    value: editor.getValue()
                  }, '*');
                } else if (action === 'setValue') {
                  // Find the Solution class in the new code
                  const solutionMatch = value.match(/class\\s+Solution[^{]*{([^}]*)}/);
                  if (!solutionMatch) {
                    throw new Error('No Solution class found in new code');
                  }

                  // Get the current editor content
                  const currentCode = editor.getValue();
                  
                  // Find the Solution class in the current code
                  const currentSolutionMatch = currentCode.match(/class\\s+Solution[^{]*{([^}]*)}/);
                  if (!currentSolutionMatch) {
                    throw new Error('No Solution class found in current code');
                  }

                  // Replace just the Solution class implementation
                  const newCode = currentCode.replace(
                    /class\\s+Solution[^{]*{[^}]*}/,
                    \`class Solution:\\n\${solutionMatch[1]}\\n}\`
                  );

                  editor.setValue(newCode, -1);
                  editor.clearSelection();
                  editor.moveCursorTo(0, 0);
                  editor.focus();
                  
                  window.postMessage({
                    type: 'GFG_EDITOR_RESPONSE',
                    action: 'SET_VALUE_RESULT',
                    payload: { success: true }
                  }, '*');
                }
              } catch (e) {
                console.error('Error in GFG editor helper:', e);
                window.postMessage({
                  type: 'GFG_EDITOR_RESPONSE',
                  action,
                  error: e.message
                }, '*');
              }
            });

            // Notify that helper is ready
            window.postMessage({
              type: 'GFG_EDITOR_RESPONSE',
              action: 'HELPER_READY'
            }, '*');
          `;
          document.body.appendChild(script);
          return true;
        } catch (e) {
          console.error('Error injecting GFG editor helper:', e);
          return false;
        }
      };

      // Set up mutation observer to watch for editor initialization
      const observer = new MutationObserver((mutations, obs) => {
        const editorElement = document.querySelector('.ace_editor');
        if (editorElement) {
          console.log('Found Ace editor element, injecting helper');
          if (injectAceHelper()) {
            obs.disconnect();
          }
        }
      });

      // Start observing
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
      });

      // Check if editor already exists
      const editorElement = document.querySelector('.ace_editor');
      if (editorElement) {
        console.log('Found existing Ace editor element');
        injectAceHelper();
      }
    }
  };

  // Initialize GeeksForGeeks bridge if on GeeksForGeeks
  if (window.location.hostname.includes('geeksforgeeks.org')) {
    console.log('Initializing GeeksForGeeks bridge');
    GeeksForGeeksEditor.initialize();
    window.GeeksForGeeksEditor = GeeksForGeeksEditor;
  }
})(); 