# 🤖 AI / ML 工具

大模型、语音合成、图像生成——AI Agent 调用其他 AI 服务的入口。

## Claude Code

> Anthropic 官方 AI 编程 CLI，终端里的 AI 搭档

| 维度 | 详情 |
|------|------|
| **安装** | `npm install -g @anthropic-ai/claude-code` |
| **仓库** | [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) |
| **AI 评分** | ⭐⭐⭐⭐⭐ (21/25) |
| **MCP** | ✅ |
| **Skills** | ✅ |

### 5 维评分

| AI 设计 | 结构化 | 自查 | 预览 | 上下文 |
|:-------:|:------:|:----:|:----:|:------:|
| 5/5 | 4/5 | 5/5 | 3/5 | 4/5 |

---

## ElevenLabs CLI

> 语音合成 CLI，生成逼真语音 / 声音克隆

| 维度 | 详情 |
|------|------|
| **安装** | `pip install elevenlabs` |
| **AI 评分** | ⭐⭐⭐⭐ (17/25) |
| **Skills** | ✅ |

### 典型场景

```bash
# 文字转语音
elevenlabs tts --text "你好世界" --voice "Rachel" --output hello.mp3

# 列出可用声音
elevenlabs voices list --output json
```

---

## 即梦 Jimeng CLI

> 字节跳动 AI 图像 / 视频生成

| 维度 | 详情 |
|------|------|
| **安装** | `npm install -g @anthropic-ai/jimeng-cli` |
| **AI 评分** | ⭐⭐⭐⭐ (17/25) |
| **Skills** | ✅ |

---

## OpenAI CLI

> 调用 GPT / DALL-E / Whisper 等模型

| 维度 | 详情 |
|------|------|
| **安装** | `pip install openai` |
| **AI 评分** | ⭐⭐⭐ (15/25) |

### 典型场景

```bash
# 对话生成
openai api chat.completions.create -m gpt-4 -g user "你好"

# 语音转文字
openai api audio.transcriptions.create -m whisper-1 -f audio.mp3
```

---

## Replicate CLI

> 一行命令运行开源 AI 模型（Stable Diffusion / LLaMA 等）

| 维度 | 详情 |
|------|------|
| **安装** | `pip install replicate` |
| **AI 评分** | ⭐⭐⭐ (15/25) |

### 典型场景

```bash
# 运行模型
replicate run stability-ai/sdxl:latest --input prompt="a cat in space"

# 列出模型
replicate models list --output json
```
