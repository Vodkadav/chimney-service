import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/sections/PageHeader";
import { BeforeAfterGrid } from "@/components/features/BeforeAfterGrid";
import { CtaBand } from "@/components/sections/CtaBand";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "beforeAfterTitle", "beforeAfterDesc", "/before-after");
}

export default async function BeforeAfterPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("Videos");

  return (
    <main>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-muted mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed">
          {t("intro")}
        </p>
        <BeforeAfterGrid />
      </section>
      <CtaBand />
    </main>
  );
}
