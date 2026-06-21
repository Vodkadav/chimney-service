"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { youtubeThumb } from "@/lib/images";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  /** Accessible label for the play button, e.g. "Play video: Resort chimney". */
  playLabel: string;
}

/**
 * Lightweight YouTube embed: renders only a thumbnail + play button until the
 * user clicks, then loads the privacy-enhanced iframe. Keeps the page fast and
 * avoids loading YouTube's player (and cookies) for every video up front.
 */
export function YouTubeFacade({ videoId, title, playLabel }: YouTubeFacadeProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="border-border-subtle bg-foreground/5 relative aspect-video overflow-hidden rounded-2xl border">
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={playLabel}
          className="group absolute inset-0 size-full cursor-pointer"
        >
          <Image
            src={youtubeThumb(videoId)}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/10" />
          <span className="bg-accent-strong absolute top-1/2 left-1/2 inline-flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-xl transition-transform group-hover:scale-110">
            <Play className="size-7 translate-x-0.5 fill-current" aria-hidden />
          </span>
        </button>
      )}
    </div>
  );
}
