/**
 * Gallery photos. `src` is a ready-to-use image URL (local real photo in
 * /public/photos); `captionKey` resolves to messages → Gallery.captions.<key>
 * in the active locale.
 *
 * These are the client's own job photos (real crew, real industrial duct/HVAC work).
 */
export interface GalleryImage {
  src: string;
  captionKey: string;
}

export const galleryImages: GalleryImage[] = [
  { src: "/photos/camera-inspection.jpg", captionKey: "cameraInspection" },
  { src: "/photos/mechanical-room.jpg", captionKey: "mechanicalRoom" },
  { src: "/photos/duct-motor.jpg", captionKey: "ductMotor" },
  { src: "/photos/rooftop-ductwork.jpg", captionKey: "rooftopDuctwork" },
  { src: "/photos/rooftop-tech.jpg", captionKey: "rooftopTech" },
  { src: "/photos/team-rooftop.jpg", captionKey: "teamRooftop" },
];

/**
 * Hero / feature imagery. The hero and CTA band use locally AI-generated industrial
 * scenes (no people, commercial-safe SDXL — see CREDITS.md); the About image uses a
 * real job photo.
 */
export const featureImages = {
  hero: "/photos/gen-rooftop-ahu.png",
  cta: "/photos/gen-spiral-ductwork.png",
  about: "/photos/camera-inspection.jpg",
} as const;

/**
 * Before/after cleaning footage shown on the gallery page — self-hosted, trimmed
 * MP4s of a real job. Set `afterSrc` to `null` to show a "coming soon" placeholder
 * in the after cell instead.
 */
export interface CleaningVideo {
  beforeSrc: string;
  beforePoster: string;
  afterSrc: string | null;
  afterPoster: string | null;
}

export const cleaningVideo: CleaningVideo = {
  beforeSrc: "/videos/before-cleaning.mp4",
  beforePoster: "/videos/before-cleaning-poster.jpg",
  afterSrc: "/videos/after-cleaning.mp4",
  afterPoster: "/videos/after-cleaning-poster.jpg",
};
