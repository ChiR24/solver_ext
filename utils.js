// Platform-specific selectors
const platformSelectors = {
  hackerrank: {
    title: [
      // Primary title selectors
      '[data-analytics="ChallengeHeader"]',
      '[data-analytics="ChallengeTitle"]',
      '[data-analytics="challenge-title"]',
      '.challenge-page-header-v2',
      '.challenge-title',
      '.challenge-header',
      // Shadow DOM selectors
      'challenge-page-header',
      'challenge-problem-statement',
      // Backup title selectors
      'h1[class*="title"]',
      'h2[class*="title"]',
      'div[class*="title"]',
      '[class*="challenge-name"]',
      '[class*="problem-title"]',
      // Attribute based selectors
      '[aria-label*="problem"]',
      '[aria-label*="challenge"]',
      '[role="heading"]'
    ],
    description: [
      // Primary description selectors
      '[data-analytics="ProblemStatement"]',
      '.challenge-problem-statement',
      '.problem-statement',
      '.challenge-body-html',
      // Shadow DOM selectors
      'challenge-problem-statement',
      'problem-statement',
      // Backup description selectors
      '[class*="problem-description"]',
      '[class*="challenge-description"]',
      '[class*="statement"]',
      // Content selectors
      '.content__u3I1',
      '.challenge-text',
      '.problem-text',
      // Generic content areas
      'article',
      '.content',
      '.markdown'
    ],
    editor: [
      // Primary editor selectors
      '.monaco-editor',
      '.react-monaco-editor-container',
      '.inputarea',
      // Shadow DOM selectors
      'monaco-editor',
      'code-editor',
      // Backup editor selectors
      '[class*="editor"]',
      '[class*="code-area"]',
      // Iframe editors
      'iframe[title*="editor"]',
      'iframe[class*="editor"]',
      // Generic editors
      '.CodeMirror',
      '.ace_editor',
      'textarea[class*="code"]'
    ],
    template: [
      '.challenge-stub',
      '.starter-code',
      '[data-attr2="starter-code"]',
      'pre[class*="language-"]',
      // Add more template selectors
      '.starter-template',
      '.initial-code',
      '.template-code',
      // Editor-specific selectors
      '.monaco-editor',
      '.ace_editor',
      '.CodeMirror'
    ]
  },
  codewars: {
    title: '.kata-title, .ml4',
    description: '.markdown, .problem-description',
    editor: '.editor, .js-editor'
  },
  geeksforgeeks: {
    title: 'h3.g-lg-h3, [class*="problem-statement"] h3, .problems_header_content h3',
    description: '[class*="problems_problem_content"], [class*="problem-statement"], #problem-statement',
    editor: '#ace_editor, .ace_editor, [class*="code-editor"]',
    template: '[class*="starter-code"], [class*="initial-code"], pre[class*="language-"]'
  },
  atcoder: {
    title: '.h2, span.h2, h2, .contest-title, .header-title, span.header, #task-statement span[class="lang-en"] > h3, #task-statement h3',
    description: '#task-statement span[class="lang-en"], #task-statement .part, #task-statement, [class*="task-statement"], #task-statement div[class="lang-en"]',
    editor: '#select-editor + div, #editor, [class="plain"], pre.prettyprint, div.editor-div, [class^="ace_editor"]',
    template: '[id="default-code"], [id^="default-code-"], #default-code-panel, #code-editor'
  }
};

// Problem type detection
const detectProblemType = () => {
  const url = window.location.href;
  console.log('DEBUG - URL:', url);
  
  // Check for known coding platforms
  const platformPatterns = {
    leetcode: /leetcode\.com\/problems\//,
    hackerrank: /hackerrank\.com\/(challenges|contests|domains)/,
    codewars: /codewars\.com\/(kata|kumite)/,
    hackerearth: /hackerearth\.com\/(problem|challenges)/,
    codeforces: /codeforces\.com\/problemset\/problem/,
    atcoder: /atcoder\.jp\/contests\/[^/]+\/tasks/,
    spoj: /spoj\.com\/problems\//,
    geeksforgeeks: /practice\.geeksforgeeks\.org\/problems/,
    interviewbit: /interviewbit\.com\/problems/
  };

  // Check for platform-specific matches
  for (const [platform, pattern] of Object.entries(platformPatterns)) {
    if (pattern.test(url)) {
      console.log(`DEBUG - Detected ${platform} problem`);
      return platform;
    }
  }
  
  // Check for code editor presence
  const editorSelectors = [
    '.monaco-editor',         // Monaco Editor
    '.ace_editor',           // Ace Editor
    '.CodeMirror',           // CodeMirror
    'textarea.code-editor',  // Generic code textarea
    '[data-mode="code"]',    // Generic code container
    'pre[class*="language-"]', // Prism/Highlight.js
    '.editor-container',     // Generic editor container
    '[class*="code-area"]',  // Generic code area
    '[class*="editor"]'      // Any editor-like element
  ];

  for (const selector of editorSelectors) {
    if (document.querySelector(selector)) {
      console.log('DEBUG - Detected generic code editor:', selector);
      return 'code';
    }
  }

  // Check for MCQ-style content
  if (document.querySelector('input[type="radio"]')) {
    console.log('DEBUG - Detected MCQ problem');
    return 'mcq';
  }
  
  console.log('DEBUG - No supported editor or problem type found');
  return 'unknown';
};

// Extract problem details based on type
const extractProblemDetails = async () => {
  const type = detectProblemType();
  console.log('DEBUG - Extracting problem details for type:', type);
  
  if (type === 'unknown') {
    throw new Error('No code editor found on this page. Please navigate to a page with a code editor or a supported coding platform.');
  }

  switch (type) {
    case 'leetcode':
      return extractLeetCodeProblem();
    case 'geeksforgeeks':
      return extractGeeksForGeeksProblem();
    case 'atcoder':
      return extractAtCoderProblem();
    case 'hackerrank':
    case 'codewars':
    case 'hackerearth':
    case 'codeforces':
    case 'spoj':
    case 'interviewbit':
      return extractPlatformProblem(type);
    case 'code':
      return extractGenericProblem();
    case 'mcq':
      return extractMCQProblem();
    default:
      throw new Error('Unsupported problem type');
  }
};

// Extract problem from specific platform
const extractPlatformProblem = async (platform) => {
  try {
    console.log(`DEBUG - Starting ${platform} problem extraction`);
    
    // Log available selectors
    console.log('DEBUG - Platform selectors:', {
      platform,
      hasSelectors: !!platformSelectors[platform],
      selectors: platformSelectors[platform] || 'Using fallback selectors'
    });

    const selectors = platformSelectors[platform] || {
      title: 'h1, .problem-title, .title',
      description: '.problem-description, .statement, .description',
      editor: '.editor, .code-editor, [class*="editor"]'
    };

    console.log('DEBUG - Using selectors:', {
      title: selectors.title,
      description: selectors.description,
      editor: selectors.editor
    });

    // Log DOM state before extraction
    console.log('DEBUG - Current DOM state:', {
      bodyChildren: document.body.children.length,
      iframes: document.querySelectorAll('iframe').length,
      editorElements: document.querySelectorAll('[class*="editor"]').length,
      titleElements: document.querySelectorAll('h1, [class*="title"]').length,
      descriptionElements: document.querySelectorAll('[class*="description"], [class*="statement"]').length
    });

    // Extract problem details using platform-specific or generic selectors
    console.log('DEBUG - Starting element extraction');
    
    // For HackerRank, try to get title from URL first
    let title = null;
    if (platform === 'hackerrank') {
      const urlParts = window.location.pathname.split('/');
      const problemSlug = urlParts[urlParts.length - 2]; // Get second to last part
      if (problemSlug) {
        title = {
          textContent: problemSlug
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        };
        console.log('DEBUG - Extracted title from URL:', title.textContent);
      }
    }

    // If no title from URL, try DOM selectors
    if (!title) {
      title = await waitForElement(selectors.title);
      console.log('DEBUG - Title search result:', {
        found: !!title,
        text: title?.textContent?.trim(),
        element: title ? {
          tag: title.tagName,
          classes: title.className,
          id: title.id,
          rect: title.getBoundingClientRect()
        } : null
      });
    }

    const description = await waitForElement(selectors.description);
    console.log('DEBUG - Description search result:', {
      found: !!description,
      textLength: description?.textContent?.trim().length,
      element: description ? {
        tag: description.tagName,
        classes: description.className,
        id: description.id,
        rect: description.getBoundingClientRect()
      } : null
    });

    const editor = await waitForElement(selectors.editor);
    console.log('DEBUG - Editor search result:', {
      found: !!editor,
      element: editor ? {
        tag: editor.tagName,
        classes: editor.className,
        id: editor.id,
        rect: editor.getBoundingClientRect()
      } : null
    });

    if (!title || !description || !editor) {
      console.log('DEBUG - Missing elements:', {
        hasTitle: !!title,
        hasDescription: !!description,
        hasEditor: !!editor,
        titleSelector: selectors.title,
        descriptionSelector: selectors.description,
        editorSelector: selectors.editor,
        url: window.location.href,
        readyState: document.readyState,
        loadEvent: document.readyState === 'complete' ? 'fired' : 'pending'
      });
      
      // If we have at least description and editor, proceed with a default title
      if (description && editor) {
        title = { textContent: 'Untitled Problem' };
        console.log('DEBUG - Using default title');
      } else {
        throw new Error('Could not find all required problem elements');
      }
    }

    // Special handling for HackerRank
    if (platform === 'hackerrank') {
      console.log('DEBUG - Starting HackerRank special handling');
      
      // Get full problem description including examples
      const fullDescription = await getHackerRankDescription();
      console.log('DEBUG - HackerRank description extraction:', {
        success: !!fullDescription,
        length: fullDescription?.length,
        preview: fullDescription?.substring(0, 100) + '...'
      });
      
      // Get code template if available
      const template = await getHackerRankTemplate(selectors.template);
      console.log('DEBUG - HackerRank template extraction:', {
        success: !!template,
        length: template?.length,
        preview: template?.substring(0, 100) + '...'
      });

      // Get language
      const language = await getHackerRankLanguage();
      console.log('DEBUG - HackerRank language detection:', {
        detected: language,
        fallback: detectLanguage()
      });

      return {
        type: platform,
        title: title.textContent.trim(),
        description: fullDescription || description.textContent.trim(),
        codeTemplate: template || '',
        language: language || detectLanguage()
      };
    }

    // Special handling for GeeksForGeeks
    if (platform === 'geeksforgeeks') {
      // Get full problem description including examples
      const fullDescription = await getGeeksForGeeksDescription();
      
      // Get code template if available
      const template = await getGeeksForGeeksTemplate();

      return {
        type: platform,
        title: title.textContent.trim(),
        description: fullDescription,
        codeTemplate: template || '',
        language: detectLanguage()
      };
    }

    return {
      type: platform,
      title: title.textContent.trim(),
      description: description.textContent.trim(),
      codeTemplate: await getEditorValue() || '',
      language: detectLanguage()
    };
  } catch (error) {
    console.error(`DEBUG - Error extracting ${platform} problem:`, error);
    console.error('DEBUG - Error stack:', error.stack);
    console.error('DEBUG - DOM state at error:', {
      readyState: document.readyState,
      bodyChildren: document.body.children.length,
      visibleElements: Array.from(document.querySelectorAll('*')).filter(el => isElementVisible(el)).length,
      editorElements: document.querySelectorAll('[class*="editor"]').length,
      iframes: Array.from(document.querySelectorAll('iframe')).map(iframe => ({
        id: iframe.id,
        classes: iframe.className,
        src: iframe.src
      }))
    });
    throw error;
  }
};

// Helper function to get full HackerRank description
const getHackerRankDescription = async () => {
  try {
    // Wait for problem content with multiple possible selectors
    const problemContentSelectors = [
      '.challenge-body-html',
      '[data-analytics="ProblemStatement"]',
      '#problem-statement',
      '.challenge-description',
      '.problem-statement',
      '.challenge-text',
      '[class*="problem-description"]',
      '[class*="challenge-body"]',
      '[class*="problem-statement"]'
    ];

    const problemContent = await waitForElement(problemContentSelectors);
    if (!problemContent) {
      console.debug('Problem content not found with primary selectors');
      return '';
    }

    // Get all text sections with their labels
    const sections = [];
    
    // Helper function to extract text from element
    const extractText = (element) => {
      if (!element) return '';
      // Remove any hidden elements and MathJax styling
      const clone = element.cloneNode(true);
      Array.from(clone.querySelectorAll('[style*="display: none"], [style*="visibility: hidden"], style')).forEach(el => el.remove());
      // Remove MathJax styling
      Array.from(clone.querySelectorAll('.MathJax_SVG, .MathJax_SVG_Display')).forEach(el => {
        const text = el.textContent.trim();
        el.replaceWith(text);
      });
      return clone.textContent.replace(/\s+/g, ' ').trim();
    };

    // Try to find sections by common patterns
    const sectionPatterns = [
      { label: 'Problem Statement', selector: '[data-analytics="ProblemStatement"], .problem-statement, .challenge-statement' },
      { label: 'Input Format', selector: '[data-analytics="InputFormat"], .input-format' },
      { label: 'Output Format', selector: '[data-analytics="OutputFormat"], .output-format' },
      { label: 'Sample Input', selector: '[data-analytics="SampleTestCase"], .challenge-sample-input, .sample-input' },
      { label: 'Sample Output', selector: '[data-analytics="SampleTestCase"], .challenge-sample-output, .sample-output' },
      { label: 'Explanation', selector: '[data-analytics="Explanation"], .explanation' },
      { label: 'Constraints', selector: '[data-analytics="Constraints"], .constraints' },
      { label: 'Note', selector: '[data-analytics="Note"], .note' }
    ];

    // Try to extract each section
    for (const { label, selector } of sectionPatterns) {
      const elements = Array.from(document.querySelectorAll(selector));
      for (const element of elements) {
        const text = extractText(element);
        if (text) {
          sections.push(`${label}:\n${text}`);
          break;
        }
      }
    }

    // If no sections found, try to get all text content
    if (sections.length === 0) {
      console.debug('No sections found, using full content');
      const fullText = extractText(problemContent);
      if (fullText) {
        sections.push(fullText);
      }
    }

    // Combine all sections
    const fullDescription = sections.join('\n\n');
    console.debug('Extracted description length:', fullDescription.length);

    return fullDescription || problemContent.textContent.trim();
  } catch (error) {
    console.error('Error getting HackerRank description:', error);
    return '';
  }
};

