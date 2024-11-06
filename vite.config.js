import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Adjust if deploying in a subdirectory, e.g., '/subdirectory/'
  build: {
    rollupOptions: {
      output: {
        format: 'es',  // Ensures Vite outputs ECMAScript modules
      },
    },
  },
})
