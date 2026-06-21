import { useTranslations } from "next-intl";
import { YouTubeFacade } from "./YouTubeFacade";
import { beforeAfterVideos } from "@/data/videos";

export function BeforeAfterGrid() {
  const t = useTranslations("Videos");

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {beforeAfterVideos.map(({ key, youtubeId }) => {
        const title = t(`items.${key}.title`);
        return (
          <figure key={key} className="flex flex-col">
            <YouTubeFacade
              videoId={youtubeId}
              title={title}
              playLabel={t("playLabel", { title })}
            />
            <figcaption className="mt-4">
              <div className="flex items-center gap-2">
                <span className="bg-foreground/10 text-muted rounded-full px-2.5 py-0.5 text-xs font-semibold">
                  {t("before")}
                </span>
                <span className="bg-accent/10 text-accent rounded-full px-2.5 py-0.5 text-xs font-semibold">
                  {t("after")}
                </span>
              </div>
              <h3 className="font-display text-foreground mt-3 text-lg font-bold">{title}</h3>
              <p className="text-muted mt-1 text-sm leading-relaxed">{t(`items.${key}.caption`)}</p>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
