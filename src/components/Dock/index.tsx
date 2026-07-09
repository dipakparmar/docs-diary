import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';

// Floating bottom dock — mirrors the nav on dipak.tech (v2). The docs site
// keeps its top navbar + sidebar (docs need them); this dock is the brand /
// cross-site nav, matching the personal site's chrome.

type IconProps = { className?: string };

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5 12 3l9 6.5" />
    <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
  </svg>
);

const NotebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" />
    <rect width="16" height="20" x="4" y="2" rx="2" />
    <path d="M16 2v20" />
  </svg>
);

const PenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const SunIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const MoonIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

// Fire the same Cmd/Ctrl+K that Algolia DocSearch listens for globally — the
// search modal is still mounted (navbar hidden with display:none, not removed).
function openSearch() {
  const isMac =
    typeof navigator !== 'undefined' && /mac|iphone|ipad/i.test(navigator.platform);
  window.dispatchEvent(
    new KeyboardEvent('keydown', {
      key: 'k',
      code: 'KeyK',
      keyCode: 75,
      which: 75,
      metaKey: isMac,
      ctrlKey: !isMac,
      bubbles: true,
      cancelable: true,
    }),
  );
}

function SearchButton() {
  return (
    <button
      type="button"
      className={styles.icon}
      onClick={openSearch}
      aria-label="Search"
      title="Search (⌘K)"
    >
      <SearchIcon />
    </button>
  );
}

// Mobile only: opens the docs sidebar drawer (the drawer still renders; only
// the navbar bar that used to toggle it is hidden).
function MenuButton() {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <button
      type="button"
      className={clsx(styles.icon, styles.mobileOnly)}
      onClick={() => mobileSidebar.toggle()}
      aria-label="Open navigation"
      title="Menu"
    >
      <MenuIcon />
    </button>
  );
}

function ThemeToggle() {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <button
      type="button"
      className={styles.icon}
      onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle color theme"
      title="Theme"
    >
      <SunIcon className={styles.sun} />
      <MoonIcon className={styles.moon} />
    </button>
  );
}

function DockLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={styles.icon} aria-label={label} title={label}>
      {children}
    </Link>
  );
}

export default function Dock() {
  return (
    <div className={styles.dockWrap}>
      <div className={styles.dockFade} aria-hidden="true" />
      <nav className={styles.dock} aria-label="Site navigation">
        <MenuButton />
        <DockLink href="https://dipak.tech" label="Home"><HomeIcon /></DockLink>
        <DockLink href="/" label="Docs Diary"><NotebookIcon /></DockLink>
        <DockLink href="https://dipak.tech/blog" label="Blog"><PenIcon /></DockLink>
        <SearchButton />
        <span className={styles.sep} aria-hidden="true" />
        <DockLink href="https://dipak.to/twitter" label="X (Twitter)"><XIcon /></DockLink>
        <DockLink href="https://github.com/dipakparmar/docs-diary" label="GitHub"><GitHubIcon /></DockLink>
        <span className={styles.sep} aria-hidden="true" />
        <ThemeToggle />
      </nav>
    </div>
  );
}
