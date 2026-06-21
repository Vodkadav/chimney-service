import { Siren, MapPin, HardHat, FileCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** Why-choose-us points. `key` → messages → Features.items.<key>.{title,description}. */
export interface Feature {
  key: string;
  Icon: LucideIcon;
}

export const features: Feature[] = [
  { key: "critical", Icon: Siren },
  { key: "regional", Icon: MapPin },
  { key: "qualified", Icon: HardHat },
  { key: "documented", Icon: FileCheck },
];
