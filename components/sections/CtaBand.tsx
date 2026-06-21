import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Heading } from "@/components/ui/heading";

export function CtaBand() {
  const t = useTranslations("Cta");

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="from-accent-strong to-accent relative overflow-hidden rounded-3xl bg-gradient-to-br px-8 py-14 text-center text-white shadow-[0_30px_80px_-40px_var(--accent)] sm:px-14">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#fff_0,transparent_40%)]" />
        <div className="relative">
          <Heading size="section" className="mx-auto max-w-2xl text-white">
            {t("title")}
          </Heading>
          <p className="mx-auto mt-4 max-w-xl text-white/85">{t("subtitle")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="text-accent-strong inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold shadow-lg transition-transform hover:scale-[1.03]"
            >
              {t("primary")}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t("secondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
