import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/ui-practice/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"],
    },
    setupFiles: ["/vitest-setup.ts"],
  },
});
