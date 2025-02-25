<div align="center">
  <img src="icons/icon128.png" alt="Smart Solver Logo" width="128" height="128">
  <h1>Smart Solver Extension</h1>
  <p>
    <strong>Solve coding problems effortlessly with AI-powered assistance</strong>
  </p>
  <p>
    <a href="#features">Features</a> •
    <a href="#installation">Installation</a> •
    <a href="#setup">Setup</a> •
    <a href="#usage">Usage</a> •
    <a href="#supported-platforms">Supported Platforms</a> •
    <a href="#technical-details">Technical Details</a>
  </p>
</div>

---

## ✨ Features

- 🚀 **Smart Problem Solving** - Automatically solves coding problems on:
  - LeetCode
  - GeeksForGeeks (GFG)
  - HackerRank
  - CodeChef
  - And more!
- 🤖 **AI-Powered** - Utilizes Google's Gemini AI for intelligent solutions
- ⚡ **Auto-Solve Mode** - Automatically solves problems as you browse
- 🎯 **Multiple Languages** - Supports Python, Java, C++, JavaScript and more
- 🎨 **Clean Interface** - Modern and intuitive user interface
- 🔒 **CSP Compliant** - Works with strict Content Security Policies on platforms like GeeksForGeeks

## 🔧 Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/Solver_Ext.git
   ```

2. Open Chrome and navigate to:
   ```
   chrome://extensions/
   ```

3. Enable "Developer mode" in the top right

4. Click "Load unpacked" and select the extension directory

## ⚙️ Setup

1. Get your Gemini API key:
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the key

2. Configure the extension:
   - Click the extension icon in Chrome
   - Enter your API key in the settings
   - Click "Save"

## 📖 Usage

### Manual Solving
1. Navigate to a problem on any supported platform
2. Click the extension icon
3. Click "Solve Problem"
4. Watch as the solution is automatically applied

### Auto-Solve Mode
1. Click the extension icon
2. Toggle "Auto-Solve" to ON
3. Solutions will be automatically applied as you browse problems

### Keyboard Shortcut
- Use the configurable keyboard shortcut (default: Ctrl+Alt+S) to instantly solve the current problem
- Customize the shortcut in the extension popup

## 🌐 Supported Platforms

Currently supports:
- [LeetCode](https://leetcode.com)
- [GeeksForGeeks](https://practice.geeksforgeeks.org)
- [HackerRank](https://www.hackerrank.com)
- [CodeChef](https://codechef.com)
- [CodeWars](https://www.codewars.com)
- [HackerEarth](https://www.hackerearth.com)
- [Codeforces](https://codeforces.com)
- [AtCoder](https://atcoder.jp)
- [SPOJ](https://www.spoj.com)
- [InterviewBit](https://www.interviewbit.com)

## 🔍 Technical Details

### GeeksForGeeks Support
The extension includes special handling for GeeksForGeeks' strict Content Security Policy (CSP):
- Uses direct DOM manipulation instead of script injection
- Implements a dedicated bridge script for GeeksForGeeks
- Provides robust editor detection and value setting
- Handles both Ace editor and textarea inputs

### Editor Bridges
The extension uses specialized editor bridges to interact with different code editors:
- Monaco Editor (used by LeetCode, HackerRank)
- Ace Editor (used by GeeksForGeeks, CodeChef)
- CodeMirror (used by various platforms)

### CSP Compliance
To work around Content Security Policy restrictions:
- Avoids inline script execution
- Uses message passing between content scripts and page context
- Implements direct DOM manipulation when necessary

## 🔒 Privacy & Security

- API keys are stored locally in your browser
- No data is collected or stored externally
- All processing happens in your browser

## 🔍 Troubleshooting

If you encounter issues:
1. Verify your Gemini API key is valid
2. Ensure you're on a supported platform
3. Try refreshing the page
4. Disable and re-enable the extension
5. Check the browser console for error messages

<details>
<summary>Common Error Messages</summary>

| Error | Solution |
|-------|----------|
| "API key not found" | Enter your Gemini API key in the extension settings |
| "No code editor found" | Make sure you're on a page with a code editor |
| "Failed to apply solution" | Try refreshing the page and waiting for the editor to fully load |
| "CSP blocked script execution" | The extension will automatically try alternative methods |

</details>

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ for competitive programmers</p>
</div>