import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://wiktrek.xyz',
  output: 'server',
  integrations: [tailwind(), mdx(), sitemap({
    customPages: ['https://project.wiktrek.xyz', 'https://svelte.wiktrek.xyz', 'https://term.wiktrek.xyz/', 'https://project.wiktrek.xyz/projects/url', 'https://project.wiktrek.xyz/projects/poll']
  }), react()],
  adapter: vercel()
});