// Helper function to get HackerRank code template
const getHackerRankTemplate = async (selectors) => {
  try {
    // First try to get from Monaco editor directly
    if (window.monaco?.editor) {
      const editors = window.monaco.editor.getEditors();
      if (editors.length > 0) {
        const value = editors[0].getValue();
        if (value) {
          console.log('DEBUG - Found template in Monaco editor');
          return value;
        }
      }
    }

    // Try multiple possible template locations with shorter timeout
    const templateSelectors = [
      '.challenge-stub',
      '.starter-code',
      '[data-attr2="starter-code"]',
      'pre[class*="language-"]',
      '.starter-template',
      '.initial-code',
      '.template-code'
    ];

    // Try each selector with a shorter timeout
    for (const selector of templateSelectors) {
      try {
        const element = await waitForElement(selector, 2000); // Reduced from 10000ms to 2000ms
        if (element) {
          const text = element.textContent.trim();
          if (text) {
            console.log('DEBUG - Found template with selector:', selector);
            return text;
          }
        }
      } catch (e) {
        continue; // Skip to next selector if timeout
      }
    }

    // If no template found, return empty string instead of waiting further
    console.log('DEBUG - No template found, using empty string');
    return '';
  } catch (error) {
    console.error('Error getting HackerRank template:', error);
    return '';
  }
};

// Helper function to get HackerRank language
const getHackerRankLanguage = async () => {
  try {
    // Try multiple possible language selectors
    const languageSelectors = [
      '.language-select',
      '[data-attr2="language-select"]',
      '.select-language',
      '.language-dropdown'
    ];

    for (const selector of languageSelectors) {
      const element = await waitForElement(selector);
      if (element) {
        const text = element.textContent.trim();
        if (text) {
          return normalizeLanguage(text);
        }
      }
    }

    // Try getting from URL
    const match = window.location.href.match(/\/([^/]+)\/problem\?/);
    if (match) {
      return normalizeLanguage(match[1]);
    }

    return 'python';  // Default to Python
  } catch (error) {
    console.error('Error getting HackerRank language:', error);
    return 'python';
  }
};

// Helper function to get full GeeksForGeeks description
const getGeeksForGeeksDescription = async () => {
  try {
    // Wait for problem content
    const problemContent = await waitForElement('[class*="problems_problem_content"], #problem-statement');
    if (!problemContent) {
      throw new Error('Problem content not found');
    }

    // Get all text sections
    const sections = [
      // Problem statement
      problemContent.querySelector('[class*="problem-statement"], .problem_statement'),
      // Examples
      ...Array.from(problemContent.querySelectorAll('[class*="example"], .example')),
      // Constraints
      problemContent.querySelector('[class*="constraints"], .constraints'),
      // Expected Time/Space Complexity
      problemContent.querySelector('[class*="complexity"], .complexity')
    ].filter(Boolean);

    // Combine all sections
    const fullDescription = sections.map(section => {
      // Clean up the text
      return section.textContent
        .replace(/\s+/g, ' ')  // Replace multiple spaces with single space
        .trim();
    }).join('\n\n');

    return fullDescription || problemContent.textContent.trim();
  } catch (error) {
    console.error('Error getting GeeksForGeeks description:', error);
    return '';
  }
};

// Helper function to get GeeksForGeeks language
const getGeeksForGeeksLanguage = async () => {
  try {
    // Try to get selected language from editor
    const editor = window.GeeksForGeeksEditor?.getEditor();
    if (editor?.type === 'ace') {
      const session = editor.element.env?.editor?.session;
      if (session) {
        const mode = session.getMode()?.$id;
        if (mode) {
          const lang = mode.split('/').pop();
          console.log('DEBUG - Detected language from Ace editor:', lang);
          return normalizeLanguage(lang);
        }
      }
    }

    // Try language selector buttons
    const languageButtons = Array.from(document.querySelectorAll('[class*="language-button"], [class*="lang-button"]'));
    for (const button of languageButtons) {
      if (button.classList.contains('active') || button.getAttribute('aria-selected') === 'true') {
        const text = button.textContent.trim().toLowerCase();
        console.log('DEBUG - Detected language from button:', text);
        return normalizeLanguage(text);
      }
    }

    // Try to get from URL
    const url = window.location.href;
    const langParam = new URLSearchParams(window.location.search).get('lang');
    if (langParam) {
      console.log('DEBUG - Detected language from URL:', langParam);
      return normalizeLanguage(langParam);
    }

    // Default to Java
    return 'java';
  } catch (error) {
    console.error('DEBUG - Error detecting GeeksForGeeks language:', error);
    return 'java';
  }
};

// Helper function to get GeeksForGeeks template
const getGeeksForGeeksTemplate = async () => {
  try {
    // Try to get from editor first
    const editor = window.GeeksForGeeksEditor?.getEditor();
    if (editor) {
      const value = editor.getValue();
      if (value) {
        console.log('DEBUG - Found template in editor');
        return value;
      }
    }

    // Try template elements
    const templateSelectors = [
      'pre[class*="template"]',
      '[class*="starter-code"]',
      '[class*="initial-code"]',
      '.ace_content'
    ];

    for (const selector of templateSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        const text = element.textContent.trim();
        if (text) {
          console.log('DEBUG - Found template in element:', selector);
          return text;
        }
      }
    }

    return '';
  } catch (error) {
    console.error('DEBUG - Error getting GeeksForGeeks template:', error);
    return '';
  }
};

// Helper function to wait for element with optimized polling
const waitForElement = async (selector, timeout = 2000) => { // Reduced default timeout
  const startTime = Date.now();
  const pollInterval = 100; // Poll every 100ms instead of continuous
  
  let attemptCount = 0;
  while (Date.now() - startTime < timeout) {
    attemptCount++;
    try {
      let element = null;
      
      if (typeof selector === 'string') {
        // Try regular DOM first
        element = document.querySelector(selector);
        
        // If not found and time permits, try shadow DOM
        if (!element && (Date.now() - startTime < timeout * 0.8)) {
          const shadowRoots = Array.from(document.querySelectorAll('*'))
            .filter(el => el.shadowRoot)
            .map(el => el.shadowRoot);
            
          for (const root of shadowRoots) {
            element = root.querySelector(selector);
            if (element) break;
          }
        }
        
        // If still not found, try iframes
        if (!element && (Date.now() - startTime < timeout * 0.6)) {
          const iframes = document.querySelectorAll('iframe');
          for (const iframe of iframes) {
            try {
              // Skip cross-origin iframes
              if (!iframe.contentDocument) continue;
              
              element = iframe.contentDocument.querySelector(selector);
              if (element && isElementVisible(element)) break;
            } catch (e) {
              // Cross-origin access will throw errors, ignore
            }
          }
        }
      } else if (Array.isArray(selector)) {
        // Try each selector until we find a visible element
        for (const s of selector) {
          element = document.querySelector(s);
          if (element && isElementVisible(element)) break;
          
          // If not found, try iframes for each selector
          if (!element || !isElementVisible(element)) {
            const iframes = document.querySelectorAll('iframe');
            for (const iframe of iframes) {
              try {
                if (!iframe.contentDocument) continue;
                element = iframe.contentDocument.querySelector(s);
                if (element && isElementVisible(element)) break;
              } catch (e) {
                // Ignore cross-origin errors
              }
            }
            if (element && isElementVisible(element)) break;
          }
        }
      }
        
      if (element && isElementVisible(element)) {
        return element;
      }

      // Log state less frequently
      if (attemptCount % 5 === 0) {
        console.log('Waiting for element...', {
          selector: Array.isArray(selector) ? 'Multiple selectors' : selector,
          attempts: attemptCount,
          timeElapsed: `${Date.now() - startTime}ms`
        });
      }

      // Use fixed polling interval instead of continuous checking
      await new Promise(resolve => setTimeout(resolve, pollInterval));
    } catch (error) {
      console.error('Error in waitForElement:', error.message);
    }
  }
  
  return null;
};

// Helper function to check if an element is visible
function isElementVisible(element) {
  if (!element) return false;
  
  const style = window.getComputedStyle(element);
  const rect = element.getBoundingClientRect();
  
  const isStyleVisible = style.display !== 'none' && 
                        style.visibility !== 'hidden' && 
                        style.opacity !== '0';
                        
  const hasDimensions = rect.width > 0 && rect.height > 0;
  
  return isStyleVisible && hasDimensions;
}

// Helper function to detect programming language
const detectLanguage = () => {
  // Common language indicators
  const indicators = [
    { selector: '[class*="language-"]', pattern: /language-([\w-]+)/ },
    { selector: '[data-language]', attr: 'data-language' },
    { selector: '[data-mode]', attr: 'data-mode' },
    { selector: '.language-select', text: true },
    { selector: '[class*="lang-select"]', text: true }
  ];

  for (const { selector, pattern, attr, text } of indicators) {
    const elements = document.querySelectorAll(selector);
    for (const element of elements) {
      if (pattern) {
        const match = Array.from(element.classList)
          .find(cls => pattern.test(cls));
        if (match) {
          const [, lang] = match.match(pattern);
          return normalizeLanguage(lang);
        }
      }
      if (attr && element.getAttribute(attr)) {
        return normalizeLanguage(element.getAttribute(attr));
      }
      if (text && element.textContent.trim()) {
        return normalizeLanguage(element.textContent.trim());
      }
    }
  }

  // Default to a common language
  return 'python';
};

