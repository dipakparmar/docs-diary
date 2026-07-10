// Vendored from rough-notation v0.5.1 — MIT © 2020 Preet Shihn.
// Upstream: https://github.com/rough-stuff/rough-notation
// See ./LICENSE.

declare global {
  interface Window {
    __rno_kf_s?: HTMLStyleElement;
  }
}

export function ensureKeyframes() {
  if (!window.__rno_kf_s) {
    const style = document.createElement('style');
    window.__rno_kf_s = style;
    style.textContent = `@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }`;
    document.head.appendChild(style);
  }
}
