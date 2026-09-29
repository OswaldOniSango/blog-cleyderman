import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  // GitHub Pages entrega el subdirectorio sin la barra final.
  // La normalizamos para que los enlaces no queden como
  // `/blog-cleydermanhistorias/`.
  base: (process.env.BASE_PATH || '/').replace(/\/?$/, '/'),
  integrations: [sitemap()],
});
