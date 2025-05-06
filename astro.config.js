import MillionLint from "@million/lint";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import { custom_pages } from "./data/data.json";

// https://astro.build/config
export default defineConfig({
  site: "https://wiktrek.xyz",
  output: "hybrid",

  integrations: [
    mdx(),
    react(),
    sitemap({
      customPages: custom_pages,
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  prefetch: true,
  adapter: vercel({
    includeFiles: ["./data/data.json"],
  }),

  plugins: [MillionLint.vite()],
});
