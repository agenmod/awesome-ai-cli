# 🚀 快速安装

## 前置条件

你需要先安装以下包管理器：

::: code-group

```bash [macOS]
# 安装 Homebrew（如果还没有）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装 Node.js（提供 npm）
brew install node
```

```bash [Ubuntu/Debian]
# 安装 Node.js
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

```bash [Windows]
# 使用 winget 安装 Node.js
winget install OpenJS.NodeJS.LTS
```

:::

## 一键全装

```bash
curl -fsSL https://raw.githubusercontent.com/agenmod/awesome-ai-cli/main/scripts/install.sh | bash
```

## 按分类安装

### 💼 办公协作

```bash
# 飞书 Lark CLI
npm install -g @anthropic-ai/lark-cli

# Google Workspace CLI
npm install -g @anthropic-ai/gws
```

### 🎬 多媒体处理

```bash
brew install ffmpeg
brew install yt-dlp
brew install imagemagick
```

### 🤖 AI / ML 工具

```bash
# Claude Code
npm install -g @anthropic-ai/claude-code

# OpenAI CLI
pip install openai

# ElevenLabs
pip install elevenlabs

# Replicate
pip install replicate
```

### 💻 开发运维

```bash
brew install gh         # GitHub CLI
brew install jq         # JSON 处理
brew install ripgrep    # 极速搜索
brew install curl       # HTTP 请求
brew install deno       # Deno 运行时
npm install -g turbo    # Turborepo
```

### ☁️ 云服务

```bash
npm install -g vercel       # Vercel
brew install awscli         # AWS
npm install -g wrangler     # Cloudflare
brew install docker         # Docker
brew install flyctl         # Fly.io
```

### 💳 支付

```bash
brew install stripe/stripe-cli/stripe
```

### 🔍 数据

```bash
brew install supabase/tap/supabase
npm install -g prisma
```

## 安装后验证

安装完成后，运行以下命令验证：

```bash
# 检查已安装的 AI 友好 CLI 工具
for cmd in lark-cli gws ffmpeg yt-dlp gh jq rg stripe vercel aws docker; do
  if command -v $cmd &> /dev/null; then
    echo "✅ $cmd $(command -v $cmd)"
  else
    echo "❌ $cmd 未安装"
  fi
done
```

## 常见问题

### npm 全局安装权限问题

```bash
# 方法一：使用 nvm 管理 Node.js（推荐）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts

# 方法二：修改 npm 全局目录
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
```

### brew 安装很慢（中国大陆）

```bash
# 使用清华镜像
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"
brew update
```
