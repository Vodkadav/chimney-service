import { Brush, ShieldCheck, Sparkles, Wind, Wrench, Siren, CalendarCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Service offerings. `key` resolves to messages → Services.items.<key>.{title,description}.
 */
export interface Service {
  key: string;
  Icon: LucideIcon;
}

export const services: Service[] = [
  { key: "sweeping", Icon: Brush },
  { key: "inspection", Icon: ShieldCheck },
  { key: "creosote", Icon: Sparkles },
  { key: "ventilation", Icon: Wind },
  { key: "caps", Icon: Wrench },
  { key: "emergency", Icon: Siren },
  { key: "maintenance", Icon: CalendarCheck },
];
