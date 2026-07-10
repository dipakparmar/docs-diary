---
"docs-diary": patch
---

perf: fix Lighthouse-flagged render-blocking font, image dimensions, cache headers, and legacy JS; add Cloudflare Workers deploy option

- Inter is now loaded via a `<link>`/`preconnect` in `<head>` instead of a CSS `@import`, removing the dominant cost behind a very slow Largest Contentful Paint.
- Navbar logo now has explicit `width`/`height` to avoid layout shift.
- Hashed `/assets/*` are cached immutably for a year (`vercel.json`, and the equivalent `static/_headers` for Cloudflare).
- Narrowed the production `browserslist` to modern evergreen browsers so the build stops shipping legacy-JS transforms and polyfills.
- Added `wrangler.jsonc` and a `deploy:cf` script so the site can also deploy to Cloudflare Workers, alongside the existing Vercel setup.
