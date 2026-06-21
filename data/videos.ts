/**
 * Documented-work photos shown on the "Trabajo / Documented work" page.
 * `src` is a local real job photo; text resolves to messages → Videos.items.<key>.
 * (The "Videos" message namespace is reused for this section.)
 */
export interface WorkPhoto {
  key: string;
  src: string;
}

export const workPhotos: WorkPhoto[] = [
  { key: "ductMotor", src: "/photos/duct-motor.jpg" },
  { key: "mechanicalRoom", src: "/photos/mechanical-room.jpg" },
  { key: "rooftopDuctwork", src: "/photos/rooftop-ductwork.jpg" },
  { key: "cameraInspection", src: "/photos/camera-inspection.jpg" },
];
