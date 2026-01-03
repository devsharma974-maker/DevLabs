import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Minimal Vite configuration for a React app
export default defineConfig({
  plugins: [react()],
base: "/DevLabs/",
});
