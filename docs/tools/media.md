# 🎬 多媒体处理

AI 一行命令搞定视频压缩、格式转换、图片处理——不用打开 Premiere 或 Photoshop。

## ffmpeg

> 开源音视频处理的行业标准，AI 训练数据中覆盖最全的 CLI 之一

| 维度 | 详情 |
|------|------|
| **安装** | `brew install ffmpeg` |
| **仓库** | [github.com/FFmpeg/FFmpeg](https://github.com/FFmpeg/FFmpeg) |
| **AI 评分** | ⭐⭐⭐ (12/25) |

### 5 维评分

| AI 设计 | 结构化 | 自查 | 预览 | 上下文 |
|:-------:|:------:|:----:|:----:|:------:|
| 2/5 | 3/5 | 3/5 | 2/5 | 2/5 |

### 典型场景

```bash
# 压缩视频（最常用）
ffmpeg -i input.mp4 -crf 28 output.mp4

# 提取音轨
ffmpeg -i video.mp4 -vn -acodec mp3 audio.mp3

# 截取视频片段（从1分钟开始，截取30秒）
ffmpeg -i input.mp4 -ss 00:01:00 -t 00:00:30 -c copy clip.mp4

# 转换格式
ffmpeg -i input.avi output.mp4

# 获取视频信息（JSON 格式）
ffprobe -v quiet -print_format json -show_format -show_streams input.mp4
```

::: info 经典工具的特殊优势
ffmpeg 评分不高，但 AI 在训练时已见过海量用法。不需要 Skills 说明书，AI 天然就会用。
:::

---

## yt-dlp

> 强大的视频下载工具，支持数千网站，JSON 输出元数据

| 维度 | 详情 |
|------|------|
| **安装** | `brew install yt-dlp` |
| **仓库** | [github.com/yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp) |
| **AI 评分** | ⭐⭐⭐ (17/25) |

### 典型场景

```bash
# 下载视频
yt-dlp "https://www.youtube.com/watch?v=xxx"

# 仅下载音频
yt-dlp -x --audio-format mp3 "URL"

# 获取视频元数据（JSON）
yt-dlp --dump-json "URL"

# 预览不下载
yt-dlp --simulate "URL"
```

---

## ImageMagick

> 图片处理瑞士军刀

| 维度 | 详情 |
|------|------|
| **安装** | `brew install imagemagick` |
| **AI 评分** | ⭐⭐ (9/25) |

### 典型场景

```bash
# 缩放图片
magick input.jpg -resize 800x600 output.jpg

# 格式转换
magick input.png output.webp

# 批量加水印
magick input.jpg -gravity southeast -annotate +10+10 "watermark" output.jpg
```
