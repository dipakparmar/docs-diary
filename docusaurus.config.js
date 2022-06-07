const isDeployPreview =
  !!process.env.VERCEL_ENV === 'development' || !!process.env.VERCEL_ENV === 'preview';

module.exports = {
  title: `Dipak's Docs Diary`,
  tagline: '',
  url: 'https://docs.dipak.tech',
  baseUrl: '/',
  trailingSlash: false,
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
          to: '/tags',
          label: 'Tags',
          position: 'left',
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
    algolia: {
      // The application ID provided by Algolia
      appId: 'NOKG2EH40V',

      // Public API key: it is safe to commit it
      apiKey: '6711f63fe1e318da1f4bb8b811d59df3',

      indexName: 'dipak',

      // Optional: see doc section below
      contextualSearch: true,
    },
  }),
  themes: [],
  plugins: [[require.resolve("@docusaurus/plugin-client-redirects"), {
    createRedirects(existingPath) {
      if (existingPath.includes('/')) {
        // Redirect from /docs/X to /X 
        return [
          existingPath.replace('/', '/docs/'),
        ];
      }
      return undefined; // Return a falsy value: no redirect created
    },
  }], [require.resolve("@dipakparmar/docusaurus-plugin-umami"), {
    websiteID: 'c401b94a-f278-46e3-bc17-72e9494f1375',
    analyticsDomain: 'analytics.dipak.io',
    scriptName: "ua.js",
    dataDoNoTrack: true,
    dataDomains: "docs.dipak.tech"
  }]],
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
