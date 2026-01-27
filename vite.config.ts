import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import banner from "vite-plugin-banner";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src"],
    }),
    banner(' "use client"; '),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "NusametaDesignSystem",
      fileName: (format) => `index.${format === "es" ? "es" : "cjs"}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) return "index.css";
          return assetInfo.name || "assets/[name]-[hash][extname]";
        },
      },
    },
    sourcemap: true,
    cssCodeSplit: false,
    minify: "esbuild",
  },
});
