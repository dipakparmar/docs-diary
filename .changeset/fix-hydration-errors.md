---
"docs-diary": patch
---

fix: prevent hydration errors from block elements folded into paragraphs

- Added a rehype plugin that promotes a `CodeBlock`, `Callout`/`Admonition`, or raw `<pre>`/`<div>`/`<ol>`/etc. out of a paragraph whenever MDX had folded it in (missing blank line, or an indented `:::info` inside a list item). That invalid nesting was causing React error #418 on hydration.
- Removed the dead Splitbee analytics script (the service shut down).
- Favicon now points at the same GitHub avatar dipak.tech uses, instead of a stale local `.ico`.
