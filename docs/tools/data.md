# 🔍 数据 / 搜索

数据库、搜索引擎、数据管道的 CLI 工具。

## Supabase CLI

> 数据库 / 认证 / 存储 / 边缘函数管理

| 维度 | 详情 |
|------|------|
| **安装** | `brew install supabase/tap/supabase` |
| **仓库** | [github.com/supabase/cli](https://github.com/supabase/cli) |
| **AI 评分** | ⭐⭐⭐ (17/25) |

### 典型场景

```bash
# 初始化项目
supabase init

# 启动本地开发环境
supabase start

# 数据库迁移
supabase db push

# 部署边缘函数
supabase functions deploy my-function
```

---

## Prisma CLI

> 数据模型、迁移、客户端代码生成

| 维度 | 详情 |
|------|------|
| **安装** | `npm install -g prisma` |
| **仓库** | [github.com/prisma/prisma](https://github.com/prisma/prisma) |
| **AI 评分** | ⭐⭐⭐ (18/25) |

### 典型场景

```bash
# 生成客户端
prisma generate

# 创建迁移
prisma migrate dev --name add_user_table

# 预览迁移（不实际执行）
prisma migrate diff --preview-feature

# 数据库管理界面
prisma studio
```
