import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // Output directory for the production build
    assetsDir: 'assets', // Directory for static assets (images, etc.)
    // Add any other build configuration options you need
  },
  plugins: [react()],
})
