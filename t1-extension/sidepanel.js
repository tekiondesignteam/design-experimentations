/**
 * Side Panel Bridge Logic
 * 
 * This script runs in the side panel context and provides functions to
 * communicate with the content script running on the active tab.
 */

/**
 * Send a toast message to the active tab
 * @param {string} message - The message to display in the toast
 */
async function sendToast(message) {
  try {
    // Query for the active tab in the current window
    // PITFALL: This only works for the currently focused window
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    if (!tab) {
      console.error('No active tab found');
      updateStatus('Error: No active tab found');
      return;
    }
    
    // PITFALL: Content scripts don't run on chrome:// URLs, edge:// URLs,
    // the Chrome Web Store, or other extension pages
    if (tab.url?.startsWith('chrome://') || tab.url?.startsWith('edge://') || 
        tab.url?.startsWith('chrome-extension://')) {
      console.warn('Cannot inject into browser internal pages');
      updateStatus('Cannot show toast on browser internal pages');
      return;
    }
    
    // Send message to the content script
    await chrome.tabs.sendMessage(tab.id, {
      type: 'SHOW_TOAST',
      message: message
    });
    
    updateStatus(`Toast sent: "${message}"`);
  } catch (error) {
    console.error('Error sending toast:', error);
    updateStatus(`Error: ${error.message}`);
  }
}

/**
 * Toggle overlay on the active tab
 * @param {boolean} show - Whether to show or hide the overlay
 */
async function sendOverlay(show) {
  try {
    // Query for the active tab in the current window
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    if (!tab) {
      console.error('No active tab found');
      updateStatus('Error: No active tab found');
      return;
    }
    
    // Check for restricted URLs
    if (tab.url?.startsWith('chrome://') || tab.url?.startsWith('edge://') || 
        tab.url?.startsWith('chrome-extension://')) {
      console.warn('Cannot inject into browser internal pages');
      updateStatus('Cannot show overlay on browser internal pages');
      return;
    }
    
    // Send message to the content script
    await chrome.tabs.sendMessage(tab.id, {
      type: 'SHOW_OVERLAY',
      show: show
    });
    
    updateStatus(`Overlay ${show ? 'shown' : 'hidden'}`);
  } catch (error) {
    console.error('Error toggling overlay:', error);
    updateStatus(`Error: ${error.message}`);
  }
}

/**
 * Update the status display in the UI
 * @param {string} message - Status message to display
 */
function updateStatus(message) {
  const statusEl = document.getElementById('status');
  if (statusEl) {
    statusEl.textContent = message;
  }
}

/**
 * KNOWN PITFALLS:
 * 
 * 1. Timing Issues: If you try to send a message immediately after a page
 *    loads, the content script might not be ready yet. The content script
 *    runs at "document_idle" which is after the DOM is ready.
 * 
 * 2. Restricted URLs: Content scripts cannot run on:
 *    - chrome:// URLs (browser internal pages)
 *    - chrome-extension:// URLs (other extensions)
 *    - Chrome Web Store pages
 *    - New Tab page (in some cases)
 * 
 * 3. Tab Query: chrome.tabs.query returns tabs in the current window.
 *    If the user has multiple windows open, it only queries the focused one.
 */

// Set up demo button handlers when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const testToastBtn = document.getElementById('testToast');
  const showOverlayBtn = document.getElementById('showOverlay');
  const hideOverlayBtn = document.getElementById('hideOverlay');
  
  if (testToastBtn) {
    testToastBtn.addEventListener('click', () => {
      sendToast('Hello from T1 Extension! 👋');
    });
  }
  
  if (showOverlayBtn) {
    showOverlayBtn.addEventListener('click', () => {
      sendOverlay(true);
    });
  }
  
  if (hideOverlayBtn) {
    hideOverlayBtn.addEventListener('click', () => {
      sendOverlay(false);
    });
  }
  
  updateStatus('Side panel loaded and ready');
});

// Make functions globally available for console testing
window.sendToast = sendToast;
window.sendOverlay = sendOverlay;

