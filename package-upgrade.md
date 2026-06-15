# Package Upgrade — 2026-06

Full dependency refresh of `@nusameta/design-system`. Every breaking change below was researched
against official changelogs/migration guides and verified against this codebase before being applied.
Branch: `chore/package-upgrade` (off `main` @ 27aabd1).

## Upgrade matrix

### Major versions

| Package | From | To | Breaking changes that apply here | Fix applied |
|---|---|---|---|---|
| vite | 6.4.1 | 8.0.16 | Rolldown+Oxc replace Rollup+esbuild; `build.rollupOptions` → `build.rolldownOptions`; esbuild no longer ships with vite (`minify: "esbuild"` invalid without an explicit esbuild dep); `assetInfo.name` deprecated in `assetFileNames` callbacks; default `build.target` raised to Baseline Widely Available; CSS minified by Lightning CSS | vite.config.ts: renamed to `rolldownOptions`, removed `minify: "esbuild"` (Oxc default), `assetInfo.name` → `assetInfo.names?.[0]`; dist output diffed before/after |
| @vitejs/plugin-react | ^4.3.4 | 6.0.2 | v6 peers on vite ^8.0.0 only; Babel support removed (`babel` option gone) | None needed — `react()` is called with no options; bumped atomically with vite 8. Optional peers (@rolldown/plugin-babel, babel-plugin-react-compiler) intentionally NOT installed |
| vite-plugin-dts | ^4.5.0 | 5.0.2 | v5 is a wrapper over unplugin-dts; option renames (`rollupTypes`→`bundleTypes`, `outDir`→`outDirs`, …); api-extractor/@vue/language-core no longer bundled | None needed — `dts({ insertTypesEntry, include })` uses only options that survived v5 unchanged. Prerequisite for TS 6 (4.5.x pins pre-TS6 volar/api-extractor) |
| typescript | 5.9.3 | 6.0.3 | `baseUrl` deprecated (TS5101, removed in TS 7); `rootDir` default changed to tsconfig dir; `types` default no longer pulls all of node_modules/@types | tsconfig.json: deleted `baseUrl` (`paths` is tsconfig-relative, keeps working), added `"rootDir": "./src"` defensively. Pre-validated: 6.0.3 compiles this repo with 0 errors even with `--skipLibCheck false` |
| lucide-react | ^0.562.0 | ^1.17.0 | 18 brand icons removed in v1 (`Github` among them); icons now default `aria-hidden="true"`; UMD build dropped | `Github` → `GitBranch` in Menu.stories.tsx (demo content; only brand icon used). aria-hidden default is correct behavior — icon-only buttons already carry sr-only/aria patterns. No other renames: all 22 other icons/aliases used here verified present in 1.17.0 |

### Lockstep constraint (verified peer ranges)

`vite@8` + `@vitejs/plugin-react@6` + `storybook@10.4.3` family + `vitest@4.1.8` family + `@tailwindcss/vite@4.3.0`
must land together: the previously installed @storybook/builder-vite 10.2.7, @tailwindcss/vite 4.1.18, and
vitest 4.0.18 all cap their vite peer at ^7. Storybook addons pin `storybook ^10.4.3`; vitest pins
@vitest/browser-playwright and @vitest/coverage-v8 to exactly 4.1.8.

### Minor / patch

| Package | From | To | Notes |
|---|---|---|---|
| storybook, @storybook/addon-a11y, addon-docs, react-vite, addon-vitest | 10.2.7 | 10.4.3 | No config changes (MIGRATION.md has no react-vite items for 10.3/10.4) |
| @chromatic-com/storybook | 5.0.0 | 5.2.1 | Peer-range widening + additive features |
| vitest, @vitest/browser-playwright, @vitest/coverage-v8 | 4.0.18 | 4.1.8 | Locator strict-mode change affects webdriverio/preview providers only (we use playwright) |
| playwright | 1.58.1 | 1.60.0 | Chromium 148; run `yarn playwright install` after upgrading |
| tailwindcss, @tailwindcss/postcss, @tailwindcss/vite | 4.1.18 | 4.3.0 | Deprecated `start-*`/`end-*`/`shadow-inner`: zero usages in src/ |
| tailwind-merge | 3.4.0 | 3.6.0 | 3.6.0 adds TW 4.3 class-group support — must move with tailwindcss; `extendTailwindMerge({prefix:"nm:"})` unchanged |
| react-aria-components | 1.17.0 | 1.18.0 | 1.18 `@deprecated`s the all-in-one `Checkbox` (→ `CheckboxField` + `CheckboxButton`); our `Checkbox` wrapper migrated to the split, drop-in (no public API change). `CheckboxGroup`/`ComposedCheckboxGroup` unaffected |
| react, react-dom | 19.2.4 | 19.2.7 | 19.2.6 had a Server Actions FormData regression — went straight to .7 |
| @types/react | 19.2.10 | 19.2.17 | Routine |
| postcss | 8.5.6 | 8.5.15 | Security fixes (XSS via unescaped `</style>`; arbitrary file read) |
| @changesets/cli | 2.29.8 | 2.31.0 | `changeset publish` (flagless) unaffected by new flag validation |
| @types/node | 25.2.0 | 25.9.2 | Routine |

