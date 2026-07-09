import { useEffect } from 'react';

// Smooth-scroll for in-page anchor clicks (right-side TOC, heading anchors,
// citations). Docusaurus scrolls the TOC programmatically and ignores CSS
// scroll-behavior, so we intercept the click and drive the scroll ourselves.

const OFFSET = 24; // breathing room above the target heading

export default function SmoothScroll(): null {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!a) return;
      const hash = a.getAttribute('href') || '';
      const id = decodeURIComponent(hash.slice(1));
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      const reduce = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      const y = el.getBoundingClientRect().top + window.scrollY - OFFSET;
      window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
      window.history.pushState(null, '', hash);
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
