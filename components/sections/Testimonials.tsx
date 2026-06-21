import { useTranslations } from "next-intl";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const t = useTranslations("Testimonials");

  return (
    <section className="bg-surface border-border-subtle border-y">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map(({ key, author, hotel }) => (
            <Card key={key} className="flex h-full flex-col p-7">
              <div className="text-accent flex gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground mt-4 flex-1 leading-relaxed">
                “{t(`items.${key}.quote`)}”
              </blockquote>
              <footer className="mt-6">
                <p className="font-display text-foreground font-bold">{author}</p>
                <p className="text-muted text-sm">
                  {t(`items.${key}.role`)} · {hotel}
                </p>
              </footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
