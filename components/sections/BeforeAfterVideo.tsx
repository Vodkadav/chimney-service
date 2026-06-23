import { useTranslations } from "next-intl";
import { Clapperboard } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { cleaningVideo } from "@/data/gallery";

function VideoCell({
  label,
  labelClassName,
  src,
  poster,
  caption,
}: {
  label: string;
  labelClassName: string;
  src: string;
  poster: string | null;
  caption: string;
}) {
  return (
    <figure className="border-border-subtle bg-surface relative overflow-hidden rounded-3xl border shadow-[0_30px_80px_-40px_rgba(33,26,21,0.45)]">
      <span
        className={`absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-xs font-semibold tracking-[0.12em] text-white uppercase shadow-md ${labelClassName}`}
      >
        {label}
      </span>
      <video
        controls
        muted
        playsInline
        preload="metadata"
        poster={poster ?? undefined}
        aria-label={caption}
        className="aspect-video w-full bg-black object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <figcaption className="text-muted px-5 py-4 text-sm">{caption}</figcaption>
    </figure>
  );
}

/**
 * "Before / After" cleaning footage on the gallery page. Both clips are self-hosted
 * MP4s (poster + click-to-play, muted by default). When `afterSrc` is null the after
 * cell shows a placeholder instead — see `cleaningVideo` in data/gallery.ts.
 */
export function BeforeAfterVideo() {
  const t = useTranslations("VideoDemo");

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading title={t("title")} subtitle={t("subtitle")} />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <VideoCell
          label={t("before")}
          labelClassName="bg-accent"
          src={cleaningVideo.beforeSrc}
          poster={cleaningVideo.beforePoster}
          caption={t("beforeCaption")}
        />

        {cleaningVideo.afterSrc ? (
          <VideoCell
            label={t("after")}
            labelClassName="bg-foreground/70"
            src={cleaningVideo.afterSrc}
            poster={cleaningVideo.afterPoster}
            caption={t("afterCaption")}
          />
        ) : (
          <figure className="border-border-subtle bg-surface relative overflow-hidden rounded-3xl border">
            <span className="bg-foreground/70 absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-xs font-semibold tracking-[0.12em] text-white uppercase shadow-md">
              {t("after")}
            </span>
            <div className="text-muted flex aspect-video w-full flex-col items-center justify-center gap-3 px-6 text-center">
              <Clapperboard className="size-10 opacity-50" aria-hidden />
              <p className="text-foreground text-base font-medium">{t("afterPlaceholder")}</p>
            </div>
            <figcaption className="text-muted px-5 py-4 text-sm">{t("afterCaption")}</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
