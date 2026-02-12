#!/usr/bin/env python3
"""
Simple script to create placeholder icons for the Chrome extension.
Creates basic colored squares as PNG files.
"""

from PIL import Image, ImageDraw, ImageFont

def create_icon(size, filename):
    """Create a simple icon with the T1 text"""
    # Create image with blue background
    img = Image.new('RGB', (size, size), color='#007bff')
    draw = ImageDraw.Draw(img)
    
    # Draw a simple T1 text or just a colored square
    # For simplicity, we'll just use a solid color with a border
    border_width = max(1, size // 16)
    draw.rectangle(
        [border_width, border_width, size - border_width, size - border_width],
        outline='white',
        width=border_width
    )
    
    # Save the image
    img.save(filename, 'PNG')
    print(f'Created {filename}')

if __name__ == '__main__':
    create_icon(16, 'assets/icon16.png')
    create_icon(48, 'assets/icon48.png')
    create_icon(128, 'assets/icon128.png')

