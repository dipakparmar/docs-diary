module.exports = {
  title: `Dipak's Docs Diary`,
  tagline: '',
  url: 'https://dipakparmar.github.io/docs-diary/',
  baseUrl: '/docs-diary/',
  favicon: 'img/favicon.ico',
  organizationName: 'dipakparmar', // Usually your GitHub org/user name.
  projectName: 'docs-diary', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: `Dipak's Docs Diary`,
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
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
          homePageId: 'doc1',
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
