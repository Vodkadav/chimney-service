import { BadgeCheck, Building2, Clock, Languages } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** Why-choose-us points. `key` → messages → Features.items.<key>.{title,description}. */
export interface Feature {
  key: string;
  Icon: LucideIcon;
}

export const features: Feature[] = [
  { key: "certified", Icon: BadgeCheck },
  { key: "hospitality", Icon: Building2 },
  { key: "response", Icon: Clock },
  { key: "bilingual", Icon: Languages },
];
