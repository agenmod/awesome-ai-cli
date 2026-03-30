<p align="center">
  <img src="docs/public/logo.svg" width="120" alt="Awesome AI CLI">
</p>

<h1 align="center">Awesome AI CLI</h1>

<p align="center">
  <strong>全球最全的 AI 原生 CLI 工具合集 —— 专为 AI Agent 时代策划</strong>
</p>

<p align="center">
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome"></a>
  <img src="https://img.shields.io/badge/tools-45-blue" alt="Tools">
  <img src="https://img.shields.io/badge/AI%20scored-5%20dimensions-blueviolet" alt="AI Scored">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <a href="CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>
</p>

<p align="center">
  <a href="README.md">English</a>
</p>

<p align="center">
  <a href="https://awesome-ai-cli.dev"><strong>在线浏览</strong></a> · 
  <a href="#-ai-兼容度评分"><strong>评分标准</strong></a> · 
  <a href="#-跨-ai-平台使用"><strong>跨平台指南</strong></a> · 
  <a href="CONTRIBUTING.md"><strong>提交工具</strong></a>
</p>

<p align="center">
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/agenmod/awesome-ai-cli"><img src="https://vercel.com/button" alt="Deploy with Vercel"></a>
</p>

---

## 为什么做这个项目

2026 年，飞书、Google、Stripe、钉钉、ElevenLabs……一群看起来毫不相关的公司，不约而同做了同一件事——发布 AI 原生 CLI 工具。因为 **CLI 是当下效率最高的 AI 能力分发方式**。

一个 CLI 工具同时包含执行能力、通信协议（MCP）和使用说明（Skills），天然跨平台——Cursor、Claude Code、Gemini CLI 都能用，不锁定任何厂商。

> 人类没有重新爱上命令行。是 AI 原本就生活在命令行里。

**这个项目收录并评估那些对 AI Agent 真正友好的 CLI 工具。**

### 和其他项目的区别

