import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',  // para renderizar en el lado del servidor y del cliente
  adapter: vercel({
    mode: "standalone"
  }),
  integrations: [
    tailwind(),
    react(),
  ],
});
