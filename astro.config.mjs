// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://djoudj-dev.github.io',
  base: '/le-vieux-comptoir',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
