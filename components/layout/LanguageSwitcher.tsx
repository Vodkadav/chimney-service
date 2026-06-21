"use client";

import { useTransition } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const localeMeta: Record<Locale, { flag: string; label: string; name: string }> = {
  en: { flag: "/flags/gb.svg", label: "EN", name: "English" },
  es: { flag: "/flags/mx.svg", label: "ES", name: "Español" },
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function onChange(next: Locale) {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={cn(
        "border-border-subtle bg-surface inline-flex items-center gap-1 rounded-full border p-1 shadow-sm",
        isPending && "opacity-60",
        className,
      )}
    >
      {routing.locales.map((value) => {
        const meta = localeMeta[value];
        const active = value === locale;
        return (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
            aria-pressed={active}
            aria-label={meta.name}
            className={cn(
              "focus-visible:ring-accent flex items-center gap-1.5 rounded-full px-2.5 py-1 transition-all focus-visible:ring-2 focus-visible:outline-none",
              active
                ? "bg-accent/10 text-accent"
                : "text-muted hover:text-foreground opacity-70 hover:opacity-100",
            )}
          >
            <Image
              src={meta.flag}
              alt=""
              width={20}
              height={14}
              unoptimized
              className="rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.12)]"
            />
            <span className="text-xs leading-none font-bold tracking-wide">{meta.label}</span>
          </button>
        );
      })}
    </div>
  );
}
