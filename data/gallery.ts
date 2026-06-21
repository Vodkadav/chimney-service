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
 * Hero / feature imagery. The hero uses a locally AI-generated industrial scene
 * (no people, commercial-safe SDXL — see CREDITS.md); the About image uses a real
 * job photo.
 */
export const featureImages = {
  hero: "/photos/gen-rooftop-hvac.png",
  about: "/photos/camera-inspection.jpg",
} as const;