// Helper function to normalize language names
const normalizeLanguage = (lang) => {
  const langMap = {
    // Basic mappings
    'py': 'python',
    'python3': 'python',
    'js': 'javascript',
    'ts': 'typescript',
    'cpp': 'cpp',
    'c++': 'cpp',
    'java': 'java',
    
    // AtCoder-specific mappings
    'gcc': 'c',
    'clang': 'c',
    'pypy': 'python',
    'pypy3': 'python',
    'cpython': 'python',
    'csharp': 'csharp',
    'cs': 'csharp',
    'c#': 'csharp',
    'fsharp': 'fsharp',
    'f#': 'fsharp',
    'brainfuck': 'brainfuck',
    'ruby': 'ruby',
    'bash': 'bash',
    'sh': 'bash',
    'shell': 'bash',
    'perl': 'perl',
    'php': 'php',
    'kotlin': 'kotlin',
    'swift': 'swift',
    'rust': 'rust',
    'go': 'go',
    'golang': 'go',
    'haskell': 'haskell',
    'ocaml': 'ocaml',
    'julia': 'julia',
    'crystal': 'crystal',
    'nim': 'nim',
    'd': 'd',
    'pascal': 'pascal',
    'lisp': 'lisp',
    'lua': 'lua',
    'scheme': 'scheme',
    'scala': 'scala',
    'text': 'text'
  };

  // Handle compound names like "C++ 20 (gcc 12.2)"
  const normalized = lang.toLowerCase().trim();
  
  // Check for common prefixes
  if (normalized.startsWith('c++') || normalized.startsWith('cpp')) {
    return 'cpp';
  } else if (normalized.startsWith('python')) {
    return 'python';
  } else if (normalized.startsWith('java ')) {
    return 'java';
  } else if (normalized.startsWith('c#') || normalized.startsWith('c sharp')) {
    return 'csharp';
  } else if (normalized.startsWith('javascript') || normalized.startsWith('node')) {
    return 'javascript';
  }
  
  // Extract just the language name without version or compiler info
  const simplifiedLang = normalized.split(/[\s\(\d]/)[0].replace(/[^a-z0-9+#]/g, '');
  
  return langMap[simplifiedLang] || simplifiedLang;
};

// Extract problem details from any website
const extractGenericProblem = () => {
  try {
    console.log('DEBUG - Starting generic problem extraction');
    
    return new Promise((resolve, reject) => {
      let isResolved = false;

      function startExtraction() {
        if (isResolved) return;

        // Common title selectors
        const titleSelectors = [
          // Headers
          'h1', 'h2', 'h3',
          // Common problem title patterns
          '[class*="title"]',
          '[class*="problem-name"]',
          '[class*="question-title"]',
          '[class*="challenge-title"]',
          '[class*="header"]',
          // Data attributes
          '[data-cy*="title"]',
          '[data-test*="title"]',
          '[data-automation*="title"]'
        ];
        
        // Common description selectors
        const descriptionSelectors = [
          // Content areas
          '[class*="description"]',
          '[class*="problem-statement"]',
          '[class*="question-content"]',
          '[class*="challenge-description"]',
          '[class*="problem-description"]',
          // Data attributes
          '[data-cy*="description"]',
          '[data-test*="description"]',
          '[data-automation*="description"]',
          // Generic content areas
          'article',
          '.content',
          '.markdown',
          '.problem'
        ];

        // Find title
        let problemTitle = null;
        for (const selector of titleSelectors) {
          try {
            const elements = Array.from(document.querySelectorAll(selector));
            console.log('DEBUG - Trying title selector:', selector, 'Found:', elements.length);
            
            // Filter visible elements
            const visibleElements = elements.filter(element => {
              const style = window.getComputedStyle(element);
              const rect = element.getBoundingClientRect();
              return style.display !== 'none' && 
                     style.visibility !== 'hidden' && 
                     style.opacity !== '0' &&
                     rect.width > 0 &&
                     rect.height > 0;
            });

            for (const element of visibleElements) {
              const text = element.textContent.trim();
              if (text && text.length > 3 && text.length < 200) {
                problemTitle = text;
                console.log('DEBUG - Found title:', problemTitle);
                break;
              }
            }
            if (problemTitle) break;
          } catch (error) {
            console.log('DEBUG - Error with title selector:', selector, error);
          }
        }

        // Find description
        let problemDescription = null;
        for (const selector of descriptionSelectors) {
          try {
            const elements = Array.from(document.querySelectorAll(selector));
            console.log('DEBUG - Trying description selector:', selector, 'Found:', elements.length);
            
            // Filter visible elements
            const visibleElements = elements.filter(element => {
              const style = window.getComputedStyle(element);
              const rect = element.getBoundingClientRect();
              return style.display !== 'none' && 
                     style.visibility !== 'hidden' && 
                     style.opacity !== '0' &&
                     rect.width > 0 &&
                     rect.height > 0;
            });

            for (const element of visibleElements) {
              const text = element.textContent.trim();
              // Look for substantial content
              if (text && text.length > 50) {
                problemDescription = text;
                console.log('DEBUG - Found description, length:', text.length);
                break;
              }
            }
            if (problemDescription) break;
          } catch (error) {
            console.log('DEBUG - Error with description selector:', selector, error);
          }
        }

        // Get code template and detect language
        console.log('DEBUG - Looking for code editor');
        let codeTemplate = '';
        let language = '';
        
        // Try to detect language
        const languageIndicators = [
          // Language buttons/selectors
          'button[class*="lang"]',
          '[data-cy*="lang"]',
          '[class*="language-select"]',
          // Code blocks with language classes
          'pre[class*="language-"]',
          'code[class*="language-"]',
          // Editor language indicators
          '.monaco-editor[data-lang]',
          '.ace_editor[data-lang]'
        ];
        
        for (const selector of languageIndicators) {
          try {
            const elements = Array.from(document.querySelectorAll(selector));
            for (const element of elements) {
              // Check class names for language hints
              const classList = Array.from(element.classList);
              const langClass = classList.find(cls => 
                cls.includes('language-') || 
                cls.includes('lang-')
              );
              
              if (langClass) {
                language = langClass.split('-')[1].toLowerCase();
                break;
              }
              
              // Check data attributes
              const dataLang = element.getAttribute('data-lang');
              if (dataLang) {
                language = dataLang.toLowerCase();
                break;
              }
              
              // Check text content
              const text = element.textContent.trim().toLowerCase();
              const commonLangs = ['python', 'python3', 'cpp', 'java', 'javascript', 'typescript'];
              if (commonLangs.includes(text)) {
                language = text;
                break;
              }
            }
            if (language) break;
          } catch (error) {
            console.log('DEBUG - Error detecting language:', error);
          }
        }

        // Try to get code template
        try {
          // Try Monaco editor
          if (window.monaco?.editor) {
            const editor = window.monaco.editor.getEditors()?.[0];
            if (editor) {
              codeTemplate = editor.getValue();
            }
          }
          
          // Try Ace editor
          if (!codeTemplate && window.ace?.edit) {
            const aceEditor = document.querySelector('.ace_editor');
            if (aceEditor) {
              const editor = window.ace.edit(aceEditor);
              codeTemplate = editor.getValue();
            }
          }
          
          // Try CodeMirror
          if (!codeTemplate && window.CodeMirror) {
            const cm = document.querySelector('.CodeMirror')?.CodeMirror;
            if (cm) {
              codeTemplate = cm.getValue();
            }
          }
          
          // Try pre/code elements
          if (!codeTemplate) {
            const codeElement = document.querySelector('pre code, pre.code, code.template');
            if (codeElement) {
              codeTemplate = codeElement.textContent.trim();
            }
          }
          
          // Try textarea
          if (!codeTemplate) {
            const textarea = document.querySelector('textarea.code-editor, textarea[data-mode="code"]');
            if (textarea) {
              codeTemplate = textarea.value.trim();
            }
          }
        } catch (error) {
          console.error('DEBUG - Error getting code template:', error);
        }

        console.log('DEBUG - Extraction attempt results:', {
          hasTitle: !!problemTitle,
          titleLength: problemTitle?.length,
          hasDescription: !!problemDescription,
          descriptionLength: problemDescription?.length,
          hasTemplate: !!codeTemplate,
          language: language || 'unknown'
        });

        // Resolve with whatever we found
        if (problemTitle || problemDescription) {
          isResolved = true;
          observer.disconnect();
          clearTimeout(initialDelay);
          clearTimeout(timeout);
          resolve({
            type: 'code',
            title: problemTitle || 'Untitled Problem',
            description: problemDescription || 'No description available',
            codeTemplate: codeTemplate || '',
            language: language || 'python'  // Default to Python if language not detected
          });
        }
      }

      // Initial delay before first attempt
      const initialDelay = setTimeout(() => {
        startExtraction();
      }, 1000);

      // Set up mutation observer to detect content changes
      const observer = new MutationObserver((mutations) => {
        const relevantMutation = mutations.some(mutation => {
          return mutation.addedNodes.length > 0 || 
                 mutation.type === 'attributes' || 
                 mutation.type === 'characterData';
        });

        if (relevantMutation) {
          console.log('DEBUG - Relevant content changes detected');
          startExtraction();
        }
      });

      // Start observing
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true
      });

      // Set timeout for the entire operation
      const timeout = setTimeout(() => {
        if (!isResolved) {
          observer.disconnect();
          clearTimeout(initialDelay);
          console.error('DEBUG - Extraction timed out');
          reject(new Error('Could not extract problem details. Please make sure the page is fully loaded.'));
        }
      }, 15000);

      // Initial attempt
      startExtraction();
    });
  } catch (error) {
    console.error('DEBUG - Error in extractGenericProblem:', error);
    throw new Error(`Failed to extract problem: ${error.message}`);
  }
};

// Extract LeetCode problem
const extractLeetCodeProblem = () => {
  try {
    console.log('DEBUG - Starting LeetCode problem extraction');
    
    return new Promise((resolve, reject) => {
      let isResolved = false;

      function startExtraction() {
        if (isResolved) return; // Don't continue if already resolved

        // Try multiple possible selectors for title
        const titleSelectors = [
          // Direct element selectors
          'div[class*="title"]',
          'div[data-cy="question-title"]',
          // Specific class combinations
          '.mr-2.text-lg',
          '.css-v3d350',
          // Dynamic patterns
          '[class*="title-wrapper"] div[class*="title"]',
          '[class*="title-container"] div[class*="title"]'
        ];
        
        let problemTitle = null;
        for (const selector of titleSelectors) {
          try {
            const elements = Array.from(document.querySelectorAll(selector));
            console.log('DEBUG - Trying title selector:', selector, 'Found:', elements.length);
            
            // Filter visible elements
            const visibleElements = elements.filter(element => {
              const style = window.getComputedStyle(element);
              return style.display !== 'none' && 
                     style.visibility !== 'hidden' && 
                     style.opacity !== '0' &&
                     element.offsetParent !== null; // Check if element is actually visible
            });

            for (const element of visibleElements) {
              const text = element.textContent.trim();
              // Validate title content
              if (text && 
                  text.length > 3 &&
                  !text.includes('Description') && 
                  !text.includes('Editorial') && 
                  !text.includes('Solutions') &&
                  !text.includes('Submissions') &&
                  !text.includes('Discuss')) {
                problemTitle = text.replace(/\s*-\s*LeetCode$/, '');
                console.log('DEBUG - Found title:', problemTitle);
                break;
              }
            }
            if (problemTitle) break;
          } catch (error) {
            console.log('DEBUG - Error with title selector:', selector, error);
          }
        }

        // Try multiple possible selectors for description
        const descriptionSelectors = [
          // Primary selectors
          'div[data-track-load="description_content"]',
          'div[data-cy="question-content"]',
          // Class-based selectors
          '[class*="_description_"] [class*="content"]',
          '[class*="description-content"]',
          // Specific content areas
          'div[class*="description"] div[class*="content"]',
          '.content__u3I1',
          '.question-content'
        ];
        
        let problemDescription = null;
        for (const selector of descriptionSelectors) {
          try {
            const elements = Array.from(document.querySelectorAll(selector));
            console.log('DEBUG - Trying description selector:', selector, 'Found:', elements.length);
            
            // Filter visible elements
            const visibleElements = elements.filter(element => {
              const style = window.getComputedStyle(element);
              return style.display !== 'none' && 
                     style.visibility !== 'hidden' && 
                     style.opacity !== '0' &&
                     element.offsetParent !== null;
            });

            for (const element of visibleElements) {
              const text = element.textContent.trim();
              // Validate description content
              if (text && 
                  text.length > 50 && 
                  (text.includes('Example') || text.includes('Input') || text.includes('Output') || text.includes('Constraints'))) {
                problemDescription = text;
                console.log('DEBUG - Found description, length:', text.length);
                break;
              }
            }
            if (problemDescription) break;
          } catch (error) {
            console.log('DEBUG - Error with description selector:', selector, error);
          }
        }

        // Get code template and language
        console.log('DEBUG - Looking for code editor');
        const editorElement = document.querySelector('.monaco-editor');
        let codeTemplate = '';
        let language = '';
        
        if (editorElement) {
          console.log('DEBUG - Found editor element');
          try {
            // Try to get language first
            const languageSelectors = [
              'button[class*="lang"]',
              '[data-cy="lang-select"]',
              '.relative.select-none button',
              '[class*="language-btn"]',
              'div[class*="lang-select"]'
            ];
            
            for (const selector of languageSelectors) {
              try {
                const elements = Array.from(document.querySelectorAll(selector));
                console.log('DEBUG - Trying language selector:', selector, 'Found:', elements.length);
                
                // Filter visible elements
                const visibleElements = elements.filter(element => {
                  const style = window.getComputedStyle(element);
                  return style.display !== 'none' && 
                         style.visibility !== 'hidden' &&
                         element.offsetParent !== null;
                });

                for (const element of visibleElements) {
                  const text = element.textContent.trim().toLowerCase();
                  if (text && ['python', 'python3', 'cpp', 'java', 'javascript', 'typescript'].includes(text)) {
                    language = text;
                    console.log('DEBUG - Detected language:', language);
                    break;
                  }
                }
                if (language) break;
              } catch (error) {
                console.log('DEBUG - Error with language selector:', selector, error);
              }
            }

            // Try multiple ways to get the code
            const editor = window.monaco?.editor?.getEditors?.()?.[0];
            if (editor) {
              console.log('DEBUG - Got Monaco editor instance');
              codeTemplate = editor.getValue();
            } else {
              console.log('DEBUG - Trying alternative editor access methods');
              const codeContent = editorElement.querySelector('.view-lines');
              if (codeContent) {
                codeTemplate = codeContent.textContent.trim();
              } else {
                codeTemplate = editorElement.textContent.trim();
              }
            }
          } catch (editorError) {
            console.error('DEBUG - Error accessing editor:', editorError);
          }
        }

        console.log('DEBUG - Extraction attempt results:', {
          hasTitle: !!problemTitle,
          titleLength: problemTitle?.length,
          hasDescription: !!problemDescription,
          descriptionLength: problemDescription?.length,
          hasTemplate: !!codeTemplate,
          language: language || 'cpp'
        });

        if (problemTitle && problemDescription) {
          isResolved = true;
          observer.disconnect();
          clearTimeout(initialDelay);
          clearTimeout(timeout);
          resolve({
            type: 'leetcode',
            title: problemTitle,
            description: problemDescription,
            codeTemplate: codeTemplate || '',
            language: language || 'cpp'
          });
        }
      }

      // Initial delay before first attempt
      const initialDelay = setTimeout(() => {
        startExtraction();
      }, 1000);

      // Set up mutation observer to detect content changes
      const observer = new MutationObserver((mutations) => {
        // Check if any of the mutations are relevant
        const relevantMutation = mutations.some(mutation => {
          return mutation.addedNodes.length > 0 || 
                 mutation.type === 'attributes' || 
                 mutation.type === 'characterData';
        });

        if (relevantMutation) {
          console.log('DEBUG - Relevant content changes detected');
          startExtraction();
        }
      });

      // Start observing
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true
      });

      // Set timeout for the entire operation
      const timeout = setTimeout(() => {
        if (!isResolved) {
          observer.disconnect();
          clearTimeout(initialDelay);
          console.error('DEBUG - Extraction timed out');
          reject(new Error('Could not extract problem details. Please make sure the problem page is fully loaded.'));
        }
      }, 15000); // 15 second timeout

      // Initial attempt
      startExtraction();
    });
  } catch (error) {
    console.error('DEBUG - Error in extractLeetCodeProblem:', error);
    throw new Error(`Failed to extract LeetCode problem: ${error.message}`);
  }
};

