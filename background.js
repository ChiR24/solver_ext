// Handle messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getSolution') {
    getSolution(request.problem).then(sendResponse);
    return true; // Required for async response
  }
});

// Simple in-memory cache for solutions
const solutionCache = new Map();
const CACHE_EXPIRY = 30 * 60 * 1000; // 30 minutes in milliseconds

// Get solution using Gemini API
async function getSolution(problem) {
  try {
    // Create a cache key based on problem details
    const cacheKey = `${problem.type}:${problem.title}:${problem.language || 'default'}`;
    
    // Check cache first
    const cachedSolution = solutionCache.get(cacheKey);
    if (cachedSolution && (Date.now() - cachedSolution.timestamp < CACHE_EXPIRY)) {
      console.log('Using cached solution');
      return cachedSolution.data;
    }
    
    const apiKey = await getApiKey();
    if (!apiKey) {
      throw new Error('API key not found. Please enter your Gemini API key in the extension settings.');
    }

    const prompt = generatePrompt(problem);
    const response = await callGeminiApi(prompt, apiKey);
    const processedResponse = processResponse(response, problem.type);
    
    // Cache the result
    solutionCache.set(cacheKey, {
      timestamp: Date.now(),
      data: processedResponse
    });
    
    return processedResponse;
  } catch (error) {
    console.error('Error in getSolution:', error);
    return { error: error.message };
  }
}

// Get API key from storage
async function getApiKey() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['geminiApiKey'], (result) => {
      resolve(result.geminiApiKey);
    });
  });
}

// Generate appropriate prompt based on problem type
function generatePrompt(problem) {
  // Common prompt structure for coding problems
  const codingPrompt = `Solve this ${problem.type} problem in ${problem.language || 'Python'}:

Title: ${problem.title}
Description: ${problem.description}

${problem.codeTemplate ? `Please provide a complete, efficient solution that matches this template:
${problem.codeTemplate}` : 'Please provide a complete, efficient solution.'}

Important:
1. Return ONLY the solution code, no explanations
2. The solution must be in ${problem.language || 'Python'}
3. Follow the platform's coding style guidelines
4. Include all necessary imports and helper functions
5. Ensure optimal time and space complexity`;

  switch (problem.type) {
    case 'leetcode':
      return codingPrompt;

    case 'geeksforgeeks':
      return `${codingPrompt}
6. Follow GeeksForGeeks' function/class structure exactly
7. Include all required helper functions
8. Handle all edge cases mentioned in constraints`;

    case 'hackerrank':
    case 'codewars':
    case 'hackerearth':
    case 'codeforces':
    case 'atcoder':
    case 'spoj':
    case 'interviewbit':
      return codingPrompt;

    case 'code':
      return codingPrompt;

    case 'mcq':
      return `Answer this multiple choice question:
Question: ${problem.question}
Options:
${problem.options.map(opt => `- ${opt.text}`).join('\n')}
Return only the exact text of the correct answer option, nothing else.`;

    default:
      throw new Error('Unsupported problem type');
  }
}

// Call Gemini API with optimized error handling and reduced logging
async function callGeminiApi(prompt, apiKey) {
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-pro-exp-02-05:generateContent?key=${apiKey}`;
    
    const requestBody = {
      contents: [{
        parts: [{
          text: prompt
        }]
      }]
    };
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      let errorMessage = `API call failed: ${response.status} - ${response.statusText}`;
      
      try {
        const errorData = await response.json();
        if (errorData.error) {
          errorMessage += ` - ${errorData.error.message || JSON.stringify(errorData.error)}`;
        }
      } catch (e) {
        // If we can't parse JSON, use text instead
        const errorText = await response.text();
        errorMessage += ` - ${errorText.substring(0, 100)}`;
      }
      
      throw new Error(errorMessage);
    }

    const data = await response.json();
    
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error('Invalid response format from API');
    }

    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
}

// Process API response based on problem type
function processResponse(response, type) {
  try {
    // For coding problems
    if (type === 'leetcode' || type === 'code' || type.match(/^(geeksforgeeks|hackerrank|codewars|hackerearth|codeforces|atcoder|spoj|interviewbit)$/)) {
      // Extract code block from response if present
      const codeMatch = response.match(/```[\w]*\n([\s\S]*?)```/);
      const answer = codeMatch ? codeMatch[1].trim() : response.trim();
      return {
        success: true,
        answer: answer
      };
    }

    // For MCQ problems
    if (type === 'mcq') {
      return {
        success: true,
        answer: response.trim()
      };
    }

    throw new Error('Unsupported problem type');
  } catch (error) {
    console.error('Error processing response:', error);
    throw new Error(`Failed to process response: ${error.message}`);
  }
} 