import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/design-experimentations/docs/AMC/',
  plugins: [react()],
  build: {
    outDir: '../docs/AMC',
    emptyOutDir: true,
  },
});
