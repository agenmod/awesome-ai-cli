---
layout: home

hero:
  name: "Awesome AI CLI"
  text: "跨平台 AI 原生 CLI 工具合集"
  tagline: 不绑定平台，带 5 维评分，开源共建
  image:
    src: /logo.svg
    alt: Awesome AI CLI
  actions:
    - theme: brand
      text: 浏览工具目录
      link: /tools/
    - theme: alt
      text: 评分标准
      link: /scoring
    - theme: alt
      text: GitHub
      link: https://github.com/agenmod/awesome-ai-cli

features:
  - icon: 🔌
    title: 跨平台，不锁定
    details: CLI 不绑定任何 AI 平台。Cursor、Claude Code、Gemini CLI 都能用。一次安装，处处可用。这是 Plugin 做不到的。
  - icon: 📊
    title: 5 维量化评分
    details: AI 设计 / 结构化输出 / 自查能力 / 预览模式 / 上下文友好——每个工具 5 个维度打分，一眼看出 AI 适配度。
  - icon: 🛡️
    title: 安全风险透明
    details: CLI 直接执行系统命令，安全模型与 Plugin 不同。我们标注了每类操作的风险等级和防护建议。
  - icon: 🔗
    title: 管道组合
    details: Shell 管道的威力——多个 CLI 自由串联，前一个输出变后一个输入。Plugin 之间是隔离的，CLI 天然可组合。
  - icon: 📦
    title: 策展收录
    details: 从数百个 CLI 中筛选，只收录满足 AI 友好标准的。质量过滤逻辑完全透明。
  - icon: 🌍
    title: 开源共建
    details: 标准化的提交模板和评分体系，社区共同维护。欢迎提交你发现的好工具。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #6366f1 30%, #a855f7);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #6366f130 50%, #a855f730 50%);
  --vp-home-hero-image-filter: blur(44px);
}

.VPHero .VPImage {
  max-width: 200px;
  max-height: 200px;
}
</style>

## 这个项目和别的有什么不同？

| 项目 | 定位 |
|------|------|
| [awesome-cli-apps](https://github.com/agarrharr/awesome-cli-apps) | 所有好用的 CLI（不关心 AI 兼容性） |
| [awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | Claude 专属 Skills（锁定单平台） |
| [awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) | OpenClaw 专属 Skills（锁定单平台） |
| **本项目** | **跨平台 AI 友好 CLI + 5 维量化评分** |

::: tip Karpathy 的观察
"你的服务应该有一个 CLI 工具。不要让开发者去访问、查看或点击。直接指示和赋能他们的 AI。"
:::

## 收录标准

我们从 npm、brew、pip 上扫描了数百个 CLI，最终收录 **30+** 个符合 AI 友好标准的。

**至少满足以下 2 条即可入选：**

- ✅ JSON 结构化输出
- ✅ 无交互式弹窗
- ✅ 自带 Skills 说明书
- ✅ 支持 MCP 协议
- ✅ 已被 AI Agent 实际使用

**我们过滤掉了什么：**

| 过滤原因 | 说明 |
|---------|------|
| 纯交互式设计 | 弹窗选择菜单，AI 无法操作 |
| 无结构化输出 | 纯人类可读文本，AI 无法解析 |
| 已停止维护 | 超过 12 个月无更新 |
| 功能重叠 | 同一领域保留 AI 适配度最高的 |

## 为什么是 CLI？

2026 年了，为什么大家突然回去做"命令行"？

**不是人类重新爱上命令行，是 AI 原本就生活在命令行里。**

GUI 是给眼睛看的，AI 没有眼睛。CLI 是纯文字的，AI 天生就在这个世界里运作。

```
AI 的实际能力 = 它能调用的工具 + 它拿到的上下文
```

- 装了 `ffmpeg`，AI 能处理视频
- 装了飞书 CLI，AI 能帮你查日程、发消息
- 装了 Google Workspace CLI，AI 能管你的邮箱和云盘
- 没装？**"不好意思，这个我做不了。"**

### 新旧 CLI 对比

| | 传统 CLI | AI 原生 CLI |
|---|---------|-----------|
| 设计对象 | 程序员 | 程序员 + AI Agent |
| 交互方式 | 交互式菜单弹窗 | 参数一次性传入 |
| 输出格式 | 彩色文字 | JSON 结构化 |
| 使用说明 | man page | Skills 说明书 |
| 预览能力 | 少见 | `--dry-run` 标配 |
| 自描述 | `--help` 基础 | 命令/参数完整可查 |

---

<div style="text-align: center; margin-top: 3em;">

[**→ 浏览全部工具**](/tools/) &nbsp;&nbsp;|&nbsp;&nbsp; [**→ 跨平台使用指南**](/platforms) &nbsp;&nbsp;|&nbsp;&nbsp; [**→ 安全须知**](/security)

</div>
