import React, { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { annotate } from '@site/src/lib/vendor/rough-notation';
import type { RoughAnnotation } from '@site/src/lib/vendor/rough-notation';

// Hand-drawn (rough-notation) callout — ported from dipak.tech. Draws a sketchy
// box around the block and reveals it on scroll. Deliberately dependency-light:
// inline SVG icons + IntersectionObserver instead of lucide-react + framer-motion.

export type CalloutType =
  | 'note'
  | 'info'
  | 'tip'
  | 'important'
  | 'warning'
  | 'danger'
  | 'caution';

const LABELS: Record<CalloutType, string> = {
  note: 'Note',
  info: 'Info',
  tip: 'Tip',
  important: 'Important',
  warning: 'Warning',
  danger: 'Danger',
  caution: 'Caution',
};

const svg = (paths: ReactNode) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {paths}
  </svg>
);

const ICONS: Record<CalloutType, ReactNode> = {
  note: svg(
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </>,
  ),
  info: svg(
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </>,
  ),
  tip: svg(
    <>
      <path d="M9 18h6M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z" />
    </>,
  ),
  important: svg(
    <path d="M12 3l1.9 4.3L18 9l-4.1 1.7L12 15l-1.9-4.3L6 9l4.1-1.7L12 3ZM19 15l.8 1.8 1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8.8-1.8Z" />,
  ),
  warning: svg(
    <>
      <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4M12 17h.01" />
    </>,
  ),
  danger: svg(
    <>
      <path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9L7.9 2Z" />
      <path d="M12 8v4M12 16h.01" />
    </>,
  ),
  caution: svg(
    <>
      <path d="M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9L7.9 2Z" />
      <path d="M12 8v4M12 16h.01" />
    </>,
  ),
};

export default function Callout({
  type = 'note',
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}): React.JSX.Element {
  const rootRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const anchor = anchorRef.current;
    const root = rootRef.current;
    if (!anchor || !root) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let annotation: RoughAnnotation | null = annotate(anchor, {
      type: 'box',
      strokeWidth: 1.5,
      color: 'currentColor',
      animationDuration: reduced ? 0 : 500,
      animate: !reduced,
      padding: 0,
      iterations: 1,
    });

    let shown = false;
    const reveal = () => {
      if (shown || !annotation) return;
      shown = true;
      window.setTimeout(() => annotation?.show(), reduced ? 0 : 180);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          reveal();
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(root);

    return () => {
      io.disconnect();
      annotation?.remove();
      annotation = null;
    };
  }, []);

  return (
    <div ref={rootRef} className="mdx-callout" data-type={type} role="note">
      <span ref={anchorRef} className="mdx-callout__rough-anchor" aria-hidden="true" />
      <div className="mdx-callout__header">
        {ICONS[type]}
        <span>{title ?? LABELS[type]}</span>
      </div>
      <div className="mdx-callout__body">{children}</div>
    </div>
  );
}
