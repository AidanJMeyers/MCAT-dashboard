import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  base: '/MCAT-dashboard/',
  build: { outDir: 'dist', chunkSizeWarningLimit: 4000 }
});
