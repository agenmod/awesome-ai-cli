# 💳 支付 / 金融

AI 管理支付流程、测试 Webhook、监控交易。

## Stripe CLI

> Stripe 官方 CLI，支付 / Webhooks / 测试环境管理

| 维度 | 详情 |
|------|------|
| **安装** | `brew install stripe/stripe-cli/stripe` |
| **仓库** | [github.com/stripe/stripe-cli](https://github.com/stripe/stripe-cli) |
| **AI 评分** | ⭐⭐⭐⭐ (20/25) |
| **Skills** | ✅ |

### 5 维评分

| AI 设计 | 结构化 | 自查 | 预览 | 上下文 |
|:-------:|:------:|:----:|:----:|:------:|
| 4/5 | 5/5 | 4/5 | 4/5 | 3/5 |

### 典型场景

```bash
# 监听 Webhook 事件
stripe listen --forward-to localhost:3000/webhook

# 触发测试事件
stripe trigger payment_intent.succeeded

# 查看最近的事件（JSON）
stripe events list --limit 10 --no-interactive

# 创建测试支付
stripe payment_intents create --amount 1000 --currency usd --no-interactive
```

::: warning 注意 --no-interactive
Stripe CLI 早期版本的交互式菜单会让 AI 卡住。务必使用 `--no-interactive` 参数。
:::
