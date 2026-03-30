# 💻 开发运维

开发者日常必备的命令行工具，让 AI 成为你的编程搭档。

## GitHub CLI

> GitHub 官方 CLI，管理仓库 / PR / Issue / Actions

| 维度 | 详情 |
|------|------|
| **安装** | `brew install gh` |
| **仓库** | [github.com/cli/cli](https://github.com/cli/cli) |
| **AI 评分** | ⭐⭐⭐⭐ (19/25) |

### 5 维评分

| AI 设计 | 结构化 | 自查 | 预览 | 上下文 |
|:-------:|:------:|:----:|:----:|:------:|
| 3/5 | 5/5 | 5/5 | 3/5 | 3/5 |

### 典型场景

```bash
# 创建 PR
gh pr create --title "feature: add login" --body "..."

# 查看 PR 列表（JSON）
gh pr list --json number,title,author

# 查看 Issue
gh issue list --label "bug" --json number,title

# 运行 Actions workflow
gh workflow run deploy.yml
```

---

## jq

> JSON 数据处理神器，管道组合的核心工具

| 维度 | 详情 |
|------|------|
| **安装** | `brew install jq` |
| **AI 评分** | ⭐⭐⭐ (14/25) |

### 典型场景

```bash
# 提取 JSON 字段
echo '{"name":"test","version":"1.0"}' | jq '.name'

# 和其他 CLI 组合（管道的威力）
gh pr list --json number,title | jq '.[].title'
gws gmail +list --output json | jq '.messages[] | .subject'
```

::: tip 管道是 CLI 的超能力
jq 是管道组合的核心。几乎所有输出 JSON 的 CLI 都可以接 jq 做二次处理，这是 Plugin 做不到的。
:::

---

## ripgrep (rg)

> 极速文件内容搜索，比 grep 快几十倍

| 维度 | 详情 |
|------|------|
| **安装** | `brew install ripgrep` |
| **AI 评分** | ⭐⭐⭐ (15/25) |

```bash
# JSON 输出（对 AI 友好）
rg "TODO" --json

# 搜索特定文件类型
rg "function" --type ts
```

---

## 更多开发工具

| 工具 | 一句话 | 安装 | 评分 |
|------|--------|------|:----:|
| **[curl](https://curl.se)** | HTTP/API 基础请求工具 | `brew install curl` | ⭐⭐ |
| **[Deno](https://deno.com)** | 安全 JS/TS 运行时 | `brew install deno` | ⭐⭐⭐ |
| **[Turborepo](https://turbo.build)** | 高性能 Monorepo 构建 | `npm i -g turbo` | ⭐⭐⭐ |
| **[Resend](https://resend.com)** | 现代邮件发送 | `npm i -g resend` | ⭐⭐⭐ |
| **[Mintlify](https://mintlify.com)** | AI 文档平台 | `npm i -g mintlify` | ⭐⭐⭐ |
| **[Warp](https://warp.dev)** | AI 原生终端 | `brew install --cask warp` | ⭐⭐⭐ |
| **[Linear CLI](https://linear.app)** | 项目管理 / Issue | `npm i -g @anthropic-ai/linear-cli` | ⭐⭐⭐⭐ |
