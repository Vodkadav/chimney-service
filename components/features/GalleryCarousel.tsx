"use client";

import { useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/data/gallery";
import { unsplash } from "@/lib/images";
import { cn } from "@/lib/utils";

export function GalleryCarousel() {
  const t = useTranslations("Gallery");
  const [index, setIndex] = useState(0);
  const count = galleryImages.length;

  const go = (to: number) => setIndex(((to % count) + count) % count);
  const current = galleryImages[index];

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") go(index - 1);
    if (event.key === "ArrowRight") go(index + 1);
  }

  return (
    <div
      className="mx-auto max-w-4xl"
      role="group"
      aria-roledescription="carousel"
      aria-label={t("title")}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className="border-border-subtle bg-surface relative aspect-[16/10] overflow-hidden rounded-3xl border shadow-[0_30px_80px_-40px_rgba(33,26,21,0.45)]">
        <Image
          key={current.id}
          src={unsplash(current.id, 1400)}
          alt={t(`captions.${current.captionKey}`)}
          fill
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover"
          priority
        />

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label={t("prev")}
          className="text-foreground absolute top-1/2 left-3 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 shadow-md backdrop-blur transition hover:bg-white"
        >
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label={t("next")}
          className="text-foreground absolute top-1/2 right-3 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 shadow-md backdrop-blur transition hover:bg-white"
        >
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>

      <p aria-live="polite" className="text-foreground mt-5 text-center text-lg font-medium">
        {t(`captions.${current.captionKey}`)}
      </p>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {galleryImages.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => go(i)}
            aria-label={t("goToImage", { number: i + 1 })}
            aria-current={i === index ? "true" : undefined}
            className={cn(
              "h-2.5 rounded-full transition-all",
              i === index ? "bg-accent w-7" : "bg-foreground/20 hover:bg-foreground/40 w-2.5",
            )}
          />
        ))}
      </div>
    </div>
  );
}
