import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'docsDirecte',
  tagline: "Documentation complète pour l'API d'EcoleDirecte",
  favicon: 'img/favicon.ico',

  future: {
    faster: false,
    v4: true,
  },

  url: 'https://docs.directe.qzz.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/softwarevo/docsdirecte/blob/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          filename: "sitemap.xml",
        },
      } satisfies Preset.Options,
    ],
  ],
  
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["fr"],
        indexBlog: false,
        docsRouteBasePath: "/docs",
      },
    ],
  ],

  themeConfig: {
    image: 'img/docsdirecte-social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'docsDirecte',
      logo: {
        alt: 'Logo docsDirecte',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/softwarevo/docsdirecte/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Connexion',
              to: '/docs/category/-connexion',
            },
          ],
        },
        {
          title: 'Communauté',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/softwarevo/docsdirecte/',
            },
            {
              label: 'Collaboration',
              to: '/collaboration',
            },
            {
              label: 'Crédits',
              to: '/credits',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              href: 'mailto:evo@directe.qzz.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} evo. Licence EUPL 1.2.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'http'],
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'forest'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
