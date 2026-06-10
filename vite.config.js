import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            if (id.includes('react-router-dom')) {
              return 'react-router';
            }
            if (id.includes('react-icons')) {
              return 'react-icons';
            }
            return 'libs';
          }
        },
      },
    },
    // Reduce chunk size warnings
    chunkSizeWarningLimit: 600,
    // Enable minification
    minify: 'terser',
    // Optimize for performance
    sourcemap: false,
    // Assets inline limit
    assetsInlineLimit: 4096,
  },
  // Dev server optimizations
  server: {
    middlewareMode: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
})
