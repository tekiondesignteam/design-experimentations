# T1 Chrome Extension

A Chrome Extension (Manifest V3) that opens a side panel UI with toast and overlay functionality for active tabs.

## Features

- ✅ Side panel that opens on extension icon click
- ✅ Send toast notifications to active tabs
- ✅ Toggle full-page overlay on active tabs
- ✅ Shadow DOM isolation to prevent CSS conflicts
- ✅ Works fully offline (no backend required)

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top-right corner)
3. Click "Load unpacked"
4. Select the `t1-extension` folder
5. The extension icon should appear in your toolbar

## Usage

### Opening the Side Panel

Click the extension icon in your Chrome toolbar. The side panel will open on the right side of your browser window.

### Testing Toast Notifications

**Method 1: Using the UI buttons**
1. Open the side panel
2. Navigate to any regular webpage (not chrome:// URLs)
3. Click "Test Toast Message" button
4. A toast notification will appear in the bottom-right of the active tab

**Method 2: Using the console**
1. Open the side panel
2. Right-click in the panel → Inspect → Console
3. Type: `sendToast("Your message here")`
4. Press Enter

### Testing Overlay

**Method 1: Using the UI buttons**
1. Open the side panel
2. Navigate to any regular webpage
3. Click "Show Overlay" to display the overlay
4. Click "Hide Overlay" to remove it

**Method 2: Using the console**
1. Open the side panel console
2. Type: `sendOverlay(true)` to show
3. Type: `sendOverlay(false)` to hide

## File Structure

```
t1-extension/
├── manifest.json       # Extension configuration (Manifest V3)
├── background.js       # Service worker (handles side panel opening)
├── content.js          # Content script (injects toast/overlay into pages)
├── sidepanel.html      # Side panel UI shell
├── sidepanel.js        # Side panel logic (messaging bridge)
├── create_icons.py     # Icon generation script
├── assets/
│   ├── icon16.png      # 16x16 toolbar icon
│   ├── icon48.png      # 48x48 management icon
│   ├── icon128.png     # 128x128 store icon
│   └── README.md       # Icon documentation
└── README.md           # This file
```

## Architecture

### Background Script (background.js)
- Runs as a service worker
- Configures side panel to open on icon click
- No direct DOM access

### Side Panel (sidepanel.html + sidepanel.js)
- Runs in the side panel context
- Provides `sendToast()` and `sendOverlay()` functions
- Uses `chrome.tabs.query()` to find active tab
- Sends messages to content script via `chrome.tabs.sendMessage()`

### Content Script (content.js)
- Runs in the context of web pages
- Listens for messages from side panel
- Injects UI elements using Shadow DOM
- Handles toast and overlay rendering

## Known Limitations

### Restricted URLs
Content scripts cannot run on:
- `chrome://` URLs (browser internal pages)
- `chrome-extension://` URLs (extension pages)
- Chrome Web Store pages
- Some browser internal pages

If you try to send a toast or overlay to these pages, you'll see an error message in the side panel status.

### Timing Issues
- Content scripts load at "document_idle" (after DOM is ready)
- If you send a message immediately after a page loads, there might be a brief delay
- The extension handles this gracefully with error messages

### Tab Query Scope
- `chrome.tabs.query({ active: true, currentWindow: true })` only finds tabs in the current window
- If you have multiple Chrome windows, it only affects the focused window

## Customization

### Adding Your Pre-built UI

Replace the placeholder in `sidepanel.html`:

```html
<!-- Current placeholder -->
<div id="ui-container">
    <p>📦 Your pre-built UI will be loaded here</p>
</div>

<!-- Replace with your UI -->
<div id="ui-container">
    <link rel="stylesheet" href="your-ui.css">
    <script src="your-ui.js"></script>
    <!-- Your HTML content -->
</div>
```

### Customizing Toast Appearance

Edit the styles in `content.js` within the `showToast()` function:

```javascript
style.textContent = `
  .toast {
    background: #323232;  /* Change background color */
    color: white;         /* Change text color */
    padding: 16px 24px;   /* Adjust padding */
    border-radius: 8px;   /* Adjust corner radius */
    /* ... more styles ... */
  }
`;
```

### Customizing Overlay Appearance

Edit the styles in `content.js` within the `showOverlay()` function:

```javascript
style.textContent = `
  .overlay {
    background: rgba(0, 123, 255, 0.1);  /* Change color/opacity */
    animation: pulse 2s ease-in-out infinite;  /* Adjust animation */
  }
`;
```

## Development Tips

### Debugging

**Background Script:**
- Go to `chrome://extensions/`
- Find your extension
- Click "service worker" link
- Console opens for background.js

**Side Panel:**
- Open the side panel
- Right-click anywhere in the panel
- Select "Inspect"
- DevTools opens for sidepanel.html/js

**Content Script:**
- Open any webpage
- Press F12 to open DevTools
- Check Console for content.js logs
- Look for "T1 Extension content script loaded"

### Reloading After Changes

After editing files:
1. Go to `chrome://extensions/`
2. Click the refresh icon on your extension card
3. Reload any open tabs where you want to test
4. Reopen the side panel

## Requirements

- Chrome 114+ (for Side Panel API)
- No external dependencies
- No backend required
- Works fully offline

## License

Free to use and modify for your projects.

