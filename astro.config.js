import MillionLint from "@million/lint";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import { custom_pages } from "./data/data.json";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://wiktrek.xyz",
  output: "static",

  integrations: [
    mdx(),
    react(),
    sitemap({
      customPages: custom_pages,
    }),
  ],

  prefetch: true,

  adapter: vercel({
    includeFiles: ["./data/data.json"],
  }),

  plugins: [MillionLint.vite()],

  vite: {
    plugins: [tailwindcss()],
  },
});
