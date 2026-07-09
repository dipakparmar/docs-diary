import { useEffect } from 'react';

// Liquid hover blob for the docs sidebar. A single pill is injected into the
// sidebar menu and springs (via CSS easing) to whichever item the cursor is
// over, so the highlight flows fluidly between rows instead of snapping.
// Vanilla DOM (no deps) — returns null, all work happens client-side.

const MENU = '.theme-doc-sidebar-menu';
const BLOB = 'sidebar-blob';

export default function SidebarMotion(): null {
  useEffect(() => {
    function moveTo(menu: HTMLElement, blob: HTMLElement, link: HTMLElement) {
      const m = menu.getBoundingClientRect();
      const r = link.getBoundingClientRect();
      blob.style.transform = `translate(${r.left - m.left}px, ${r.top - m.top}px)`;
      blob.style.width = `${r.width}px`;
      blob.style.height = `${r.height}px`;
      blob.style.opacity = '1';
    }

    function onMove(e: Event) {
      const menu = e.currentTarget as HTMLElement;
      const blob = menu.querySelector<HTMLElement>(`:scope > .${BLOB}`);
      const link = (e.target as HTMLElement).closest<HTMLElement>('.menu__link');
      if (blob && link && menu.contains(link)) moveTo(menu, blob, link);
    }

    function onLeave(e: Event) {
      const blob = (e.currentTarget as HTMLElement).querySelector<HTMLElement>(
        `:scope > .${BLOB}`,
      );
      if (blob) blob.style.opacity = '0';
    }

    function attach(menu: HTMLElement) {
      if (menu.dataset.blobInit) return;
      menu.dataset.blobInit = '1';
      const blob = document.createElement('div');
      blob.className = BLOB;
      menu.prepend(blob);
      menu.addEventListener('mousemove', onMove);
      menu.addEventListener('mouseleave', onLeave);
    }

    function scan() {
      document.querySelectorAll<HTMLElement>(MENU).forEach(attach);
    }

    scan();
    // Re-scan when the sidebar (re)mounts on SPA navigation.
    const observer = new MutationObserver(scan);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
