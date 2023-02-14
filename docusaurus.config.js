// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const isDeployPreview =
  process.env.VERCEL_ENV === 'development' ||
  process.env.VERCEL_ENV === 'preview';

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: `Dipak's Docs Diary`,
    tagline: '',
    url: 'https://docs.dipak.tech',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    trailingSlash: false,
    favicon: 'img/favicon.ico',
    organizationName: 'dipakparmar',
    projectName: 'docs-diary',
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },
    scripts: [
      {
        src: 'https://cdn.splitbee.io/sb.js',
        async: true,
      },
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        image:
          'https://opengraph.githubassets.com/5f64176affcb4de799b0eb3903e8e71e35d89e9022c4953e88f9b879302bead0/dipakparmar/docs-diary',
        liveCodeBlock: {
          playgroundPosition: 'bottom',
        },
        docs: {
          sidebar: {
            hideable: false,
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
          hideOnScroll: false,
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
              type: 'search',
              position: 'right',
            },
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
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        footer: {
          // style: 'light',
          copyright: `Copyright © 2020-${new Date().getFullYear()} Dipak's Docs Diary. <a href="https://docusaurus.io/">Built with Docusaurus.</a>`,
        },
        algolia: {
          appId: 'NOKG2EH40V',
          apiKey: '6711f63fe1e318da1f4bb8b811d59df3',
          indexName: 'dipak',
          contextualSearch: true,
        },
      }),
    themes: [],
    plugins: [
      [
        require.resolve('@docusaurus/plugin-client-redirects'),
        {
          redirects: [
            {
              to: '/troubleshooting-fixes/macos/macos-dock-changes-position',
              from: '/troubleshooting-fixes/macos',
            },
          ],
          createRedirects(existingPath) {
            if (existingPath.includes('/')) {
              // Redirect from /docs/X to /X
              return [existingPath.replace('/', '/docs/')];
            }
            return undefined; // Return a falsy value: no redirect created
          },
        },
      ],
      [
        require.resolve('@dipakparmar/docusaurus-plugin-umami'),
        /** @type {import('@dipakparmar/docusaurus-plugin-umami').Options} */
        ({
          websiteID: 'c401b94a-f278-46e3-bc17-72e9494f1375',
          analyticsDomain: 'analytics.dipak.io',
          scriptName: 'ua.js',
          dataDoNotTrack: true,
          dataDomains: 'docs.dipak.tech',
        }),
      ],
      async function tailwindcss(context, options) {
        return {
          name: 'docusaurus-tailwindcss',
          configurePostCss(postCssOptions) {
            // Appends TailwindsCSS and AutoPrefixer
            postCssOptions.plugins.push(require('tailwindcss'));
            postCssOptions.plugins.push(require('autoprefixer'));
            return postCssOptions;
          },
        };
      },
    ],
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            routeBasePath: '/',
            sidebarPath: require.resolve('./sidebars.js'),
            sidebarCollapsible: false,
            editUrl: 'https://github.com/dipakparmar/docs-diary/edit/main/',
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
        }),
      ],
    ],
  }
);
