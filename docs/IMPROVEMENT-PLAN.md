# Site review — findings & implementation plan

Reviewed 2026-07-11 against `main` @ `7f275af` (code read + full-page Playwright
screenshots of every page, EN + ES, desktop 1440px + mobile 390px, local dev).

Overall verdict: the site is professional and close to done — real client
content, readable navigation, honest evidence-based galleries, working
bilingual routing, solid SEO plumbing. The review found **two visible contrast
defects** on the home hero and a handful of **trust/SEO/a11y additions**. The
Google-Maps embed, contact cards, forms, videos and all inner pages render
correctly (an initially suspected "blank map" was a screenshot-timing
artifact — with a normal load the map renders fine).

This plan is written to be executed by another model/session without extra
context. Follow the conventions in `CLAUDE.md`. After **each** numbered task,
run the CI gate — `npm run lint && npm run typecheck && npm test && npm run build`
— and commit that task on its own.

Rules for the implementer:

- Every new user-facing string goes in **both** `messages/en.json` and
  `messages/es.json` (parity enforced by `messages/messages.test.ts`). Never
  hardcode copy in components. This site is EN/ES only (no Danish — project
  convention overrides the global rule).
- Tasks 1–2 are pure-visual CSS (TDD-exempt: `visual-only CSS`). Tasks 3–4
  create components — write the small Vitest + Testing Library test first.
- Zero new dependencies are needed for anything below.

---

## P0 — visible contrast defects (home hero, EN + ES, desktop + mobile)

### 1. Brand wordmark is illegible over the dark hero

**Symptom:** at scroll position 0 on the home page, the navbar links sit in a
frosted white pill and read fine, but the brand "Nuevo Amanecer" next to the
logo mark is `text-foreground` (near-black) directly over the dark hero photo —
it disappears. Verified in EN and ES screenshots, desktop and mobile.

**Fix:** give the brand link the same frosted-pill treatment the nav links
already use. In `components/layout/NavBar.tsx` the brand is:

```tsx
<Link href="/" aria-label={t("brand")} onClick={() => setOpen(false)}>
  <Logo />
</Link>
```

Change to:

```tsx
<Link
  href="/"
  aria-label={t("brand")}
  onClick={() => setOpen(false)}
  className="border-border-subtle bg-surface/80 rounded-full border py-1 pr-4 pl-1 shadow-sm backdrop-blur-md"
>
  <Logo />
</Link>
```

Do **not** touch `components/layout/Logo.tsx` — it is also used in the footer
on a light background where it is fine.

**Verify:** `npm run dev`, open `/en` and `/es` at scroll 0 — brand legible
over the hero; scroll down — still looks right on the light bar; check the
footer logo is unchanged; check mobile width.

### 2. Hero trust line is washed out

