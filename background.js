// Handle messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getSolution') {
    getSolution(request.problem).then(sendResponse);
    return true; // Required for async response
  }
});

// Get solution using Gemini API
async function getSolution(problem) {
  try {
    console.log('DEBUG - Getting solution for problem:', {
      type: problem.type,
      title: problem.title,
      language: problem.language
    });
    
    const apiKey = await getApiKey();
    if (!apiKey) {
      throw new Error('API key not found. Please enter your Gemini API key in the extension settings.');
    }

    const prompt = generatePrompt(problem);
    console.log('DEBUG - Generated prompt structure');

    const response = await callGeminiApi(prompt, apiKey);
    console.log('DEBUG - Received API response');

    const processedResponse = processResponse(response, problem.type);
    console.log('DEBUG - Processed response');

    return processedResponse;
  } catch (error) {
    console.error('DEBUG - Error in getSolution:', error);
    return { error: error.message };
  }
}

// Get API key from storage
async function getApiKey() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['geminiApiKey'], (result) => {
      console.log('DEBUG - API Key found:', !!result.geminiApiKey);
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

// Call Gemini API
async function callGeminiApi(prompt, apiKey) {
  try {
    console.log('DEBUG - Calling Gemini API');
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-pro-exp-02-05:generateContent?key=${apiKey}`;
    console.log('DEBUG - API URL:', url);
    
    const requestBody = {
      contents: [{
        parts: [{
          text: prompt
        }]
      }]
    };
    
    console.log('DEBUG - Request body:', JSON.stringify(requestBody, null, 2));
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    console.log('DEBUG - Response status:', response.status);
    console.log('DEBUG - Response status text:', response.statusText);
    console.log('DEBUG - Response headers:', JSON.stringify(Object.fromEntries([...response.headers]), null, 2));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('DEBUG - Raw error response:', errorText);
      
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch (e) {
        errorData = { rawError: errorText };
      }
      
      console.error('DEBUG - API Error Response:', errorData);
      console.error('DEBUG - Response status:', response.status);
      console.error('DEBUG - Response status text:', response.statusText);
      console.error('DEBUG - Full error data:', JSON.stringify(errorData, null, 2));
      throw new Error(`API call failed: ${response.status} - ${response.statusText} - ${JSON.stringify(errorData)}`);
    }

    const responseText = await response.text();
    console.log('DEBUG - Raw response text:', responseText);
    
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      console.error('DEBUG - JSON parse error:', e);
      throw new Error('Failed to parse API response as JSON');
    }
    
    console.log('DEBUG - Full API response:', JSON.stringify(data, null, 2));

    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      console.error('DEBUG - Invalid API response format:', JSON.stringify(data, null, 2));
      throw new Error('Invalid response format from API');
    }

    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('DEBUG - API call error:', error);
    console.error('DEBUG - Error stack:', error.stack);
    throw new Error(`API call failed: ${error.message}`);
  }
}

// Process API response based on problem type
function processResponse(response, type) {
  try {
    console.log('DEBUG - Processing response for type:', type);

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
    console.error('DEBUG - Error processing response:', error);
    throw new Error(`Failed to process response: ${error.message}`);
  }
} 