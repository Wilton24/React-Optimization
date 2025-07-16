import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import million from 'million/compiler'; // Comment out this import

export default defineConfig({
  plugins: [
    // million.vite(), // Comment out this line
    react(),
  ],
});