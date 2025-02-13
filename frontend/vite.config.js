import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // ** Split the node_modules library **
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react'; // React Core Libraries
            if (id.includes('react-router-dom')) return 'vendor-router'; // React Router
            if (id.includes('axios')) return 'vendor-axios'; // Axios library request
            if (id.includes('lodash')) return 'vendor-lodash'; // Lodash Tools Library
            return 'vendor'; // others
          }
          return null;
        },
      },
    },
  },
});
