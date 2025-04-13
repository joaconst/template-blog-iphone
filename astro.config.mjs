import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://creative-productivity.blog',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});