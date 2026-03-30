#!/bin/bash
# Verification script to check if all required files are present

echo "🔍 Verifying T1 Extension files..."
echo ""

REQUIRED_FILES=(
    "manifest.json"
    "background.js"
    "content.js"
    "sidepanel.html"
    "sidepanel.js"
    "assets/icon16.png"
    "assets/icon48.png"
    "assets/icon128.png"
)

ALL_PRESENT=true

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (MISSING)"
        ALL_PRESENT=false
    fi
done

echo ""

if [ "$ALL_PRESENT" = true ]; then
    echo "🎉 All required files are present!"
    echo ""
    echo "Next steps:"
    echo "1. Open Chrome and go to chrome://extensions/"
    echo "2. Enable 'Developer mode' (toggle in top-right)"
    echo "3. Click 'Load unpacked'"
    echo "4. Select this folder: $(pwd)"
    echo ""
    echo "📖 See QUICKSTART.md for detailed instructions"
else
    echo "⚠️  Some files are missing. Please check the file structure."
fi

