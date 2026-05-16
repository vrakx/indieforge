# Site #1: SaaS for Creators

**Powered by Astro v6 + MDX.** Static site generation with zero runtime cost.

## Quick Start

```bash
cd sites/site-1-saas-creators-src
npm install
npm run dev        # Start dev server on localhost:4321
npm run build      # Build to dist/
```

## Architecture

- **Framework:** Astro 6 (static-first, zero JS by default)
- **Content:** MDX files in `content/blog/` — one file per article
- **Styling:** CSS custom properties (dark theme), no framework dependencies
- **SEO:** Auto sitemap, Open Graph tags, semantic HTML
- **Deployment:** Copy `dist/` to any static host (Vercel, Cloudflare Pages, Netlify)

## Adding a New Article

1. Create `content/blog/[slug].mdx` in the content directory
2. Add frontmatter with `title`, `description`, `publishedAt`, and optionally `tags`
3. Write your article in MDX format (supports JSX components)
4. Run `npm run build` to regenerate static pages

## Frontmatter Schema

```yaml
---
title: 'Article Title'
description: 'SEO description (150 chars max)'
publishedAt: '2026-05-XX'    # ISO date string
author: 'Author Name'         # Optional, defaults to TechDirectory Team
tags: ['tag1', 'tag2']        # Optional array
---
```

## Content Pipeline

Articles flow through the IndieForge Kanban pipeline:
`Research → Outline → Draft → Review → Publish`

When an article is ready:
1. Write/commit the `.mdx` file to `content/blog/`
2. Push to main branch
3. CI deploys automatically (or run `npm run build && cp -r dist/* ../site-1-saas-creators/dist/`)

## Domain Configuration

Update `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

Then configure DNS on your domain registrar → Cloudflare → Vercel/Netlify.
