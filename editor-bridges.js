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
    maxInitAttempts: 3, // Reduced from 100 to 3 for faster failure
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
        // Create a script element with src instead of inline script to avoid CSP issues
        const script = document.createElement('script');
        script.src = chrome.runtime.getURL('hackerrank-direct-access.js');
        script.type = 'text/javascript';
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
  const initGeeksForGeeksEditorBridge = () => {
    console.log('Initializing GeeksForGeeks editor bridge');
    
    // Function to find and initialize the Ace editor
    const findAndInitAceEditor = () => {
      try {
        // Look for Ace editor elements
        const aceEditorElements = document.querySelectorAll('.ace_editor');
        if (aceEditorElements.length > 0) {
          console.log(`Found ${aceEditorElements.length} Ace editor elements`);
          
          // Try to get the Ace editor instance
          if (window.ace && window.ace.edit) {
            // Store the editor instance globally for direct access
            window.smartSolverAceEditor = window.ace.edit(aceEditorElements[0]);
            
            // Define a helper method to set the editor value
            window.setEditorValue = (value) => {
              try {
                window.smartSolverAceEditor.setValue(value, 1); // 1 means move cursor to start
                return true;
              } catch (err) {
                console.error('Failed to set Ace editor value:', err);
                return false;
              }
            };
            
            console.log('Successfully initialized Ace editor bridge');
            return true;
          }
        }
        
        console.log('No Ace editor element found');
        return false;
      } catch (err) {
        console.error('Error initializing GeeksForGeeks editor bridge:', err);
        return false;
      }
    };
    
    // If we can't find the Ace editor, try to find a textarea
    const findAndInitTextarea = () => {
      try {
        const textareas = document.querySelectorAll('textarea');
        if (textareas.length > 0) {
          console.log(`Found ${textareas.length} textareas`);
          
          // Store the first textarea globally
          window.smartSolverTextarea = textareas[0];
          
          // Define a helper method to set the textarea value
          window.setEditorValue = (value) => {
            try {
              window.smartSolverTextarea.value = value;
              window.smartSolverTextarea.dispatchEvent(new Event('input', { bubbles: true }));
              window.smartSolverTextarea.dispatchEvent(new Event('change', { bubbles: true }));
              return true;
            } catch (err) {
              console.error('Failed to set textarea value:', err);
              return false;
            }
          };
          
          console.log('Successfully initialized textarea bridge');
          return true;
        }
        
        console.log('No textarea found');
        return false;
      } catch (err) {
        console.error('Error initializing textarea bridge:', err);
        return false;
      }
    };
    
    // Try to initialize the editor bridge
    if (!findAndInitAceEditor()) {
      findAndInitTextarea();
    }
    
    // Set up a MutationObserver to detect when the editor is added to the DOM
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          if (document.querySelector('.ace_editor') && !window.smartSolverAceEditor) {
            if (findAndInitAceEditor()) {
              observer.disconnect();
            }
          } else if (document.querySelector('textarea') && !window.smartSolverTextarea) {
            if (findAndInitTextarea()) {
              observer.disconnect();
            }
          }
        }
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  };

  // Inject a helper script to access the Ace editor directly
  const injectAceHelper = () => {
    try {
      console.log('Attempting to access Ace editor directly to avoid CSP restrictions');
      
      // Instead of injecting a script, directly access the Ace editor
      if (window.ace && window.ace.edit) {
        // Find all ace editor instances on the page
        const aceEditorElements = document.querySelectorAll('.ace_editor');
        if (aceEditorElements.length > 0) {
          console.log(`Found ${aceEditorElements.length} Ace editor elements`);
          
          for (const editorElement of aceEditorElements) {
            try {
              // Try to get the editor instance directly
              const editorId = editorElement.id;
              if (editorId) {
                console.log(`Trying to access editor with ID: ${editorId}`);
                const editor = window.ace.edit(editorId);
                if (editor) {
                  // Store the editor instance globally for easy access
                  window.smartSolverAceEditor = editor;

                  // Define a helper function to set the editor value
                  window.setEditorValue = function(value) {
                    try {
                      if (window.smartSolverAceEditor) {
                        window.smartSolverAceEditor.setValue(value);
                        window.smartSolverAceEditor.clearSelection();
                        console.log('Successfully set editor value using smartSolverAceEditor');
                        return true;
                      }
                      return false;
                    } catch (e) {
                      console.error('Error setting Ace editor value:', e);
                      return false;
                    }
                  };

                  console.log('Successfully set up direct Ace editor access by ID');
                  return;
                }
              } else {
                // Try without ID
                console.log('Trying to access editor without ID');
                const editor = window.ace.edit(editorElement);
                if (editor) {
                  // Store the editor instance globally for easy access
                  window.smartSolverAceEditor = editor;

                  // Define a helper function to set the editor value
                  window.setEditorValue = function(value) {
                    try {
                      if (window.smartSolverAceEditor) {
                        window.smartSolverAceEditor.setValue(value);
                        window.smartSolverAceEditor.clearSelection();
                        console.log('Successfully set editor value using smartSolverAceEditor');
                        return true;
                      }
                      return false;
                    } catch (e) {
                      console.error('Error setting Ace editor value:', e);
                      return false;
                    }
                  };

                  console.log('Successfully set up direct Ace editor access without ID');
                  return;
                }
              }
            } catch (e) {
              console.error('Error accessing Ace editor instance:', e);
            }
          }
        } else {
          console.log('No .ace_editor elements found on the page');
        }

        // If we couldn't find editor by DOM elements, try a more generic approach
        try {
          console.log('Trying to find editor in window object');
          
          // First check for global editor variable
          if (window.editor && typeof window.editor.setValue === 'function') {
            console.log('Found global editor variable');
            window.smartSolverAceEditor = window.editor;

            // Define a helper function to set the editor value
            window.setEditorValue = function(value) {
              try {
                if (window.smartSolverAceEditor) {
                  window.smartSolverAceEditor.setValue(value);
                  window.smartSolverAceEditor.clearSelection();
                  console.log('Successfully set editor value using global editor');
                  return true;
                }
                return false;
              } catch (e) {
                console.error('Error setting editor value:', e);
                return false;
              }
            };

            console.log('Successfully set up direct editor access via global editor');
            return;
          }
          
          // Look for any editor instances in the window object
          for (const key in window) {
            if (key.includes('editor') && window[key] && typeof window[key].setValue === 'function') {
              console.log(`Found editor-like object in window.${key}`);
              window.smartSolverAceEditor = window[key];

              // Define a helper function to set the editor value
              window.setEditorValue = function(value) {
                try {
                  if (window.smartSolverAceEditor) {
                    window.smartSolverAceEditor.setValue(value);
                    window.smartSolverAceEditor.clearSelection();
                    console.log('Successfully set editor value using window object property');
                    return true;
                  }
                  return false;
                } catch (e) {
                  console.error('Error setting editor value:', e);
                  return false;
                }
              };

              console.log('Successfully set up direct editor access via window object');
              return;
            }
          }
          
          console.log('No editor-like objects found in window');
        } catch (e) {
          console.error('Error searching for editor in window object:', e);
        }
      } else {
        console.log('window.ace or window.ace.edit not available');
      }
      
      // If we still couldn't find an Ace editor, try to find and use a textarea
      try {
        console.log('Trying to find textarea elements');
        const textareas = document.querySelectorAll('textarea');
        if (textareas.length > 0) {
          console.log(`Found ${textareas.length} textarea elements`);
          
          // Look for code-related textareas
          for (const textarea of textareas) {
            const isCodeEditor = 
              textarea.classList.contains('ace_text-input') || 
              textarea.id.includes('code') || 
              textarea.id.includes('editor') ||
              textarea.name.includes('code') || 
              textarea.name.includes('editor') ||
              textarea.getAttribute('data-role') === 'editor';
              
            if (isCodeEditor || textareas.length === 1) {
              console.log('Found potential code editor textarea');
              
              // Define a helper function to set the textarea value
              window.setEditorValue = function(value) {
                try {
                  textarea.value = value;
                  textarea.dispatchEvent(new Event('input', { bubbles: true }));
                  textarea.dispatchEvent(new Event('change', { bubbles: true }));
                  console.log('Successfully set textarea value');
                  return true;
                } catch (e) {
                  console.error('Error setting textarea value:', e);
                  return false;
                }
              };
              
              console.log('Successfully set up textarea access');
              return;
            }
          }
        } else {
          console.log('No textarea elements found on the page');
        }
      } catch (e) {
        console.error('Error searching for textareas:', e);
      }

      console.log('Could not set up direct editor access');
    } catch (e) {
      console.error('Error in injectAceHelper:', e);
    }
  };

  // Initialize the GeeksForGeeks editor bridge
  if (window.location.hostname.includes('geeksforgeeks')) {
    initGeeksForGeeksEditorBridge();
    injectAceHelper();
  }
})(); 