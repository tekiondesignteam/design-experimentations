import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/AMC/',
  plugins: [react()],
  build: {
    outDir: '../docs/AMC',
    emptyOutDir: true,
  },
});