// Extract MCQ problem
const extractMCQProblem = () => {
  try {
    // Find the question text - usually it's near the radio buttons
    const radioGroups = document.querySelectorAll('input[type="radio"]');
    if (!radioGroups.length) {
      throw new Error('No radio buttons found');
    }

    const questionElement = findClosestQuestion(radioGroups[0]);
    if (!questionElement) {
      throw new Error('Could not find question text');
    }
    
    // Get all options
    const options = Array.from(radioGroups).map(radio => {
      const label = findAssociatedLabel(radio);
      if (!label) {
        throw new Error('Could not find label for radio button');
      }
      return {
        element: radio,
        text: label.textContent.trim()
      };
    });

    if (!options.length) {
      throw new Error('No options found');
    }

    console.log('Extracted MCQ:', {
      question: questionElement.textContent.trim(),
      optionsCount: options.length
    });

    return {
      type: 'mcq',
      question: questionElement.textContent.trim(),
      options: options
    };
  } catch (error) {
    console.error('Error extracting MCQ:', error);
    throw new Error(`Failed to extract MCQ: ${error.message}`);
  }
};

// Helper function to find the closest question text
const findClosestQuestion = (element) => {
  const possibleQuestionElements = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'div'];
  let current = element.parentElement;
  
  while (current) {
    if (possibleQuestionElements.includes(current.tagName.toLowerCase())) {
      const text = current.textContent.trim();
      if (text.endsWith('?') || text.length > 30) {
        return current;
      }
    }
    current = current.parentElement;
  }
  return null;
};

// Helper function to find associated label for radio button
const findAssociatedLabel = (radio) => {
  // First try to find by for attribute
  if (radio.id) {
    const label = document.querySelector(`label[for="${radio.id}"]`);
    if (label) return label;
  }
  
  // Then try to find parent label
  let current = radio.parentElement;
  while (current) {
    if (current.tagName.toLowerCase() === 'label') {
      return current;
    }
    current = current.parentElement;
  }
  
  return null;
};

// Apply solution based on problem type
const applySolution = async (solution, type) => {
  try {
    switch (type) {
      case 'leetcode':
      case 'hackerrank':  // Added hackerrank case
      case 'atcoder':     // Added atcoder case
      case 'geeksforgeeks':
      case 'codewars':
      case 'hackerearth':
      case 'codeforces': 
      case 'spoj':
      case 'interviewbit':
      case 'code':
        return await applyCodeSolution(solution);
      case 'mcq':
        return await applyMCQSolution(solution);
      default:
        throw new Error(`Unsupported problem type: ${type}`);
    }
  } catch (error) {
    console.error('Error applying solution:', error);
    throw error;
  }
};

