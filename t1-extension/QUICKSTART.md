# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Load the Extension
1. Open Chrome
2. Go to `chrome://extensions/`
3. Toggle "Developer mode" ON (top-right)
4. Click "Load unpacked"
5. Select this `t1-extension` folder
6. ✅ Extension loaded!

### Step 2: Open the Side Panel
1. Click the extension icon in your toolbar
2. The side panel opens on the right
3. You should see "T1 Extension" with test buttons

### Step 3: Test It Out
1. Open any regular webpage (e.g., google.com)
2. In the side panel, click "Test Toast Message"
3. 🎉 You should see a toast appear on the page!

## 🧪 Testing from Console

Open the side panel, right-click → Inspect → Console, then try:

```javascript
// Send a custom toast
sendToast("Hello World! 👋")

// Show overlay
sendOverlay(true)

// Hide overlay
sendOverlay(false)
```

## ⚠️ Troubleshooting

**"No active tab found"**
- Make sure you have a regular webpage open (not chrome:// URLs)
- The tab must be in the same window as the side panel

**Toast/Overlay not appearing**
- Check that you're not on a restricted page (chrome://, chrome-extension://, etc.)
- Try refreshing the webpage
- Check the browser console (F12) for errors

**Extension not loading**
- Make sure all files are present (see file list below)
- Check for syntax errors in the console
- Try removing and re-adding the extension

## 📁 Required Files

```
t1-extension/
├── manifest.json       ✅
├── background.js       ✅
├── content.js          ✅
├── sidepanel.html      ✅
├── sidepanel.js        ✅
└── assets/
    ├── icon16.png      ✅
    ├── icon48.png      ✅
    └── icon128.png     ✅
```

## 🎯 What "Done" Looks Like

- [x] Extension loads without errors
- [x] Side panel opens when clicking icon
- [x] Toast appears on active tab
- [x] Overlay shows/hides on command
- [x] Console functions work (`sendToast`, `sendOverlay`)

## 🔧 Next Steps

1. **Customize the UI**: Edit `sidepanel.html` to add your pre-built UI
2. **Modify Styles**: Change toast/overlay appearance in `content.js`
3. **Add Features**: Extend `sidepanel.js` with new messaging functions
4. **Read Full Docs**: Check `README.md` for detailed documentation

## 💡 Pro Tips

- Use the side panel console for quick testing
- Reload the extension after making changes
- Check all three consoles when debugging:
  - Background (chrome://extensions → service worker)
  - Side panel (right-click panel → Inspect)
  - Content (F12 on webpage)

---

**Need help?** Check the detailed comments in each file - they explain the Chrome API calls and common pitfalls!

