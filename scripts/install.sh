#!/bin/bash
set -euo pipefail

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'
BOLD='\033[1m'

CATEGORY=""
MIN_SCORE=0

while [[ $# -gt 0 ]]; do
  case $1 in
    --category) CATEGORY="$2"; shift 2 ;;
    --min-score) MIN_SCORE="$2"; shift 2 ;;
    --help) echo "Usage: install.sh [--category office|media|dev|cloud|ai-ml|payment|lifestyle|data] [--min-score 1-5]"; exit 0 ;;
    *) echo "Unknown option: $1"; exit 1 ;;
  esac
done

echo -e "${BOLD}╔══════════════════════════════════════╗${NC}"
echo -e "${BOLD}║     Awesome AI CLI - 一键安装        ║${NC}"
echo -e "${BOLD}╚══════════════════════════════════════╝${NC}"
echo ""

check_cmd() {
  command -v "$1" &> /dev/null
}

install_brew() {
  local pkg=$1
  local cmd=${2:-$1}
  if check_cmd "$cmd"; then
    echo -e "  ${GREEN}✓${NC} $pkg (已安装)"
  else
    echo -e "  ${YELLOW}⬇${NC} 安装 $pkg ..."
    brew install "$pkg" 2>/dev/null || echo -e "  ${RED}✗${NC} $pkg 安装失败，请手动安装: brew install $pkg"
  fi
}

install_npm() {
  local pkg=$1
  local cmd=${2:-$1}
  if check_cmd "$cmd"; then
    echo -e "  ${GREEN}✓${NC} $pkg (已安装)"
  else
    echo -e "  ${YELLOW}⬇${NC} 安装 $pkg ..."
    npm install -g "$pkg" 2>/dev/null || echo -e "  ${RED}✗${NC} $pkg 安装失败，请手动安装: npm install -g $pkg"
  fi
}

install_pip() {
  local pkg=$1
  local cmd=${2:-$1}
  if check_cmd "$cmd"; then
    echo -e "  ${GREEN}✓${NC} $pkg (已安装)"
  else
    echo -e "  ${YELLOW}⬇${NC} 安装 $pkg ..."
    pip install "$pkg" 2>/dev/null || pip3 install "$pkg" 2>/dev/null || echo -e "  ${RED}✗${NC} $pkg 安装失败，请手动安装: pip install $pkg"
  fi
}

install_office() {
  echo -e "\n${BOLD}💼 办公协作${NC}"
  install_npm "@anthropic-ai/lark-cli" "lark-cli"
  install_npm "@anthropic-ai/gws" "gws"
}

install_media() {
  echo -e "\n${BOLD}🎬 多媒体处理${NC}"
  install_brew ffmpeg
  install_brew yt-dlp
  install_brew imagemagick magick
}

install_ai_ml() {
  echo -e "\n${BOLD}🤖 AI / ML 工具${NC}"
  install_npm "@anthropic-ai/claude-code" "claude"
  install_pip openai
  install_pip elevenlabs
  install_pip replicate
}

install_dev() {
  echo -e "\n${BOLD}💻 开发运维${NC}"
  install_brew gh
  install_brew jq
  install_brew ripgrep rg
  install_brew deno
  install_npm turbo
}

install_cloud() {
  echo -e "\n${BOLD}☁️ 云服务${NC}"
  install_npm vercel
  install_brew awscli aws
  install_npm wrangler
  install_brew flyctl fly
}

install_payment() {
  echo -e "\n${BOLD}💳 支付${NC}"
  if check_cmd stripe; then
    echo -e "  ${GREEN}✓${NC} stripe (已安装)"
  else
    echo -e "  ${YELLOW}⬇${NC} 安装 stripe ..."
    brew install stripe/stripe-cli/stripe 2>/dev/null || echo -e "  ${RED}✗${NC} stripe 安装失败"
  fi
}

install_data() {
  echo -e "\n${BOLD}🔍 数据${NC}"
  if check_cmd supabase; then
    echo -e "  ${GREEN}✓${NC} supabase (已安装)"
  else
    echo -e "  ${YELLOW}⬇${NC} 安装 supabase ..."
    brew install supabase/tap/supabase 2>/dev/null || echo -e "  ${RED}✗${NC} supabase 安装失败"
  fi
  install_npm prisma
}

if [[ -n "$CATEGORY" ]]; then
  case $CATEGORY in
    office) install_office ;;
    media) install_media ;;
    ai-ml) install_ai_ml ;;
    dev) install_dev ;;
    cloud) install_cloud ;;
    payment) install_payment ;;
    data) install_data ;;
    lifestyle) echo -e "\n${BOLD}🎵 生活娱乐${NC}"; install_npm "@anthropic-ai/netease-cli" "netease-cli" ;;
    *) echo -e "${RED}未知分类: $CATEGORY${NC}"; exit 1 ;;
  esac
else
  if ! check_cmd brew; then
    echo -e "${RED}需要先安装 Homebrew: https://brew.sh${NC}"
    exit 1
  fi
  if ! check_cmd npm; then
    echo -e "${RED}需要先安装 Node.js: https://nodejs.org${NC}"
    exit 1
  fi

  install_office
  install_media
  install_ai_ml
  install_dev
  install_cloud
  install_payment
  install_data
fi

echo -e "\n${BOLD}${GREEN}安装完成！${NC}"
echo -e "运行 ${BOLD}awesome-ai-cli verify${NC} 检查安装状态。"
