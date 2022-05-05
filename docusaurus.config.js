module.exports = {
  title: `Dipak's Docs Diary`,
  tagline: '',
  url: 'https://docs.dipak.tech',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'dipakparmar', // Usually your GitHub org/user name.
  projectName: 'docs-diary', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: `Dipak's Docs Diary`,
      logo: {
        alt: 'Docs Diary',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'git/basic',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/dipakparmar/docs-diary',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Dipak's Docs Diary. Built with Docusaurus.`,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: '811JRMR9J0',

      // Public API key: it is safe to commit it
      apiKey: '9a7fa11a20e907755db4dd6f7134fdff',

      indexName: 'prod_docs_dipak_tech',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Algolia search parameters
      // searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      // searchPagePath: 'search',

      //... other Algolia params
    },
  },
  themes: [],
  plugins: [],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          // homePageId: '/git/basic', Deprecated 
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/dipakparmar/docs-diary/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-JZLBQHD1EC',
          anonymizeIP: false,
        },
      },

    ],
  ],
};
