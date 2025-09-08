import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is the key setting for GitHub Pages deployment
  // It must be the name of your repository, wrapped in slashes.
  base: '/Portfolio/', 
})
