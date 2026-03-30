# ☁️ 云服务 / DevOps

AI 直接管理云基础设施，从部署到运维全自动化。

## Vercel CLI

> 一键部署前端项目，管理域名和日志

| 维度 | 详情 |
|------|------|
| **安装** | `npm install -g vercel` |
| **AI 评分** | ⭐⭐⭐ (18/25) |

```bash
# 部署项目
vercel --yes

# 查看部署列表
vercel list --output json

# 查看环境变量
vercel env ls
```

---

## AWS CLI

> AWS 全服务 CLI，数百项云资源管理

| 维度 | 详情 |
|------|------|
| **安装** | `brew install awscli` |
| **AI 评分** | ⭐⭐⭐ (18/25) |

```bash
# S3 文件操作
aws s3 ls s3://my-bucket/ --output json

# 查看 EC2 实例
aws ec2 describe-instances --output json

# 预览部署变更
aws cloudformation deploy --template-file template.yml --no-execute-changeset
```

---

## Cloudflare Wrangler

> Cloudflare Workers CLI，边缘函数和存储管理

| 维度 | 详情 |
|------|------|
| **安装** | `npm install -g wrangler` |
| **AI 评分** | ⭐⭐⭐ (18/25) |

```bash
# 部署 Worker
wrangler deploy

# 查看 KV 存储
wrangler kv:key list --binding MY_KV --output json
```

---

## Docker CLI

> 容器管理标准工具

| 维度 | 详情 |
|------|------|
| **安装** | `brew install docker` |
| **AI 评分** | ⭐⭐⭐ (15/25) |

```bash
# 列出容器（JSON）
docker ps --format json

# 构建镜像
docker build -t myapp:latest .

# 查看日志
docker logs --tail 100 container_id
```

---

## Fly.io (flyctl)

> 全球边缘部署 CLI

| 维度 | 详情 |
|------|------|
| **安装** | `brew install flyctl` |
| **AI 评分** | ⭐⭐⭐ (18/25) |

```bash
# 部署应用
fly deploy

# 查看状态
fly status --json

# 扩缩容
fly scale count 3
```
