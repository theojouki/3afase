import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Emojidle',
        short_name: 'ED',
        description: 'Jogo de criar histórias com emojis',
        theme_color: '#ff6961',
        icons: [
          {
            src: '***icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '***icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});