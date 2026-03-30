# 📝 Skills 指南

## 什么是 Skills？

Skills 是一种 Markdown 格式的说明书文件，告诉 AI Agent "这个工具能做什么、怎么用"。

对于 ffmpeg、jq 这种经典工具，AI 在训练时已见过海量用法，不需要说明书。但飞书 CLI、即梦 CLI 这些 2026 年新发布的工具，AI 的训练数据里完全没有——你不给说明书，AI 根本不知道它存在。

::: tip 核心推论
工具越新，AI 越依赖 Skills 说明书。训练数据永远追不上工具发布速度。
:::

## Skills 文件结构

一个好的 Skills 文件应该包含：

```markdown
# 工具名称

## 概述
一句话说明工具做什么。

## 核心命令
列出最常用的 5-10 个命令，附带参数说明。

## 典型场景
3-5 个常见使用场景的完整命令示例。

## 注意事项
需要认证？有限制？输出格式？
```

## 优秀案例

### Google Workspace CLI 的 Skills（1.6KB）

Google Workspace CLI 的 Skills 文件是业界标杆——仅 1.6KB 就把核心信息传达清楚：

```markdown
# Google Workspace CLI (gws)

## 功能
操作 Gmail、Google Drive、Google Calendar。

## 核心命令
- `gws gmail +triage` — 查看待处理邮件
- `gws gmail +send --to user@example.com --subject "标题" --body "内容"`
- `gws drive +list --limit 10`
- `gws calendar +agenda --days 7`

## 输出控制
使用 field masks 控制返回大小：
`gws gmail +list --fields "id,subject,from"`

## MCP 模式
`gws mcp start` 启动 MCP 服务。
```

### 反面教材：过大的 Skills 文件

有些工具的 Skills 文件超过 20KB，列出了每一个参数的每一种组合。结果：
- 占掉 AI 上下文的大量空间
- 推理质量明显下降
- AI 反而找不到需要的命令

## 编写 Skills 的黄金法则

1. **控制在 2KB 以内**。Google Workspace CLI 的 1.6KB 是好的参考线
2. **只写核心命令**。20% 的命令覆盖 80% 的场景
3. **给完整的命令示例**。不是参数说明，是 AI 可以直接复制执行的完整命令
4. **标注认证方式**。AI 需要知道"先登录"才能调用
5. **说明输出格式**。AI 需要知道返回的是 JSON 还是纯文本
6. **标注危险操作**。删除、覆盖等不可逆操作要显式提醒

## 在不同 AI 平台中使用 Skills

### Claude Code

将 Skills 文件放到项目根目录的 `.claude/skills/` 下：

```
.claude/
  skills/
    lark-cli.md
    gws.md
```

### Cursor

放到 `.cursor/skills/` 目录：

```
.cursor/
  skills/
    lark-cli.md
    gws.md
```

### 通用方式

直接在对话中告诉 AI："我装了飞书 CLI，说明书如下：…" 或者把 Skills 文件内容粘贴给 AI。

## 创建你自己的 Skills

如果你用的 CLI 工具没有 Skills 文件，可以让 AI 帮你生成：

```
我安装了 [工具名]。请运行 [工具名] --help，
然后为它生成一个 Skills 说明书，包含：
1. 工具概述（一句话）
2. 核心命令（5-10 个，带完整参数）
3. 典型使用场景（3-5 个）
4. 注意事项（认证、限制、输出格式）
控制在 2KB 以内。
```