Unchanged: yalc, class-variance-authority, clsx.

## Bug fixed along the way

**Broken CJS entry (pre-existing on main).** `package.json` has `"type": "module"`, so Node parses
`dist/index.cjs.js` as ESM — `require('@nusameta/design-system')` returned an empty module in plain Node
(bundler-based consumers were unaffected, which is why it went unnoticed). Fixed by emitting the CJS bundle
as `dist/index.cjs` and updating `main`/`exports.require`. Safe rename: the `exports` map already blocks deep
dist imports. Verified: `require()` now returns all 63 exports.

## Removed (dead weight)

- **vite-plugin-banner** — imported in vite.config.ts but never registered in `plugins`; the `"use client"`
  banner actually comes from `rolldownOptions.output.banner`
- **tailwindcss-animate + tailwind.config.ts** — Tailwind v4 never loads the config file (no `@config`
  directive in any CSS); the animate utilities used are hand-rolled as `@utility` rules in src/styles/style.css
- **postcss-preset-env** — unused runtime dependency; postcss.config.ts loads only @tailwindcss/postcss

## Dependency placement fixes

Moved build-time tools out of runtime `dependencies` → `devDependencies`:
`@storybook/addon-vitest`, `@tailwindcss/vite`.

## Added

- **ESLint 10 + typescript-eslint 8.61 + eslint-plugin-react-hooks 7** (flat `eslint.config.js`) — the
  `lint` script existed but eslint was never installed or configured. (ESLint 10 rather than the planned 9:
  it was `latest` at execution time and typescript-eslint supports it.) The initial run found 10 errors,
  all fixed: 6 unused imports, 2 `useState`-inside-story-render violations in Menu.stories.tsx (extracted
  into named demo components), 1 untyped sort handler in Table.stories.tsx.

## Verification results

- [x] `yarn build` — all dist artifacts emitted, `"use client"` banner present in both bundles
- [x] dist diff vs pre-upgrade baseline reviewed — CSS custom properties identical, 289 unique `nm:`
      selectors before and after, remaining diffs are minifier formatting (Oxc/Lightning CSS); ES bundle
      shrank 555 → 486 kB, build time 4.7s → 2.7s
- [x] `yarn tsc --noEmit` under TS 6.0.3 — zero errors, no deprecation warnings
- [x] `yarn build-storybook` — green under vite 8; dev server smoke-tested (HTTP 200)
- [x] CJS smoke test — `require('./dist/index.cjs')` returns all 63 exports (was 0 before the fix);
      ESM `import()` also 63
- [x] `yarn lint` — green
- [x] Vitest story tests — **wired up**: added `vitest.config.ts` using `@storybook/addon-vitest`'s
      `storybookTest` plugin + the Vitest 4 Playwright browser provider (headless Chromium). `yarn test`
      now runs every story as a test — **9 files, 75 tests pass**. (Previously unrunnable: no test files
      and no vitest config, so `vitest run` exited "No test files found".)

## Resolved in this PR

- **react-aria-components 1.18 `Checkbox` deprecation** — RAC 1.18 `@deprecated`s the all-in-one `Checkbox`
  in favor of `CheckboxField` + `CheckboxButton`. `src/components/checkbox/Checkbox.tsx` was migrated to the
  split: `CheckboxField` (root, carries state) wraps `CheckboxButton` (the `group/checkbox` clickable label
  holding the indicator). Drop-in — `Checkbox`/`CheckboxGroup`/`ComposedCheckboxGroup` exports, props, and
  rendered output are unchanged; stories untouched. (`Radio`/`Switch` have no wrappers in this repo, so there
  was nothing to migrate there.)

## Follow-ups (out of scope, tracked here)

1. **TS 7 (Go-native) horizon**: everything deprecated in TS 6.0 hard-errors in 7.0. This upgrade already
   removed the only offender (`baseUrl`).
2. Consider re-evaluating whether bundling react-aria-components into dist (current behavior — only react,
   react-dom, react/jsx-runtime are externalized) is intentional; externalizing would shrink the bundle and
   deduplicate RAC contexts in consumer apps that also use RAC directly.
3. **`CheckboxField` native help text**: `CheckboxField` natively supports per-checkbox
   `<Text slot="description">` / `FieldError`. The drop-in `Checkbox` doesn't wire this up yet — available as
   a future enhancement.
