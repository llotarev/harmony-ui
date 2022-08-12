import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svg from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), dts(), svg()],
  resolve: {
    alias: {
      "@": resolve(__dirname, ".", "src")
    }
  },
  css: {
    modules: {
      generateScopedName: "[local]_[hash:base64:4]"
    }
  },
  build: {
    minify: true,
    lib: {
      entry: resolve(__dirname, ".", "src", "index.ts"),
      formats: ["cjs", "es"],
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"]
    }
  }
});
