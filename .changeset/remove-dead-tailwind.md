---
"docs-diary": patch
---

chore: remove dead Tailwind wiring

- Tailwind was never actually compiled — the PostCSS plugin's `configurePostCss` hook was fully commented out, so the `@tailwind` directives in `custom.css` shipped to the browser as inert dead text.
- Removed the `@tailwind` directives, the no-op `tailwindcss()` plugin block, the unused `ReadingTime.js` component (the only file that referenced Tailwind classNames, and it was never imported), and the `tailwindcss` dependency.
