import { Building2, Hospital, GraduationCap, ShoppingBag, UtensilsCrossed } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** Sectors served. `key` → messages → Sectors.items.<key>.{title,description}. */
export interface Sector {
  key: string;
  Icon: LucideIcon;
}

export const sectors: Sector[] = [
  { key: "hotels", Icon: Building2 },
  { key: "hospitals", Icon: Hospital },
  { key: "universities", Icon: GraduationCap },
  { key: "malls", Icon: ShoppingBag },
  { key: "restaurants", Icon: UtensilsCrossed },
];
