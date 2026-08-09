/**
 * Giscus custom theme — the site's amber-on-neutral palette (see custom.css)
 * applied to GitHub's Primer variables inside the giscus iframe.
 *
 * Shipped as a `data:` stylesheet rather than a file in static/: giscus.app
 * fetches the theme URL from its own origin, and Chrome blocks a public origin
 * reaching http://localhost, so a hosted file can never be verified in dev.
 * Inline works identically in both. The `@import` pulls in GitHub's primitives
 * so only the variables that carry the look need restating.
 */

const PALETTE = {
  light: {
    base: 'light',
    canvasSubtle: '#fafafa',
    canvasInset: '#f5f5f5',
    canvasOverlay: '#fff',
    fg: '#171717',
    fgMuted: '#525252',
    fgSubtle: '#737373',
    border: '#e5e5e5',
    borderMuted: '#f0f0f0',
    neutralMuted: '#f5f5f5',
    accent: 'oklch(0.67 0.16 58)',
    accentFg: 'oklch(0.6 0.15 52)',
    // The primary button is the one solid amber fill, so it uses the darkest
    // step of the ramp: white on it measures 5.79:1, where the base amber only
    // reaches 3.14:1. Links and tints keep the brighter accent above.
    btnBg: 'oklch(0.52 0.14 48)',
    btnHover: 'oklch(0.48 0.13 47)',
    btnActive: 'oklch(0.45 0.13 46)',
    btnDisabled: 'oklch(0.72 0.09 52)',
    onAccent: '#fff',
    btnHoverBg: '#f5f5f5',
    btnHoverBorder: '#d4d4d4',
    btnActiveBg: '#ededed',
  },
  dark: {
    base: 'transparent_dark',
    canvasSubtle: '#171717',
    canvasInset: '#0a0a0a',
    canvasOverlay: '#171717',
    fg: '#ededed',
    fgMuted: '#a3a3a3',
    fgSubtle: '#737373',
    border: '#262626',
    borderMuted: '#1f1f1f',
    neutralMuted: '#1f1f1f',
    accent: 'oklch(0.77 0.16 70)',
    accentFg: 'oklch(0.77 0.16 70)',
    // Dark mode inverts: the amber is light, so the ink on it stays near-black.
    btnBg: 'oklch(0.77 0.16 70)',
    btnHover: 'oklch(0.82 0.15 78)',
    btnActive: 'oklch(0.72 0.15 64)',
    btnDisabled: 'oklch(0.5 0.08 66)',
    onAccent: '#0a0a0a',
    btnHoverBg: '#1f1f1f',
    btnHoverBorder: '#404040',
    btnActiveBg: '#262626',
  },
} as const;

const css = (c: (typeof PALETTE)['light' | 'dark']) => `
@import url('https://giscus.app/themes/${c.base}.css');
main {
  --color-canvas-default: transparent;
  --color-canvas-subtle: ${c.canvasSubtle};
  --color-canvas-inset: ${c.canvasInset};
  --color-canvas-overlay: ${c.canvasOverlay};
  --color-fg-default: ${c.fg};
  --color-fg-muted: ${c.fgMuted};
  --color-fg-subtle: ${c.fgSubtle};
  --color-border-default: ${c.border};
  --color-border-muted: ${c.borderMuted};
  --color-neutral-muted: ${c.neutralMuted};
  --color-accent-fg: ${c.accentFg};
  --color-accent-emphasis: ${c.accent};
  --color-accent-muted: color-mix(in srgb, ${c.accent} 30%, transparent);
  --color-accent-subtle: color-mix(in srgb, ${c.accent} 8%, transparent);
  --color-btn-text: ${c.fg};
  --color-btn-bg: transparent;
  --color-btn-border: ${c.border};
  --color-btn-hover-bg: ${c.btnHoverBg};
  --color-btn-hover-border: ${c.btnHoverBorder};
  --color-btn-active-bg: ${c.btnActiveBg};
  --color-btn-selected-bg: ${c.btnActiveBg};
  --color-btn-primary-text: ${c.onAccent};
  --color-btn-primary-bg: ${c.btnBg};
  --color-btn-primary-border: transparent;
  --color-btn-primary-hover-bg: ${c.btnHover};
  --color-btn-primary-hover-border: transparent;
  --color-btn-primary-selected-bg: ${c.btnActive};
  --color-btn-primary-disabled-text: ${c.onAccent}b3;
  --color-btn-primary-disabled-bg: ${c.btnDisabled};
  --color-btn-primary-disabled-border: transparent;
  /* Oldest/Newest segmented control — the sidebar's active-row treatment:
     no track, amber tint on the selected segment. Its selected background
     otherwise falls back to --color-btn-bg, which is transparent here. */
  --color-segmented-control-bg: transparent;
  --color-segmented-control-button-bg: color-mix(in srgb, ${c.accent} 12%, transparent);
  --color-segmented-control-button-selected-border: transparent;
  /* Borderless like the rest of the site — drop Primer's button shadows */
  --color-btn-shadow: none;
  --color-btn-inset-shadow: none;
  --color-btn-primary-shadow: none;
  --color-btn-primary-inset-shadow: none;
  --color-btn-primary-selected-shadow: none;
  --color-primer-shadow-inset: none;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 0.9375rem;
  line-height: 1.7;
}
/* Primer's .btn-primary sets its own text colour, so the variable above loses
   on its own. */
main .btn-primary,
main .btn-primary:hover,
main .btn-primary:focus,
main .btn-primary:disabled {
  color: ${c.onAccent};
}
/* Quiet muted labels, medium weight — matches the site's tabs. The inner .btn
   inherits the tint from its item, so both need the SAME radius or the two
   fills stack at different curves and read as a bubble inside a rectangle. */
main .BtnGroup-item,
main .BtnGroup-item .btn {
  border-radius: 0.5rem;
}
/* The selected fill lands on the <li> and the hover fill on the inner <button>,
   which Primer pads inward — so hover drew a smaller inset pill inside the
   item's box. Zero the item's padding and let the button own it, so both fills
   describe exactly the same shape. */
main .BtnGroup-item {
  padding: 0;
  border: 0;
}
main .BtnGroup-item .btn {
  color: ${c.fgMuted};
  font-weight: 500;
  background: transparent;
  padding: 0.25rem 0.7rem;
}
main .BtnGroup-item--selected .btn {
  color: ${c.fg};
  font-weight: 600;
}
/* Hover is the same tint at lower strength, on the same radius — otherwise
   Primer's grey hover fill reappears as a second shape. */
main .BtnGroup-item .btn:hover {
  color: ${c.fg};
  background: color-mix(in srgb, ${c.accent} 6%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, ${c.accent} 18%, transparent);
}
main .BtnGroup-item--selected .btn:hover {
  background: transparent;
}
main .gsc-comment > div,
main .gsc-comment-box,
main .gsc-reply-box,
main .gsc-social-reaction-summary-item,
main .btn {
  border-radius: 0.625rem;
}
/* ponytail: Inter is not loaded inside the iframe — the stack above falls back
   to the system UI font, which is close enough. Add a fonts @import if it ever
   reads wrong. */
`;

const THEMES = {
  light: `data:text/css,${encodeURIComponent(css(PALETTE.light))}`,
  dark: `data:text/css,${encodeURIComponent(css(PALETTE.dark))}`,
};

export default function giscusTheme(colorMode: 'light' | 'dark'): string {
  return THEMES[colorMode];
}
