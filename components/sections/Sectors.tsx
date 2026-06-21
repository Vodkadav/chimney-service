import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";
import { sectors } from "@/data/sectors";

export function Sectors() {
  const t = useTranslations("Sectors");

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {sectors.map(({ key, Icon }) => (
          <div
            key={key}
            className="border-border-subtle bg-surface flex flex-col items-center gap-3 rounded-2xl border p-6 text-center"
          >
            <span className="bg-accent/10 text-accent inline-flex size-12 items-center justify-center rounded-2xl">
              <Icon className="size-6" aria-hidden />
            </span>
            <h3 className="font-display text-foreground text-base font-bold">
              {t(`items.${key}.title`)}
            </h3>
            <p className="text-muted text-sm leading-relaxed">{t(`items.${key}.description`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