| 项目 | 是什么 |
|------|-------|
| [awesome-cli-apps](https://github.com/agarrharr/awesome-cli-apps) | 收录所有好用的 CLI——不关心 AI 兼容性 |
| [awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | Claude 专属 Skills（锁定单一平台） |
| [awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) | OpenClaw 专属 Skills（锁定单一平台） |
| **awesome-ai-cli** | **跨平台 AI 友好 CLI + 5 维量化评分** |

---

## 收录标准

我们扫描了 npm、brew、pip 上数百个 CLI 工具，最终收录 **45** 个符合 AI 友好标准的。

**至少满足以下 2 条即可入选：**

| 标准 | 说明 |
|------|------|
| ✅ JSON 结构化输出 | `--output json` 或默认 JSON |
| ✅ 无交互式弹窗 | 参数一次性传入或有 `--no-interactive` |
| ✅ 自带 Skills 说明书 | Markdown 格式的 AI 使用指南 |
| ✅ 支持 MCP 协议 | 内置标准通信协议 |
| ✅ 已被 AI Agent 实际使用 | 在 Cursor / Claude Code 等工具中验证过 |

**我们过滤掉了什么：**

| 过滤原因 | 说明 |
|---------|------|
| 纯交互式设计 | 弹窗选择菜单，AI 无法操作 |
| 无结构化输出 | 纯人类可读文本，AI 无法解析 |
| 已停止维护 | 超过 12 个月无更新 |
| 功能重叠 | 同一领域保留 AI 适配度最高的 |

---

## 目录

| 分类 | 数量 | 分类 | 数量 |
|------|:----:|------|:----:|
| [💼 办公协作](#-办公协作) | 6 | [☁️ 云服务 / DevOps](#-云服务--devops) | 6 |
| [🎬 多媒体处理](#-多媒体处理) | 3 | [💳 支付 / 金融](#-支付--金融) | 1 |
| [🤖 AI / ML 工具](#-ai--ml-工具) | 8 | [🎵 生活娱乐](#-生活娱乐) | 1 |
| [💻 开发运维](#-开发运维) | 11 | [🔍 数据 / 搜索](#-数据--搜索) | 2 |
| [🧩 Agent 基础设施](#-agent-基础设施) | 6 | [🛒 电商 / 零售](#-电商--零售) | 1 |

**[📊 AI 兼容度评分](#-ai-兼容度评分)** · **[🔌 跨 AI 平台使用](#-跨-ai-平台使用)** · **[🛡️ 安全须知](#-安全须知)** · **[🌐 生态工具](#-生态工具)** · **[🚀 一键安装](#-一键安装脚本)**

---

## 💼 办公协作

企业级办公套件的 CLI 接入，让 AI 直接操作邮件、日历、文档、消息。

| 工具 | 说明 | 安装 | AI 评分 | MCP | Skills |
|------|------|------|:-------:|:---:|:------:|
| **[飞书 Lark CLI](https://github.com/larksuite/cli)** | 200+ 命令覆盖日历/消息/文档/任务/邮箱 11 领域 | `npm i -g @anthropic-ai/lark-cli` | ⭐⭐⭐⭐⭐ | ✅ | ✅ |
| **[Google Workspace CLI](https://github.com/googleworkspace/cli)** | 一条命令启动 MCP，操作 Gmail/Drive/Calendar | `npm i -g @anthropic-ai/gws` | ⭐⭐⭐⭐⭐ | ✅ | ✅ |
| **[钉钉 DingTalk CLI](https://github.com/DingTalk-Real-AI/dingtalk-workspace-cli)** | 钉钉官方开源 CLI，AI 表格/日历/待办/DING 消息等 10 项能力 | `npm i -g @anthropic-ai/dingtalk-cli` | ⭐⭐⭐⭐ | ✅ | ✅ |
| **[企业微信 WeCom CLI](https://open.work.weixin.qq.com)** | 企业微信官方 CLI，消息/日程/文档/会议等 7 大能力 | `npx @wecom/wecom-openclaw-cli install` | ⭐⭐⭐⭐ | ✅ | ✅ |
| **[Slack CLI](https://api.slack.com/automation/cli)** | Slack 官方，v3.12 新增 AI Agent 模板 + MCP | `slack install` | ⭐⭐⭐⭐ | ✅ | ✅ |
| **[Notion CLI](https://github.com/notion-cli/notion-cli)** | 管理 Notion 页面和数据库 | `npm i -g notion-cli` | ⭐⭐ | ❌ | ❌ |

**[`^ 回到目录 ^`](#目录)**

## 🎬 多媒体处理

音视频、图片处理，AI 一行命令搞定。

| 工具 | 说明 | 安装 | AI 评分 | MCP | Skills |
|------|------|------|:-------:|:---:|:------:|
| **[ffmpeg](https://ffmpeg.org)** | 音视频处理行业标准，AI 训练数据覆盖最全 | `brew install ffmpeg` | ⭐⭐⭐ | ❌ | ❌ |
| **[yt-dlp](https://github.com/yt-dlp/yt-dlp)** | 视频下载，支持数千网站，JSON 输出 | `brew install yt-dlp` | ⭐⭐⭐ | ❌ | ❌ |
| **[ImageMagick](https://imagemagick.org)** | 图片处理瑞士军刀 | `brew install imagemagick` | ⭐⭐ | ❌ | ❌ |

**[`^ 回到目录 ^`](#目录)**

## 🤖 AI / ML 工具

大模型、语音合成、图像生成的 CLI 入口。

| 工具 | 说明 | 安装 | AI 评分 | MCP | Skills |
|------|------|------|:-------:|:---:|:------:|
| **[Claude Code](https://github.com/anthropics/claude-code)** | Anthropic AI 编程 CLI | `npm i -g @anthropic-ai/claude-code` | ⭐⭐⭐⭐⭐ | ✅ | ✅ |
| **[ElevenLabs CLI](https://github.com/elevenlabs/elevenlabs-python)** | 语音合成 / 声音克隆 | `pip install elevenlabs` | ⭐⭐⭐⭐ | ❌ | ✅ |
| **[即梦 Jimeng CLI](https://github.com/nicepkg/jimeng-cli)** | 字节跳动 AI 图像/视频生成 | `npm i -g @anthropic-ai/jimeng-cli` | ⭐⭐⭐⭐ | ❌ | ✅ |
| **[OpenAI CLI](https://platform.openai.com)** | GPT/DALL-E/Whisper 调用 | `pip install openai` | ⭐⭐⭐ | ❌ | ❌ |
| **[Gemini CLI](https://github.com/google-gemini/gemini-cli)** | Google 终端 AI Agent（99k stars），1M token 上下文，MCP 内置 | `npm i -g @google/gemini-cli` | ⭐⭐⭐⭐ | ✅ | ✅ |
| **[OpenAI Codex CLI](https://developers.openai.com/codex/cli/)** | OpenAI 编码 Agent CLI，Rust 构建，多种审批模式 | `codex install` | ⭐⭐⭐⭐ | ✅ | ✅ |
| **[Replicate CLI](https://github.com/replicate/replicate-python)** | 一行命令跑开源模型 | `pip install replicate` | ⭐⭐⭐ | ❌ | ❌ |
| **[Axe](https://github.com/jrswab/axe)** | 轻量 AI Agent 运行器，TOML 定义，Unix 风格可组合 | `go install github.com/jrswab/axe@latest` | ⭐⭐⭐⭐ | ❌ | ✅ |

**[`^ 回到目录 ^`](#目录)**

## 💻 开发运维

开发者日常必备。

| 工具 | 说明 | 安装 | AI 评分 | MCP | Skills |
|------|------|------|:-------:|:---:|:------:|
| **[GitHub CLI](https://cli.github.com)** | 仓库/PR/Issue/Actions | `brew install gh` | ⭐⭐⭐⭐ | ❌ | ❌ |
| **[Linear CLI](https://linear.app)** | 项目管理/Issue/Sprint | `npm i -g @anthropic-ai/linear-cli` | ⭐⭐⭐⭐ | ✅ | ❌ |
| **[jq](https://jqlang.github.io/jq/)** | JSON 处理神器 | `brew install jq` | ⭐⭐⭐ | ❌ | ❌ |
| **[ripgrep](https://github.com/BurntSushi/ripgrep)** | 极速搜索，JSON 输出 | `brew install ripgrep` | ⭐⭐⭐ | ❌ | ❌ |
| **[Deno](https://deno.com)** | 安全 JS/TS 运行时 | `brew install deno` | ⭐⭐⭐ | ❌ | ❌ |
| **[Turborepo](https://turbo.build)** | 高性能 Monorepo 构建 | `npm i -g turbo` | ⭐⭐⭐ | ❌ | ❌ |
| **[Resend](https://resend.com)** | 现代邮件发送 | `npm i -g resend` | ⭐⭐⭐ | ❌ | ❌ |
| **[Mintlify](https://mintlify.com)** | AI 文档平台 | `npm i -g mintlify` | ⭐⭐⭐ | ❌ | ❌ |
| **[Warp](https://warp.dev)** | AI 原生终端 | `brew install --cask warp` | ⭐⭐⭐ | ❌ | ❌ |
| **[figma-use](https://github.com/dannote/figma-use)** | Figma 完整读写 CLI（100+ 命令） | `npm i -g figma-use` | ⭐⭐⭐⭐ | ❌ | ❌ |
| **[curl](https://curl.se)** | HTTP/API 基础工具 | `brew install curl` | ⭐⭐ | ❌ | ❌ |

**[`^ 回到目录 ^`](#目录)**

## ☁️ 云服务 / DevOps

AI 直接管理云基础设施。

| 工具 | 说明 | 安装 | AI 评分 | MCP | Skills |
|------|------|------|:-------:|:---:|:------:|
| **[Vercel CLI](https://vercel.com)** | 一键部署前端项目 | `npm i -g vercel` | ⭐⭐⭐ | ❌ | ❌ |
| **[AWS CLI](https://aws.amazon.com/cli/)** | AWS 全服务管理 | `brew install awscli` | ⭐⭐⭐ | ❌ | ❌ |
| **[Wrangler](https://developers.cloudflare.com/workers/wrangler/)** | Cloudflare Workers | `npm i -g wrangler` | ⭐⭐⭐ | ❌ | ❌ |
| **[Docker CLI](https://www.docker.com)** | 容器管理标准 | `brew install docker` | ⭐⭐⭐ | ❌ | ❌ |
| **[Netlify CLI](https://cli.netlify.com)** | 内置 AI Agent 命令（agents:create/list） | `npm i -g netlify-cli` | ⭐⭐⭐⭐ | ❌ | ❌ |
| **[Fly.io (flyctl)](https://fly.io)** | 全球边缘部署 | `brew install flyctl` | ⭐⭐⭐ | ❌ | ❌ |

**[`^ 回到目录 ^`](#目录)**

## 💳 支付 / 金融

| 工具 | 说明 | 安装 | AI 评分 | MCP | Skills |
|------|------|------|:-------:|:---:|:------:|
| **[Stripe CLI](https://docs.stripe.com/stripe-cli)** | 支付/Webhooks/测试管理 | `brew install stripe/stripe-cli/stripe` | ⭐⭐⭐⭐ | ❌ | ✅ |

**[`^ 回到目录 ^`](#目录)**

## 🎵 生活娱乐

| 工具 | 说明 | 安装 | AI 评分 | MCP | Skills |
|------|------|------|:-------:|:---:|:------:|
| **[网易云音乐 CLI](https://github.com/nickyc975/netease-music-cli)** | 搜索/播放/歌单管理 | `npm i -g @anthropic-ai/netease-cli` | ⭐⭐⭐ | ❌ | ❌ |

**[`^ 回到目录 ^`](#目录)**

## 🔍 数据 / 搜索

| 工具 | 说明 | 安装 | AI 评分 | MCP | Skills |
|------|------|------|:-------:|:---:|:------:|
| **[Supabase CLI](https://supabase.com)** | 数据库/认证/存储管理 | `brew install supabase/tap/supabase` | ⭐⭐⭐ | ❌ | ❌ |
| **[Prisma CLI](https://www.prisma.io)** | 数据模型/迁移/代码生成 | `npm i -g prisma` | ⭐⭐⭐ | ❌ | ❌ |

**[`^ 回到目录 ^`](#目录)**

## 🧩 Agent 基础设施

AI Agent 的底层工具链——MCP 管理、CLI 编排、跨平台统一调度。**这是 2026 年最新涌现的品类。**

| 工具 | 说明 | 安装 | AI 评分 | MCP | Skills |
|------|------|------|:-------:|:---:|:------:|
| **[OpenCLI](https://github.com/jackwener/opencli)** | 万能 CLI Hub（8.9k stars），把任何网站/工具变标准 CLI，AGENT.md 自动发现 | `npm i -g @jackwener/opencli` | ⭐⭐⭐⭐ | ❌ | ✅ |
| **[MCP CLI](https://www.philschmid.de/mcp-cli)** | 动态发现 MCP 服务器，减少 token 消耗 99% | `pip install mcp-cli` | ⭐⭐⭐⭐ | ✅ | ❌ |
| **[Smithery CLI](https://github.com/smithery-ai/cli)** | MCP + Skills 注册中心管理，搜索/安装/发布 | `npx @anthropic-ai/smithery` | ⭐⭐⭐⭐ | ✅ | ✅ |
| **[mcpx](https://github.com/lydakis/mcpx)** | 把 MCP 服务器变成可组合 CLI，管道 + JSON | `go install github.com/lydakis/mcpx@latest` | ⭐⭐⭐⭐ | ✅ | ❌ |
| **[AgentX](https://github.com/agentsdance/agentx)** | 跨 Agent 统一管理 MCP/Skills（Claude/Cursor/Gemini/Codex） | `go install github.com/agentsdance/agentx@latest` | ⭐⭐⭐⭐ | ✅ | ✅ |
| **[agent-browser](https://github.com/vercel-labs/agent-browser)** | Vercel 出品 AI Agent 无头浏览器（25k stars），Rust 构建 | `npx agent-browser` | ⭐⭐⭐⭐ | ❌ | ❌ |

**[`^ 回到目录 ^`](#目录)**

## 🛒 电商 / 零售

| 工具 | 说明 | 安装 | AI 评分 | MCP | Skills |
|------|------|------|:-------:|:---:|:------:|
| **[Shopify CLI](https://shopify.dev/api/shopify-cli)** | Shopify 官方，主题/应用/扩展开发，含 MCP | `npm i -g @shopify/cli` | ⭐⭐⭐⭐ | ✅ | ❌ |

**[`^ 回到目录 ^`](#目录)**

---

## 📊 AI 兼容度评分

我们用 **5 维评分体系** 量化每个 CLI 工具对 AI Agent 的友好程度（别的 awesome 列表都没有这个）：

| 维度 | 说明 | 满分标准 |
|------|------|---------|
| **AI 设计** | 是否专为 AI 设计 | 自带 Skills/MCP，文档明确提到 AI Agent |
| **结构化输出** | 输出是否 AI 可解析 | `--output json`，错误也 JSON 返回 |
| **自查能力** | AI 能否自主发现命令 | `--help` 详尽，支持 `list-commands` |
| **预览模式** | 执行前能否预览 | `--dry-run` 覆盖写操作 |
| **上下文友好** | 是否尊重上下文限制 | Skills < 2KB，输出支持 field masks |

### 评分等级

| 总分 | 星级 | 含义 |
|:----:|:----:|------|
| 24-25 | ⭐⭐⭐⭐⭐ | AI 原生设计，开箱即用 |
| 18-23 | ⭐⭐⭐⭐ | 高度适配 |
| 12-17 | ⭐⭐⭐ | 基本可用 |
| 6-11 | ⭐⭐ | 有限支持 |
| 1-5 | ⭐ | 不适配 |

### 标杆工具详情

| 工具 | AI设计 | 结构化 | 自查 | 预览 | 上下文 | 总分 |
|------|:------:|:-----:|:----:|:----:|:------:|:----:|
| Google Workspace CLI | 5 | 5 | 5 | 5 | 5 | **25** |
| 飞书 Lark CLI | 5 | 5 | 5 | 5 | 4 | **24** |
| Claude Code | 5 | 4 | 5 | 3 | 4 | **21** |
| Stripe CLI | 4 | 5 | 4 | 4 | 3 | **20** |
| GitHub CLI | 3 | 5 | 5 | 3 | 3 | **19** |
| ffmpeg | 2 | 3 | 3 | 2 | 2 | **12** |

> 经典工具（ffmpeg / jq / curl）评分不高，但 AI 训练数据中覆盖充足，不需要额外说明书即可使用。

---

## 🔌 跨 AI 平台使用

**一个 CLI 工具，所有 AI 平台通用。** 这是 CLI 相比 Plugin/Skill 的核心优势。

### Cursor

安装 CLI 后，在 Cursor 的 Agent 模式中直接使用。把 Skills 文件放到 `.cursor/skills/` 目录：

```
.cursor/skills/lark-cli.md
.cursor/skills/gws.md
```

### Claude Code

CLI 工具对 Claude Code 天然可用。Skills 文件放到 `.claude/skills/`：

```bash
mkdir -p ~/.claude/skills
cp skills/lark-cli.md ~/.claude/skills/
```

### Gemini CLI

同样直接可用，通过 `--tool` 参数或配置文件声明可用工具。

### 通用方式

在任何 AI 对话中直接说："我装了飞书 CLI，帮我查一下明天的日程。"AI 会自动调用。

---

## 🛡️ 安全须知

> **CLI 工具直接执行系统命令，安全风险与 AI Plugin 有本质区别。**

本列表中的工具是 **策展收录，非安全审计**。它们可能随时被原作者更新。

### 风险等级

| 操作类型 | 风险 | 建议 |
|---------|:----:|------|
| 只读查询（查日程、搜文件） | 低 | 可直接使用 |
| 写操作（发消息、创建文件） | 中 | 使用 `--dry-run` 预览 |
| 破坏性操作（删除、覆盖） | 高 | 人工确认后执行 |
| 涉及认证/密钥 | 高 | 不要让 AI 直接管理密钥 |

### 安全建议

1. **优先使用支持 `--dry-run` 的工具** —— 执行前预览
2. **审查 AI 生成的命令** —— 特别是写操作和删除操作
3. **不要把 API Key 放在提示词里** —— 用环境变量或配置文件
4. **使用最小权限原则** —— 能只读就别给写权限

---

## 🌐 生态工具

CLI 不是孤立的，它和 AI Agent 生态中的其他组件协同工作。

### AI 编程平台

| 平台 | 说明 | 与 CLI 的关系 |
|------|------|-------------|
| [Cursor](https://cursor.com) | AI 代码编辑器 | 内置终端直接调用 CLI |
| [Claude Code](https://github.com/anthropics/claude-code) | Anthropic 终端 AI | 原生支持 CLI 工具 |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Google 终端 AI | 通过 Shell 调用 CLI |

### 协议与标准

| 协议 | 说明 | 链接 |
|------|------|------|
| MCP | AI 与外部服务的标准通信协议 | [modelcontextprotocol.io](https://modelcontextprotocol.io/) |
| Skills | 告诉 AI "这个工具怎么用" 的说明书 | [本项目 Skills 指南](docs/skills.md) |

### 包管理器

| 工具 | 说明 |
|------|------|
| [npm](https://www.npmjs.com/) | JavaScript CLI 工具分发 |
| [Homebrew](https://brew.sh/) | macOS/Linux 命令行工具安装 |
| [pip](https://pypi.org/) | Python CLI 工具分发 |

---

## 🚀 一键安装脚本

```bash
# 安装全部推荐工具
curl -fsSL https://raw.githubusercontent.com/agenmod/awesome-ai-cli/main/scripts/install.sh | bash

# 按分类安装
./scripts/install.sh --category office    # 办公协作
./scripts/install.sh --category dev       # 开发运维
./scripts/install.sh --category ai-ml     # AI 工具

# 按评分安装
./scripts/install.sh --min-score 4        # 仅 4 星以上
```

---

## 🌟 贡献

欢迎提交你发现的 AI 友好 CLI 工具！

1. Fork 本仓库
2. 在 `cli-data/tools.json` 中添加工具信息和 5 维评分
3. 提交 PR（使用 [PR 模板](.github/PULL_REQUEST_TEMPLATE.md)）

详见 **[贡献指南](CONTRIBUTING.md)**。

---

## 相关资源

- [You Need to Rewrite Your CLI for AI Agents](https://justin.poehnelt.com/posts/rewrite-your-cli-for-ai-agents/) — 为什么 CLI 需要为 AI 重写
- [MenuGen by Karpathy](https://karpathy.bearblog.dev/vibe-coding-menugen/) — Karpathy 用 AI 做 App 的全记录
- [Building CLIs for agents](https://x.com/ericzakariasson/status/2036762680401223946) — 为 Agent 构建 CLI 的讨论
- [MCP 协议规范](https://modelcontextprotocol.io/) — AI 与外部服务的标准通信协议

---

<p align="center">
  <sub>每多装一个好用的 CLI 工具，你的 AI 就多一项技能。</sub>
  <br>
  <sub>每少一分多余的上下文噪音，你的 AI 就聪明一点。</sub>
</p>
