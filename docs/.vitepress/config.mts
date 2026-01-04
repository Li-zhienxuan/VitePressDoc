import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hajimi's Docs",
  description: "技术文档与问题解决指南 - 开源分享，共同进步",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Linux 指南', link: '/linux-backlight-guide' },
      { 
        text: '开源项目', 
        items: [
          { text: 'GitHub', link: 'https://github.com/hajimi/my-docs' },
          { text: '贡献指南', link: 'https://github.com/hajimi/my-docs/blob/main/CONTRIBUTING.md' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Linux 笔记本配置',
        items: [
          {
            text: '双显卡背光控制避坑指南',
            link: '/linux-backlight-guide'
          },
          {
            text: '显卡混合模式配置',
            link: '/gpu-hybrid-setup'
          }
        ]
      },
      {
        text: 'VitePress 示例',
        items: [
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: 'API 示例', link: '/api-examples' }
        ]
      },
      {
        text: '关于项目',
        items: [
          { text: '贡献指南', link: 'https://github.com/hajimi/my-docs/blob/main/CONTRIBUTING.md' },
          { text: '更新日志', link: 'https://github.com/hajimi/my-docs/blob/main/CHANGELOG.md' },
          { text: '安全政策', link: 'https://github.com/hajimi/my-docs/blob/main/SECURITY.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hajimi/my-docs' }
    ],

    footer: {
      message: '基于 MIT 许可发布 · 拥抱开源精神',
      copyright: 'Copyright © 2025-present Hajimi · 交流分享，共同进步'
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/hajimi/my-docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    },

    // 贡献者
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
