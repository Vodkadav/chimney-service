import { Flame } from "lucide-react";
import { useTranslations } from "next-intl";

/** Brand wordmark: an ember flame mark plus the company name. */
export function Logo({ className }: { className?: string }) {
  const t = useTranslations("Nav");
  return (
    <span className={className}>
      <span className="flex items-center gap-2">
        <span className="from-accent to-accent-strong inline-flex size-9 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-[0_6px_16px_-6px_var(--accent)]">
          <Flame className="size-5" aria-hidden />
        </span>
        <span className="font-display text-foreground text-lg leading-none font-bold tracking-tight">
          {t("brand")}
        </span>
      </span>
    </span>
  );
}
