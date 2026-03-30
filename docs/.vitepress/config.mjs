import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Awesome AI CLI',
  description: '全球最全的 AI 原生 CLI 工具合集 —— 跨平台、带评分、开源共建',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Awesome AI CLI' }],
    ['meta', { property: 'og:description', content: '全球最全的 AI 原生 CLI 工具合集 —— 跨平台、带评分、开源共建' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Awesome AI CLI',

    nav: [
      { text: '首页', link: '/' },
      { text: '工具目录', link: '/tools/' },
      { text: '评分标准', link: '/scoring' },
      {
        text: '指南',
        items: [
          { text: '跨平台使用', link: '/platforms' },
          { text: '安全须知', link: '/security' },
          { text: 'Skills 指南', link: '/skills' },
          { text: '快速安装', link: '/install' },
        ]
      },
      {
        text: '参与',
        items: [
          { text: '贡献指南', link: '/contributing' },
          { text: 'FAQ', link: '/faq' },
        ]
      }
    ],

    sidebar: {
      '/tools/': [
        {
          text: '工具分类',
          items: [
            { text: '全部工具', link: '/tools/' },
            { text: '💼 办公协作', link: '/tools/office' },
            { text: '🎬 多媒体处理', link: '/tools/media' },
            { text: '🤖 AI / ML', link: '/tools/ai-ml' },
            { text: '💻 开发运维', link: '/tools/dev' },
            { text: '☁️ 云服务', link: '/tools/cloud' },
            { text: '💳 支付金融', link: '/tools/payment' },
            { text: '🎵 生活娱乐', link: '/tools/lifestyle' },
            { text: '🔍 数据搜索', link: '/tools/data' },
          ]
        }
      ],
      '/': [
        {
          text: '指南',
          items: [
            { text: '评分标准', link: '/scoring' },
            { text: '跨平台使用', link: '/platforms' },
            { text: '安全须知', link: '/security' },
            { text: 'Skills 指南', link: '/skills' },
            { text: '快速安装', link: '/install' },
          ]
        },
        {
          text: '参与',
          items: [
            { text: '贡献指南', link: '/contributing' },
            { text: 'FAQ', link: '/faq' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/agenmod/awesome-ai-cli' }
    ],

    footer: {
      message: '基于 MIT 许可发布 · 策展收录，非安全审计',
      copyright: '每多装一个好用的 CLI 工具，你的 AI 就多一项技能。'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索工具', buttonAriaLabel: '搜索工具' },
          modal: {
            noResultsText: '没有找到相关工具',
            resetButtonTitle: '清除查询',
            footer: { selectText: '选择', navigateText: '切换' }
          }
        }
      }
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    editLink: {
      pattern: 'https://github.com/agenmod/awesome-ai-cli/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
  }
})
