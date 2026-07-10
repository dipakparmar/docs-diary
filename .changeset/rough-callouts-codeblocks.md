---
"docs-diary": minor
---

feat: hand-drawn (rough-notation) callouts, better code blocks, cleaner tables, and fluid titles

- Docusaurus admonitions (`:::note` / `:::tip` / `:::info` / `:::warning` / `:::danger`) now render as hand-drawn rough-notation callouts, with a `<Callout>` component also available in MDX.
- Code blocks: syntax highlighting enabled for the languages the docs use (bash, sql, yaml, …) with unlabelled fences defaulting to bash; switched the dark theme off dracula to a neutral palette; bordered blocks on a neutral surface with a language badge, readable line numbers, and a readable XML prolog in dark mode.
- Tables restyled to clean, blog-style ruled rows.
- Page titles are now fluid (`clamp()`), scaling smoothly from phone to desktop instead of a hard breakpoint.
