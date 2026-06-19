---
"@nusameta/design-system": patch
---

Externalize all third-party runtime dependencies in the Vite/rolldown build so the ESM bundle (`dist/index.es.js`) no longer inlines a dynamic `require()` interop shim. Fixes "dynamic usage of require is not supported" thrown by Next 16 / Turbopack consumers.
