<p align="center">
  <img src="docs/public/logo.svg" width="120" alt="Awesome AI CLI">
</p>

<h1 align="center">Awesome AI CLI</h1>

<p align="center">
  <strong>The most comprehensive collection of AI-native CLI tools — curated for the AI Agent era</strong>
</p>

<p align="center">
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome"></a>
  <img src="https://img.shields.io/badge/tools-45-blue" alt="Tools">
  <img src="https://img.shields.io/badge/AI%20scored-5%20dimensions-blueviolet" alt="AI Scored">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <a href="CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>
</p>

<p align="center">
  <a href="README_CN.md">中文文档</a>
</p>

<p align="center">
  <a href="https://awesome-ai-cli.dev"><strong>Browse Online</strong></a> · 
  <a href="#-ai-compatibility-scoring"><strong>Scoring</strong></a> · 
  <a href="#-cross-platform-usage"><strong>Cross-Platform Guide</strong></a> · 
  <a href="CONTRIBUTING.md"><strong>Submit a Tool</strong></a>
</p>

<p align="center">
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/agenmod/awesome-ai-cli"><img src="https://vercel.com/button" alt="Deploy with Vercel"></a>
</p>

---

## Why This Exists

In 2026, Lark, Google, Stripe, DingTalk, ElevenLabs, and dozens more shipped AI-native CLI tools — because **CLI is the most efficient way to distribute capabilities to AI Agents**.

A single CLI tool bundles execution, protocol (MCP), and documentation (Skills) into one package. It works across every AI platform — Cursor, Claude Code, Gemini CLI — with no vendor lock-in.

> Humans didn't fall back in love with the command line. AI was born living in it.

**This project curates and scores those tools.**

### How we're different

