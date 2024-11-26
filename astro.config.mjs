import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',  // para renderizar en el lado del servidor y del cliente
  integrations: [
    tailwind(),
    react(),
  ],
});
