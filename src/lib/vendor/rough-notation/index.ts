// Vendored from rough-notation v0.5.1 — MIT © 2020 Preet Shihn.
// Upstream: https://github.com/rough-stuff/rough-notation
// See ./LICENSE.
//
// This barrel re-exports the public API that consumers in this repo use,
// so callers can `import { annotate, type RoughAnnotation } from '@/lib/vendor/rough-notation'`.

export { annotate, annotationGroup } from './rough-notation';
export type {
  RoughAnnotation,
  RoughAnnotationGroup,
  RoughAnnotationConfig,
  RoughAnnotationConfigBase,
  RoughAnnotationType,
  BracketType,
  RoughPadding,
  FullPadding,
  Rect,
} from './model';
