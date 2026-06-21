import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/process";

export function Process() {
  const t = useTranslations("Process");

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />

      <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <li key={step} className="relative">
            <span className="font-display text-accent/25 text-5xl font-bold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-foreground mt-2 text-lg font-bold">
              {t(`steps.${step}.title`)}
            </h3>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              {t(`steps.${step}.description`)}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
