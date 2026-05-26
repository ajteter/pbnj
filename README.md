<div align="center">

![Markdown Drop logo](./assets/pbnj_logo.png)

# Markdown Drop

[![GitHub stars](https://img.shields.io/github/stars/ajteter/pbnj?style=flat&color=yellow)](https://github.com/ajteter/pbnj/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ajteter/pbnj?style=flat&color=blue)](https://github.com/ajteter/pbnj/network/members)
[![License](https://img.shields.io/github/license/ajteter/pbnj)](./LICENSE)

_Fast, clean Markdown sharing._

[Live site](https://sharemd.steammmmm.me) · [Features](#-features) · [Deploy](#-deploy) · [Automatic deploys](#-automatic-deploys-on-push) · [Acknowledgements](#-acknowledgements)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ajteter/pbnj)

</div>

## ✨ Features

- 📄 **Markdown-first sharing** — paste Markdown and share a clean rendered page.
- 🎨 **Syntax highlighting** — code blocks still look good with Highlight.js themes.
- 🧹 **Clean interface** — distraction-free pages for sending notes, docs, snippets, and drafts to friends.
- 🔗 **Memorable URLs** — sandwich-style IDs are easier to share than random hashes.
- ✏️ **Edit existing drops** — log in with `AUTH_KEY` and edit saved content from the web UI.
- 🔒 **Private drops** — unlisted pages with optional secret keys.
- ☁️ **Edge-powered** — runs on Cloudflare Workers + D1.

<details>
<summary>🎭 Theme Gallery</summary>

| | |
|:---:|:---:|
| ![Flexoki Light](./assets/themes/flexoki-light.png) | ![Flexoki Dark](./assets/themes/flexoki-dark.png) |
| Flexoki Light | Flexoki Dark |
| ![GitHub Light](./assets/themes/github-light.png) | ![GitHub Dark](./assets/themes/github-dark.png) |
| GitHub Light | GitHub Dark |
| ![Gruvbox Light](./assets/themes/gruvbox-light.png) | ![Gruvbox Dark](./assets/themes/gruvbox-dark.png) |
| Gruvbox Light | Gruvbox Dark |
| ![Nord](./assets/themes/nord.png) | ![Dracula](./assets/themes/dracula.png) |
| Nord | Dracula |
| ![Catppuccin Latte](./assets/themes/catppuccin-latte.png) | ![Catppuccin Frappé](./assets/themes/catppuccin-frappe.png) |
| Catppuccin Latte | Catppuccin Frappé |
| ![Catppuccin Macchiato](./assets/themes/catppuccin-macchiato.png) | ![Catppuccin Mocha](./assets/themes/catppuccin-mocha.png) |
| Catppuccin Macchiato | Catppuccin Mocha |

</details>

## 🌐 Live site

Markdown Drop is currently deployed at:

```text
https://sharemd.steammmmm.me
```

Use it as a fast personal Markdown sharing site: paste content, save it, and send the rendered page link to a friend.

## 🚀 Deploy

### Option A: Deploy to Cloudflare

Click the deploy button above and follow Cloudflare's prompts.

Important setup notes:

1. Set the runtime secret `AUTH_KEY` in Cloudflare.
2. Make sure the D1 schema is initialized.
3. If you add or change `AUTH_KEY` after the first deploy, redeploy the Worker.

`AUTH_KEY` belongs in the Worker runtime settings:

```text
Worker → Settings → Variables and Secrets → Production → Secret: AUTH_KEY
```

Not only in build variables. Build variables are available during build; the login API reads runtime `env.AUTH_KEY`.

### Option B: Deploy from local CLI

```bash
npm install
npm run deploy
```

The deploy script runs the D1 schema setup and then deploys the Worker:

```bash
npm run db:setup
npx wrangler deploy
```

## 🔁 Automatic deploys on push

The Deploy to Cloudflare button is mainly for initial setup. It does **not always mean future `git push` events will automatically redeploy your Worker**.

To enable automatic deployments, connect the Worker to this GitHub repository with Cloudflare Workers Builds:

1. Open Cloudflare Dashboard.
2. Go to **Workers & Pages**.
3. Select your Markdown Drop Worker.
4. Open **Settings → Builds**.
5. Click **Connect** / **Connect repository**.
6. Select `ajteter/pbnj` and the `main` branch.
7. Save and deploy.

After that, pushes to `main` should trigger a Cloudflare build and deployment.

If Cloudflare can only see some repositories, check the GitHub App access:

```text
GitHub → Settings → Applications → Installed GitHub Apps → Cloudflare Workers & Pages → Repository access
```

If access is set to **Only select repositories**, add `ajteter/pbnj` or switch to **All repositories**.

## 🔧 Configuration

Main site configuration lives in:

```text
pbnj.config.js
```

Current site branding:

```js
name: "Markdown Drop"
footer: {
  text: "spread the code 🥪",
  link: "https://github.com/ajteter/pbnj",
}
```

The default page description is:

```text
Fast, clean Markdown sharing.
```

## 🔐 Authentication model

Markdown Drop uses a simple single-user model:

- `AUTH_KEY` is the global admin key.
- Logged-in users can create, edit, and delete saved drops.
- Private drops use a per-page `?key=...` URL parameter for unlisted access.

This is intentionally lightweight. It is meant for a personal sharing site, not a multi-user publishing platform.

## 💰 Cost

Cloudflare's free tier is enough for personal use in most cases:

- D1 free storage is generous for Markdown snippets and small notes.
- Workers run globally at the edge.
- You can host a useful personal sharing site without maintaining a server.

## 🙏 Acknowledgements

Markdown Drop is based on [pbnj](https://github.com/bhavnicksm/pbnj), a minimal self-hosted pastebin by the original author.

Thanks also to:

- [Cloudflare Workers](https://workers.cloudflare.com)
- [Astro](https://astro.build)
- [Highlight.js](https://highlightjs.org)
- [Opengist](https://github.com/thomiceli/opengist)
- [PrivateBin](https://github.com/PrivateBin/PrivateBin)

---

<div align="center">

Built for quick Markdown sharing.

[![Star on GitHub](https://img.shields.io/github/stars/ajteter/pbnj?style=social)](https://github.com/ajteter/pbnj)

</div>
