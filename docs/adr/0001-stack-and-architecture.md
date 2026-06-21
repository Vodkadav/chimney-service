# ADR 0001 — Stack & Architecture

- Status: Accepted
- Date: 2026-06-21

## Context

We needed a premium, fast, bilingual (EN/ES) marketing site for a Cancún hotel
chimney-cleaning business: multi-page, gallery carousel, YouTube before/after,
a working contact form, free hosting now with a paid custom domain possible
later, and a CI/CD pipeline.

The portfolio already contains two closely related sites (`webpresence`,
`webpageCreator`), both **Next.js + next-intl + Tailwind deployed on Vercel**.
An initial plan to use Astro + Cloudflare Pages was dropped once it was confirmed
that no Cloudflare setup existed to reuse and that the real, reusable hosting was
Vercel (per the "reuse before build" rule).

## Decision

- **Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4**, scaffolded
  from the `webpresence` template to reuse its proven configs, i18n setup,
  contact-validation lib, design primitives and test harness.
- **next-intl** for i18n with locale-prefixed routes (`/en`, `/es`); message
  keys kept loosely typed (not augmenting `Messages`) because many keys are built
  dynamically from data modules — a runtime parity test guards completeness.
- **Contact form via Web3Forms** (client-side, no backend) with a `mailto:`
  fallback, rather than a Resend serverless route — fewer moving parts and no
  account to provision for a static marketing site.
- **Gallery/hero images referenced remotely from Unsplash**; before/after via a
  lazy YouTube facade (thumbnail → iframe on click) for performance and privacy.
- **Hosting: Vercel** (free tier, native Git deploys, preview URLs, easy custom
  domain later). **CI: GitHub Actions** gate — lint → typecheck → test → build.

## Consequences

- Maximum reuse and consistency with the existing portfolio; low-risk scaffold.
- No server/database to operate; the form works with a single public key.
- Trade-off: losing next-intl's compile-time key checking — mitigated by the
  `messages.test.ts` key-parity + no-empty-string test.
- Remote images depend on Unsplash availability; they are swap-ready for the
  client's own photography in `data/gallery.ts`.
