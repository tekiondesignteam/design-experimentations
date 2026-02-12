# Extension Icons

This folder should contain the extension icons in PNG format:

- `icon16.png` - 16x16 pixels (toolbar icon)
- `icon48.png` - 48x48 pixels (extension management page)
- `icon128.png` - 128x128 pixels (Chrome Web Store)

## Quick Icon Creation

You can create simple placeholder icons using any of these methods:

### Method 1: Online Icon Generator
1. Visit https://www.favicon-generator.org/
2. Upload any image or create a simple design
3. Download the generated icons
4. Rename them to match the required sizes

### Method 2: Using ImageMagick (if installed)
```bash
# Create simple colored squares
convert -size 16x16 xc:#007bff icon16.png
convert -size 48x48 xc:#007bff icon48.png
convert -size 128x128 xc:#007bff icon128.png
```

### Method 3: Use any image editor
- Create 16x16, 48x48, and 128x128 pixel PNG files
- Use a simple design (logo, letter, or colored square)
- Save them with the correct filenames

## Temporary Workaround

If you don't have icons yet, you can temporarily comment out the `icons` section in `manifest.json` to load the extension without icons. Chrome will use a default icon.

