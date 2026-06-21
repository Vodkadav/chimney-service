import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/data/services";

/** Home-page preview: the first four services with a link to the full page. */
export function ServicesPreview() {
  const t = useTranslations("ServicesPreview");
  const ts = useTranslations("Services");

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.slice(0, 4).map(({ key, Icon }) => (
          <ServiceCard
            key={key}
            Icon={Icon}
            title={ts(`items.${key}.title`)}
            description={ts(`items.${key}.description`)}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="text-accent hover:text-accent-strong inline-flex items-center gap-2 font-semibold transition-colors"
        >
          {t("cta")}
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
