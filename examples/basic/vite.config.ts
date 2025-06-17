import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "./main.ts",
      output: {
        entryFileNames: "main.js",
        format: "iife",
        name: "t_basic_example",
      },
    },
  },
});
