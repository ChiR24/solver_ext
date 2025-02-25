/**
 * GeeksForGeeks Bridge Script
 * This script is designed to work around GeeksForGeeks' Content Security Policy (CSP) restrictions
 * by using direct DOM manipulation instead of script injection.
 */

(function() {
  console.log('[GeeksForGeeks Bridge] Initializing...');
  
  // Only run on GeeksForGeeks domains
  if (!window.location.hostname.includes('geeksforgeeks.org')) {
    console.log('[GeeksForGeeks Bridge] Not on GeeksForGeeks, exiting');
    return;
  }
  
  // Global variables
  let aceEditor = null;
  let editorTextarea = null;
  let initialized = false;
  
  // Function to find and initialize the Ace editor
  function initializeAceEditor() {
    try {
      console.log('[GeeksForGeeks Bridge] Searching for Ace editor...');
      
      // Check if window.ace is available
      if (window.ace && typeof window.ace.edit === 'function') {
        console.log('[GeeksForGeeks Bridge] window.ace is available');
        
        // Find all ace editor elements
        const aceEditorElements = document.querySelectorAll('.ace_editor');
        if (aceEditorElements.length > 0) {
          console.log(`[GeeksForGeeks Bridge] Found ${aceEditorElements.length} Ace editor elements`);
          
          // Try each editor element
          for (const editorElement of aceEditorElements) {
            try {
              // Try with ID first
              const editorId = editorElement.id;
              if (editorId) {
                console.log(`[GeeksForGeeks Bridge] Trying to access editor with ID: ${editorId}`);
                const editor = window.ace.edit(editorId);
                if (editor && typeof editor.setValue === 'function') {
                  aceEditor = editor;
                  console.log('[GeeksForGeeks Bridge] Successfully initialized Ace editor by ID');
                  setupGlobalHelpers();
                  return true;
                }
              }
              
              // Try without ID
              console.log('[GeeksForGeeks Bridge] Trying to access editor without ID');
              const editor = window.ace.edit(editorElement);
              if (editor && typeof editor.setValue === 'function') {
                aceEditor = editor;
                console.log('[GeeksForGeeks Bridge] Successfully initialized Ace editor without ID');
                setupGlobalHelpers();
                return true;
              }
            } catch (e) {
              console.error('[GeeksForGeeks Bridge] Error accessing specific Ace editor:', e);
            }
          }
        }
        
        // Try to find global editor instance
        if (window.editor && typeof window.editor.setValue === 'function') {
          console.log('[GeeksForGeeks Bridge] Found global editor variable');
          aceEditor = window.editor;
          console.log('[GeeksForGeeks Bridge] Successfully initialized global editor');
          setupGlobalHelpers();
          return true;
        }
        
        // Scan window properties for editor-like objects
        for (const key in window) {
          if (key.includes('editor') && window[key] && typeof window[key].setValue === 'function') {
            console.log(`[GeeksForGeeks Bridge] Found editor-like object in window.${key}`);
            aceEditor = window[key];
            console.log('[GeeksForGeeks Bridge] Successfully initialized editor from window object');
            setupGlobalHelpers();
            return true;
          }
        }
      }
      
      console.log('[GeeksForGeeks Bridge] Could not find Ace editor');
      return false;
    } catch (e) {
      console.error('[GeeksForGeeks Bridge] Error initializing Ace editor:', e);
      return false;
    }
  }
  
  // Function to find and initialize a textarea if Ace editor is not available
  function initializeTextarea() {
    try {
      console.log('[GeeksForGeeks Bridge] Searching for textarea elements...');
      
      const textareas = document.querySelectorAll('textarea');
      if (textareas.length > 0) {
        console.log(`[GeeksForGeeks Bridge] Found ${textareas.length} textarea elements`);
        
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
            console.log('[GeeksForGeeks Bridge] Found potential code editor textarea');
            editorTextarea = textarea;
            console.log('[GeeksForGeeks Bridge] Successfully initialized textarea');
            setupGlobalHelpers();
            return true;
          }
        }
      }
      
      console.log('[GeeksForGeeks Bridge] Could not find suitable textarea');
      return false;
    } catch (e) {
      console.error('[GeeksForGeeks Bridge] Error initializing textarea:', e);
      return false;
    }
  }
  
  // Function to set up global helper methods
  function setupGlobalHelpers() {
    // Create a global function to set the editor value
    window.setEditorValue = function(value) {
      try {
        console.log('[GeeksForGeeks Bridge] Attempting to set editor value');
        
        // Try Ace editor first
        if (aceEditor) {
          aceEditor.setValue(value);
          aceEditor.clearSelection();
          console.log('[GeeksForGeeks Bridge] Successfully set Ace editor value');
          
          // Dispatch a custom event to notify the extension
          window.dispatchEvent(new CustomEvent('editorValueSet', { detail: { success: true } }));
          return true;
        }
        
        // Try textarea if Ace editor is not available
        if (editorTextarea) {
          editorTextarea.value = value;
          editorTextarea.dispatchEvent(new Event('input', { bubbles: true }));
          editorTextarea.dispatchEvent(new Event('change', { bubbles: true }));
          console.log('[GeeksForGeeks Bridge] Successfully set textarea value');
          
          // Dispatch a custom event to notify the extension
          window.dispatchEvent(new CustomEvent('editorValueSet', { detail: { success: true } }));
          return true;
        }
        
        console.log('[GeeksForGeeks Bridge] No editor available to set value');
        window.dispatchEvent(new CustomEvent('editorValueSet', { detail: { success: false, error: 'No editor available' } }));
        return false;
      } catch (e) {
        console.error('[GeeksForGeeks Bridge] Error setting editor value:', e);
        window.dispatchEvent(new CustomEvent('editorValueSet', { detail: { success: false, error: e.message } }));
        return false;
      }
    };
    
    // Store a reference to the editor globally
    window.smartSolverAceEditor = aceEditor;
    
    // Mark as initialized
    initialized = true;
    console.log('[GeeksForGeeks Bridge] Global helpers set up successfully');
    
    // Dispatch an event to notify that the bridge is ready
    window.dispatchEvent(new CustomEvent('geeksforgeeksBridgeReady', { detail: { success: true } }));
  }
  
  // Function to initialize the bridge
  function initialize() {
    if (initialized) {
      console.log('[GeeksForGeeks Bridge] Already initialized');
      return;
    }
    
    console.log('[GeeksForGeeks Bridge] Starting initialization');
    
    // Try to initialize Ace editor first
    if (initializeAceEditor()) {
      console.log('[GeeksForGeeks Bridge] Initialization successful with Ace editor');
      return;
    }
    
    // If Ace editor initialization fails, try textarea
    if (initializeTextarea()) {
      console.log('[GeeksForGeeks Bridge] Initialization successful with textarea');
      return;
    }
    
    console.log('[GeeksForGeeks Bridge] Could not initialize any editor');
    
    // Set up a MutationObserver to detect when the editor is added to the DOM
    const observer = new MutationObserver(function(mutations) {
      for (const mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Check if any of the added nodes are or contain an editor
          for (const node of mutation.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
              // Check if this is an ace editor
              if (node.classList && node.classList.contains('ace_editor')) {
                console.log('[GeeksForGeeks Bridge] Ace editor added to DOM, reinitializing');
                observer.disconnect();
                setTimeout(initialize, 100);
                return;
              }
              
              // Check if it contains an ace editor
              const aceEditors = node.querySelectorAll('.ace_editor');
              if (aceEditors.length > 0) {
                console.log('[GeeksForGeeks Bridge] Element containing Ace editor added to DOM, reinitializing');
                observer.disconnect();
                setTimeout(initialize, 100);
                return;
              }
              
              // Check for textareas
              const textareas = node.querySelectorAll('textarea');
              if (textareas.length > 0) {
                console.log('[GeeksForGeeks Bridge] Element containing textarea added to DOM, reinitializing');
                observer.disconnect();
                setTimeout(initialize, 100);
                return;
              }
            }
          }
        }
      }
    });
    
    // Start observing
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
    
    console.log('[GeeksForGeeks Bridge] Set up MutationObserver to detect editor');
  }
  
  // Listen for messages from the extension
  window.addEventListener('message', function(event) {
    if (event.source !== window) return;
    if (!event.data) return;
    
    if (event.data.type === 'GEEKSFORGEEKS_BRIDGE' && event.data.action === 'INITIALIZE') {
      console.log('[GeeksForGeeks Bridge] Received initialization message');
      initialize();
    }
    
    if (event.data.type === 'GEEKSFORGEEKS_BRIDGE' && event.data.action === 'SET_VALUE') {
      console.log('[GeeksForGeeks Bridge] Received set value message');
      if (!initialized) {
        initialize();
      }
      
      if (window.setEditorValue) {
        window.setEditorValue(event.data.value);
      } else {
        console.error('[GeeksForGeeks Bridge] setEditorValue function not available');
        window.dispatchEvent(new CustomEvent('editorValueSet', { detail: { success: false, error: 'setEditorValue function not available' } }));
      }
    }
  });
  
  // Initialize immediately
  initialize();
  
  console.log('[GeeksForGeeks Bridge] Initialization complete');
})(); 