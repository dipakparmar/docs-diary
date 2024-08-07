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
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    // ...
    require.resolve('@cmfcmf/docusaurus-search-local') 
  ],
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
            'https://github.com/dipakparmar/docs-diary/edit/master/',
        },
      
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
