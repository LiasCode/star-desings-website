import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://star-designs.pages.dev",
  integrations: [sitemap()],
  output: "static",
  server: {
    port: 9090,
    host: true,
    open: true,
  },
});
