import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Technology Stack Learn",
  description: "A website which be used to learn technology stack",
  cleanUrls: "true",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' }
    ],

    sidebar: [
      {
        text: '数据库',
        items: [
          { text: 'Redis', link: '/redis' }
        ]
      }
    ]
  }
})
