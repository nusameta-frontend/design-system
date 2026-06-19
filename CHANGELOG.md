# design-system

## 1.0.0-beta.6

### Patch Changes

- bd30214: Externalize all third-party runtime dependencies in the Vite/rolldown build so the ESM bundle (`dist/index.es.js`) no longer inlines a dynamic `require()` interop shim. Fixes "dynamic usage of require is not supported" thrown by Next 16 / Turbopack consumers.

## 1.0.0-beta.5

### Minor Changes

- 29c6d1d: Toolchain and dependency refresh, plus a CJS packaging fix:

  - **Fixed broken CJS entry**: `require('@nusameta/design-system')` previously returned an empty
    module in plain Node (the CJS bundle had a `.js` extension under `"type": "module"`). The CJS
    bundle is now emitted as `dist/index.cjs` and `main`/`exports.require` point to it.
  - Upgraded the bundled icon set lucide-react 0.x → 1.x (icons are bundled, not externalized, so
    no consumer action needed; icons now render `aria-hidden="true"` by default when decorative).
  - Upgraded react-aria-components to 1.18, tailwind-merge to 3.6, and rebuilt with Vite 8
    (Rolldown/Oxc), TypeScript 6, and Tailwind CSS 4.3.
  - Migrated the `Checkbox` wrapper off the now-deprecated react-aria-components `Checkbox` primitive
    to the `CheckboxField` + `CheckboxButton` split (drop-in; existing usage unchanged), and added
    optional `description` and `errorMessage` props for per-checkbox help text and validation.
  - Switched `ListBoxSection` / `MenuSection` / `SelectSection` to react-aria-components' non-deprecated
    per-collection section components (no API change).
  - Removed unused runtime dependencies (postcss-preset-env) and moved build-time tooling out of
    `dependencies`.

## 1.0.0-beta.4

### Minor Changes

- 8f8ae56: add new menu component and fix input styling

## 1.0.0-beta.3

### Minor Changes

- a1197bd: add modal component

## 1.0.0-beta.2

### Patch Changes

- e4384a4: fix design token naming

## 1.0.0-beta.1

### Patch Changes

- 9160b90: add design token to table and popover

## 1.0.0-beta.0

### Major Changes

- dfefcb3: upgrade tailwind version from 3 to 4

### Minor Changes

- 8a705b4: add select component
- 962dbfc: add new table component and fix color system

### Patch Changes

- dfefcb3: add new design token for button

## 0.0.4

### Patch Changes

- 9b55175: add ci/cd with changeset

## 0.0.1

### Patch Changes

- add changesets for versioning
