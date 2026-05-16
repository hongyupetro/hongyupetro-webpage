# Hongyu Petroleum Machinery — corporate website

Next.js marketing site for **Cangzhou Hongyu Petroleum Machinery Co., Ltd.** (沧州宏宇石油机械有限责任公司). Content is grounded in PDF reference materials under `ref/` and summarized in `docs/content-brief.md`.

## Prerequisites

- Node.js 20+ (recommended for Next.js 16 / ESLint toolchain)

## Install

```bash
npm install
```

## Local development

```bash
npm run dev
```

Open **http://localhost:3000**.

Optional: set canonical / Open Graph base URL (also used at build time for metadata):

```bash
export NEXT_PUBLIC_SITE_URL=https://your-production-domain.example
```

On Vercel, add the same **Environment variable** `NEXT_PUBLIC_SITE_URL` pointing to your deployment URL.

## Lint & production build

```bash
npm run lint
npm run build
npm start
```

## Deploy on Vercel

1. Connect the GitHub repository to a Vercel project (already linked per your setup).
2. Framework preset: **Next.js** (default).
3. Build command: `npm run build` · Output: `.next` (default).
4. Set `NEXT_PUBLIC_SITE_URL` to the live site URL for accurate metadata.

Internal `ref/*.pdf` files stay out of `public/` and are **not** part of the static export surface.

## Where to edit marketing copy

- Structured data: `data/company.ts`, `data/products.ts`
- Page composition: `app/**/page.tsx`
- Shared chrome: `components/Header.tsx`, `components/Footer.tsx`
- Styling tokens: `app/globals.css` + Tailwind utility classes

## PDF-derived notes & IA

- Fact-checked summaries & TODOs: `docs/content-brief.md`
- Navigation / route map: `docs/site-map.md`
- Visual direction: `docs/design-direction.md`
- Sector web patterns (inspiration only): `docs/competitor-reference.md`

## Licence

Proprietary — internal and agency use unless otherwise stated by the company.
