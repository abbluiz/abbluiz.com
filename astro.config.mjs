// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkHeadingId from 'remark-heading-id';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.abbluiz.com',
  output: 'static',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkHeadingId],
  },
});