// Function to wait for Monaco to be loaded
const waitForMonaco = async (timeout = 30000) => {
  const startTime = Date.now();

  // Debug function to check editor state
  const debugEditorState = () => {
    console.log('DEBUG - Checking editor state:');
    console.log('- window.monaco exists:', !!window.monaco);
    console.log('- window._monaco exists:', !!window._monaco);
    console.log('- monaco.editor exists:', !!window.monaco?.editor);
    console.log('- monaco.editor.getModels():', window.monaco?.editor?.getModels()?.length || 0, 'models');
    console.log('- monaco.editor.getEditors():', window.monaco?.editor?.getEditors()?.length || 0, 'editors');
    
    // Check DOM structure
    const editorFrame = document.querySelector('#editor');
    console.log('- #editor element exists:', !!editorFrame);
    if (editorFrame) {
      console.log('- #editor children:', editorFrame.children.length);
      const monacoDiv = editorFrame.querySelector('.monaco-editor');
      console.log('- .monaco-editor exists:', !!monacoDiv);
      if (monacoDiv) {
        console.log('- .monaco-editor children:', monacoDiv.children.length);
        console.log('- .inputarea exists:', !!monacoDiv.querySelector('.inputarea'));
        console.log('- .monaco-scrollable-element exists:', !!monacoDiv.querySelector('.monaco-scrollable-element'));
      }
    }

    // Check alternative editor containers
    console.log('- [data-track-load="code_editor"] exists:', !!document.querySelector('[data-track-load="code_editor"]'));
    console.log('- .editor-container exists:', !!document.querySelector('.editor-container'));
    console.log('- [class*="code-area"] exists:', !!document.querySelector('[class*="code-area"]'));
  };

  // Function to inject the bridge script
  const injectBridgeScript = () => {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('monaco-bridge.js');
    script.type = 'text/javascript';
    (document.head || document.documentElement).appendChild(script);
  };

  // Function to communicate with the page context
  const setupBridge = () => {
    // Listen for messages from the page script
    window.addEventListener('message', (event) => {
      // Verify the message source
      if (event.source !== window) return;
      if (!event.data || event.data.type !== 'EDITOR_BRIDGE') return;

      const { action, payload } = event.data;
      
      switch (action) {
        case 'EDITOR_STATE':
          if (payload.hasEditor) {
            window._editorState = payload;
          }
          break;
      }
    });

    // Inject the bridge script
    injectBridgeScript();

    // Request editor status
    window.postMessage({ 
      type: 'EDITOR_BRIDGE', 
      action: 'GET_EDITOR_STATE' 
    }, '*');
  };

  // Function to check if editor is ready
  const isEditorReady = (() => {
    let lastCheckTime = 0;
    let lastCheckResult = false;
    const checkInterval = 100; // Minimum time between full checks

    return () => {
      const now = Date.now();
      if (now - lastCheckTime < checkInterval) {
        return lastCheckResult;
      }

      try {
        // Check editor state from bridge
        if (!window._editorState?.hasEditor) {
          lastCheckResult = false;
          return false;
        }

        // Use cached DOM queries
        if (!isEditorReady.domCache) {
          const editorContainers = [
            document.querySelector('#editor'),
            document.querySelector('[data-track-load="code_editor"]'),
            document.querySelector('.editor-container'),
            document.querySelector('[class*="code-area"]'),
            document.querySelector('.ace_editor'),
            document.querySelector('.CodeMirror')
          ];

          isEditorReady.domCache = {
            editorContainer: editorContainers.find(container => container !== null),
            timestamp: now
          };
        }

        // Refresh cache if too old
        if (now - isEditorReady.domCache.timestamp > 5000) {
          isEditorReady.domCache = null;
          return isEditorReady();
        }

        const { editorContainer } = isEditorReady.domCache;
        if (!editorContainer) {
          lastCheckResult = false;
          return false;
        }

        // Check for editor interface based on type
        let editorInterface = null;
        if (window._editorState.editorType === 'monaco') {
          editorInterface = editorContainer.querySelector('.monaco-editor');
          if (!editorInterface?.querySelector('.monaco-scrollable-element')) {
            lastCheckResult = false;
            return false;
          }
        } else if (window._editorState.editorType === 'ace') {
          editorInterface = editorContainer;
          if (!editorInterface.querySelector('.ace_content')) {
            lastCheckResult = false;
            return false;
          }
        } else if (window._editorState.editorType === 'codemirror') {
          editorInterface = editorContainer;
          if (!editorInterface.querySelector('.CodeMirror-code')) {
            lastCheckResult = false;
            return false;
          }
        }

        if (!editorInterface) {
          lastCheckResult = false;
          return false;
        }

        // Check for input element
        const inputElement = editorInterface.querySelector('textarea') || 
                           editorInterface.querySelector('.inputarea') ||
                           editorInterface.querySelector('[contenteditable="true"]');
        if (!inputElement) {
          lastCheckResult = false;
          return false;
        }

        lastCheckResult = true;
        lastCheckTime = now;
        return true;
      } catch (e) {
        console.log('DEBUG - Error checking editor state:', e);
        lastCheckResult = false;
        return false;
      }
    };
  })();

  // Function to dispatch events efficiently
  const dispatchEvents = (textarea, value) => {
    // Create events once
    const events = [
      ['beforeinput', { bubbles: true, cancelable: true, inputType: 'insertText', data: value }],
      ['input', { bubbles: true, cancelable: true, inputType: 'insertText', data: value }],
      ['change', { bubbles: true }],
      ['keydown', { bubbles: true, key: 'Enter' }],
      ['keyup', { bubbles: true, key: 'Enter' }]
    ];

    // Use requestAnimationFrame for smoother event dispatch
    requestAnimationFrame(() => {
      events.forEach(([type, init]) => {
        const event = type.startsWith('key') 
          ? new KeyboardEvent(type, init)
          : type === 'change'
          ? new Event(type, init)
          : new InputEvent(type, init);
        textarea.dispatchEvent(event);
      });
    });
  };

  // Wait for page load
  if (document.readyState !== 'complete') {
    console.log('DEBUG - Waiting for page load...');
    await new Promise(resolve => window.addEventListener('load', resolve));
    console.log('DEBUG - Page load complete');
  }

  // Initial debug
  console.log('DEBUG - Starting editor initialization check');
  debugEditorState();

  // Set up communication bridge
  setupBridge();

  // Retry mechanism
  let retryCount = 0;
  const maxRetries = 3;

  while (retryCount < maxRetries) {
    try {
      // Wait for editor with timeout
      const editorPromise = new Promise((resolve, reject) => {
        let lastDebugTime = Date.now();
        let checkCount = 0;
        const maxChecks = 100; // Prevent infinite checking
        
        const checkEditor = () => {
          checkCount++;
          
          // Check if editor is ready
          if (isEditorReady()) {
            console.log('DEBUG - Editor appears ready, waiting for final initialization');
            setTimeout(() => resolve(true), 1000);
            return;
          }

          // Debug every 5 seconds
          if (Date.now() - lastDebugTime > 5000) {
            console.log('DEBUG - Editor still not ready after', Math.round((Date.now() - startTime)/1000), 'seconds');
            debugEditorState();
            lastDebugTime = Date.now();
          }

          // Check timeout
          if (Date.now() - startTime > timeout || checkCount > maxChecks) {
            reject(new Error('Editor initialization timed out'));
            return;
          }

          // Continue checking
          setTimeout(checkEditor, 300); // Slower check interval to reduce CPU usage
        };

        checkEditor();
      });

      // Wait for editor to be ready
      await editorPromise;
      console.log('DEBUG - Editor initialized successfully');
      return true;

    } catch (error) {
      retryCount++;
      console.log(`DEBUG - Editor initialization attempt ${retryCount} failed:`, error);
      
      if (retryCount < maxRetries) {
        console.log('DEBUG - Retrying editor initialization...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Try to force re-initialization
        setupBridge(); // Re-establish bridge
        try {
          window.postMessage({ 
            type: 'EDITOR_BRIDGE', 
            action: 'REINIT_EDITOR' 
          }, '*');
        } catch (e) {
          console.log('DEBUG - Error during force re-initialization:', e);
        }
      }
    }
  }

  // Final debug before giving up
  console.log('DEBUG - Editor initialization failed after', maxRetries, 'attempts. Final state:');
  debugEditorState();
  
  throw new Error(`Editor failed to load after ${maxRetries} attempts`);
};

// Function to wait for editor to be ready
const waitForEditor = async () => {
  // For HackerRank, use the specialized bridge
  if (window.location.hostname.includes('hackerrank.com')) {
    console.log('Using HackerRank editor bridge');
    const maxRetries = 3; // Reduced from 10 to 3 for faster failure
    const retryDelay = 1000;

    // Ensure the bridge is initialized
    if (!window.HackerRankBridge) {
      console.error('HackerRank bridge not initialized, attempting to initialize');
      try {
        // Try to initialize the bridge if it's not already done
        if (typeof initializeEditorBridges === 'function') {
          initializeEditorBridges();
        } else {
          // If function not available, try to reload the bridge script
          const script = document.createElement('script');
          script.src = chrome.runtime.getURL('editor-bridges.js');
          document.head.appendChild(script);
          
          // Wait for script to load
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      } catch (e) {
        console.error('Failed to initialize editor bridges:', e);
      }
    }

    // Try to initialize direct access if not already done
    if (window.HackerRankBridge && !window.HackerRankBridge.directAccessInitialized) {
      console.log('Initializing HackerRank direct access');
      window.HackerRankBridge.initializeDirectAccess();
      // Wait a bit for initialization
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // First try direct access if available
    if (typeof window.hackerrankDirectSetValue === 'function') {
      console.log('Using direct access function for HackerRank editor');
      return {
        container: document.querySelector('.hr-monaco-editor-wrapper') || document.body,
        textarea: document.querySelector('.inputarea') || document.body,
        setValue: async (value) => {
          try {
            const result = window.hackerrankDirectSetValue(value);
            return result && result.success;
          } catch (e) {
            console.error('Error using direct access function:', e);
            return false;
          }
        },
        getValue: async () => {
          try {
            // Try to use a direct get function if available
            if (typeof window.hackerrankDirectGetValue === 'function') {
              return window.hackerrankDirectGetValue() || '';
            }
            
            // Fall back to message-based access
            return new Promise((resolve, reject) => {
              const requestId = Date.now().toString();
              const timeout = setTimeout(() => reject(new Error('Get value timeout')), 5000);
              
              const handler = (event) => {
                if (event.source !== window) return;
                if (!event.data || event.data.type !== 'HR_DIRECT_RESPONSE') return;
                if (event.data.requestId !== requestId) return;
                if (event.data.action !== 'GET_VALUE') return;
                
                window.removeEventListener('message', handler);
                clearTimeout(timeout);
                
                if (event.data.success) {
                  resolve(event.data.payload.value || '');
                } else {
                  reject(new Error(event.data.error || 'Failed to get value'));
                }
              };
              
              window.addEventListener('message', handler);
              
              // Send message to get value
              window.postMessage({
                type: 'HR_DIRECT_ACCESS',
                action: 'GET_VALUE',
                requestId
              }, '*');
            });
          } catch (e) {
            console.error('Error getting editor value:', e);
            return '';
          }
        }
      };
    }

    let retryCount = 0;
    while (retryCount < maxRetries) {
      // First try to get editor through bridge
      const editor = window.HackerRankBridge?.getEditor();
      if (editor) {
        console.log('Found HackerRank editor:', editor.type);
        return {
          container: editor.element,
          textarea: editor.element,
          setValue: async (value) => {
            try {
              // Try up to 3 times to set the value
              for (let attempt = 0; attempt < 3; attempt++) {
                const success = await editor.setValue(value);
                if (success) {
                  return true;
                }
                console.log(`Editor setValue attempt ${attempt + 1} failed, retrying...`);
                await new Promise(resolve => setTimeout(resolve, 500));
              }
              return false;
            } catch (e) {
              console.error('Error setting editor value:', e);
              return false;
            }
          },
          getValue: async () => {
            try {
              if (typeof editor.getValue === 'function') {
                return await editor.getValue() || '';
              }
              return '';
            } catch (e) {
              console.error('Error getting editor value:', e);
              return '';
            }
          }
        };
      }

      // If bridge failed, try direct DOM manipulation as a last resort
      if (retryCount >= maxRetries - 2) {
        console.log('Attempting direct DOM manipulation as last resort');
        try {
          // Try to find Monaco editor directly
          const editorWrappers = document.querySelectorAll('.hr-monaco-editor-wrapper');
          if (editorWrappers.length > 0) {
            console.log('Found HR Monaco editor wrappers:', editorWrappers.length);
            
            // Try to find Monaco editor in wrapper
            for (const wrapper of editorWrappers) {
              const monacoElement = wrapper.querySelector('.monaco-editor');
              if (!monacoElement) continue;
              
              // Try to access Monaco editor
              if (!window.monaco?.editor) {
                // Try to find Monaco in HackerRank's custom locations
                const hrLocations = [
                  'hackerrank_r_krackjack',
                  '_monaco',
                  'monaco',
                  'MonacoEnvironment',
                  'MonacoEditor'
                ];
                
                for (const loc of hrLocations) {
                  const value = window[loc];
                  if (value?.editor) {
                    console.log(`Found Monaco in ${loc}`);
                    const editors = value.editor.getEditors();
                    if (editors?.length > 0) {
                      const editor = editors[0];
                      const model = editor.getModel();
                      
                      if (model) {
                        console.log('Found Monaco model, will use for direct manipulation');
                        return {
                          container: wrapper,
                          textarea: monacoElement.querySelector('.inputarea') || monacoElement,
                          setValue: async (value) => {
                            try {
                              // Try multiple methods
                              try {
                                // Method 1: pushEditOperations
                                model.pushEditOperations(
                                  [],
                                  [{
                                    range: model.getFullModelRange(),
                                    text: value
                                  }],
                                  () => null
                                );
                              } catch (e) {
                                console.warn('pushEditOperations failed, trying setValue');
                                // Method 2: setValue
                                model.setValue(value);
                              }
                              
                              // Verify
                              const newValue = model.getValue();
                              if (newValue !== value) {
                                console.warn('Value verification failed, trying again');
                                model.setValue(value);
                              }
                              
                              return true;
                            } catch (e) {
                              console.error('Error in direct manipulation:', e);
                              return false;
                            }
                          }
                        };
                      }
                    }
                  }
                }
              } else {
                // Use standard monaco
                const editors = window.monaco.editor.getEditors();
                if (editors?.length > 0) {
                  const editor = editors[0];
                  const model = editor.getModel();
                  
                  if (model) {
                    console.log('Found Monaco editor in wrapper');
                    return {
                      container: wrapper,
                      textarea: monacoElement.querySelector('.inputarea') || monacoElement,
                      setValue: async (value) => {
                        try {
                          model.setValue(value);
                          return true;
                        } catch (e) {
                          console.error('Error setting value:', e);
                          return false;
                        }
                      }
                    };
                  }
                }
              }
            }
          }
          
          // Try one more approach - inject a script directly
          console.log('Trying direct script injection');
          return {
            container: document.body,
            textarea: document.body,
            setValue: async (value) => {
              try {
                // Create a script element to inject code directly
                const script = document.createElement('script');
                script.textContent = `
                  (function() {
                    try {
                      // Try to find Monaco editor
                      const findEditor = () => {
                        // Check HackerRank specific globals
                        const hrLocations = [
                          'hackerrank_r_krackjack',
                          '_monaco',
                          'monaco',
                          'MonacoEnvironment',
                          'MonacoEditor'
                        ];
                        
                        // Try each location
                        for (const loc of hrLocations) {
                          if (window[loc]?.editor) {
                            const editors = window[loc].editor.getEditors?.();
                            if (editors && editors.length > 0) {
                              return { editor: editors[0], location: loc };
                            }
                          }
                        }
                        
                        // Try standard monaco
                        if (window.monaco?.editor) {
                          const editors = window.monaco.editor.getEditors();
                          if (editors && editors.length > 0) {
                            return { editor: editors[0], location: 'monaco' };
                          }
                        }
                        
                        return null;
                      };
                      
                      // Find editor and set value
                      const editorInfo = findEditor();
                      if (editorInfo) {
                        const model = editorInfo.editor.getModel();
                        if (model) {
                          // Set value
                          model.setValue(\`${value.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`);
                          console.log('Direct script injection succeeded using ' + editorInfo.location);
                        }
                      }
                    } catch (e) {
                      console.error('Error in direct script injection:', e);
                    }
                  })();
                `;
                
                // Append script to page
                (document.head || document.documentElement).appendChild(script);
                
                // Remove script after execution
                script.onload = function() {
                  this.remove();
                };
                
                // Wait a bit for the script to execute
                await new Promise(resolve => setTimeout(resolve, 500));
                
                // We can't directly know if it succeeded, so we'll assume it might have worked
                return true;
              } catch (e) {
                console.error('Error with direct script injection:', e);
                return false;
              }
            }
          };
        } catch (e) {
          console.error('Error in direct DOM manipulation:', e);
        }
      }

      console.log(`Waiting for HackerRank editor (attempt ${retryCount + 1}/${maxRetries})`);
      retryCount++;
      await new Promise(resolve => setTimeout(resolve, retryDelay));
    }

    // Last resort: try to find any Monaco editor on the page
    try {
      console.log('Attempting to find any Monaco editor as last resort');
      
      // Look for Monaco editor elements
      const monacoElements = document.querySelectorAll('.monaco-editor');
      if (monacoElements.length > 0) {
        console.log(`Found ${monacoElements.length} Monaco editor elements`);
        
        // Try to find a Monaco editor instance
        if (window.monaco?.editor) {
          const editors = window.monaco.editor.getEditors();
          if (editors?.length > 0) {
            const editor = editors[0];
            console.log('Found Monaco editor instance as fallback');
            
            return {
              container: monacoElements[0],
              textarea: monacoElements[0].querySelector('.inputarea'),
              setValue: async (value) => {
                try {
                  const model = editor.getModel();
                  if (model) {
                    model.setValue(value);
                    return true;
                  }
                  return false;
                } catch (e) {
                  console.error('Error setting editor value:', e);
                  return false;
                }
              },
              getValue: async () => {
                try {
                  const model = editor.getModel();
                  if (model) {
                    return model.getValue() || '';
                  }
                  return '';
                } catch (e) {
                  console.error('Error getting editor value:', e);
                  return '';
                }
              }
            };
          }
        }
      }
    } catch (e) {
      console.error('Error in last resort editor detection:', e);
    }

    throw new Error('Could not find HackerRank editor after ' + maxRetries + ' attempts');
  }

  // For other platforms, use the generic approach
  await waitForMonaco();

  // Get editor frame - try multiple possible containers
  const editorContainers = [
    document.querySelector('#editor'),
    document.querySelector('[data-track-load="code_editor"]'),
    document.querySelector('.editor-container'),
    document.querySelector('[class*="code-area"]'),
    document.querySelector('.ace_editor'),
    document.querySelector('.CodeMirror'),
    document.querySelector('[class*="editor"]'),
    document.querySelector('pre[class*="language-"]'),
    document.querySelector('code[class*="language-"]')
  ];

  const editorContainer = editorContainers.find(container => container !== null);
  if (!editorContainer) {
    throw new Error('Editor container not found');
  }

  // Get editor interface elements based on type
  let editorInterface = null;
  let textarea = null;

  if (window._editorState?.editorType === 'monaco') {
    const monacoContainer = editorContainer.querySelector('.monaco-editor');
    if (!monacoContainer) {
      throw new Error('Monaco container not found');
    }
    textarea = monacoContainer.querySelector('.inputarea');
    editorInterface = monacoContainer;
  } else if (window._editorState?.editorType === 'ace') {
    textarea = editorContainer.querySelector('textarea');
    editorInterface = editorContainer;
  } else if (window._editorState?.editorType === 'codemirror') {
    textarea = editorContainer.querySelector('textarea');
    editorInterface = editorContainer;
  } else {
    // Try to find any textarea or contenteditable element
    textarea = editorContainer.querySelector('textarea') || 
               editorContainer.querySelector('[contenteditable="true"]');
    editorInterface = editorContainer;
  }

  if (!textarea) {
    throw new Error('Editor input element not found');
  }

  // Return editor interface with value setting capability
  return { 
    container: editorInterface, 
    textarea,
    setValue: async (value) => {
      return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error('Set value timeout')), 5000);
        
        const handler = (event) => {
          if (event.source !== window) return;
          if (!event.data || event.data.type !== 'EDITOR_BRIDGE') return;
          if (event.data.action !== 'SET_VALUE_RESULT') return;
          
          window.removeEventListener('message', handler);
          clearTimeout(timeout);
          resolve(event.data.payload.success);
        };
        
        window.addEventListener('message', handler);
        
        window.postMessage({
          type: 'EDITOR_BRIDGE',
          action: 'SET_VALUE',
          payload: value
        }, '*');
      });
    },
    getValue: async () => {
      return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject(new Error('Get value timeout')), 5000);
        
        const handler = (event) => {
          if (event.source !== window) return;
          if (!event.data || event.data.type !== 'EDITOR_BRIDGE') return;
          if (event.data.action !== 'GET_VALUE_RESULT') return;
          
          window.removeEventListener('message', handler);
          clearTimeout(timeout);
          resolve(event.data.payload.value || '');
        };
        
        window.addEventListener('message', handler);
        
        window.postMessage({
          type: 'EDITOR_BRIDGE',
          action: 'GET_VALUE',
        }, '*');
      });
    }
  };
};

// Function to simulate realistic typing
const simulateTyping = async (editor, text) => {
  // Calculate random typing speed between 30-50 words per second
  const getTypingDelay = () => {
    const wordsPerSecond = 30 + Math.random() * 20; // 30-50 wps
    const millisecondsPerChar = 1000 / (wordsPerSecond * 5); // assuming avg word is 5 chars
    return millisecondsPerChar * (0.5 + Math.random()); // add some variation
  };

  // Function to move cursor to position
  const moveCursor = async (lineNumber, column) => {
    editor.setPosition({ lineNumber, column });
    editor.revealPositionInCenter({ lineNumber, column });
    await new Promise(resolve => setTimeout(resolve, 50)); // Small delay for visual feedback
  };

  // Function to type a single character with cursor movement
  const typeChar = async (char, lineNumber, column) => {
    // Move cursor to position
    await moveCursor(lineNumber, column);
    
    // Type the character
    editor.executeEdits('typing', [{
      range: {
        startLineNumber: lineNumber,
        startColumn: column,
        endLineNumber: lineNumber,
        endColumn: column
      },
      text: char,
      forceMoveMarkers: true
    }]);
    await new Promise(resolve => setTimeout(resolve, getTypingDelay()));
  };

  // Clear existing content
  editor.setValue('');
  await new Promise(resolve => setTimeout(resolve, 100));

  // Split text into lines
  const lines = text.split('\n');
  let currentLineNumber = 1;

  // Type each line
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    const line = lines[lineIndex];
    
    // Move to start of line
    await moveCursor(currentLineNumber, 1);

    // Type each character in the line
    for (let charIndex = 0; charIndex < line.length; charIndex++) {
      const char = line[charIndex];
      await typeChar(char, currentLineNumber, charIndex + 1);
    }

    // Add newline if not last line
    if (lineIndex < lines.length - 1) {
      await typeChar('\n', currentLineNumber, line.length + 1);
      currentLineNumber++;
    }

    // Add slightly longer pause between lines
    await new Promise(resolve => setTimeout(resolve, getTypingDelay() * 3));
  }

  // Move cursor to a natural position at the end
  const lastLine = lines.length;
  const lastColumn = lines[lines.length - 1].length + 1;
  await moveCursor(lastLine, lastColumn);
};

// Apply code solution
const applyCodeSolution = async (solution) => {
  try {
    // Clean up the solution
    let cleanSolution = solution;
    if (solution.includes('```')) {
      const matches = solution.match(/```(?:\w+\n)?([\s\S]*?)```/);
      cleanSolution = matches ? matches[1].trim() : solution.trim();
    }

    // Get editor and update content with a universal approach
    const maxRetries = 3;
    const retryDelay = 1000;

    let retryCount = 0;
    let lastError = null;

    // Determine platform type for logging purposes
    const hostname = window.location.hostname;
    const platform = getPlatformType(hostname);

    // For tracking if the solution contains a solution class/function
    let hasSolutionClass = false;
    let solutionClassContent = '';
    
    // Extract solution class/method if present
    if (cleanSolution.includes('class Solution')) {
      hasSolutionClass = true;
      const match = cleanSolution.match(/class\s+Solution[^{]*{([^}]*)}/);
      if (match) {
        solutionClassContent = match[1];
      }
    }

    console.log(`DEBUG - Applying solution for ${platform} platform`);
    
    // Universal approach for all platforms
    while (retryCount < maxRetries) {
      try {
        // Try universal editor detection and handling
        const result = await applyUniversalSolution(cleanSolution, platform, hasSolutionClass, solutionClassContent);
        if (result) {
          console.log(`DEBUG - Successfully applied solution using universal approach`);
          return true;
        }
        
        // If universal approach fails, increment retry count
        retryCount++;
        if (retryCount < maxRetries) {
          console.log(`DEBUG - Retrying editor update (${retryCount}/${maxRetries})`);
          await new Promise(resolve => setTimeout(resolve, retryDelay));
          continue;
        }
      } catch (error) {
        lastError = error;
        console.error(`ERROR - Attempt ${retryCount + 1} failed:`, error);
        
        retryCount++;
        if (retryCount < maxRetries) {
          console.log(`DEBUG - Retrying after error (${retryCount}/${maxRetries}):`, error);
          await new Promise(resolve => setTimeout(resolve, retryDelay));
          continue;
        }
      }
    }

    throw new Error('Failed to update editor content after ' + maxRetries + ' attempts' + 
                   (lastError ? ': ' + lastError.message : ''));
  } catch (error) {
    console.error('Error in applyCodeSolution:', error);
    throw error;
  }
};

// Identify platform type from hostname
const getPlatformType = (hostname) => {
  if (hostname.includes('leetcode.com')) return 'leetcode';
  if (hostname.includes('hackerrank.com')) return 'hackerrank';
  if (hostname.includes('codewars.com')) return 'codewars';
  if (hostname.includes('hackerearth.com')) return 'hackerearth';
  if (hostname.includes('codeforces.com')) return 'codeforces';
  if (hostname.includes('atcoder.jp')) return 'atcoder';
  if (hostname.includes('spoj.com')) return 'spoj';
  if (hostname.includes('geeksforgeeks.org')) return 'geeksforgeeks';
  if (hostname.includes('interviewbit.com')) return 'interviewbit';
  return 'unknown';
};

// Universal solution application function
const applyUniversalSolution = async (solution, platform, hasSolutionClass = false, solutionClassContent = '') => {
  try {
    console.debug('DEBUG - Using universal editor approach');
    
    // Check if we're on GeeksForGeeks
    const hostname = window.location.hostname;
    const isGeeksForGeeks = hostname.includes('geeksforgeeks.org') || 
                           hostname.includes('practice.geeksforgeeks.org') || 
                           hostname.includes('ide.geeksforgeeks.org');
    
    // Special handling for GeeksForGeeks
    if (isGeeksForGeeks) {
      console.debug('DEBUG - Using GeeksForGeeks-specific approach');

      // Try to use the window.setEditorValue function if it exists (set by our editor bridge)
      if (typeof window.setEditorValue === 'function') {
        console.debug('DEBUG - Using window.setEditorValue function');
        const result = window.setEditorValue(solution);
        if (result) {
          console.debug('DEBUG - Successfully set editor value using window.setEditorValue');
          return true;
        }
      }
      
      // If window.setEditorValue is not available or failed, try direct access to Ace editor
      if (window.ace && window.ace.edit) {
        console.debug('DEBUG - Trying direct access to Ace editor');
        
        // Try to find Ace editor instances
        const aceEditorElements = document.querySelectorAll('.ace_editor');
        if (aceEditorElements.length > 0) {
          console.debug(`DEBUG - Found ${aceEditorElements.length} Ace editor elements`);
          
          // Try each editor element
          for (const editorElement of aceEditorElements) {
            try {
              // Try to get the editor instance
              const editorId = editorElement.id;
              if (editorId) {
                const editor = window.ace.edit(editorId);
                if (editor && typeof editor.setValue === 'function') {
                  editor.setValue(solution);
                  editor.clearSelection();
                  console.debug('DEBUG - Successfully set Ace editor value directly');
                  return true;
                }
              } else {
                // Try without ID
                const editor = window.ace.edit(editorElement);
                if (editor && typeof editor.setValue === 'function') {
                  editor.setValue(solution);
                  editor.clearSelection();
                  console.debug('DEBUG - Successfully set Ace editor value directly');
                  return true;
                }
              }
            } catch (e) {
              console.error('Error accessing Ace editor instance:', e);
            }
          }
        }
        
        // Try to find global editor instance
        console.debug('DEBUG - Looking for global editor instance');
        if (window.editor && typeof window.editor.setValue === 'function') {
          try {
            window.editor.setValue(solution);
            window.editor.clearSelection();
            console.debug('DEBUG - Successfully set global editor value');
            return true;
          } catch (e) {
            console.error('Error setting global editor value:', e);
          }
        }
        
        // Try to find smartSolverAceEditor
        if (window.smartSolverAceEditor && typeof window.smartSolverAceEditor.setValue === 'function') {
          try {
            window.smartSolverAceEditor.setValue(solution);
            window.smartSolverAceEditor.clearSelection();
            console.debug('DEBUG - Successfully set smartSolverAceEditor value');
            return true;
          } catch (e) {
            console.error('Error setting smartSolverAceEditor value:', e);
          }
        }
        
        // Last resort: scan window properties for editor-like objects
        try {
          for (const key in window) {
            if (key.includes('editor') && window[key] && typeof window[key].setValue === 'function') {
              window[key].setValue(solution);
              if (typeof window[key].clearSelection === 'function') {
                window[key].clearSelection();
              }
              console.debug(`DEBUG - Successfully set ${key} value`);
              return true;
            }
          }
        } catch (e) {
          console.error('Error scanning window for editor objects:', e);
        }
      }
      
      // If Ace editor approach failed, try to find and use textareas
      console.debug('DEBUG - Trying textarea approach');
      const textareas = document.querySelectorAll('textarea');
      if (textareas.length > 0) {
        console.debug(`DEBUG - Found ${textareas.length} textareas`);
        
        // Try each textarea
        for (const textarea of textareas) {
          try {
            // Check if this looks like a code editor textarea
            const isCodeEditor = 
              textarea.classList.contains('ace_text-input') || 
              textarea.id.includes('code') || 
              textarea.id.includes('editor') ||
              textarea.name.includes('code') || 
              textarea.name.includes('editor') ||
              textarea.getAttribute('data-role') === 'editor';
              
            if (isCodeEditor || textareas.length === 1) {
              // Set value and dispatch events
              textarea.value = solution;
              textarea.dispatchEvent(new Event('input', { bubbles: true }));
              textarea.dispatchEvent(new Event('change', { bubbles: true }));
              console.debug('DEBUG - Successfully set textarea value');
              return true;
            }
          } catch (e) {
            console.error('Error setting textarea value:', e);
          }
        }
      }
      
      // If all direct approaches failed, try script injection as last resort
      console.debug('DEBUG - Trying script injection as last resort');
      const scriptResult = await injectEditorScript(solution);
      if (scriptResult) {
        console.debug('DEBUG - Successfully applied solution using script injection');
        return true;
      }
      
      return false;
    } else {
      // Standard approach for other platforms
      
      // First try template-aware solution for platforms with templates
      if (hasSolutionClass && ['leetcode', 'geeksforgeeks'].includes(platform)) {
        try {
          const success = await applyTemplateSolution(solution, solutionClassContent);
          if (success) {
            console.debug('DEBUG - Successfully applied template-aware solution');
                    return true;
                  }
        } catch (e) {
          console.warn('DEBUG - Template-aware application failed:', e);
          // Fall back to other methods if template approach fails
        }
      }
      
      // Try to find all possible editors in the page
      const editorInfo = await detectEditors();
      if (!editorInfo) {
        console.error('DEBUG - No editors found in the page');
        return false;
      }
      
      // Try each detected editor type
      for (const editor of editorInfo) {
        try {
          const success = await setEditorValue(editor, solution);
          if (success) {
            console.debug(`DEBUG - Successfully set value in ${editor.type} editor`);
            return true;
          }
        } catch (e) {
          console.warn(`DEBUG - Failed to set value in ${editor.type} editor:`, e);
          // Continue to try other editors
        }
      }
    }
  } catch (error) {
    console.error('Error in applyUniversalSolution:', error);
    return false;
  }
};

// Detect all available editors on the page
const detectEditors = async () => {
  const editors = [];
  
  // 1. Try Monaco editor
  try {
    // Check for global Monaco
    if (window.monaco?.editor) {
      const monacoEditors = window.monaco.editor.getEditors();
      if (monacoEditors.length > 0) {
        editors.push({
          type: 'monaco',
          instance: monacoEditors[0],
          element: document.querySelector('.monaco-editor'),
          model: monacoEditors[0].getModel()
        });
      }
    }
    
    // Check for Monaco editor elements even if global variable isn't accessible
    const monacoElements = document.querySelectorAll('.monaco-editor');
    if (monacoElements.length > 0 && editors.findIndex(e => e.type === 'monaco') === -1) {
      editors.push({
        type: 'monaco',
        element: monacoElements[0],
        directAccess: false
      });
    }
  } catch (e) {
    console.warn('DEBUG - Error detecting Monaco editor:', e);
  }
  
  // 2. Try Ace editor
  try {
    const aceElements = document.querySelectorAll('.ace_editor');
    if (aceElements.length > 0 && window.ace?.edit) {
      try {
        const aceEditor = window.ace.edit(aceElements[0]);
        editors.push({
          type: 'ace',
          instance: aceEditor,
          element: aceElements[0]
        });
      } catch (e) {
        // Ace editor exists but not properly initialized
        editors.push({
          type: 'ace',
          element: aceElements[0],
          directAccess: false
        });
      }
    }
  } catch (e) {
    console.warn('DEBUG - Error detecting Ace editor:', e);
  }
  
  // 3. Try CodeMirror
  try {
    const cmElements = document.querySelectorAll('.CodeMirror');
    for (const element of cmElements) {
      if (element.CodeMirror) {
        editors.push({
          type: 'codemirror',
          instance: element.CodeMirror,
          element: element
        });
        break;
      }
    }
  } catch (e) {
    console.warn('DEBUG - Error detecting CodeMirror:', e);
  }
  
  // 4. Try plain textarea or contenteditable elements
  try {
    // Check for textareas
    const textareas = document.querySelectorAll('textarea[class*="editor"], textarea.code, textarea[class*="code"]');
    if (textareas.length > 0) {
      editors.push({
        type: 'textarea',
        element: textareas[0],
        directAccess: true
      });
    }
    
    // Check for contenteditable divs
    const editableDivs = document.querySelectorAll('[contenteditable="true"]');
    if (editableDivs.length > 0) {
      editors.push({
        type: 'contenteditable',
        element: editableDivs[0],
        directAccess: true
      });
    }
    
    // Check for AtCoder specific plain editor
    const plainEditors = document.querySelectorAll('.plain, [class="plain"]');
    if (plainEditors.length > 0) {
      editors.push({
        type: 'plain',
        element: plainEditors[0],
        directAccess: true
      });
    }
    
    // Check for AtCoder prettyprint editor
    const prettyEditors = document.querySelectorAll('pre.prettyprint');
    if (prettyEditors.length > 0) {
      editors.push({
        type: 'prettyprint',
        element: prettyEditors[0],
        directAccess: true
      });
    }
  } catch (e) {
    console.warn('DEBUG - Error detecting plain editors:', e);
  }
  
  // 5. Check for generic code elements
  try {
    if (editors.length === 0) {
      const codeElements = document.querySelectorAll('#editor, [class*="editor"], [class*="code-area"]');
      if (codeElements.length > 0) {
        editors.push({
          type: 'generic',
          element: codeElements[0],
          directAccess: false
        });
      }
    }
  } catch (e) {
    console.warn('DEBUG - Error detecting generic editors:', e);
  }
  
  return editors.length > 0 ? editors : null;
};

// Set value in the detected editor
const setEditorValue = async (editor, value) => {
  try {
    switch (editor.type) {
      case 'monaco':
        if (editor.instance && editor.model) {
          try {
            // Use atomic operation to update content
            editor.model.pushEditOperations(
              [],
              [{
                range: editor.model.getFullModelRange(),
                text: value
              }],
              () => null
            );
            
            // Update cursor and scroll if possible
            if (editor.instance.setPosition && editor.instance.revealLine) {
              editor.instance.setPosition({ lineNumber: 1, column: 1 });
              editor.instance.revealLine(1);
            }
            
            // Force layout refresh
            if (editor.instance.layout) {
              requestAnimationFrame(() => editor.instance.layout());
            }
            
            return true;
          } catch (e) {
            console.warn('Monaco pushEditOperations failed, trying setValue', e);
            editor.model.setValue(value);
            return true;
          }
        } else if (editor.element) {
          // Try to access editor through DOM
          const textArea = editor.element.querySelector('.inputarea, textarea');
          if (textArea) {
            textArea.value = value;
            textArea.dispatchEvent(new Event('input', { bubbles: true }));
            textArea.dispatchEvent(new Event('change', { bubbles: true }));
            return true;
          }
          return false;
        }
        return false;
      
      case 'ace':
        if (editor.instance && typeof editor.instance.setValue === 'function') {
          editor.instance.setValue(value, -1); // -1 positions cursor at start
          editor.instance.clearSelection();
          return true;
        } else if (editor.element && window.ace?.edit) {
          try {
            const aceEditor = window.ace.edit(editor.element);
            aceEditor.setValue(value, -1);
            aceEditor.clearSelection();
            return true;
          } catch (e) {
            console.warn('Error accessing Ace editor directly:', e);
            return false;
          }
        }
        return false;
      
      case 'codemirror':
        if (editor.instance && typeof editor.instance.setValue === 'function') {
          editor.instance.setValue(value);
          editor.instance.focus();
          return true;
        }
        return false;
      
      case 'textarea':
        editor.element.value = value;
        editor.element.dispatchEvent(new Event('input', { bubbles: true }));
        editor.element.dispatchEvent(new Event('change', { bubbles: true }));
        return true;
      
      case 'contenteditable':
        editor.element.textContent = value;
        editor.element.dispatchEvent(new Event('input', { bubbles: true }));
        return true;
      
      case 'plain':
        // For AtCoder's plain editor
        const plainTextarea = editor.element.querySelector('textarea');
        if (plainTextarea) {
          plainTextarea.value = value;
          plainTextarea.dispatchEvent(new Event('input', { bubbles: true }));
          plainTextarea.dispatchEvent(new Event('change', { bubbles: true }));
              } else {
          editor.element.textContent = value;
          editor.element.dispatchEvent(new Event('input', { bubbles: true }));
        }
                  return true;
      
      case 'prettyprint':
        // For AtCoder's prettyprint editor
        const prettyInput = editor.element.querySelector('textarea, input');
        if (prettyInput) {
          prettyInput.value = value;
          prettyInput.dispatchEvent(new Event('input', { bubbles: true }));
          prettyInput.dispatchEvent(new Event('change', { bubbles: true }));
        } else {
          editor.element.textContent = value;
          editor.element.dispatchEvent(new Event('input', { bubbles: true }));
          
          // Try to find and update any hidden inputs that might be associated
          const hiddenInputs = document.querySelectorAll('input[type="hidden"][name*="source"], input[type="hidden"][name*="code"]');
          for (const input of hiddenInputs) {
            input.value = value;
          }
        }
        return true;
      
      case 'generic':
        // Try various approaches with the generic element
        const textarea = editor.element.querySelector('textarea');
        if (textarea) {
          textarea.value = value;
          textarea.dispatchEvent(new Event('input', { bubbles: true }));
          textarea.dispatchEvent(new Event('change', { bubbles: true }));
          return true;
        }
        
        const editableDiv = editor.element.querySelector('[contenteditable="true"]');
        if (editableDiv) {
          editableDiv.textContent = value;
          editableDiv.dispatchEvent(new Event('input', { bubbles: true }));
          return true;
        }
        
        const preTag = editor.element.querySelector('pre');
        if (preTag) {
          preTag.textContent = value;
          return true;
        }
        
        return false;
      
      default:
        return false;
              }
            } catch (e) {
    console.error(`Error setting value in ${editor.type} editor:`, e);
    return false;
  }
};

// Apply template-aware solution (for LeetCode and GeeksForGeeks)
const applyTemplateSolution = async (solution, solutionClassContent) => {
  try {
    // Get current code from any available editor
    const editors = await detectEditors();
    if (!editors) {
      return false;
    }
    
    // Try to get current code
    let currentCode = '';
    for (const editor of editors) {
      try {
        switch (editor.type) {
          case 'monaco':
            if (editor.instance && editor.model) {
              currentCode = editor.model.getValue();
            }
            break;
          case 'ace':
            if (editor.instance && typeof editor.instance.getValue === 'function') {
              currentCode = editor.instance.getValue();
            }
            break;
          case 'codemirror':
            if (editor.instance && typeof editor.instance.getValue === 'function') {
              currentCode = editor.instance.getValue();
            }
            break;
          case 'textarea':
            currentCode = editor.element.value;
            break;
          case 'contenteditable':
            currentCode = editor.element.textContent;
            break;
        }
        
        if (currentCode) break;
      } catch (e) {
        console.warn(`Error getting value from ${editor.type} editor:`, e);
      }
    }
    
    if (!currentCode) {
      return false;
    }
    
    // Check if current code has a Solution class
    if (currentCode.includes('class Solution')) {
      // Find the Solution class in the current code
      let newCode;
      
      // Check if the template uses Python's colon syntax
      if (currentCode.includes('class Solution:')) {
        newCode = currentCode.replace(
          /class\s+Solution\s*:([^#]*)(?:#|$)/,
          `class Solution:${solutionClassContent}\n`
        );
      } else {
        // For other languages like Java, C++
        const currentSolutionMatch = currentCode.match(/class\s+Solution[^{]*{([^}]*)}/);
        if (currentSolutionMatch) {
          newCode = currentCode.replace(
            /class\s+Solution[^{]*{[^}]*}/,
            `class Solution${currentSolutionMatch[0].split('{')[0].split('class Solution')[1]}{${solutionClassContent}}`
          );
        } else {
          return false;
        }
      }
      
      // Apply the modified code
      if (newCode) {
        // Apply to the first viable editor
        for (const editor of editors) {
          try {
            const success = await setEditorValue(editor, newCode);
            if (success) {
              return true;
            }
          } catch (e) {
            console.warn(`Error applying template solution to ${editor.type} editor:`, e);
          }
        }
      }
    }
    
    // For GFG driver code format
    const driverCodePattern = /\/\/\{\s*Driver\s+Code\s+Starts[\s\S]*?\/\/\s*\}\s*Driver\s+Code\s+Ends/i;
    if (driverCodePattern.test(currentCode)) {
      // Extract driver code sections
      const match = currentCode.match(/([\s\S]*class\s+Solution[^{]*{)([^}]*)(}[\s\S]*)/);
      if (match) {
        const [fullMatch, prefix, solutionPlaceholder, suffix] = match;
        
        // Create new code with solution inserted between prefix and suffix
        const newCode = `${prefix}${solutionClassContent}${suffix}`;
        
        // Apply to the first viable editor
        for (const editor of editors) {
          try {
            const success = await setEditorValue(editor, newCode);
            if (success) {
              return true;
            }
          } catch (e) {
            console.warn(`Error applying driver code solution to ${editor.type} editor:`, e);
          }
        }
      }
    }
    
    return false;
  } catch (e) {
    console.error('Error in applyTemplateSolution:', e);
    return false;
  }
};

// Last resort: Script injection approach
const injectEditorScript = async (solution) => {
  try {
    console.debug('DEBUG - Trying script injection as last resort');
    
    // Get the current hostname
    const hostname = window.location.hostname;
    const isGeeksForGeeks = hostname.includes('geeksforgeeks.org');
    
    // Special handling for GeeksForGeeks due to CSP restrictions
    if (isGeeksForGeeks) {
      console.debug('DEBUG - Using GeeksForGeeks-specific script injection method');
      
      // For GeeksForGeeks, we'll use a different approach that works with their CSP
      // Instead of creating and injecting a script element, we'll use the Ace editor directly
      if (window.ace && typeof window.ace.edit === 'function') {
        try {
          // Find all ace editor instances
          const editorElements = document.querySelectorAll('.ace_editor');
          if (editorElements.length > 0) {
            for (const editorElement of editorElements) {
              try {
                const aceEditor = window.ace.edit(editorElement);
                if (aceEditor && typeof aceEditor.setValue === 'function') {
                  console.debug('DEBUG - Setting value directly on Ace editor instance');
                  aceEditor.setValue(solution);
                  aceEditor.clearSelection();
                  return true;
                }
              } catch (aceError) {
                console.debug('DEBUG - Error accessing specific Ace editor:', aceError);
              }
            }
          }
          
          // If we couldn't find the editor through the DOM, try the global instance
        if (window.editor && typeof window.editor.setValue === 'function') {
            console.debug('DEBUG - Setting value on global editor instance');
            window.editor.setValue(solution);
            window.editor.clearSelection();
            return true;
          }
        } catch (aceError) {
          console.debug('DEBUG - Error accessing Ace editor:', aceError);
        }
      }
      
      // If we couldn't use Ace directly, try to find and modify the textarea
      const textareas = document.querySelectorAll('textarea');
      for (const textarea of textareas) {
        if (textarea.classList.contains('inputArea') || 
            textarea.id === 'code' || 
            textarea.getAttribute('data-role') === 'editor') {
          console.debug('DEBUG - Setting value on textarea');
          textarea.value = solution;
          
          // Dispatch events to ensure the change is recognized
          textarea.dispatchEvent(new Event('input', { bubbles: true }));
          textarea.dispatchEvent(new Event('change', { bubbles: true }));
          return true;
        }
      }
    } else {
      // Original script injection method for other sites
      const scriptContent = `
        (function() {
          try {
            const solution = ${JSON.stringify(solution)};
            
            // Try Monaco editor
            if (window.monaco && window.monaco.editor) {
              const editors = window.monaco.editor.getEditors();
              if (editors.length > 0) {
                editors[0].setValue(solution);
                return;
              }
            }
            
            // Try Ace editor
            if (window.ace && window.ace.edit) {
              const aceElements = document.querySelectorAll('.ace_editor');
              if (aceElements.length > 0) {
                const editor = window.ace.edit(aceElements[0]);
                editor.setValue(solution);
                editor.clearSelection();
                return;
              }
            }
            
            // Try CodeMirror
            if (window.CodeMirror) {
              const cmElements = document.querySelectorAll('.CodeMirror');
              if (cmElements.length > 0 && cmElements[0].CodeMirror) {
                cmElements[0].CodeMirror.setValue(solution);
                return;
              }
            }
            
            // Try textarea or contenteditable
            const textareas = document.querySelectorAll('textarea');
            for (const textarea of textareas) {
              if (textarea.classList.contains('inputArea') || textarea.id === 'code') {
                textarea.value = solution;
                textarea.dispatchEvent(new Event('input', { bubbles: true }));
                textarea.dispatchEvent(new Event('change', { bubbles: true }));
                return;
              }
            }
            
            const editableElements = document.querySelectorAll('[contenteditable="true"]');
            if (editableElements.length > 0) {
              editableElements[0].textContent = solution;
              return;
            }
          } catch (e) {
            console.error('Error in injected script:', e);
          }
        })();
      `;
      
      const script = document.createElement('script');
      script.textContent = scriptContent;
      document.head.appendChild(script);
      document.head.removeChild(script);
    }
    
    return true;
  } catch (error) {
    console.error('Error injecting script:', error);
    return false;
  }
};

// Apply MCQ solution
const applyMCQSolution = async (correctAnswer) => {
  try {
    console.log('Applying MCQ solution:', correctAnswer);
    const radioGroups = document.querySelectorAll('input[type="radio"]');
    
    for (const radio of radioGroups) {
      const label = findAssociatedLabel(radio);
      if (label && label.textContent.trim() === correctAnswer.trim()) {
        radio.click();
        console.log('Solution applied successfully');
        return true;
      }
    }
    
    throw new Error('Could not find matching option for solution');
  } catch (error) {
    console.error('Error applying MCQ solution:', error);
    throw error;
  }
};

// Helper function to find elements containing text
const findElementsContainingText = (selector, text) => {
  const elements = document.querySelectorAll(selector);
  return Array.from(elements).filter(el => 
    el.textContent.toLowerCase().includes(text.toLowerCase())
  );
};

// Extract problem from GeeksForGeeks
const extractGeeksForGeeksProblem = async () => {
  try {
    console.log('DEBUG - Starting GeeksForGeeks problem extraction');

    // Get title
    const titleSelectors = [
      'h2.problem-tab__name',
      'h2[class*="problem-name"]',
      '.problems_header_content h2',
      '.problem-statement__title',
      '[class*="problem-name"]',
      'h2'
    ];

    let title = null;
    for (const selector of titleSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        const text = element.textContent.trim();
        if (text && text.length > 3) {
          title = { textContent: text };
          console.log('DEBUG - Found title:', text);
          break;
        }
      }
    }

    // Get description
    const descriptionSelectors = [
      '.problems_problem_content__Xm_eO',
      '[class*="problem-statement"]',
      '#problem-statement',
      '.problem-statement__content'
    ];

    let description = null;
    for (const selector of descriptionSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        const text = element.textContent.trim();
        if (text && text.length > 50) {
          description = { textContent: text };
          console.log('DEBUG - Found description, length:', text.length);
          break;
        }
      }
    }

    // Get language and template
    const language = await getGeeksForGeeksLanguage();
    console.log('DEBUG - Detected language:', language);

    const template = await getGeeksForGeeksTemplate();
    console.log('DEBUG - Found template:', !!template);

    if (!title || !description) {
      throw new Error('Could not find all required problem elements');
    }

    return {
      type: 'geeksforgeeks',
      title: title.textContent,
      description: description.textContent,
      codeTemplate: template || '',
      language: language || 'java'  // Default to Java if language not detected
    };
  } catch (error) {
    console.error('DEBUG - Error extracting GeeksForGeeks problem:', error);
    throw error;
  }
};

// Extract problem from AtCoder
const extractAtCoderProblem = async () => {
  try {
    console.log('DEBUG - Starting AtCoder problem extraction');

    // Get title - AtCoder usually has problem title in different formats
    // Typically found in h3 elements within #task-statement
    const titleSelectors = [
      '#task-statement h3:first-of-type',
      '#task-statement span.lang-en > h3',
      '#task-statement span.lang-ja + span.lang-en > h3',
      '.contest-title',
      '.header-title',
      'h2',
      'span.h2',
      // Sometimes problem code is separate from title
      'h1 > a',
      'title'  // Fallback to page title
    ];

    let title = null;
    for (const selector of titleSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        const text = element.textContent.trim();
        if (text && text.length > 1) {
          title = { textContent: text };
          console.log('DEBUG - Found AtCoder title:', text);
          break;
        }
      }
    }

    // If no title found yet, try to get from URL
    if (!title) {
      const problemCode = location.pathname.split('/').pop();
      if (problemCode) {
        title = { textContent: `Problem ${problemCode.toUpperCase()}` };
        console.log('DEBUG - Using problem code as title:', title.textContent);
      }
    }

    // Get description - AtCoder usually has the description in #task-statement with language spans
    // First try to find English version
    const engStatement = document.querySelector('#task-statement span.lang-en');
    const anyStatement = document.querySelector('#task-statement');
    
    let description = null;
    if (engStatement) {
      // Found English statement
      description = { textContent: engStatement.textContent.trim() };
      console.log('DEBUG - Found English description, length:', description.textContent.length);
    } else if (anyStatement) {
      // Use the whole statement container
      description = { textContent: anyStatement.textContent.trim() };
      console.log('DEBUG - Using full task statement, length:', description.textContent.length);
    }

    // If still no description, look for any content
    if (!description) {
      const fallbackSelectors = [
        '.part',
        '[class*="task-statement"]',
        '.description',
        '[id*="task"]'
      ];
      
      for (const selector of fallbackSelectors) {
        const element = document.querySelector(selector);
        if (element) {
          const text = element.textContent.trim();
          if (text && text.length > 50) {
            description = { textContent: text };
            console.log('DEBUG - Found description using fallback selector:', selector);
            break;
          }
        }
      }
    }

    // Get editor - AtCoder usually has a custom editor or ACE editor
    const editorSelectors = [
      '#select-editor + div',
      '#editor', 
      '[class="plain"]',
      'pre.prettyprint',
      'div.editor-div',
      '[class^="ace_editor"]'
    ];
    
    let editor = null;
    for (const selector of editorSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        editor = element;
        console.log('DEBUG - Found AtCoder editor:', selector);
        break;
      }
    }

    // Get language - AtCoder allows language selection
    const language = await getAtCoderLanguage();
    console.log('DEBUG - Detected language:', language);

    // Get template
    const template = await getAtCoderTemplate();
    console.log('DEBUG - Found template:', !!template);

    // If title or description still not found, try to patch together from available information
    if (!title && !description && editor) {
      // For AtCoder, if we have an editor but no problem details, we can still attempt to solve
      // This might happen due to complex DOM or frames
      const urlParts = window.location.pathname.split('/');
      const problemCode = urlParts[urlParts.length - 1];
      const contestCode = urlParts[urlParts.length - 3] || '';
      
      title = { textContent: `AtCoder ${contestCode.toUpperCase()} - Problem ${problemCode.toUpperCase()}` };
      description = { textContent: `Problem from AtCoder contest ${contestCode}, problem ${problemCode}. Please check the problem statement on the left side of the page.` };
      
      console.log('DEBUG - Using constructed title and description');
    } else if (!title || !description) {
      throw new Error('Could not find problem title or description. Please make sure the problem page is fully loaded.');
    }

    return {
      type: 'atcoder',
      title: title.textContent,
      description: description.textContent,
      codeTemplate: template || '',
      language: language || detectLanguage() || 'cpp'  // Default to C++ if language not detected
    };
  } catch (error) {
    console.error('DEBUG - Error extracting AtCoder problem:', error);
    throw error;
  }
};

