# 💼 办公协作

让 AI Agent 直接操作邮件、日历、文档、消息——不用打开任何 App。

## 飞书 Lark CLI

> 飞书官方命令行工具，200+ 命令覆盖 11 个业务领域

| 维度 | 详情 |
|------|------|
| **安装** | `npm install -g @anthropic-ai/lark-cli` |
| **仓库** | [github.com/larksuite/cli](https://github.com/larksuite/cli) |
| **AI 评分** | ⭐⭐⭐⭐⭐ (24/25) |
| **MCP** | ✅ 支持 |
| **Skills** | ✅ 自带 |

### 5 维评分详情

| AI 设计 | 结构化 | 自查 | 预览 | 上下文 |
|:-------:|:------:|:----:|:----:|:------:|
| 5/5 | 5/5 | 5/5 | 5/5 | 4/5 |

### 典型使用场景

```bash
# 查看明天的日程安排
lark-cli calendar +agenda --days 1

# 给某人发消息
lark-cli im +send --to "user@company.com" --text "会议改到三点"

# 搜索文档
lark-cli docs +search --query "季度报告"
```

### AI 如何使用

飞书 CLI 自带 Skills 文件，AI 加载后即可直接调用。覆盖日历、消息、文档、任务、邮箱、审批等场景。

---

## Google Workspace CLI

> 一条命令启动 MCP 服务，AI 直接操作 Gmail / Drive / Calendar

| 维度 | 详情 |
|------|------|
| **安装** | `npm install -g @anthropic-ai/gws` |
| **仓库** | [github.com/googleworkspace/cli](https://github.com/googleworkspace/cli) |
| **AI 评分** | ⭐⭐⭐⭐⭐ (25/25) |
| **MCP** | ✅ 内置 MCP 服务 |
| **Skills** | ✅ 精简 1.6KB |

### 5 维评分详情

| AI 设计 | 结构化 | 自查 | 预览 | 上下文 |
|:-------:|:------:|:----:|:----:|:------:|
| 5/5 | 5/5 | 5/5 | 5/5 | 5/5 |

### 典型使用场景

```bash
# 查看待处理邮件
gws gmail +triage

# 发送邮件
gws gmail +send --to user@example.com --subject "标题" --body "内容"

# 查看一周日程
gws calendar +agenda --days 7

# 启动 MCP 服务（AI 通过标准协议操作）
gws mcp start

# 使用 field masks 控制返回大小
gws gmail +list --fields "id,subject,from" --limit 10
```

### 为什么是满分标杆

Google Workspace CLI 的 Skills 文件平均仅 1.6KB，精准传达核心信息。field masks 让 AI 精确控制返回数据量，避免上下文爆炸。所有输出默认 JSON，写操作全部支持 dry-run。

---

## Notion CLI

> 非官方 CLI，管理 Notion 页面和数据库

| 维度 | 详情 |
|------|------|
| **安装** | `npm install -g notion-cli` |
| **仓库** | [github.com/notion-cli/notion-cli](https://github.com/notion-cli/notion-cli) |
| **AI 评分** | ⭐⭐ (11/25) |
| **MCP** | ❌ |
| **Skills** | ❌ |

### 待改进

- 无 Skills 文件，AI 需要额外指导
- 无 MCP 支持
- 无 dry-run 预览
