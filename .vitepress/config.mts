import { defineConfig } from 'vitepress'





// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hackvens",
  description: "Conférences & CTF by Advens",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '2025', link: '/' },
      { text: 'Editions précédentes', link: '/editions' }
    ],

    sidebar: {
      '/editions/': [
        {
          text: 'Prochaine édition',
          items: [
            {text:'2025 - Lille', link: '/editions/2025'}
          ]
        },
        {
          text: 'Editions précédentes',
          items: [
            {text: '2024 - Lille', link: '/editions/2024' },
            { text: '2023 - Lyon', link: '/editions/2023' },
            { text: '2022 - Rennes', link: '/editions/2022' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://x.com/hackvens' },
      {icon:'discord', link: 'https://discord.gg/Sm96SNKCHc'}
    ]
  }
})
