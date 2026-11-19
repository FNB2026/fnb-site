# FNB official website

FNB 官网介绍产品愿景、四个入口的产品构想、研发状态和公开研究。

## 本地开发与预览

```bash
npm ci
npm run dev
npm run build
npm run preview
```

首页内容位于 `src/main.jsx`，样式位于 `src/styles.css`。四篇公开文章和文章样式位于 `public/`，Vite 会将它们原样复制到 `dist/`。首页使用同站相对链接，因此本地预览、站点预览和生产环境都可打开对应文章。

## 发布链路

截至 2026-11-20，本仓库的 GitHub Actions 构建 `main` 并将 `dist/` 发布到 `gh-pages`，GitHub Pages 从该分支根目录取站点文件。[Pages 工作流](.github/workflows/pages.yml)

生产域名 `www.fnbapp.net` 由 Cloudflare 的 `fnb-site` Worker 承接。当前 Worker 版本通过控制台上传，配置为静态资源服务，未登记脚本处理器。Workers Builds 未配置触发器。核验时生产首页与 `gh-pages` 快照逐字节一致，两个平台各有发布记录。生产更新需要将已审阅的 `dist/` 发布到 `fnb-site` Worker，并核验生产实际提供的构建产物。

`ndg.fnbapp.net` 由独立的 `ndg-official-site` Worker 承接。FNB 生产验收覆盖首页、四篇文章、关联样式与脚本、移动端导航，以及项目状态和公开项目链接。