**Symptom:** the line under the hero CTAs ("Hotels, hospitals, universities,
malls and restaurants rely on our planned, documented interventions.") is
`text-white/70` and sits exactly where the hero photo fades into the cream
page background — it is barely legible in both locales.

**Fix:** in `components/sections/Hero.tsx`, replace:

```tsx
<p className="mt-10 max-w-md text-sm text-white/70">{t("trust")}</p>
```

with a dark chip that stays readable over any background:

```tsx
<p className="mt-10 inline-flex w-fit max-w-md rounded-full bg-black/30 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
  {t("trust")}
</p>
```

**Verify:** visually on `/en` and `/es`.

## P1 — trust, SEO, conversion

### 3. Add LocalBusiness structured data (local SEO)

The site has good per-locale metadata but no schema.org structured data.
`LocalBusiness` JSON-LD is how Google understands a local service business
(maps panel, service area, phone). All values come from `data/site.ts`
(`siteConfig`) — real client data, nothing invented.

**Steps (TDD — test first):**

1. Test `components/seo/JsonLd.test.tsx`: render `<JsonLd />`; assert the
   document contains a `script[type="application/ld+json"]` whose parsed JSON
   has `"@type": "LocalBusiness"`, `name` = `siteConfig.name`,
   `telephone` = `siteConfig.phone`, and a non-empty `areaServed` array.
2. Component `components/seo/JsonLd.tsx` (server component, no `"use client"`):

```tsx
import { siteConfig } from "@/data/site";
import { siteOrigin } from "@/lib/site-url";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteOrigin,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cancún · Mérida",
      addressRegion: "Península de Yucatán",
      addressCountry: "MX",
    },
    areaServed: ["Cancún", "Mérida", "Península de Yucatán"],
    sameAs: [],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

   Check `lib/site-url.ts` first — it exports the normalized origin
   (`siteOrigin`); use whatever name it actually exports. If `sameAs` has no
   real social profiles yet, omit the property entirely rather than shipping
   an empty array.
3. Render `<JsonLd />` inside `<body>` in `app/[locale]/layout.tsx`.

No message keys needed (structured data is not localized copy).

### 4. Floating WhatsApp button

WhatsApp is the primary business-contact channel in Mexico. The wa.me links
exist in the footer and contact page, but a persistent floating button is the
expected pattern and the strongest conversion lever on every page.

**Steps (TDD — test first):**

1. Test `components/layout/WhatsAppFloat.test.tsx` (mirror the setup of
   `NavBar.test.tsx` for the next-intl test wrapper): renders a link whose
   `href` contains `wa.me/529981540967` (that is
   `siteConfig.whatsapps[0].number`), has `target="_blank"`, and has an
   accessible name (the translated label).
2. Component `components/layout/WhatsAppFloat.tsx`:

```tsx
import { useTranslations } from "next-intl";
import { WhatsappIcon } from "@/components/ui/icons";
import { siteConfig } from "@/data/site";

export function WhatsAppFloat() {
  const t = useTranslations("WhatsAppFloat");
  const wa = siteConfig.whatsapps[0];
  return (
    <a
      href={`https://wa.me/${wa.number}?text=${encodeURIComponent(siteConfig.whatsappText)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("label")}
      className="fixed right-5 bottom-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsappIcon className="size-7" aria-hidden />
    </a>
  );
}
```

3. Messages — `en.json`: `"WhatsAppFloat": { "label": "Chat with us on WhatsApp" }`;
   `es.json`: `"WhatsAppFloat": { "label": "Escríbenos por WhatsApp" }`.
4. Render it in `app/[locale]/layout.tsx` after `<Footer />`.

56px meets the ≥44px touch-target baseline; `z-40` stays below the navbar's
`z-50`. The green is WhatsApp's own brand color — keep it, don't theme it.

### 5. Phone + WhatsApp escape hatch in the CTA band

The "Ready for a technical inspection?" band (every page) only offers two
navigation buttons. The contact page promises "immediate attention for
emergencies by phone or WhatsApp" — surface the phone number right in the CTA
band so a hotel engineer with an emergency doesn't have to click through.

**Fix:** read `components/sections/CtaBand.tsx` first, then under the existing
buttons add (adapting to its actual markup/translation hook):

```tsx
<p className="mt-6 text-sm text-white/85">
  {t("call")}{" "}
  <a
    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
    className="font-semibold whitespace-nowrap underline underline-offset-4"
  >
    {siteConfig.phone}
  </a>
</p>
```

Import `siteConfig` from `@/data/site`. Messages — `Cta.call` in `en.json`:
`"Emergencies? Call us directly:"`; `es.json`: `"¿Emergencias? Llámenos directamente:"`.

## P2 — accessibility / polish

### 6. Skip-to-content link

No skip link exists; keyboard users tab through the whole navbar on every page
(a11y baseline requirement).

**Fix:** in `app/[locale]/layout.tsx`:

- Change the content wrapper `<div className="flex-1">{children}</div>` to
  `<div id="main" className="flex-1">{children}</div>`.
- As the **first child** of `<body>`, add a translated skip link. The layout
  is a server component with `locale` in scope — use
  `const t = await getTranslations({ locale, namespace: "A11y" })` (import
  from `next-intl/server`, already imported in that file):

```tsx
<a
  href="#main"
  className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-full focus:bg-accent-strong focus:px-4 focus:py-2 focus:text-white"
>
  {t("skipToContent")}
</a>
```

Messages — `en.json`: `"A11y": { "skipToContent": "Skip to content" }`;
`es.json`: `"A11y": { "skipToContent": "Saltar al contenido" }`.

**Verify:** load any page, press Tab once — the link appears top-left; Enter
jumps focus past the nav.

### 7. Privacy note under the contact form

The form collects PII (name, email, phone) with no statement of use. One
sentence is proportionate at this scale (no analytics, no marketing list).

**Fix:** in `components/features/ContactForm.tsx`, directly under the submit
`<Button>` add:

```tsx
<p className="text-muted text-xs">{t("privacyNote")}</p>
```

Messages — `Contact.privacyNote` in `en.json`:
`"We only use your details to respond to your request — they are never shared or added to a mailing list."`;
`es.json`:
`"Solo usamos sus datos para responder a su solicitud — nunca se comparten ni se añaden a listas de correo."`

## Considered and rejected (do not implement)

- **Google Maps embed** — suspected blank, actually fine; it was a
  screenshot-timing artifact. No change.
- **Testimonials section** — deliberately absent until the client provides
  consented quotes (tracked in `PROGRESS.md`). Do not invent any.
- **Gallery carousel → grid** — the carousel is accessible, captioned and
  TDD'd; no evidence it hurts. Leave it.
- **"After" video brightness** — the footage is dark, but it is the client's
  real evidence footage; content, not code. Leave it.
- **Contact-card email wrapping** (`marcosmachadorosales91@gmail.com` breaks
  mid-word) — already `break-all` by design; a 32-char email in a narrow card
  has no better option. Leave it.

## Execution order & acceptance

Tasks 1→7 in order, one commit each, CI gate green per commit, then push
(auto-deploys to https://chimney-service-cancun.vercel.app).

Final acceptance pass: on `/en` and `/es` — brand + trust line legible over
the hero at scroll 0; WhatsApp float on every page opens a prefilled chat;
CTA band shows the phone link; Tab reveals the skip link; view-source shows
one `application/ld+json` script with LocalBusiness data; contact form shows
the privacy note; `npm test` all green.
