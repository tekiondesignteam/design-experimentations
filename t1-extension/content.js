/**
 * Content Script
 * 
 * This script runs in the context of web pages and handles injecting
 * UI elements (toasts and overlays) into the page. It uses Shadow DOM
 * to prevent style conflicts with the host page.
 */

// Unique prefix for all injected elements to avoid conflicts
const PREFIX = 'myext-';

/**
 * Listen for messages from the side panel
 */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Content script received message:', message);

  if (message.type === 'SHOW_TOAST') {
    showToast(message.message);
    sendResponse({ success: true });
  } else if (message.type === 'SHOW_OVERLAY') {
    if (message.show) {
      showOverlay();
    } else {
      hideOverlay();
    }
    sendResponse({ success: true });
  } else if (message.type === 'GET_SELECTED_TEXT') {
    // Get currently selected text
    const selectedText = getSelectedText();
    sendResponse({ text: selectedText });
  }

  // Return true to indicate we'll send a response asynchronously
  return true;
});

/**
 * Show a toast notification
 * @param {string} message - The message to display
 */
function showToast(message) {
  // Create container if it doesn't exist
  let container = document.getElementById(`${PREFIX}toast-container`);

  if (!container) {
    container = document.createElement('div');
    container.id = `${PREFIX}toast-container`;
    document.body.appendChild(container);

    // Attach Shadow DOM to isolate styles
    const shadow = container.attachShadow({ mode: 'open' });

    // Create style element
    const style = document.createElement('style');
    style.textContent = `
      :host {
        all: initial;
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 2147483647;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
      }
      
      .toast {
        background: #323232;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        margin-top: 12px;
        min-width: 250px;
        max-width: 400px;
        animation: slideIn 0.3s ease-out, fadeOut 0.3s ease-in 2.7s;
        opacity: 0;
        animation-fill-mode: forwards;
        font-size: 14px;
        line-height: 1.5;
      }
      
      @keyframes slideIn {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    `;

    shadow.appendChild(style);
  }

  const shadow = container.shadowRoot;

  // Create toast element
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;

  shadow.appendChild(toast);

  // Auto-remove after 3 seconds
  setTimeout(() => {
    toast.remove();

    // Remove container if no more toasts
    if (shadow.children.length <= 1) { // Only style element remains
      container.remove();
    }
  }, 3000);
}

/**
 * Show full-page overlay
 */
function showOverlay() {
  // Remove existing overlay if present
  hideOverlay();

  // Create overlay container
  const container = document.createElement('div');
  container.id = `${PREFIX}overlay-container`;
  document.body.appendChild(container);

  // Attach Shadow DOM
  const shadow = container.attachShadow({ mode: 'open' });

  // Create style element
  const style = document.createElement('style');
  style.textContent = `
    :host {
      all: initial;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2147483646;
      pointer-events: none;
    }
    
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 123, 255, 0.1);
      animation: pulse 2s ease-in-out infinite;
    }
    
    @keyframes pulse {
      0%, 100% {
        opacity: 0.3;
      }
      50% {
        opacity: 0.6;
      }
    }
    
    .shimmer {
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      animation: shimmer 3s infinite;
    }
    
    @keyframes shimmer {
      0% {
        left: -100%;
      }
      100% {
        left: 100%;
      }
    }
  `;

  shadow.appendChild(style);

  // Create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'overlay';

  // Add shimmer effect
  const shimmer = document.createElement('div');
  shimmer.className = 'shimmer';
  overlay.appendChild(shimmer);

  shadow.appendChild(overlay);
}

/**
 * Hide the overlay
 */
function hideOverlay() {
  const container = document.getElementById(`${PREFIX}overlay-container`);
  if (container) {
    container.remove();
  }
}

/**
 * KNOWN PITFALLS:
 * 
 * 1. Content Script Restrictions:
 *    - Content scripts don't run on chrome://, edge://, or chrome-extension:// URLs
 *    - They don't run on the Chrome Web Store
 *    - They may not run on some browser internal pages
 * 
 * 2. Timing Issues:
 *    - Content scripts run at "document_idle" (after DOM is ready)
 *    - If a message is sent before the script loads, it will be lost
 *    - Consider adding error handling in the sender
 * 
 * 3. Shadow DOM:
 *    - Used here to prevent CSS conflicts with the host page
 *    - Styles inside Shadow DOM don't affect the host page and vice versa
 *    - z-index still works relative to the host page
 * 
 * 4. Z-Index:
 *    - Using 2147483647 (max 32-bit integer) for toast to ensure it's on top
 *    - Overlay uses 2147483646 to be below toasts but above page content
 * 
 * 5. Performance:
 *    - This script runs on ALL pages matching <all_urls>
 *    - Keep it lightweight and only activate when needed
 */

console.log('T1 Extension content script loaded');

// --- TEXT SELECTION DETECTION ---
let lastSelectedText = '';

/**
 * Get currently selected text
 */
function getSelectedText() {
  const selection = window.getSelection();
  if (selection && selection.toString().trim().length > 0) {
    return selection.toString().trim();
  }
  return '';
}

/**
 * Listen for text selection with mouse
 */
document.addEventListener('mouseup', () => {
  console.log('Mouseup event fired');
  const selectedText = getSelectedText();
  console.log('Selected text:', selectedText);

  // Only send if text is selected and different from last time
  if (selectedText && selectedText !== lastSelectedText) {
    lastSelectedText = selectedText;
    console.log('Sending TEXT_SELECTED message with text:', selectedText);

    // Send selected text to the extension
    chrome.runtime.sendMessage({
      type: 'TEXT_SELECTED',
      text: selectedText
    }, (response) => {
      if (chrome.runtime.lastError) {
        console.error('Error sending message:', chrome.runtime.lastError);
      } else {
        console.log('Message sent successfully');
      }
    });
  } else if (!selectedText && lastSelectedText) {
    // Text was deselected
    lastSelectedText = '';
    console.log('Sending TEXT_SELECTED message with empty text');
    chrome.runtime.sendMessage({
      type: 'TEXT_SELECTED',
      text: ''
    });
  }
});

/**
 * Listen for text selection with keyboard
 */
document.addEventListener('keyup', (e) => {
  // Check if it's a selection-related key
  if (e.shiftKey || e.key === 'ArrowLeft' || e.key === 'ArrowRight' ||
    e.key === 'ArrowUp' || e.key === 'ArrowDown' ||
    (e.ctrlKey && e.key === 'a') || (e.metaKey && e.key === 'a')) {

    const selectedText = getSelectedText();

    if (selectedText && selectedText !== lastSelectedText) {
      lastSelectedText = selectedText;
      chrome.runtime.sendMessage({
        type: 'TEXT_SELECTED',
        text: selectedText
      });
    } else if (!selectedText && lastSelectedText) {
      lastSelectedText = '';
      chrome.runtime.sendMessage({
        type: 'TEXT_SELECTED',
        text: ''
      });
    }
  }
});

