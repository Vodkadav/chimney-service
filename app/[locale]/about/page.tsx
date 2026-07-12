import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ShieldCheck, MapPin } from "lucide-react";
import { routing } from "@/i18n/routing";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/sections/PageHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { Card } from "@/components/ui/card";
import { featureImages } from "@/data/gallery";

type Props = { params: Promise<{ locale: string }> };

const VALUES = ["safety", "documentation", "continuity"] as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "aboutTitle", "aboutDesc", "/about");
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("About");

  return (
    <main>
      <PageHeader eyebrow={t("subtitle")} title={t("title")} subtitle={t("lead")} />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="space-y-5">
          <p className="text-foreground text-lg leading-relaxed">{t("story1")}</p>
          <p className="text-muted leading-relaxed">{t("story2")}</p>
        </div>
        <div className="border-border-subtle relative aspect-[4/3] overflow-hidden rounded-3xl border shadow-[0_30px_80px_-40px_rgba(11,31,42,0.45)]">
          <Image
            src={featureImages.about}
            alt={t("title")}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-surface border-border-subtle border-y">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Card className="bg-background/60 p-8 text-center">
            <h2 className="font-display text-accent text-sm font-semibold tracking-[0.18em] uppercase">
              {t("missionTitle")}
            </h2>
            <p className="font-display text-foreground mx-auto mt-3 max-w-3xl text-2xl leading-snug font-bold sm:text-3xl">
              {t("mission")}
            </p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-foreground text-2xl font-bold">{t("valuesTitle")}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {VALUES.map((key) => (
            <Card key={key} className="p-6">
              <h3 className="font-display text-foreground text-lg font-bold">
                {t(`values.${key}.title`)}
              </h3>
              <p className="text-muted mt-2 leading-relaxed">{t(`values.${key}.description`)}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Card className="flex items-start gap-4 p-6">
            <MapPin className="text-accent mt-1 size-6 shrink-0" aria-hidden />
            <div>
              <h3 className="font-display text-foreground font-bold">{t("serviceAreaTitle")}</h3>
              <p className="text-muted mt-1 leading-relaxed">{t("serviceArea")}</p>
            </div>
          </Card>
          <Card className="flex items-start gap-4 p-6">
            <ShieldCheck className="text-accent mt-1 size-6 shrink-0" aria-hidden />
            <div>
              <h3 className="font-display text-foreground font-bold">{t("certificationsTitle")}</h3>
              <p className="text-muted mt-1 leading-relaxed">{t("certifications")}</p>
            </div>
          </Card>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
