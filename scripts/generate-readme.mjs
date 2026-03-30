#!/usr/bin/env node

/**
 * 从 cli-data/tools.json 自动生成 README 中的工具列表部分。
 * 用法: node scripts/generate-readme.mjs
 *
 * 当前为基础版本——输出 Markdown 片段到 stdout，
 * 后续可扩展为直接替换 README.md 中 <!-- AUTO-START --> / <!-- AUTO-END --> 标记之间的内容。
 */

import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataPath = resolve(__dirname, '..', 'cli-data', 'tools.json')
const data = JSON.parse(readFileSync(dataPath, 'utf-8'))

function scoreToStars(score) {
  const total = score.aiDesign + score.structuredOutput + score.selfDiscovery + score.preview + score.contextSize
  if (total >= 24) return '⭐⭐⭐⭐⭐'
  if (total >= 18) return '⭐⭐⭐⭐'
  if (total >= 12) return '⭐⭐⭐'
  if (total >= 6) return '⭐⭐'
  return '⭐'
}

function yn(v) { return v ? '✅' : '❌' }

for (const cat of data.categories) {
  const tools = data.tools.filter(t => t.category === cat.id)
  if (tools.length === 0) continue

  console.log(`## ${cat.icon} ${cat.name}\n`)
  console.log(`${cat.description}\n`)
  console.log('| 工具 | 说明 | 安装 | AI 评分 | MCP | Skills |')
  console.log('|------|------|------|:-------:|:---:|:------:|')

  for (const t of tools) {
    const link = t.repo || t.website
    const stars = scoreToStars(t.score)
    console.log(
      `| **[${t.name}](${link})** | ${t.description} | \`${t.install}\` | ${stars} | ${yn(t.hasMCP)} | ${yn(t.hasSkills)} |`
    )
  }

  console.log(`\n**[\`^ 回到目录 ^\`](#目录)**\n`)
}

console.log('\n---\n')
console.log('### 分类统计\n')
console.log('| 分类 | 数量 |')
console.log('|------|:----:|')
for (const cat of data.categories) {
  const count = data.tools.filter(t => t.category === cat.id).length
  if (count > 0) {
    console.log(`| ${cat.icon} ${cat.name} | ${count} |`)
  }
}
console.log(`| **总计** | **${data.tools.length}** |`)
