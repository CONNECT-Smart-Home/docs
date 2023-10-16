// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CONNECT Docs',
  tagline: 'Full information for the best Smart Home CONNECT installers. YoctoCONNECT.',
  favicon: 'img/favicon.png',

  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    require.resolve("@cmfcmf/docusaurus-search-local"),
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-examples',
        path: 'docs-examples',
        routeBasePath: 'docs-examples',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
  ],

  // Set the production url of your site here
  url: 'https://connect-smart-home.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'YoctoCONNECT', // Usually your GitHub org/user name.
  projectName: 'connect-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'CONNECT',
        logo: {
          alt: 'CONNECT Smart Home logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'PRODUCTS',
          },
          {
            to: '/docs-examples/Intro',
            label: 'EXAMPLES',
            position: 'left',
            activeBaseRegex: `/docs-examples/`,
          },
          {
            to: '/faq/',
            label: 'FAQ',
            position: 'left',
            activeBaseRegex: `/faq/`,
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://yoctoconnect.com',
            label: 'to CONNECT site',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/yoctoconnect',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Site',
                href: 'https://yoctoconnect.com',
              },
              {
                html: `
                <script type="text/javascript" >
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                    ym(93450885, "init", {
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                    });
                </script>
                <noscript><div><img src="https://mc.yandex.ru/watch/93450885" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
                `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CONNECT Smart Home Docs.`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          
        }
      },
    }),
};

module.exports = config;
