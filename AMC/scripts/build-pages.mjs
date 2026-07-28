// Post-build step for GitHub Pages "deploy from branch" (/docs folder).
// `vite build` already emits the app to ../docs/AMC. This copies the root
// placeholder page and the .nojekyll marker into ../docs so the published
// site root and asset handling stay correct. Run cwd = the AMC/ dir.
import { copyFileSync, writeFileSync, mkdirSync } from 'node:fs';

mkdirSync('../docs', { recursive: true });
copyFileSync('../index.html', '../docs/index.html'); // site root placeholder
writeFileSync('../docs/.nojekyll', ''); // stop Jekyll from stripping _asset files

console.log('✓ Pages build ready in docs/  →  commit docs/ to publish');
