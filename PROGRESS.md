# Progress — Nuevo Amanecer (Industrial Maintenance)

Bilingual (EN/ES) marketing site for **Desarrolladora Nuevo Amanecer del Sureste
S.A. de C.V.** — industrial duct / HVAC ventilation cleaning + preventive technical
maintenance for hotels, hospitals, universities, malls and restaurants in Cancún &
Mérida. Next.js 16 + next-intl + Tailwind v4, deployed on Vercel.

> Built on the `chimney-service` repo (originally a placeholder "Riviera Hearth"
> hotel-chimney template). Reframe source of truth: `docs/reference-existing-site.md`
> (pulled from the client's live site nuevoamanecer.company).

## Status

- [x] Project scaffold (Next.js 16, Tailwind v4, Vitest, Playwright)
- [x] EN/ES i18n (locale routing, language switcher, parity-tested catalogs)
- [x] Design system + UI primitives (industrial steel-blue / cyan palette)
- [x] Pages: Home, Services, Gallery, Documented work, About, Contact
- [x] Gallery carousel + contact form (Web3Forms + mailto fallback) — TDD
- [x] SEO (per-locale metadata, hreflang, OG image, sitemap, robots)
- [x] **Reframed to real client Nuevo Amanecer** — brand, real bilingual copy
      (4 services, process, about, SEO) from their live site
- [x] **New sections:** Sectores atendidos (5) + Equipamiento (6)
- [x] **Real client photos** wired into gallery / documented-work / about; hero uses
      matching industrial stock; placeholder testimonials removed (no real ones yet)
- [x] **Real contacts:** business line (dnasolution66@gmail.com / +52 998 154 0967)
      + Director (Lázaro Rondón) + Comercial (Marcos Machado)
- [x] CI gate (lint → typecheck → test → build) green; 39 tests passing
- [~] AI imagery (client asked for "real crew in AI scenes")
  - Local generator is SDXL **text-to-image only** — faithful real faces need a
    face-swap/LoRA pipeline we don't have, so that exact ask isn't possible locally
  - Real photos already supply the real crew; optional **no-face thematic** AI
    originals (duct interiors, rooftop HVAC) can be generated to taste
- [ ] Pending real details from the client: exact street addresses, office hours,
      consented testimonials, social links, logo/brand mark
- [ ] **Manual:** add Web3Forms key + import repo into Vercel (see `docs/DEPLOYMENT.md`)
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

## Manual steps still to do

Full walkthrough with exact links: [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

1. **Web3Forms key** (live contact form, ~2 min) — create a free key at
   https://web3forms.com, verify the email, then set `NEXT_PUBLIC_WEB3FORMS_KEY`.
   Until then the form falls back to a `mailto:` link, so the site is fully usable.
2. **Deploy on Vercel** (~5 min) — import `Vodkadav/chimney-service` at
   https://vercel.com/new, add env vars `NEXT_PUBLIC_SITE_URL` and (optionally)
   `NEXT_PUBLIC_WEB3FORMS_KEY`, Deploy. Pushes to `main` auto-deploy after that.
3. *(Optional, later)* attach a paid custom domain in Vercel → Settings → Domains.

## Notes

- Created 2026-06-21; reframed to Nuevo Amanecer the same day.
- Real client job photos live in `public/photos/`; the hero uses a matching
  industrial Unsplash photo. Content is wired from `data/*.ts` + `messages/{en,es}.json`.
- The Spanish client intake form (`docs/Formulario-de-Contenido.docx`) can still be
  used to collect the remaining real details (addresses, hours, testimonials, logo).
