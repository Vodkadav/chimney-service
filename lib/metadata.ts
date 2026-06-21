import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

/** Build per-page metadata from the Metadata namespace. */
export async function pageMetadata(
  locale: string,
  titleKey: string,
  descKey: string,
): Promise<Metadata> {
  const t = await getTranslations({ locale: locale as Locale, namespace: "Metadata" });
  return {
    title: t(titleKey),
    description: t(descKey),
  };
}
