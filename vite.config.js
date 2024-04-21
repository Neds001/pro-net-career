// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const manifestForPlugin = {
  registerType: 'prompt',
  includeAssets: ['logo.png'],
  manifest: {
    name: "Professional Network Career",
    short_name: "ProNetCareer",
    description: "ProNetCareer is the world's largest professional network on the internet. You can use ProNetCareer to find the right job or internship, connect and strengthen professional relationships, and learn the skills you need to succeed in your career.",
    icons: [
      {
        src: '/assets/images/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'favicon'
      },
      {
        src: '/assets/images/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'favicon'
      },
      {
        src: '/assets/images/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ],
    theme_color: '#181818',
    background_color: '#e0cc3b',
    display: "standalone",
    scope: '/',
    start_url: "/",
    orientation: 'portrait'
  },
};

export default defineConfig({
  plugins: [
    react(),
    VitePWA(manifestForPlugin)
  ],
});
