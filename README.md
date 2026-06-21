# Riviera Hearth — Hotel Chimney Service (Cancún)

A premium, bilingual (English/Spanish) marketing website for a hotel chimney,
fireplace and ventilation cleaning company serving Cancún and the Riviera Maya.

> **Placeholder content.** The brand name ("Riviera Hearth"), copy, contact
> details, testimonials, gallery photos and before/after videos are all
> illustrative placeholders. See [Editing your content](#editing-your-content)
> to swap in the real business details.

## Features

- **Premium, responsive design** — warm editorial light theme (serif display +
  Tailwind v4), full-bleed hero, slick page-to-page navigation, mobile menu.
- **Bilingual EN/ES** — `next-intl` with locale-prefixed routes (`/en`, `/es`),
  a flag language switcher, and every string translated. A test enforces
  key-parity between the two catalogs.
- **Pages** — Home, Services, Gallery (carousel with captions), Before & After
  (lazy-loaded YouTube embeds), About, Contact.
- **Contact form** — validated, accessible, submits via [Web3Forms](https://web3forms.com)
  (no backend); falls back to a `mailto:` link when no key is configured.
- **Gallery carousel** — keyboard-accessible, captioned, with dot navigation.
- **SEO** — per-locale metadata, `hreflang` alternates, dynamic OG image
  (`/og`), `sitemap.xml`, `robots.txt`.
- **Accessible** — WCAG-AA contrast, visible focus, reduced-motion support,
  labelled controls.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** + **Tailwind v4**
- **next-intl** for i18n · **lucide-react** for icons
- **Vitest + Testing Library** (unit/component) · **Playwright** (e2e)
- Deployed on **Vercel** (free tier; custom domain attachable later)

## Getting started

```bash
npm install
cp .env.example .env.local   # optional — fill in for the live contact form
npm run dev                  # http://localhost:3000  (redirects to /en)
```

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` / `start` | Production build / serve |
| `npm run lint` | ESLint (next core-web-vitals + a11y + testing-library) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` / `test:watch` | Vitest unit + component tests |
| `npm run test:e2e` | Playwright (`npx playwright install` first) |
| `npm run format` | Prettier |

## Editing your content

- **Brand & contact details:** `data/site.ts` (name, phone, email, WhatsApp,
  address, social links).
- **Copy / translations:** `messages/en.json` and `messages/es.json` — every key
  must exist in both (enforced by `messages/messages.test.ts`).
- **Services / features / process / stats / testimonials:** the `data/*.ts`
  modules (structure + icons) paired with the matching `messages` keys.
- **Gallery photos:** `data/gallery.ts` (Unsplash photo ids; replace with your
  own). **Before/after videos:** `data/videos.ts` (YouTube ids — currently
  placeholders).

## Deployment

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for the one-time Vercel + Web3Forms
setup and how to attach a custom domain later. CI (lint → typecheck → test →
build) runs on every push via GitHub Actions.

## Documentation

- [Deployment guide](docs/DEPLOYMENT.md)
- [Project status](PROGRESS.md)
- [ADR 0001 — Stack & architecture](docs/adr/0001-stack-and-architecture.md)
- [Image & content credits](CREDITS.md)
