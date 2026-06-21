/**
 * Gallery photos. `id` is an Unsplash photo id; `captionKey` resolves to
 * messages → Gallery.captions.<key> in the active locale.
 * Swap these for the company's own photography when available.
 */
export interface GalleryImage {
  id: string;
  captionKey: string;
}

export const galleryImages: GalleryImage[] = [
  { id: "1560448204-e02f11c3d0e2", captionKey: "lobbyFireplace" },
  { id: "1556912173-3bb406ef7e77", captionKey: "kitchenExtraction" },
  { id: "1551882547-ff40c63fe5fa", captionKey: "resortPool" },
  { id: "1611892440504-42a792e24d32", captionKey: "suiteHearth" },
  { id: "1517248135467-4c7edcad34c4", captionKey: "restaurant" },
  { id: "1571896349842-33c89424de2d", captionKey: "openAirLounge" },
  { id: "1414235077428-338989a2e8c0", captionKey: "guestDining" },
  { id: "1582719478250-c89cae4dc85b", captionKey: "boutiqueSuite" },
];

/** Hero / feature imagery reused across pages. */
export const featureImages = {
  hero: "1564501049412-61c2a3083791",
  resort: "1551882547-ff40c63fe5fa",
  lounge: "1560448204-e02f11c3d0e2",
  suite: "1611892440504-42a792e24d32",
} as const;
