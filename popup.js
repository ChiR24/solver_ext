document.addEventListener('DOMContentLoaded', () => {
  const solveButton = document.getElementById('solveButton');
  const toggleAutoButton = document.getElementById('toggleAuto');
  const apiKeyInput = document.getElementById('apiKey');
  const saveApiKeyButton = document.getElementById('saveApiKey');
  const statusSpan = document.getElementById('status');
  
  // Shortcut elements
  const currentShortcutSpan = document.getElementById('currentShortcut');
  const changeShortcutButton = document.getElementById('changeShortcut');
  const shortcutEditor = document.getElementById('shortcutEditor');
  const shortcutCtrlCheckbox = document.getElementById('shortcutCtrl');
  const shortcutAltCheckbox = document.getElementById('shortcutAlt');
  const shortcutShiftCheckbox = document.getElementById('shortcutShift');
  const shortcutKeyInput = document.getElementById('shortcutKey');
  const saveShortcutButton = document.getElementById('saveShortcut');
  const cancelShortcutButton = document.getElementById('cancelShortcut');
  
  // Default shortcut configuration
  const DEFAULT_SHORTCUT = {
    ctrlKey: true,
    altKey: true,
    shiftKey: false,
    key: 's',
    code: 'KeyS'
  };
  
  // Function to format shortcut for display
  function formatShortcut(shortcut) {
    const parts = [];
    if (shortcut.ctrlKey) parts.push('Ctrl');
    if (shortcut.altKey) parts.push('Alt');
    if (shortcut.shiftKey) parts.push('Shift');
    parts.push(shortcut.key.toUpperCase());
    return parts.join('+');
  }
  
  // Load saved settings
  chrome.storage.local.get(['geminiApiKey', 'autoSolve', 'keyboardShortcut'], (result) => {
    if (result.geminiApiKey) {
      apiKeyInput.value = result.geminiApiKey;
    }
    if (result.autoSolve) {
      toggleAutoButton.textContent = 'Auto-Solve: On';
    }
    
    // Display current shortcut
    const shortcut = result.keyboardShortcut || DEFAULT_SHORTCUT;
    currentShortcutSpan.textContent = formatShortcut(shortcut);
    
    // Pre-fill shortcut editor
    shortcutCtrlCheckbox.checked = shortcut.ctrlKey;
    shortcutAltCheckbox.checked = shortcut.altKey;
    shortcutShiftCheckbox.checked = shortcut.shiftKey;
    shortcutKeyInput.value = shortcut.key.toUpperCase();
  });

  // Save API key
  saveApiKeyButton.addEventListener('click', () => {
    const apiKey = apiKeyInput.value.trim();
    if (apiKey) {
      chrome.storage.local.set({ geminiApiKey: apiKey }, () => {
        statusSpan.textContent = 'API Key saved!';
        setTimeout(() => {
          statusSpan.textContent = 'Ready';
        }, 2000);
      });
    }
  });

  // Toggle auto-solve
  toggleAutoButton.addEventListener('click', () => {
    chrome.storage.local.get(['autoSolve'], (result) => {
      const newState = !result.autoSolve;
      chrome.storage.local.set({ autoSolve: newState });
      toggleAutoButton.textContent = `Auto-Solve: ${newState ? 'On' : 'Off'}`;

      // Inject content script if auto-solve is turned on
      if (newState) {
        injectContentScript();
        // Explicitly initialize the editor bridge
        initializeEditorBridge();
      }
    });
  });
  
  // Keyboard shortcut editor visibility toggle
  changeShortcutButton.addEventListener('click', () => {
    shortcutEditor.style.display = 'block';
    changeShortcutButton.style.display = 'none';
  });
  
  // Cancel shortcut editing
  cancelShortcutButton.addEventListener('click', () => {
    shortcutEditor.style.display = 'none';
    changeShortcutButton.style.display = 'inline-block';
  });
  
  // Shortcut key input validation - only allow a single character
  shortcutKeyInput.addEventListener('input', (e) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value.charAt(0).toUpperCase();
    } else {
      e.target.value = e.target.value.toUpperCase();
    }
  });
  
  // Save keyboard shortcut
  saveShortcutButton.addEventListener('click', () => {
    const key = shortcutKeyInput.value.toLowerCase();
    if (!key) {
      statusSpan.textContent = 'Error: Please enter a key';
      setTimeout(() => {
        statusSpan.textContent = 'Ready';
      }, 2000);
      return;
    }
    
    // Avoid dangerous shortcuts
    if (
      (shortcutCtrlCheckbox.checked && !shortcutAltCheckbox.checked && !shortcutShiftCheckbox.checked && ['w', 'r', 't', 'n', 'q'].includes(key)) ||
      (shortcutCtrlCheckbox.checked && shortcutShiftCheckbox.checked && ['w', 't', 'q'].includes(key))
    ) {
      statusSpan.textContent = 'Error: This shortcut may conflict with browser functions';
      setTimeout(() => {
        statusSpan.textContent = 'Ready';
      }, 3000);
      return;
    }
    
    // Get keycode from key
    let code = `Key${key.toUpperCase()}`;
    if (key.length === 1 && key >= '0' && key <= '9') {
      code = `Digit${key}`;
    }
    
    const newShortcut = {
      ctrlKey: shortcutCtrlCheckbox.checked,
      altKey: shortcutAltCheckbox.checked,
      shiftKey: shortcutShiftCheckbox.checked,
      key: key,
      code: code
    };
    
    // Require at least one modifier key
    if (!newShortcut.ctrlKey && !newShortcut.altKey && !newShortcut.shiftKey) {
      statusSpan.textContent = 'Error: Please use at least one modifier key (Ctrl, Alt, Shift)';
      setTimeout(() => {
        statusSpan.textContent = 'Ready';
      }, 3000);
      return;
    }
    
    // Save new shortcut
    chrome.storage.local.set({ keyboardShortcut: newShortcut }, () => {
      currentShortcutSpan.textContent = formatShortcut(newShortcut);
      shortcutEditor.style.display = 'none';
      changeShortcutButton.style.display = 'inline-block';
      statusSpan.textContent = 'Shortcut saved!';
      setTimeout(() => {
        statusSpan.textContent = 'Ready';
      }, 2000);
    });
  });

  // Function to explicitly initialize the editor bridge
  function initializeEditorBridge() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: () => {
            window.postMessage({
              type: 'EDITOR_BRIDGE',
              action: 'INITIALIZE'
            }, '*');
          }
        }).catch(err => console.error('Failed to initialize editor bridge:', err));
      }
    });
  }

  // Manual solve button
  solveButton.addEventListener('click', async () => {
    statusSpan.textContent = 'Solving...';
    
    try {
      // Get the active tab
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      if (!tab) {
        throw new Error('No active tab found');
      }

      // Check if we have access to the page
      if (!await checkPageAccess(tab)) {
        throw new Error('Cannot access this page. Please make sure you are on a supported coding platform.');
      }

      // Inject content script if not already injected
      await injectContentScript();
      
      // Explicitly initialize the editor bridge
      initializeEditorBridge();

      // Send message to content script
      const response = await chrome.tabs.sendMessage(tab.id, { action: 'solve' });
      
      if (response && response.success) {
        statusSpan.textContent = 'Solved!';
      } else {
        statusSpan.textContent = 'Error: ' + (response?.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Error:', error);
      // Convert error to user-friendly message
      let errorMessage = error.message;
      if (errorMessage.includes('Could not establish connection')) {
        errorMessage = 'Please refresh the page and try again';
      } else if (errorMessage.includes('No response received')) {
        errorMessage = 'Failed to get response from AI. Please check your API key';
      } else if (errorMessage.includes('Cannot access this page')) {
        errorMessage = 'Cannot access this page. Please make sure you are on a supported coding platform.';
      }
      statusSpan.textContent = 'Error: ' + errorMessage;
    }

    // Reset status after delay
    setTimeout(() => {
      statusSpan.textContent = 'Ready';
    }, 2000);
  });
});

