/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pkg from './package.json';

export default defineConfig({
  base: '/',
  plugins: [react()],
  define: { __APP_VERSION__: JSON.stringify(pkg.version) },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
  },
});
