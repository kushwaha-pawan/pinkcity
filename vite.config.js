import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // ✅ Add this server configuration for local development
  server: {
    historyApiFallback: true,
    allowedHosts: ['localhost']
  },
  
  // ✅ Add this for production build
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  
  // ✅ Add base path (important for Vercel)
  base: '/'
})