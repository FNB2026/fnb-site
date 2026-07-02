# FNB official website

FNB 官网首版，包含多端下载入口、文章栏目与项目公开叙事。

## Local development

```bash
npm install
npm run dev
```

## Content model

- 下载入口在 `src/main.jsx` 的 `downloads` 数组中维护；填入 `href` 后即成为真实链接。
- 文章索引在 `src/main.jsx` 的 `articles` 数组中维护。
- 独立文章页面放在 `public/articles/`，构建时会原样发布。
- `main` 分支由 GitHub Actions 自动发布到 GitHub Pages。

自定义域名启用前使用 `https://fnb2026.github.io/fnb-site/`。完成 `www.fnbapp.net` DNS 解析后，在 `public/CNAME` 写入该域名即可切换。
