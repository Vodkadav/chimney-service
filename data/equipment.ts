import { Camera, Gauge, Droplets, Thermometer, ShieldCheck, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** Calibrated equipment / technology. `key` → messages → Equipment.items.<key>.{title,description}. */
export interface EquipmentItem {
  key: string;
  Icon: LucideIcon;
}

export const equipment: EquipmentItem[] = [
  { key: "cameras", Icon: Camera },
  { key: "measurement", Icon: Gauge },
  { key: "pressure", Icon: Droplets },
  { key: "thermography", Icon: Thermometer },
  { key: "ppe", Icon: ShieldCheck },
  { key: "fleet", Icon: Truck },
];
