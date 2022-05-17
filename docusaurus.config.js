const isDeployPreview =
  !!process.env.VERCEL_ENV === 'development' || !!process.env.VERCEL_ENV === 'preview';

module.exports = {
  title: `Dipak's Docs Diary`,
  tagline: '',
  url: 'https://docs.dipak.tech',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'dipakparmar', 
  projectName: 'docs-diary', 
  scripts: [
    {
      src: 'https://cdn.splitbee.io/sb.js',
      async: true,
    },
  ],
  themeConfig: ({
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: `Dipak's Docs Diary`,
      hideOnScroll: true,
      logo: {
        alt: 'Docs Diary',
        src: 'img/logo.svg',
      },
      items: [
        // Left Navbar items
        {
          type: 'doc',
          docId: 'git/basic',
          position: 'left',
          label: 'Docs',
        },
        // Right Navbar items
        {
          href: 'https://dipak.to/twitter?utm_source=docs.dipak.tech&utm_medium=nav_link&utm_campaign=dipaks_docs_diary',
          position: 'right',
          className: 'header-twitter-link',
          'aria-label': 'Twitter',
        },
        {
          href: 'https://github.com/dipakparmar/docs-diary?utm_source=docs.dipak.tech&utm_medium=nav_link',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Dipak's Docs Diary. Built with Docusaurus.`,
    },
  }),
  themes: [],
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/dipakparmar/docs-diary/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: !isDeployPreview
        ? {
          trackingID: 'G-EZ7C3BQQ3J',
          anonymizeIP: false,
        } 
        : undefined,
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
      },

    ],
  ],
};
