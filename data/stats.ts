/** Headline trust numbers. `value` is shown as-is; `key` → messages → Stats.<key>. */
export interface Stat {
  key: string;
  value: string;
}

export const stats: Stat[] = [
  { key: "support", value: "24/7" },
  { key: "offices", value: "2" },
  { key: "response", value: "<24 h" },
  { key: "documented", value: "100%" },
];