// Helper function to get AtCoder language
const getAtCoderLanguage = async () => {
  try {
    // Check language selector
    const languageSelect = document.querySelector('#select-lang') || 
                           document.querySelector('select[name="language_id"]');
    
    if (languageSelect && languageSelect.options && languageSelect.selectedIndex >= 0) {
      const selectedOption = languageSelect.options[languageSelect.selectedIndex];
      if (selectedOption && selectedOption.textContent) {
        const langText = selectedOption.textContent.trim().toLowerCase();
        console.log('DEBUG - Found language from selector:', langText);
        return normalizeLanguage(langText);
      }
    }
    
    // Check if language is shown in the UI somewhere
    const languageIndicators = [
      '#language-selector .active',
      '.language-selector .active',
      '[class*="language"] .active',
      '[class*="lang-select"]'
    ];
    
    for (const selector of languageIndicators) {
      const element = document.querySelector(selector);
      if (element && element.textContent) {
        const langText = element.textContent.trim().toLowerCase();
        if (langText) {
          console.log('DEBUG - Found language from UI:', langText);
          return normalizeLanguage(langText);
        }
      }
    }
    
    // Try to get language from URL
    try {
      const urlMatch = window.location.pathname.match(/\/([^/]+)\.([^/.]+)$/);
      if (urlMatch && urlMatch[2]) {
        const possibleLang = urlMatch[2].toLowerCase();
        console.log('DEBUG - Found possible language from URL:', possibleLang);
        if (['c', 'cpp', 'java', 'py', 'python', 'js', 'javascript'].includes(possibleLang)) {
          return normalizeLanguage(possibleLang);
        }
      }
    } catch (e) {
      console.error('DEBUG - Error extracting language from URL:', e);
    }
    
    // Default language for AtCoder is often C++
    console.log('DEBUG - Using default language: cpp');
    return 'cpp';
  } catch (error) {
    console.error('DEBUG - Error detecting AtCoder language:', error);
    return 'cpp';
  }
};

