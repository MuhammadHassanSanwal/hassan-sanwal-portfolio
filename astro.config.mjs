// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// `site` is the canonical URL used for sitemap, robots and any absolute
// URLs we generate. Swap this to your custom domain whenever you point
// one at the Vercel project (e.g. https://hassansanwal.dev).
export default defineConfig({
  site: "https://hassan-sanwal-portfolio.vercel.app",
  trailingSlash: "ignore",
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    sitemap({
      lastmod: new Date(),
      changefreq: "monthly",
      priority: 1.0,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
