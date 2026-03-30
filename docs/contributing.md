# 🌟 贡献指南

感谢你考虑为 Awesome AI CLI 贡献内容！

## 提交新工具

### 收录标准

我们收录满足以下条件的 CLI 工具（**至少满足 2 条**）：

- ✅ 支持 JSON 结构化输出
- ✅ 无交互式弹窗（或有 `--no-interactive` 参数）
- ✅ 自带 Skills 说明书
- ✅ 支持 MCP 协议
- ✅ 已被 AI Agent 工具（Cursor / Claude Code / Gemini CLI 等）实际使用

### 提交步骤

1. **Fork** 本仓库
2. 在 `cli-data/tools.json` 中添加工具数据
3. 提交 **Pull Request**，标题格式：`add: 工具名称`

### 数据格式

在 `cli-data/tools.json` 的 `tools` 数组中添加：

```json
{
  "name": "工具显示名称",
  "id": "tool-id",
  "category": "分类 ID（office/media/ai-ml/dev/cloud/payment/lifestyle/data）",
  "description": "一句话描述工具功能和 AI 使用场景",
  "install": "安装命令",
  "repo": "GitHub 仓库地址",
  "website": "官网地址",
  "hasSkills": false,
  "hasMCP": false,
  "hasJSON": true,
  "hasNonInteractive": true,
  "hasDryRun": false,
  "score": {
    "aiDesign": 3,
    "structuredOutput": 4,
    "selfDiscovery": 3,
    "preview": 2,
    "contextSize": 3
  },
  "tags": ["official", "类别标签"]
}
```

### 评分指南

请参考 [评分标准](/scoring) 页面，为你提交的工具进行 5 维评分。评分应基于实际测试，而非推测。

### PR 模板

```markdown
## 添加工具：[工具名]

### 基本信息
- 官网：
- GitHub：
- 安装命令：

### AI 使用场景
描述这个工具在 AI Agent 中的典型使用方式。

### 评分依据
- AI 设计 (X/5)：因为...
- 结构化输出 (X/5)：因为...
- 自查能力 (X/5)：因为...
- 预览模式 (X/5)：因为...
- 上下文友好 (X/5)：因为...

### 测试环境
在哪些 AI Agent 中测试过（Cursor / Claude Code / 其他）
```

## 更新现有工具

如果你发现某个工具的信息有误或需要更新：

1. 直接修改 `cli-data/tools.json` 中对应条目
2. PR 标题格式：`update: 工具名称`
3. 说明更新原因

## 新增分类

如果你认为需要新的分类：

1. 在 `cli-data/tools.json` 的 `categories` 中添加分类
2. 在 `docs/tools/` 下创建对应页面
3. 更新 `docs/.vitepress/config.mjs` 中的侧边栏

## 行为准则

- 保持友善和建设性
- 评分要客观，基于实际测试
- 不接受广告或软文性质的提交
- 描述工具时用中性客观的语言
