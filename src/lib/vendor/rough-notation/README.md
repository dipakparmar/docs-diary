# rough-notation (vendored)

This directory is a verbatim copy of the TypeScript source of
[`rough-notation`](https://github.com/rough-stuff/rough-notation) **v0.5.1**, by
[Preet Shihn](https://github.com/pshihn), licensed under the MIT License (see
`LICENSE` in this directory).

## Why vendored

The upstream package is no longer maintained — no commits in years and the
published npm package lists `roughjs` as a `devDependency`, so installing
`rough-notation` from npm doesn't pull its real runtime dep. Vendoring the
source keeps the library available, makes the runtime dependency explicit
(`roughjs`, listed in this repo's `package.json`), and lets us patch or
tree-shake it locally if needed.

## What's here

- `keyframes.ts`, `model.ts`, `render.ts`, `rough-notation.ts` — source from
  `master` at the time of vendoring, with a small license-attribution header
  added at the top of each file. One local adaptation in `render.ts`: the
  `combineNestedSvgPaths` field was removed (no longer on roughjs's
  `ResolvedOptions`) and `preserveVertices` + `fillShapeRoughnessGain` were
  added (now required), all matching roughjs's own defaults.
- `index.ts` — local barrel that re-exports the public API used by this repo.
- `LICENSE` — the upstream MIT license, preserved verbatim.

## Usage

```ts
import { annotate, type RoughAnnotation } from '@/lib/vendor/rough-notation';
```

The library depends on [`roughjs`](https://github.com/rough-stuff/rough), which
remains a normal npm dependency.
