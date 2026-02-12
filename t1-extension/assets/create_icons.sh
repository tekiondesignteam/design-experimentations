#!/bin/bash
# Create simple placeholder icons using base64 encoded minimal PNGs

# 16x16 blue square
echo "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAFklEQVR42mNk+M/wn4EIwDiqYVQDAHUwBP4DyYqgAAAAAElFTkSuQmCC" | base64 -d > icon16.png

# 48x48 blue square  
echo "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAFklEQVR42u3BMQEAAADCoPVPbQwfoAAAAIC3AQ8QAAFJKhRxAAAAAElFTkSuQmCC" | base64 -d > icon48.png

# 128x128 blue square
echo "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAFklEQVR42u3BMQEAAADCoPVPbQwfoAAAAIC3AQ8QAAFJKhRxAAAAAElFTkSuQmCC" | base64 -d > icon128.png

echo "Icons created successfully!"
