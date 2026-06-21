import { Wind, AirVent, Wrench, ScanSearch } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Service offerings. `key` resolves to messages → Services.items.<key>.{title,description}.
 */
export interface Service {
  key: string;
  Icon: LucideIcon;
}

export const services: Service[] = [
  { key: "ducts", Icon: Wind },
  { key: "hvac", Icon: AirVent },
  { key: "preventive", Icon: Wrench },
  { key: "inspection", Icon: ScanSearch },
];