// Helper function to get AtCoder template
const getAtCoderTemplate = async () => {
  try {
    // First try to get from editor
    const editors = [
      window.ace?.edit && document.querySelector('.ace_editor') && window.ace.edit(document.querySelector('.ace_editor')),
      window.editor, // AtCoder might assign editor to window.editor
      document.querySelector('#editor')?.editor
    ].filter(Boolean);
    
    for (const editor of editors) {
      try {
        if (editor && typeof editor.getValue === 'function') {
          const value = editor.getValue();
          if (value) {
            console.log('DEBUG - Found template in editor');
            return value;
          }
        }
      } catch (e) {
        console.error('DEBUG - Error accessing editor:', e);
      }
    }
    
    // If no editor, try getting from DOM elements
    const templateSelectors = [
      '#default-code',
      '[id^="default-code-"]',
      '#source-code',
      'pre[id*="code"]',
      'pre.prettyprint',
      'pre[class*="editor"]'
    ];
    
    for (const selector of templateSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        const text = element.textContent.trim();
        if (text) {
          console.log('DEBUG - Found template in element:', selector);
          return text;
        }
      }
    }
    
    // If still no template, try looking for hidden input with code
    const hiddenInputs = document.querySelectorAll('input[type="hidden"][name*="code"]');
    for (const input of hiddenInputs) {
      if (input.value) {
        console.log('DEBUG - Found template in hidden input');
        return input.value;
      }
    }
    
    return '';
  } catch (error) {
    console.error('DEBUG - Error getting AtCoder template:', error);
    return '';
  }
};

