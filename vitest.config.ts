import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";
import path from "node:path";

// Runs every Storybook story as a test in a real headless Chromium (via
// Playwright). The stories themselves are the test cases — render + `play`
// interactions + a11y — so no separate *.test.tsx files are needed.
// Docs: https://storybook.js.org/docs/writing-tests/integrations/vitest-addon
export default defineConfig(async () => ({
  plugins: [
    await storybookTest({
      configDir: path.join(import.meta.dirname, ".storybook"),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  test: {
    name: "storybook",
    browser: {
      enabled: true,
      provider: playwright(),
      headless: true,
      instances: [{ browser: "chromium" }],
    },
    // Since Storybook 10.3, @storybook/addon-vitest auto-applies the preview.ts
    // project annotations, so no manual setup file is needed.
  },
}));
