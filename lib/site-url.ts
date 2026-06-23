import { siteConfig } from "@/data/site";

/**
 * Normalise any configured site URL to a bare origin (scheme + host, no path or
 * trailing slash).
 */
export function toSiteOrigin(raw: string): string {
  return new URL(raw).origin;
}

/**
 * Public origin of the deployed site — used for canonical URLs, OG tags, the
 * sitemap and robots. Normalised so a misconfigured `NEXT_PUBLIC_SITE_URL`
 * (e.g. one that still carries a "/en" locale segment copied from the address
 * bar) can't double the locale into "/en/en" canonicals and sitemap entries.
 */
export const siteOrigin = toSiteOrigin(
  process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url,
);
