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
    checkInterval: 500,
    debugHistory: [], // Track debug history
    maxDebugHistory: 20, // Reduced from 50 to 20 to keep only recent issues

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

    getEditor: () => {
      try {
        const now = Date.now();
        if (now - HackerRankBridge.lastEditorCheck < HackerRankBridge.checkInterval && HackerRankBridge.editorInstance) {
          return HackerRankBridge.editorInstance;
        }
        HackerRankBridge.lastEditorCheck = now;

        // First check for HackerRank's specific editor container
        const editorContainer = document.querySelector('.hr-monaco-editor-wrapper');
        if (!editorContainer) {
          HackerRankBridge.logDebug('No editor container found', {}, true);
          return null;
        }

        // Track critical state changes only
        const currentState = {
          hasMonaco: !!window.monaco,
          hasEditor: !!window.monaco?.editor,
          editorModels: window.monaco?.editor?.getModels()?.length || 0
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

        // Try to find Monaco in HackerRank's specific locations
        const findMonacoInHackerRank = () => {
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
                HackerRankBridge.logDebug(`Found Monaco in ${loc}`);
                return value;
              }
            } catch (e) {
              continue;
            }
          }

          if (editorContainer) {
            const editorInstance = editorContainer.querySelector('.monaco-editor');
            if (editorInstance && window.monaco) {
              HackerRankBridge.logDebug('Found Monaco in editor wrapper');
              return window.monaco;
            }
          }

          return null;
        };

        // Try to get Monaco from HackerRank locations first
        if (!window.monaco) {
          const monaco = findMonacoInHackerRank();
          if (monaco) {
            window.monaco = monaco;
          }
        }

        // Try to get Monaco editor directly
        if (window.monaco?.editor) {
          const editors = window.monaco.editor.getEditors();
          if (editors?.length === 0) {
            HackerRankBridge.logDebug('No Monaco editors found', {}, true);
          }

          if (editors?.length > 0) {
            const editor = editors[0];
            const model = editor.getModel();
            if (model) {
              HackerRankBridge.logDebug('Created editor instance');

              HackerRankBridge.editorInstance = {
                type: 'monaco',
                editor: editor,
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
                    editor.focus();
                    editor.layout();

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
                    editor.setPosition({ lineNumber: 1, column: 1 });
                    editor.revealLine(1);

                    // Force layout refresh
                    requestAnimationFrame(() => editor.layout());

                    // Verify the change
                    const newValue = model.getValue();
                    const success = newValue === value;
                    if (!success) {
                      HackerRankBridge.logDebug('Failed to update editor value', {
                        expectedLength: value.length,
                        actualLength: newValue.length
                      }, true);
                    }
                    return success;
                  } catch (e) {
                    HackerRankBridge.logDebug('Error setting editor value', {
                      error: e.message
                    }, true);
                    return false;
                  }
                }
              };
              return HackerRankBridge.editorInstance;
            }
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
      // Function to wait for Monaco
      const waitForMonaco = (callback, maxAttempts = 50) => {
        let attempts = 0;
        const check = () => {
          attempts++;
          const editor = HackerRankBridge.getEditor();
          if (editor) {
            callback(editor);
          } else if (attempts < maxAttempts) {
            setTimeout(check, 100);
          } else {
            HackerRankBridge.logDebug('Failed to initialize editor after max attempts', {
              attempts
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