import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Heading } from "@/components/ui/heading";
import { featureImages } from "@/data/gallery";
import { unsplash } from "@/lib/images";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={unsplash(featureImages.hero, 1920)}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a120c]/85 via-[#1a120c]/55 to-[#1a120c]/20" />
        <div className="from-background absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 py-32 text-white">
        <p className="border-accent/40 bg-accent/10 mb-6 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold tracking-wide text-white backdrop-blur-md">
          <Star className="size-3.5 fill-current" aria-hidden />
          {t("eyebrow")}
        </p>

        <Heading as="h1" size="hero" className="max-w-3xl text-white drop-shadow-sm">
          {t("title")}
        </Heading>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{t("subtitle")}</p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="bg-accent-strong inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_40px_-10px_var(--accent)] transition-all hover:brightness-110"
          >
            {t("ctaPrimary")}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15"
          >
            {t("ctaSecondary")}
          </Link>
        </div>

        <p className="mt-10 max-w-md text-sm text-white/70">{t("trust")}</p>
      </div>
    </section>
  );
}
