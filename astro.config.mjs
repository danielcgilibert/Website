import { defineConfig, passthroughImageService } from 'astro/config';
import preact from '@astrojs/preact';
import astroMetaTags from 'astro-meta-tags';

import vercel from "@astrojs/vercel/serverless";
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.danielcg.dev/',
  image: {
    service: passthroughImageService()
  },

  integrations: [astroMetaTags(), preact(),],

  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  }
});