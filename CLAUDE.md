# Riviera Hearth — project notes

Premium bilingual (EN/ES) marketing site for a Cancún hotel chimney-cleaning
business. Next.js 16 (App Router) + next-intl + Tailwind v4 + Vitest + Playwright.
Deploys to Vercel.

## Conventions

- **All user-facing copy** lives in `messages/en.json` + `messages/es.json`. Keys
  must stay in parity (enforced by `messages/messages.test.ts`). No hardcoded
  strings in components.
- **Brand & contact** in `data/site.ts`; **content structure** (services,
  features, stats, gallery, videos, testimonials) in the other `data/*.ts`.
- **TDD** for interactive components (carousel, contact form, YouTube facade,
  language switcher) — Vitest + Testing Library.
- Design tokens are CSS variables in `app/globals.css`; UI primitives in
  `components/ui` consume them, so a palette change is one place.
- Run `npm run lint && npm run typecheck && npm test && npm run build` before
  committing — this is the CI gate.
