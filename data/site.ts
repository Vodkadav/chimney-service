/**
 * Non-localised brand + contact metadata.
 *
 * Swap these placeholder values for the real business details — they are the
 * single source of truth used across the layout, footer, contact page, and SEO.
 * `url` is the build-time fallback; production reads NEXT_PUBLIC_SITE_URL first
 * (see app/sitemap.ts, robots.ts, [locale]/layout.tsx).
 */
export const siteConfig = {
  name: "Riviera Hearth",
  legalName: "Riviera Hearth Chimney Care S.A. de C.V.",
  url: "https://chimney-service.vercel.app",

  // Public contact details (placeholders — replace with the real ones).
  email: "hola@rivierahearth.mx",
  phone: "+52 998 123 4567",
  // E.164 digits only, used to build the wa.me link.
  whatsapp: "529981234567",
  address: {
    street: "Blvd. Kukulcan Km 9, Zona Hotelera",
    city: "Cancún, Quintana Roo 77500",
    country: "México",
  },
  // Used for the Google Maps embed query on the contact page.
  mapsQuery: "Zona Hotelera, Cancún, Quintana Roo, México",

  social: {
    instagram: "https://instagram.com/rivierahearth",
    facebook: "https://facebook.com/rivierahearth",
  },
} as const;

/**
 * Web3Forms access key for the contact form. This key is public by design (it is
 * submitted from the browser), so it is safe to expose. Set the real key in
 * `NEXT_PUBLIC_WEB3FORMS_KEY` (locally in .env.local, in Vercel project settings
 * for production). When unset, the form falls back to a mailto: link.
 */
export const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
