/**
 * Background Service Worker
 * 
 * This script runs in the background and handles the side panel behavior.
 * In Manifest V3, background scripts are service workers that don't have
 * direct access to the DOM or window object.
 */

// Set up side panel behavior when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  console.log('T1 Extension installed');
  
  // Configure the side panel to open when the extension icon is clicked
  // This is the recommended approach for Manifest V3
  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error('Error setting panel behavior:', error));
});

/**
 * KNOWN PITFALL:
 * - The side panel API is relatively new (Chrome 114+). Make sure you're
 *   running a compatible Chrome version.
 * - If setPanelBehavior fails, the panel can still be opened manually via
 *   the extension icon, but it won't auto-open on click.
 */

