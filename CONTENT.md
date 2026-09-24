# 晋川个人网站：内容编辑

网站页面仍是静态 HTML。可编辑内容保存在仓库根目录的 `content/`：

- `content/updates/`：动态，一条一个 JSON 文件；按 `date` 从新到旧展示。`demo: true` 会自动添加「【演示】」和「演示数据」标记。
- `content/products/`：产品，按 `order` 排序。
- `content/notes/`：思考笔记，按 `order` 排序。现有笔记由段落、可选步骤和引用组成。
- `content/social-links/`：公开连接方式，按 `order` 排序。

每条内容都要把 `published` 设为 `true` 才会出现在网站上。新增内容可先保存为 `false`。不要在内容文件里放密码、私人微信号或访问令牌：此仓库是网站的公开内容源。

## 在 Pages CMS 中编辑

1. 用有该仓库访问权限的 GitHub 账号登录 [Pages CMS](https://app.pagescms.org/)；首次使用需给 `sunmillionai-2001/hijinchuan.com` 安装 Pages CMS GitHub App。
2. 打开该仓库，选择「动态」「产品」「思考笔记」或「连接方式」，添加或编辑内容。
3. 保存后，Pages CMS 会提交到 GitHub；现有 GitHub → Vercel 连接会自动重新部署。部署完成后在 [网站](https://hijinchuan.com/) 检查。

后台编辑字段由仓库根目录的 `.pages.yml` 定义。当前还没有自定义 `admin.hijinchuan.com` 域名，也没有另建服务器或数据库。

## 本地预览

```sh
node scripts/build-content.mjs
python3 -m http.server 8765 --directory dist
```

构建脚本会把 `content/` 合成为 `dist/content.js`；请编辑源 JSON，不要直接改生成的 JS。Vercel 部署也运行同一脚本。发布演示结束后，可以在后台把五条演示动态的 `published` 关掉，真实动态会保留。
