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

## Resuming on another machine

Everything below is in git — clone and you're caught up. Requires Node 22+.

```bash
git clone https://github.com/Vodkadav/chimney-service.git
cd chimney-service
npm install
cp .env.example .env.local      # optional; fill in for the live contact form
npm run dev                     # http://localhost:3000 (redirects to /en)
```

Verify the gate any time: `npm run lint && npm run typecheck && npm test && npm run build`.

### Manual steps still to do (the only things not automatable)

Full walkthrough with exact links: [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

1. **Web3Forms key** (live contact form, ~2 min) — create a free key at
   https://web3forms.com, verify the email, then set `NEXT_PUBLIC_WEB3FORMS_KEY`.
   Until then the form falls back to a `mailto:` link, so the site is fully usable.
2. **Deploy on Vercel** (~5 min) — import `Vodkadav/chimney-service` at
   https://vercel.com/new, add env vars `NEXT_PUBLIC_WEB3FORMS_KEY` and
   `NEXT_PUBLIC_SITE_URL`, Deploy. Pushes to `main` auto-deploy after that.
3. **Swap placeholder content** for the real business — brand/contact in
   `data/site.ts`, copy in `messages/{en,es}.json`, photos in `data/gallery.ts`,
   before/after videos (currently placeholder YouTube ids) in `data/videos.ts`.
4. *(Optional, later)* attach a paid custom domain in Vercel → Settings → Domains.

> Note: we standardized on **Vercel**, not Cloudflare — no Cloudflare account is
> needed (none of your projects actually used it).

## Notes

- Created 2026-06-21.
- Gallery photos are remote Unsplash images; before/after videos use placeholder
  YouTube ids — both are swap-ready via `data/gallery.ts` / `data/videos.ts`.
