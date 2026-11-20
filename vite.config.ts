import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // No custom domain yet: served from https://norin-web.github.io/sorav1rf/.
  // Once a domain is attached in Pages, switch to base: "/" AND add public/CNAME in the same commit.
  base: "/sorav1rf/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
