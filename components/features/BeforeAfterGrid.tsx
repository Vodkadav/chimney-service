import Image from "next/image";
import { useTranslations } from "next-intl";
import { workPhotos } from "@/data/videos";

/** Documented-work photo grid (real job photos with technical captions). */
export function BeforeAfterGrid() {
  const t = useTranslations("Videos");

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {workPhotos.map(({ key, src }) => {
        const title = t(`items.${key}.title`);
        return (
          <figure key={key} className="flex flex-col">
            <div className="border-border-subtle relative aspect-[4/3] overflow-hidden rounded-2xl border shadow-[0_20px_50px_-30px_rgba(11,31,42,0.4)]">
              <Image
                src={src}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4">
              <h3 className="font-display text-foreground text-lg font-bold">{title}</h3>
              <p className="text-muted mt-1 text-sm leading-relaxed">{t(`items.${key}.caption`)}</p>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
