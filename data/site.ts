/**
 * Non-localised brand + contact metadata for Desarrolladora Nuevo Amanecer.
 *
 * Single source of truth used across the layout, footer, contact page, and SEO.
 * `url` is the build-time fallback; production reads NEXT_PUBLIC_SITE_URL first
 * (see app/sitemap.ts, robots.ts, [locale]/layout.tsx).
 */
export const siteConfig = {
  name: "Nuevo Amanecer",
  legalName: "Desarrolladora Nuevo Amanecer del Sureste S.A. de C.V.",
  url: "https://chimney-service-cancun.vercel.app",

  // Public business line (matches the client's live site nuevoamanecer.company).
  email: "dnasolution66@gmail.com",
  phone: "+52 998 154 0967",
  // E.164 digits only, used to build the wa.me link.
  whatsapp: "529981540967",
  // Pre-filled WhatsApp message.
  whatsappText: "Hola, quiero información sobre sus servicios",
  address: {
    street: "Cancún · Mérida",
    city: "Península de Yucatán, México",
    country: "México",
  },
  // Used for the Google Maps embed query on the contact page.
  mapsQuery: "Cancún, Quintana Roo, México",

  // Named contacts shown on the contact page (the client asked to show both).
  contacts: [
    {
      name: "Lázaro Rondón Martínez",
      role: "Director General",
      email: "lazarorondon66@yahoo.com",
      phone: "+52 998 154 0967",
    },
    {
      name: "Marcos Machado Rosales",
      role: "Gerente Comercial",
      email: "marcosmachadorosales91@gmail.com",
      phone: "+52 998 322 2916",
    },
  ],
} as const;

/**
 * Web3Forms access key for the contact form. This key is public by design (it is
 * submitted from the browser), so it is safe to expose. Set the real key in
 * `NEXT_PUBLIC_WEB3FORMS_KEY` (locally in .env.local, in Vercel project settings
 * for production). When unset, the form falls back to a mailto: link.
 */
export const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
