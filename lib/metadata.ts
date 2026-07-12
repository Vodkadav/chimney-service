import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";

/**
 * Per-page canonical + hreflang alternates. Without these, every subpage
 * inherits the layout's canonical ("/en"), telling search engines the whole
 * site is a duplicate of the home page.
 */
export function pageAlternates(locale: string, path: string): Metadata["alternates"] {
  return {
    canonical: `/${locale}${path}`,
    languages: Object.fromEntries(routing.locales.map((l) => [l, `/${l}${path}`])),
  };
}

/** Build per-page metadata from the Metadata namespace. */
export async function pageMetadata(
  locale: string,
  titleKey: string,
  descKey: string,
  path: string,
): Promise<Metadata> {
  const t = await getTranslations({ locale: locale as Locale, namespace: "Metadata" });
  return {
    title: t(titleKey),
    description: t(descKey),
    alternates: pageAlternates(locale, path),
  };
}
