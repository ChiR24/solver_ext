# Smart Solver Extension

A powerful Chrome extension that automatically solves coding problems and MCQs using Google's Gemini AI API. The extension supports multiple coding platforms and provides intelligent solutions with optimal code quality.

## Features

### Platform Support
- **LeetCode**: Complete problem solving with optimal solutions
- **HackerRank**: Full support with Monaco editor integration
- **GeeksForGeeks**: Specialized support for problem formats
- **CodeWars**: Problem solving capabilities
- **Other Platforms**: Basic support for various coding platforms

### Editor Support
- **Monaco Editor**: Full integration with advanced features
- **Ace Editor**: Complete support with state management
- **CodeMirror**: Basic editor support
- **Generic Editors**: Fallback support for standard editors

### Core Features
- **Intelligent Problem Detection**: Automatically detects problem type and context
- **Smart Code Injection**: Clean code insertion with proper formatting
- **Multiple Languages**: Supports Python, Java, C++, JavaScript, and more
- **Auto-Solve Mode**: Automatically solves problems as you browse
- **Debug Logging**: Comprehensive debugging system for troubleshooting
- **State Management**: Robust editor state tracking and management
- **Error Handling**: Graceful error handling with user-friendly messages

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Solver_Ext.git
```

2. Load the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked" and select the extension directory

## Setup

1. Get a Gemini API Key:
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the key

2. Configure the Extension:
   - Click the extension icon in Chrome
   - Enter your Gemini API key in the settings
   - Click "Save"

## Usage

### Manual Solving
1. Navigate to a supported coding problem
2. Click the extension icon
3. Click "Solve Problem"
4. Wait for the solution to be applied

### Auto-Solve Mode
1. Click the extension icon
2. Toggle "Auto-Solve" to ON
3. Solutions will be automatically applied as you browse problems

## Project Structure

```
Solver_Ext/
├── manifest.json           # Extension configuration
├── popup/
│   ├── popup.html         # Extension popup interface
│   ├── popup.css          # Popup styles
│   └── popup.js           # Popup functionality
├── scripts/
│   ├── content.js         # Main content script
│   ├── background.js      # Background service worker
│   ├── editor-bridges.js  # Editor integration system
│   ├── monaco-bridge.js   # Monaco editor specific bridge
│   └── utils.js           # Utility functions
├── icons/
│   ├── icon16.png         # Extension icons
│   ├── icon48.png
│   ├── icon128.png
│   └── icon.svg           # Source icon
└── tools/
    ├── generate_icons.py  # Icon generation script
    └── test_api.py        # API testing utility
```

## Technical Details

### Editor Bridges
The extension implements a sophisticated bridge system for different code editors:

1. **Monaco Bridge**:
   - Direct integration with Monaco editor
   - State management and value tracking
   - Optimized performance with caching

2. **HackerRank Bridge**:
   - Specialized for HackerRank's environment
   - Shadow DOM support
   - Robust error handling

3. **GeeksForGeeks Bridge**:
   - Custom implementation for GFG's Ace editor
   - Template-aware code insertion
   - State preservation

### Debug System
- Comprehensive logging system
- State tracking for editor instances
- Error tracking and reporting
- Performance optimization

## Development

### Building Icons
```bash
python tools/generate_icons.py
```

### Testing API
```bash
python tools/test_api.py YOUR_API_KEY
```

### Local Development
1. Make changes to the code
2. Reload the extension in Chrome
3. Test changes on supported platforms

## Troubleshooting

### Common Issues
1. **Editor Not Found**:
   - Refresh the page
   - Check if you're on a supported platform
   - Verify the editor is fully loaded

2. **Solution Not Applied**:
   - Check the console for error messages
   - Verify API key is valid
   - Ensure proper internet connection

3. **Auto-Solve Not Working**:
   - Check if Auto-Solve is enabled
   - Refresh the page
   - Verify platform support

### Debug Mode
To enable detailed debugging:
1. Open Chrome DevTools
2. Check the console for debug messages
3. Look for messages with `[HackerRank Bridge]` or similar prefixes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Security

- API keys are stored locally
- No data is sent to external servers
- All processing happens in your browser
- Content script permissions are limited to coding platforms

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google's Gemini AI for providing the solution generation
- Monaco, Ace, and CodeMirror editor teams
- Various coding platforms for their services

## Support

For issues and feature requests, please use the GitHub issue tracker. 