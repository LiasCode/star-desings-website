import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://star-designs.pages.dev",
  integrations: [mdx(), sitemap()],
  server: {
    port: 9090,
    host: true,
  },
});
