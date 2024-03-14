import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import astroMetaTags from 'astro-meta-tags';
import mdx from '@astrojs/mdx';
import db from '@astrojs/db';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.danielcg.dev/',
  output: 'server',
  image: {
    service: passthroughImageService()
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: 'min-dark',
      wrap: true
    }
  },
  integrations: [astroMetaTags(), tailwind(), preact(), mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'min-dark',
      wrap: true
    },
    drafts: true
  }), db()],
  adapter: vercel()
});