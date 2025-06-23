import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      '13b7937c-4d91-4fdc-b5dc-c90373046234-00-3vv3cwgzt8npy.picard.replit.dev'
    ]
  }
});