| Project | What it is |
|---------|-----------|
| [awesome-cli-apps](https://github.com/agarrharr/awesome-cli-apps) | All great CLIs — no AI compatibility focus |
| [awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | Skills for Claude only (single platform) |
| [awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) | Skills for OpenClaw only (single platform) |
| **awesome-ai-cli** | **Cross-platform AI-friendly CLIs + 5-dimension scoring** |

---

## Inclusion Criteria

We scanned hundreds of CLI tools across npm, brew, and pip — **45** made the cut.

**A tool must meet at least 2 of these criteria:**

| Criteria | Description |
|----------|------------|
| ✅ Structured JSON output | `--output json` or JSON by default |
| ✅ No interactive prompts | All params via arguments, or `--no-interactive` flag |
| ✅ Ships with Skills docs | Markdown guide for AI agents |
| ✅ MCP protocol support | Built-in Model Context Protocol |
| ✅ Verified with AI Agents | Tested in Cursor / Claude Code / Gemini CLI |

**What we filtered out:**

| Reason | Description |
|--------|------------|
| Interactive-only design | Menu prompts that block AI execution |
| No structured output | Human-readable text only, unparseable by AI |
| Unmaintained | No updates in 12+ months |
| Redundant | Kept the most AI-friendly tool per category |

---

## Table of Contents

| Category | Count | Category | Count |
|----------|:-----:|----------|:-----:|
| [💼 Office & Collaboration](#-office--collaboration) | 6 | [☁️ Cloud / DevOps](#-cloud--devops) | 6 |
| [🎬 Media Processing](#-media-processing) | 3 | [💳 Payments](#-payments) | 1 |
| [🤖 AI / ML Tools](#-ai--ml-tools) | 8 | [🎵 Lifestyle](#-lifestyle) | 1 |
| [💻 Development](#-development) | 11 | [🔍 Data / Search](#-data--search) | 2 |
| [🧩 Agent Infrastructure](#-agent-infrastructure) | 6 | [🛒 E-commerce](#-e-commerce) | 1 |

**[📊 Scoring](#-ai-compatibility-scoring)** · **[🔌 Cross-Platform](#-cross-platform-usage)** · **[🛡️ Security](#-security-notice)** · **[🌐 Ecosystem](#-ecosystem)** · **[🚀 Install Script](#-install-script)**

---

## 💼 Office & Collaboration

Enterprise office suites via CLI — let AI operate email, calendar, docs, and messaging directly.

| Tool | Description | Install | AI Score | MCP | Skills |
|------|-------------|---------|:--------:|:---:|:------:|
| **[Lark CLI](https://github.com/larksuite/cli)** | Lark/Feishu official, 200+ commands across 11 domains | `npm i -g @anthropic-ai/lark-cli` | ⭐⭐⭐⭐⭐ | ✅ | ✅ |
| **[Google Workspace CLI](https://github.com/googleworkspace/cli)** | One command to start MCP, operate Gmail/Drive/Calendar | `npm i -g @anthropic-ai/gws` | ⭐⭐⭐⭐⭐ | ✅ | ✅ |
| **[DingTalk CLI](https://github.com/DingTalk-Real-AI/dingtalk-workspace-cli)** | DingTalk official, 10 core capabilities including AI tables, calendar, tasks | `npm i -g @anthropic-ai/dingtalk-cli` | ⭐⭐⭐⭐ | ✅ | ✅ |
| **[WeCom CLI](https://open.work.weixin.qq.com)** | WeChat Work official, messaging/calendar/docs/meetings | `npx @wecom/wecom-openclaw-cli install` | ⭐⭐⭐⭐ | ✅ | ✅ |
| **[Slack CLI](https://api.slack.com/automation/cli)** | Official, v3.12 added AI Agent templates + MCP | `slack install` | ⭐⭐⭐⭐ | ✅ | ✅ |
| **[Notion CLI](https://github.com/notion-cli/notion-cli)** | Manage Notion pages and databases | `npm i -g notion-cli` | ⭐⭐ | ❌ | ❌ |

**[`^ back to top ^`](#table-of-contents)**

## 🎬 Media Processing

Audio, video, and image processing — AI handles it in one command.

| Tool | Description | Install | AI Score | MCP | Skills |
|------|-------------|---------|:--------:|:---:|:------:|
| **[ffmpeg](https://ffmpeg.org)** | Industry-standard A/V processing, best-covered in AI training data | `brew install ffmpeg` | ⭐⭐⭐ | ❌ | ❌ |
| **[yt-dlp](https://github.com/yt-dlp/yt-dlp)** | Video downloader, thousands of sites, JSON metadata output | `brew install yt-dlp` | ⭐⭐⭐ | ❌ | ❌ |
| **[ImageMagick](https://imagemagick.org)** | Swiss army knife for image processing | `brew install imagemagick` | ⭐⭐ | ❌ | ❌ |

**[`^ back to top ^`](#table-of-contents)**

## 🤖 AI / ML Tools

LLMs, voice synthesis, image generation — CLI entry points for AI services.

| Tool | Description | Install | AI Score | MCP | Skills |
|------|-------------|---------|:--------:|:---:|:------:|
| **[Claude Code](https://github.com/anthropics/claude-code)** | Anthropic's AI coding CLI | `npm i -g @anthropic-ai/claude-code` | ⭐⭐⭐⭐⭐ | ✅ | ✅ |
| **[ElevenLabs CLI](https://github.com/elevenlabs/elevenlabs-python)** | Voice synthesis / voice cloning | `pip install elevenlabs` | ⭐⭐⭐⭐ | ❌ | ✅ |
| **[Jimeng CLI](https://github.com/nicepkg/jimeng-cli)** | ByteDance AI image/video generation | `npm i -g @anthropic-ai/jimeng-cli` | ⭐⭐⭐⭐ | ❌ | ✅ |
| **[Gemini CLI](https://github.com/google-gemini/gemini-cli)** | Google's terminal AI Agent (99k+ stars), 1M token context, built-in MCP | `npm i -g @google/gemini-cli` | ⭐⭐⭐⭐ | ✅ | ✅ |
| **[OpenAI Codex CLI](https://developers.openai.com/codex/cli/)** | OpenAI's coding Agent, built in Rust, multiple approval modes | `codex install` | ⭐⭐⭐⭐ | ✅ | ✅ |
| **[OpenAI CLI](https://platform.openai.com)** | GPT/DALL-E/Whisper access | `pip install openai` | ⭐⭐⭐ | ❌ | ❌ |
| **[Replicate CLI](https://github.com/replicate/replicate-python)** | Run open-source models in one command | `pip install replicate` | ⭐⭐⭐ | ❌ | ❌ |
| **[Axe](https://github.com/jrswab/axe)** | Lightweight AI Agent runner, TOML-defined, Unix-style composable | `go install github.com/jrswab/axe@latest` | ⭐⭐⭐⭐ | ❌ | ✅ |

**[`^ back to top ^`](#table-of-contents)**

## 💻 Development

Developer essentials.

| Tool | Description | Install | AI Score | MCP | Skills |
|------|-------------|---------|:--------:|:---:|:------:|
| **[GitHub CLI](https://cli.github.com)** | Repos / PRs / Issues / Actions | `brew install gh` | ⭐⭐⭐⭐ | ❌ | ❌ |
| **[Linear CLI](https://linear.app)** | Project management / Issues / Sprints | `npm i -g @anthropic-ai/linear-cli` | ⭐⭐⭐⭐ | ✅ | ❌ |
| **[jq](https://jqlang.github.io/jq/)** | JSON processing powerhouse | `brew install jq` | ⭐⭐⭐ | ❌ | ❌ |
| **[ripgrep](https://github.com/BurntSushi/ripgrep)** | Blazing fast search, JSON output | `brew install ripgrep` | ⭐⭐⭐ | ❌ | ❌ |
| **[Deno](https://deno.com)** | Secure JS/TS runtime | `brew install deno` | ⭐⭐⭐ | ❌ | ❌ |
| **[Turborepo](https://turbo.build)** | High-performance monorepo builds | `npm i -g turbo` | ⭐⭐⭐ | ❌ | ❌ |
| **[Resend](https://resend.com)** | Modern email sending | `npm i -g resend` | ⭐⭐⭐ | ❌ | ❌ |
| **[Mintlify](https://mintlify.com)** | AI-powered docs platform | `npm i -g mintlify` | ⭐⭐⭐ | ❌ | ❌ |
| **[Warp](https://warp.dev)** | AI-native terminal | `brew install --cask warp` | ⭐⭐⭐ | ❌ | ❌ |
| **[figma-use](https://github.com/dannote/figma-use)** | Full Figma read/write CLI (100+ commands) | `npm i -g figma-use` | ⭐⭐⭐⭐ | ❌ | ❌ |
| **[curl](https://curl.se)** | HTTP/API foundation | `brew install curl` | ⭐⭐ | ❌ | ❌ |

**[`^ back to top ^`](#table-of-contents)**

## ☁️ Cloud / DevOps

AI manages cloud infrastructure directly.

| Tool | Description | Install | AI Score | MCP | Skills |
|------|-------------|---------|:--------:|:---:|:------:|
| **[Vercel CLI](https://vercel.com)** | One-click frontend deployment | `npm i -g vercel` | ⭐⭐⭐ | ❌ | ❌ |
| **[AWS CLI](https://aws.amazon.com/cli/)** | Full AWS service management | `brew install awscli` | ⭐⭐⭐ | ❌ | ❌ |
| **[Wrangler](https://developers.cloudflare.com/workers/wrangler/)** | Cloudflare Workers CLI | `npm i -g wrangler` | ⭐⭐⭐ | ❌ | ❌ |
| **[Docker CLI](https://www.docker.com)** | Container management standard | `brew install docker` | ⭐⭐⭐ | ❌ | ❌ |
| **[Netlify CLI](https://cli.netlify.com)** | Built-in AI Agent commands (agents:create/list) | `npm i -g netlify-cli` | ⭐⭐⭐⭐ | ❌ | ❌ |
| **[Fly.io (flyctl)](https://fly.io)** | Global edge deployment | `brew install flyctl` | ⭐⭐⭐ | ❌ | ❌ |

**[`^ back to top ^`](#table-of-contents)**

## 💳 Payments

| Tool | Description | Install | AI Score | MCP | Skills |
|------|-------------|---------|:--------:|:---:|:------:|
| **[Stripe CLI](https://docs.stripe.com/stripe-cli)** | Payments / Webhooks / testing | `brew install stripe/stripe-cli/stripe` | ⭐⭐⭐⭐ | ❌ | ✅ |

**[`^ back to top ^`](#table-of-contents)**

## 🎵 Lifestyle

| Tool | Description | Install | AI Score | MCP | Skills |
|------|-------------|---------|:--------:|:---:|:------:|
| **[NetEase Music CLI](https://github.com/nickyc975/netease-music-cli)** | Search / play / playlist management | `npm i -g @anthropic-ai/netease-cli` | ⭐⭐⭐ | ❌ | ❌ |

**[`^ back to top ^`](#table-of-contents)**

## 🔍 Data / Search

| Tool | Description | Install | AI Score | MCP | Skills |
|------|-------------|---------|:--------:|:---:|:------:|
| **[Supabase CLI](https://supabase.com)** | Database / auth / storage management | `brew install supabase/tap/supabase` | ⭐⭐⭐ | ❌ | ❌ |
| **[Prisma CLI](https://www.prisma.io)** | Data modeling / migrations / codegen | `npm i -g prisma` | ⭐⭐⭐ | ❌ | ❌ |

**[`^ back to top ^`](#table-of-contents)**

## 🧩 Agent Infrastructure

The AI Agent toolchain layer — MCP management, CLI orchestration, cross-platform dispatch. **A brand-new category that emerged in 2026.**

| Tool | Description | Install | AI Score | MCP | Skills |
|------|-------------|---------|:--------:|:---:|:------:|
| **[OpenCLI](https://github.com/jackwener/opencli)** | Universal CLI Hub (8.9k stars), turn any website/tool into a standardized CLI via AGENT.md | `npm i -g @jackwener/opencli` | ⭐⭐⭐⭐ | ❌ | ✅ |
| **[MCP CLI](https://www.philschmid.de/mcp-cli)** | Dynamic MCP server discovery, reduces token consumption by 99% | `pip install mcp-cli` | ⭐⭐⭐⭐ | ✅ | ❌ |
| **[Smithery CLI](https://github.com/smithery-ai/cli)** | MCP + Skills registry management — search, install, publish | `npx @anthropic-ai/smithery` | ⭐⭐⭐⭐ | ✅ | ✅ |
| **[mcpx](https://github.com/lydakis/mcpx)** | Turn MCP servers into composable CLIs with pipes + JSON | `go install github.com/lydakis/mcpx@latest` | ⭐⭐⭐⭐ | ✅ | ❌ |
| **[AgentX](https://github.com/agentsdance/agentx)** | Unified MCP/Skills manager across Claude/Cursor/Gemini/Codex | `go install github.com/agentsdance/agentx@latest` | ⭐⭐⭐⭐ | ✅ | ✅ |
| **[agent-browser](https://github.com/vercel-labs/agent-browser)** | Vercel's headless browser for AI Agents (25k stars), built in Rust | `npx agent-browser` | ⭐⭐⭐⭐ | ❌ | ❌ |

**[`^ back to top ^`](#table-of-contents)**

## 🛒 E-commerce

| Tool | Description | Install | AI Score | MCP | Skills |
|------|-------------|---------|:--------:|:---:|:------:|
| **[Shopify CLI](https://shopify.dev/api/shopify-cli)** | Shopify official — themes, apps, extensions, with MCP | `npm i -g @shopify/cli` | ⭐⭐⭐⭐ | ✅ | ❌ |

**[`^ back to top ^`](#table-of-contents)**

---

## 📊 AI Compatibility Scoring

We quantify every CLI tool's AI-friendliness with a **5-dimension scoring system** (unique to this list):

| Dimension | Description | Full Score Criteria |
|-----------|-------------|-------------------|
| **AI Design** | Built for AI from the start | Ships with Skills/MCP, docs mention AI Agents |
| **Structured Output** | AI-parseable output | `--output json`, errors in JSON too |
| **Self-Discovery** | AI can find commands on its own | Comprehensive `--help`, supports `list-commands` |
| **Preview Mode** | Preview before execution | `--dry-run` covers write operations |
| **Context-Friendly** | Respects AI context limits | Skills < 2KB, output supports field masks |

### Score Levels

| Total | Rating | Meaning |
|:-----:|:------:|---------|
| 24-25 | ⭐⭐⭐⭐⭐ | AI-native design, works out of the box |
| 18-23 | ⭐⭐⭐⭐ | Highly compatible |
| 12-17 | ⭐⭐⭐ | Usable with some adaptation |
| 6-11 | ⭐⭐ | Limited support |
| 1-5 | ⭐ | Not compatible |

### Benchmark Tools

| Tool | AI Design | Structured | Discovery | Preview | Context | Total |
|------|:---------:|:----------:|:---------:|:-------:|:-------:|:-----:|
| Google Workspace CLI | 5 | 5 | 5 | 5 | 5 | **25** |
| Lark CLI | 5 | 5 | 5 | 5 | 4 | **24** |
| Claude Code | 5 | 4 | 5 | 3 | 4 | **21** |
| Stripe CLI | 4 | 5 | 4 | 4 | 3 | **20** |
| GitHub CLI | 3 | 5 | 5 | 3 | 3 | **19** |
| ffmpeg | 2 | 3 | 3 | 2 | 2 | **12** |

> Classic tools (ffmpeg / jq / curl) score lower but AI already knows them well from training data — no Skills doc needed.

---

## 🔌 Cross-Platform Usage

**One CLI tool, every AI platform.** This is CLI's core advantage over Plugins/Skills.

### Cursor

Install a CLI, use it directly in Cursor's Agent mode. Place Skills files in `.cursor/skills/`:

```
.cursor/skills/lark-cli.md
.cursor/skills/gws.md
```

### Claude Code

CLI tools work natively. Place Skills in `.claude/skills/`:

```bash
mkdir -p ~/.claude/skills
cp skills/lark-cli.md ~/.claude/skills/
```

### Gemini CLI

Also works directly — declare available tools via `--tool` flag or config file.

### Universal

In any AI conversation: "I have Lark CLI installed, check my calendar for tomorrow." The AI will call it automatically.

---

## 🛡️ Security Notice

> **CLI tools execute system commands directly — the security model differs fundamentally from AI Plugins.**

Tools in this list are **curated, not audited**. They may be updated by their maintainers at any time.

### Risk Levels

| Operation Type | Risk | Recommendation |
|---------------|:----:|---------------|
| Read-only queries (check calendar, search files) | Low | Use directly |
| Write operations (send messages, create files) | Medium | Use `--dry-run` to preview |
| Destructive operations (delete, overwrite) | High | Manual confirmation required |
| Authentication / secrets | High | Never let AI manage keys directly |

### Best Practices

1. **Prefer tools that support `--dry-run`** — preview before execution
2. **Review AI-generated commands** — especially writes and deletes
3. **Don't put API keys in prompts** — use environment variables or config files
4. **Apply least privilege** — use read-only tokens when possible

---

## 🌐 Ecosystem

CLI tools work alongside other components in the AI Agent ecosystem.

### AI Coding Platforms

| Platform | Description | CLI Relationship |
|----------|-------------|-----------------|
| [Cursor](https://cursor.com) | AI code editor | Built-in terminal runs CLIs |
| [Claude Code](https://github.com/anthropics/claude-code) | Anthropic's terminal AI | Native CLI tool support |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Google's terminal AI | Calls CLIs via Shell |

### Protocols & Standards

| Protocol | Description | Link |
|----------|-------------|------|
| MCP | Standard protocol between AI and external services | [modelcontextprotocol.io](https://modelcontextprotocol.io/) |
| Skills | Docs telling AI "how to use this tool" | [Skills Guide](docs/skills.md) |

### Package Managers

| Tool | Description |
|------|-------------|
| [npm](https://www.npmjs.com/) | JavaScript CLI distribution |
| [Homebrew](https://brew.sh/) | macOS/Linux CLI installation |
| [pip](https://pypi.org/) | Python CLI distribution |

---

## 🚀 Install Script

```bash
# Install all recommended tools
curl -fsSL https://raw.githubusercontent.com/agenmod/awesome-ai-cli/main/scripts/install.sh | bash

# Install by category
./scripts/install.sh --category office    # Office & Collaboration
./scripts/install.sh --category dev       # Development
./scripts/install.sh --category ai-ml     # AI / ML Tools

# Install by score
./scripts/install.sh --min-score 4        # 4-star and above only
```

---

## 🌟 Contributing

We welcome submissions of AI-friendly CLI tools!

1. Fork this repository
2. Add tool info and 5-dimension scores to `cli-data/tools.json`
3. Submit a PR using the [PR template](.github/PULL_REQUEST_TEMPLATE.md)

See **[Contributing Guide](CONTRIBUTING.md)** for details.

---

## Related Resources

- [You Need to Rewrite Your CLI for AI Agents](https://justin.poehnelt.com/posts/rewrite-your-cli-for-ai-agents/) — Why CLIs need to be rewritten for AI
- [MenuGen by Karpathy](https://karpathy.bearblog.dev/vibe-coding-menugen/) — Karpathy's full record of building an app with AI
- [Building CLIs for agents](https://x.com/ericzakariasson/status/2036762680401223946) — Discussion on building CLIs for Agents
- [MCP Protocol Spec](https://modelcontextprotocol.io/) — Standard protocol between AI and external services

---

<p align="center">
  <sub>Every good CLI tool you install gives your AI a new superpower.</sub>
  <br>
  <sub>Every bit of context noise you remove makes your AI a little smarter.</sub>
</p>