// Function to check if we have access to the page
async function checkPageAccess(tab) {
  try {
    // First check if the URL matches any of our supported patterns
    if (!isSupportedUrl(tab.url)) {
      return false;
    }

    // Try to execute a simple script to check access
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => true
    });

    return true;
  } catch (error) {
    console.error('Page access check failed:', error);
    return false;
  }
}

// Function to inject content script
async function injectContentScript() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    if (!tab) {
      throw new Error('No active tab found');
    }

    // Check if we have access to the page
    if (!await checkPageAccess(tab)) {
      throw new Error('Cannot access this page');
    }

    // Try to send a test message to check if content script is already injected
    try {
      await chrome.tabs.sendMessage(tab.id, { action: 'ping' });
      console.log('Content script already injected');
      return; // Content script is already injected
    } catch (error) {
      // Content script is not injected yet, proceed with injection
      console.log('Injecting content script...');
    }

    // Inject required scripts in order
    const scripts = [
      'editor-bridges.js',  // Editor bridges first
      'monaco-bridge.js',   // Monaco bridge
      'utils.js',          // Utils with core functionality
      'content.js'         // Main content script
    ];

    for (const script of scripts) {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: [script]
      });
      console.log(`Injected ${script}`);
    }

    // Add any required CSS
    await chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      css: `
        .solver-highlight {
          background-color: rgba(65, 184, 131, 0.1);
          border: 1px solid rgba(65, 184, 131, 0.5);
          border-radius: 3px;
        }
        .solver-error {
          background-color: rgba(255, 99, 71, 0.1);
          border: 1px solid rgba(255, 99, 71, 0.5);
          border-radius: 3px;
        }
      `
    });

    console.log('Content scripts and styles injected successfully');
  } catch (error) {
    console.error('Error injecting content script:', error);
    if (error.message.includes('Cannot access contents of')) {
      throw new Error('Cannot access this page. Please make sure you are on a supported coding platform.');
    }
    throw new Error('Failed to initialize solver: ' + error.message);
  }
}

// Function to check if URL is supported
function isSupportedUrl(url) {
  // Known coding platforms
  const platformPatterns = [
    /leetcode\.com\/problems\//,
    /hackerrank\.com\/(challenges|contests|domains)/,
    /codewars\.com\/(kata|kumite)/,
    /hackerearth\.com\/(problem|challenges)/,
    /codeforces\.com\/problemset\/problem/,
    /atcoder\.jp\/contests\/[^/]+\/tasks/,
    /spoj\.com\/problems\//,
    /practice\.geeksforgeeks\.org\/problems/,
    /interviewbit\.com\/problems/
  ];

  // Check if URL matches any platform pattern
  if (platformPatterns.some(pattern => pattern.test(url))) {
    return true;
  }

  // For other URLs, check if they are accessible
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch (e) {
    return false;
  }
} 