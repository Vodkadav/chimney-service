# Progress — Riviera Hearth (Hotel Chimney Service)

Premium bilingual (EN/ES) marketing site for a Cancún hotel chimney-cleaning
business. Next.js 16 + next-intl + Tailwind v4, deployed on Vercel.

## Status

- [x] Project scaffold (Next.js 16, Tailwind v4, Vitest, Playwright) — from the `webpresence` template
- [x] EN/ES i18n (locale routing, language switcher, parity-tested catalogs)
- [x] Premium light theme + design system (serif display, ember/teal palette)
- [x] Layout, slick page navigation, brand identity (Riviera Hearth)
- [x] Pages: Home, Services, Gallery, Before & After, About, Contact
- [x] Gallery carousel (accessible, captioned) — TDD
- [x] Before/after lazy YouTube embeds — TDD
- [x] Contact form (Web3Forms + mailto fallback, validated) — TDD
- [x] SEO (per-locale metadata, hreflang, OG image, sitemap, robots)
- [x] CI gate (lint → typecheck → test → build) green; build verified, 39 tests passing
- [ ] **Manual:** add Web3Forms key + import repo into Vercel (see `docs/DEPLOYMENT.md`)
- [ ] Swap placeholder content (brand, contact, photos, videos) for real details
- [ ] Optional: attach paid custom domain

## Notes

- Created 2026-06-21.
- Gallery photos are remote Unsplash images; before/after videos use placeholder
  YouTube ids — both are swap-ready via `data/gallery.ts` / `data/videos.ts`.
