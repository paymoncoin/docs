// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'راهنمای استفاده از رمزارز ملی پیمان',
    tagline: 'به راهنمای استفاده از رمز ارز ملی پیمان خوش آمدید.',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://paymoncoin.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/docs',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'paymoncoin', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fa',
        locales: ['fa'],
        localeConfigs: {
            fa: {
                direction: 'rtl',
            },
        },
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'صفحه اصلی',
                logo: {
                    alt: 'Paymon Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'راهنمای استفاده',
                    },
                    {
                        href: 'https://github.com/paymoncoin',
                        label: 'گیت‌هاب',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'مستندات',
                        items: [
                            {
                                label: 'راهنمای استفاده',
                                to: '/docs/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'شبکه‌های اجتماعی',
                        items: [
                            {
                                label: 'کانال تلگرامی',
                                href: 'https://t.me/paymon_coin',
                            },
                            {
                                label: 'ربات تبدیل',
                                href: 'https://t.me/paymonswapbot',
                            },
                            {
                                label: 'توئیتر',
                                href: 'https://x.com/paymoncoin',
                            },
                            {
                                label: 'بحث و رفع اشکال',
                                href: 'https://t.me/paymongap',
                            },
                        ],
                    },
                    {
                        title: 'اطلاعات بیشتر',
                        items: [
                            {
                                label: 'وب سایت اصلی',
                                href: 'https://paymon.cash',
                            },
                            {
                                label: 'گیت‌هاب',
                                href: 'https://github.com/paymoncoin',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Paymon Project`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