// AtCoder-specific solution application
const applyAtCoderSolution = async (solution) => {
  try {
    console.log('DEBUG - Applying solution to AtCoder editor');
    
    // Find the editor element
    const editorElement = document.querySelector('#editor');
    if (!editorElement) {
      throw new Error('AtCoder editor element not found');
    }
    
    // Try to access the AtCoder's global editor variable if available
    if (window.editor || window.aceEditor) {
      console.log('DEBUG - Found AtCoder global editor variable');
      try {
        const globalEditor = window.editor || window.aceEditor;
        if (typeof globalEditor.setValue === 'function') {
          globalEditor.setValue(solution);
          return true;
        }
      } catch (e) {
        console.error('Error using global editor variable:', e);
      }
    }
    
    // AtCoder's plain editor specific handling
    const plainEditor = document.querySelector('.plain') || document.querySelector('[class="plain"]');
    if (plainEditor) {
      console.log('DEBUG - Found AtCoder plain editor');
      
      // Try to find the textarea within plain editor
      const plainTextarea = plainEditor.querySelector('textarea');
      if (plainTextarea) {
        console.log('DEBUG - Found textarea in plain editor');
        plainTextarea.value = solution;
        plainTextarea.dispatchEvent(new Event('input', { bubbles: true }));
        plainTextarea.dispatchEvent(new Event('change', { bubbles: true }));
        return true;
      }
      
      // If no textarea, try setting the content directly
      plainEditor.textContent = solution;
      plainEditor.dispatchEvent(new Event('input', { bubbles: true }));
      return true;
    }
    
    // AtCoder's prettyprint editor
    const prettyEditor = document.querySelector('pre.prettyprint');
    if (prettyEditor) {
      console.log('DEBUG - Found AtCoder prettyprint editor');
      
      // Check if it has a textarea or input child
      const prettyInput = prettyEditor.querySelector('textarea, input');
      if (prettyInput) {
        prettyInput.value = solution;
        prettyInput.dispatchEvent(new Event('input', { bubbles: true }));
        prettyInput.dispatchEvent(new Event('change', { bubbles: true }));
        return true;
      }
      
      // If not, try to set content directly
      try {
        prettyEditor.textContent = solution;
        prettyEditor.dispatchEvent(new Event('input', { bubbles: true }));
        
        // Try to find the hidden input that might be associated
        const hiddenInputs = document.querySelectorAll('input[type="hidden"][name*="source"], input[type="hidden"][name*="code"]');
        for (const input of hiddenInputs) {
          input.value = solution;
        }
        
        return true;
      } catch (e) {
        console.error('Error setting prettyprint content:', e);
      }
    }
    
    // Try different approaches to set the content
    
    // Approach 1: Check if it's a textarea
    const textarea = editorElement.querySelector('textarea');
    if (textarea) {
      console.log('DEBUG - Found textarea in AtCoder editor');
      textarea.value = solution;
      
      // Dispatch events to trigger changes
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
      textarea.dispatchEvent(new Event('change', { bubbles: true }));
      return true;
    }
    
    // Approach 2: Check for ACE editor
    if (window.ace && editorElement.classList.contains('ace_editor')) {
      console.log('DEBUG - Found ACE editor');
      try {
        const aceEditor = window.ace.edit(editorElement);
        aceEditor.setValue(solution, -1); // -1 positions cursor at the start
        return true;
      } catch (e) {
        console.error('Error setting ACE editor value:', e);
      }
    }

    // Approach 3: Use the contentEditable approach
    if (editorElement.getAttribute('contenteditable') === 'true') {
      console.log('DEBUG - Found contentEditable editor');
      editorElement.textContent = solution;
      editorElement.dispatchEvent(new Event('input', { bubbles: true }));
      return true;
    }
    
    // Approach 4: Try using CodeMirror if available
    if (window.CodeMirror) {
      console.log('DEBUG - Trying CodeMirror');
      try {
        // Find CodeMirror instance
        for (const element of document.querySelectorAll('.CodeMirror')) {
          if (element.CodeMirror) {
            element.CodeMirror.setValue(solution);
            return true;
          }
        }
      } catch (e) {
        console.error('Error setting CodeMirror value:', e);
      }
    }
    
    // Approach 5: Direct DOM manipulation - insert solution into the editor's child elements
    console.log('DEBUG - Trying direct DOM manipulation');
    
    // For a contenteditable div
    const editableDiv = editorElement.querySelector('[contenteditable="true"]');
    if (editableDiv) {
      editableDiv.textContent = solution;
      editableDiv.dispatchEvent(new Event('input', { bubbles: true }));
      return true;
    }
    
    // If it's a pre tag
    const preTag = editorElement.querySelector('pre');
    if (preTag) {
      preTag.textContent = solution;
      return true;
    }
    
    // Last resort: Try to inject JavaScript to set the value
    console.log('DEBUG - Trying script injection as last resort');
    
    const script = document.createElement('script');
    script.textContent = `
      (function() {
        try {
          // Try to find all possible editors
          const solution = ${JSON.stringify(solution)};
          
          // Try ace editor
          if (window.ace) {
            const aceElements = document.querySelectorAll('.ace_editor');
            for (const element of aceElements) {
              try {
                const editor = ace.edit(element);
                editor.setValue(solution, -1);
                console.log('Script set ace editor value');
              } catch (e) {
                console.error('Error setting ace value:', e);
              }
            }
          }
          
          // Try CodeMirror
          if (window.CodeMirror) {
            const cmElements = document.querySelectorAll('.CodeMirror');
            for (const element of cmElements) {
              try {
                if (element.CodeMirror) {
                  element.CodeMirror.setValue(solution);
                  console.log('Script set CodeMirror value');
                }
              } catch (e) {
                console.error('Error setting CodeMirror value:', e);
              }
            }
          }
          
          // Try setting on plaintext divs
          const editorDiv = document.querySelector('#editor');
          if (editorDiv) {
            const textareas = editorDiv.querySelectorAll('textarea');
            for (const textarea of textareas) {
              textarea.value = solution;
              textarea.dispatchEvent(new Event('input', { bubbles: true }));
              console.log('Script set textarea value');
            }
            
            // Try contenteditable
            const editables = editorDiv.querySelectorAll('[contenteditable="true"]');
            for (const editable of editables) {
              editable.textContent = solution;
              editable.dispatchEvent(new Event('input', { bubbles: true }));
              console.log('Script set contenteditable value');
            }
          }
        } catch (e) {
          console.error('Error in solution script:', e);
        }
      })();
    `;
    
    document.head.appendChild(script);
    script.remove();
    
    return true;
  } catch (error) {
    console.error('Error in applyAtCoderSolution:', error);
    throw error;
  }
};
    