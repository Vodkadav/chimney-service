import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;

const PATHS = ["", "/services", "/gallery", "/before-after", "/about", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of routing.locales) {
    for (const path of PATHS) {
      entries.push({
        url: `${siteUrl}/${locale}${path}`,
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }
  }
  return entries;
}
