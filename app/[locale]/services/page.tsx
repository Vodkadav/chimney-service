import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Process } from "@/components/sections/Process";
import { CtaBand } from "@/components/sections/CtaBand";
import { services } from "@/data/services";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "servicesTitle", "servicesDesc");
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("Services");

  return (
    <main>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-muted mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed">
          {t("intro")}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ key, Icon }) => (
            <ServiceCard
              key={key}
              Icon={Icon}
              title={t(`items.${key}.title`)}
              description={t(`items.${key}.description`)}
            />
          ))}
        </div>
      </section>

      <Process />
      <CtaBand />
    </main>
  );
}
