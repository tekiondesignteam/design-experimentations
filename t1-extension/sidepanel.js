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

// Main initialization
document.addEventListener('DOMContentLoaded', function () {
  // ===== Ask Before Acting Dropdown functionality =====
  const btn = document.getElementById('btnAskBeforeActing');
  const dropdown = document.getElementById('askBeforeActingDropdown');
  const options = document.querySelectorAll('.ask-before-acting-option');
  const label = document.querySelector('.ask-before-acting-label');

  if (btn && dropdown && options.length && label) {
    // Toggle dropdown on button click
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdown.classList.toggle('visible');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target) && e.target !== btn) {
        dropdown.classList.remove('visible');
      }
    });

    // Handle option selection
    options.forEach(option => {
      option.addEventListener('click', function (e) {
        e.stopPropagation();

        // Remove active class from all options
        options.forEach(opt => opt.classList.remove('active'));

        // Add active class to selected option
        this.classList.add('active');

        // Update button label
        const selectedText = this.querySelector('span').textContent;
        label.textContent = selectedText;

        // Close dropdown
        dropdown.classList.remove('visible');
      });
    });
  }

  // ===== Current Tab Title Display =====
  // Function to update the tab title in the context pill
  async function updateTabTitleInPill() {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tab && tab.title) {
        // Update AI_DATA.leadsItem.label with the current tab title
        if (typeof AI_DATA !== 'undefined' && AI_DATA.leadsItem) {
          AI_DATA.leadsItem.label = tab.title;

          // Re-render the context pills to show the updated label
          if (typeof renderContextPills === 'function') {
            renderContextPills();
          }
        }
      }
    } catch (error) {
      console.error('Error fetching current tab:', error);
    }
  }

  // Wait for AI_DATA to be available, then update
  const checkAIData = setInterval(() => {
    if (typeof AI_DATA !== 'undefined' && AI_DATA.leadsItem) {
      clearInterval(checkAIData);
      updateTabTitleInPill();
    }
  }, 100);

  // Stop checking after 5 seconds
  setTimeout(() => clearInterval(checkAIData), 5000);

  // Listen for tab updates (title changes)
  chrome.tabs.onUpdated.addListener((_tabId, changeInfo, tab) => {
    if (changeInfo.title && tab.active) {
      if (typeof AI_DATA !== 'undefined' && AI_DATA.leadsItem) {
        AI_DATA.leadsItem.label = changeInfo.title;
        if (typeof renderContextPills === 'function') {
          renderContextPills();
        }
      }
    }
  });

  // Listen for tab activation (when user switches tabs)
  chrome.tabs.onActivated.addListener(async (activeInfo) => {
    try {
      const tab = await chrome.tabs.get(activeInfo.tabId);
      if (tab && tab.title) {
        if (typeof AI_DATA !== 'undefined' && AI_DATA.leadsItem) {
          AI_DATA.leadsItem.label = tab.title;
          if (typeof renderContextPills === 'function') {
            renderContextPills();
          }
        }
      }
    } catch (error) {
      console.error('Error fetching activated tab:', error);
    }
  });

  // ===== Populate Context Menu with Browser Tabs =====
  // Function to fetch all browser tabs and populate AI_DATA.contextItems
  async function populateContextMenuWithTabs() {
    try {
      const tabs = await chrome.tabs.query({ currentWindow: true });
      const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });

      console.log('All tabs:', tabs.map(t => ({ id: t.id, title: t.title })));
      console.log('Active tab:', activeTab);

      // @ts-ignore - dmsContextItems is defined in sidepanel-main.js
      if (typeof AI_DATA !== 'undefined' && typeof dmsContextItems !== 'undefined') {
        // Convert tabs to context items format
        const tabItems = tabs
          .filter(tab => tab.id !== activeTab?.id) // Exclude current tab
          .map(tab => ({
            id: `tab-${tab.id}`,
            label: tab.title || 'Untitled',
            type: 'page',
            tabId: tab.id
          }));

        console.log('Tab items created:', tabItems);

        // Clear the existing array and add new items
        // @ts-ignore
        dmsContextItems.length = 0;
        // @ts-ignore
        dmsContextItems.push(...tabItems);

        console.log('dmsContextItems updated:', dmsContextItems);
      }
    } catch (error) {
      console.error('Error populating context menu with tabs:', error);
    }
  }

  // Override the showContextMenu function to populate with tabs first
  const checkShowContextMenu = setInterval(() => {
    // @ts-ignore - showContextMenu is defined in sidepanel-main.js
    if (typeof window.showContextMenu === 'function') {
      clearInterval(checkShowContextMenu);

      // Store the original function
      // @ts-ignore
      const originalShowContextMenu = window.showContextMenu;

      // Override with our version
      // @ts-ignore
      window.showContextMenu = function (e) {
        console.log('showContextMenu called');

        // Populate with browser tabs synchronously before showing
        populateContextMenuWithTabs().then(() => {
          // Call the original function after tabs are loaded
          originalShowContextMenu(e);
        });
      };

      console.log('showContextMenu has been overridden');
    }
  }, 100);

  // Stop checking after 5 seconds
  setTimeout(() => clearInterval(checkShowContextMenu), 5000);

  // Listen for tab changes to update context menu if it's open
  chrome.tabs.onCreated.addListener(async () => {
    const contextMenu = document.getElementById('contextMenu');
    if (contextMenu && contextMenu.classList.contains('visible')) {
      await populateContextMenuWithTabs();
    }
  });

  chrome.tabs.onRemoved.addListener(async () => {
    const contextMenu = document.getElementById('contextMenu');
    if (contextMenu && contextMenu.classList.contains('visible')) {
      await populateContextMenuWithTabs();
    }
  });

  chrome.tabs.onUpdated.addListener(async (_tabId, changeInfo) => {
    if (changeInfo.title) {
      const contextMenu = document.getElementById('contextMenu');
      if (contextMenu && contextMenu.classList.contains('visible')) {
        await populateContextMenuWithTabs();
      }
    }
  });
});

