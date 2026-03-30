# 🔌 跨 AI 平台使用指南

**一个 CLI 工具，所有 AI 平台通用。** 这是 CLI 相比 Plugin / Skill 的核心优势。

Claude Code 的 Plugin 只能在 Claude Code 里用。飞书 CLI 装了以后，Claude Code、Cursor、Gemini CLI 都能用。

## 平台对比

| 特性 | AI Plugin | AI 原生 CLI |
|------|----------|------------|
| 平台绑定 | 锁定单一 AI 平台 | 所有终端/Agent 通用 |
| 审核流程 | 官方审核，门槛高 | npm/brew 自由发布 |
| 能力组合 | 插件间隔离 | Shell 管道自由串联 |
| 使用主体 | 仅 AI | 人类 + AI |

## Cursor

Cursor 的 Agent 模式可以直接执行终端命令，因此所有 CLI 工具天然可用。

### Skills 配置

将 CLI 工具的 Skills 文件放到项目根目录：

```
your-project/
├── .cursor/
│   └── skills/
│       ├── lark-cli.md
│       ├── gws.md
│       └── stripe.md
```

Cursor 启动时会自动加载这些文件，AI 就知道工具的存在和用法。

### 使用示例

在 Cursor 的 Agent 聊天中直接说：

```
帮我查一下明天飞书日历有什么安排
```

AI 会自动调用 `lark-cli calendar +agenda --days 1`。

## Claude Code

Claude Code 是终端原生的 AI 工具，对 CLI 支持最好。

### Skills 配置

```bash
# 全局 Skills（所有项目生效）
mkdir -p ~/.claude/skills
cp skills/lark-cli.md ~/.claude/skills/

# 项目 Skills（仅当前项目）
mkdir -p .claude/skills
cp skills/gws.md .claude/skills/
```

### MCP 集成

部分 CLI 工具内置 MCP 服务，可以直接配置为 Claude Code 的 MCP Server：

```json
{
  "mcpServers": {
    "google-workspace": {
      "command": "gws",
      "args": ["mcp", "start"]
    }
  }
}
```

### 使用示例

```bash
claude
> 用飞书 CLI 给张三发一条消息，说明天的会议改到下午三点
```

## Gemini CLI

Google 的 Gemini CLI 同样通过 Shell 调用 CLI 工具。

### 配置方式

在 Gemini CLI 的配置文件中声明可用工具：

```yaml
tools:
  - name: lark-cli
    description: 飞书办公套件 CLI
    command: lark-cli
  - name: gws
    description: Google Workspace CLI
    command: gws
```

## 通用方式（任何 AI 对话）

即使不做任何配置，你也可以在任何 AI 对话中使用 CLI：

1. **告诉 AI 你装了什么**："我电脑上装了 ffmpeg、gh、jq"
2. **直接描述需求**："帮我把这个视频压缩到 10MB 以下"
3. **AI 生成命令，你来执行**（或在有终端权限的平台上 AI 直接执行）

## 管道组合

CLI 的杀手锏是管道——多个工具串联，前一个的输出变后一个的输入。

```bash
# 查邮件 → 提取 JSON → 筛选主题
gws gmail +list --output json | jq '.messages[] | .subject'

# 查 GitHub PR → 筛选待审核
gh pr list --json number,title,author | jq '.[] | select(.author.login != "bot")'

# 下载视频 → 提取音轨
yt-dlp -o - "URL" | ffmpeg -i pipe:0 -vn -acodec mp3 audio.mp3
```

Plugin 之间是隔离的，没有标准的组合方式。CLI 用管道天然可组合——这个几十年前的设计，在 AI 时代突然又变得值钱了。
