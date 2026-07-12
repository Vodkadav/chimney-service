import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { ContactForm } from "@/components/features/ContactForm";
import { Card } from "@/components/ui/card";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "contactTitle", "contactDesc", "/contact");
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("Contact");

  return (
    <main>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2">
        <ContactInfo />
        <Card className="h-fit p-7">
          <h2 className="font-display text-foreground mb-6 text-xl font-bold">{t("formTitle")}</h2>
          <ContactForm />
        </Card>
      </section>
    </main>
  );
}
