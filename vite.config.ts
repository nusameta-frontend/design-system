import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      include: ["src"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        reset: path.resolve(__dirname, "src/styles/reset.css"),
        style: path.resolve(__dirname, "src/styles/style.css"),
      },
      name: "NusametaDesignSystem",
      // .cjs extension is required: "type": "module" makes Node parse a .js
      // file as ESM, which silently breaks require() of the CJS bundle
      fileName: (format) => (format === "es" ? "index.es.js" : "index.cjs"),
      formats: ["es", "cjs"],
    },
    rolldownOptions: {
      // Externalize every bare import (all runtime deps + their subpaths) so no
      // third-party CJS — e.g. use-sync-external-store, pulled in transitively by
      // react-aria-components — gets inlined and forces rolldown's dynamic
      // require() interop shim. That shim breaks ESM consumers like Next 16 /
      // Turbopack ("dynamic usage of require is not supported"). Only our own
      // source (relative, absolute, or "@/" alias) is bundled.
      external: (id) =>
        !id.startsWith(".") && !path.isAbsolute(id) && !id.startsWith("@/"),
      output: {
        banner: '"use client";',
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] ?? assetInfo.name;
          if (name === "style.css") return "index.css";
          if (name === "reset.css") return "reset.css";
          return name || "assets/[name]-[hash][extname]";
        },
      },
    },
    sourcemap: true,
    cssCodeSplit: true,
  },
});
