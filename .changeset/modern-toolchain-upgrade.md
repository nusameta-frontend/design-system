---
"@nusameta/design-system": minor
---

Toolchain and dependency refresh, plus a CJS packaging fix:

- **Fixed broken CJS entry**: `require('@nusameta/design-system')` previously returned an empty
  module in plain Node (the CJS bundle had a `.js` extension under `"type": "module"`). The CJS
  bundle is now emitted as `dist/index.cjs` and `main`/`exports.require` point to it.
- Upgraded the bundled icon set lucide-react 0.x → 1.x (icons are bundled, not externalized, so
  no consumer action needed; icons now render `aria-hidden="true"` by default when decorative).
- Upgraded react-aria-components to 1.18, tailwind-merge to 3.6, and rebuilt with Vite 8
  (Rolldown/Oxc), TypeScript 6, and Tailwind CSS 4.3.
- Removed unused runtime dependencies (postcss-preset-env) and moved build-time tooling out of
  `dependencies`.
