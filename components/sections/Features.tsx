import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";
import { features } from "@/data/features";

export function Features() {
  const t = useTranslations("Features");

  return (
    <section className="bg-surface border-border-subtle border-y">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ key, Icon }) => (
            <div key={key} className="flex flex-col items-start">
              <span className="from-accent to-accent-strong inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[0_10px_24px_-12px_var(--accent)]">
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="font-display text-foreground mt-5 text-lg font-bold">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                {t(`items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
