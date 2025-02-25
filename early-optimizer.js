/**
 * Early Optimizer Script
 * 
 * This script loads optimized code early in the page lifecycle to improve performance
 * for Solver Extension, especially on HackerRank and other platforms.
 * 
 * - Reduces timeouts and delays
 * - Uses optimized DOM operations
 * - Applies platform-specific optimizations
 */

(function() {
  // Debug logger
  const logger = {
    DEBUG: true,
    log: function(...args) {
      if (this.DEBUG) {
        console.log('[Early Optimizer]', ...args);
      }
    }
  };

  // Platform detection
  function detectPlatform() {
    const host = window.location.hostname;
    if (host.includes('hackerrank.com')) return 'hackerrank';
    if (host.includes('leetcode.com')) return 'leetcode';
    if (host.includes('geeksforgeeks.org')) return 'geeksforgeeks';
    if (host.includes('atcoder.jp')) return 'atcoder';
    if (host.includes('codechef.com')) return 'codechef';
    return 'unknown';
  }

  // Load platform-specific optimizer
  function loadOptimizer(platform) {
    logger.log(`Loading optimizer for ${platform}`);

    // Define optimizers to load
    const optimizers = {
      hackerrank: 'hackerrank-optimizer.js',
      default: 'editor-optimized.js'
    };

    // Choose the right optimizer script
    const scriptPath = optimizers[platform] || optimizers.default;
    
    // Create script element
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL(scriptPath);
    script.onload = function() {
      logger.log(`Loaded ${scriptPath}`);
      
      // Initialize platform-specific functionality
      if (platform === 'hackerrank' && window.HackerRankOptimizer) {
        window.HackerRankOptimizer.startEditorMonitoring();
      } else if (window.EditorOptimized) {
        // Generic initialization
        logger.log('Initialized generic optimizer');
      }
    };
    
    // Inject script early
    (document.head || document.documentElement).appendChild(script);
  }

  // Early platform detection and optimizer loading
  const platform = detectPlatform();
  logger.log(`Detected platform: ${platform}`);
  
  // Load appropriate optimizer
  loadOptimizer(platform);

  // Setup page performance monitoring
  if (window.PerformanceObserver) {
    try {
      const perfObserver = new PerformanceObserver((entries) => {
        entries.getEntries().forEach(entry => {
          if (entry.name.includes('hackerrank') || 
              entry.name.includes('monaco') || 
              entry.name.includes('editor')) {
            logger.log('Performance entry:', entry.name, entry.duration);
          }
        });
      });
      
      perfObserver.observe({ entryTypes: ['resource', 'longtask'] });
    } catch (e) {
      logger.log('Performance observer error:', e);
    }
  }

  // Expose interface
  window.SolverEarlyOptimizer = {
    platform,
    injectScript: function(src) {
      const script = document.createElement('script');
      script.textContent = src;
      document.body.appendChild(script);
      document.body.removeChild(script);
    }
  };

  logger.log('Early optimizer initialized');
})(); 