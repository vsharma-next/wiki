// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'wiki',
  tagline: 'some notes are more useful than others',
  url: 'https://vsharma-next.github.io',
  baseUrl: '/wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/lion.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vsharma-next', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
	  routeBasePath: '/', 
          // Please change this to your repo.
        },
        blog: false, //{
//          showReadingTime: true,
          // Please change this to your repo.
//         },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/lion.svg',
        },
        items: [
          {
            href: 'https://github.com/vsharma-next/wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
       prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
