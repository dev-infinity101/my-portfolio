import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Important for routing
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable for production
    minify: 'terser' // Better minification
  }
})
