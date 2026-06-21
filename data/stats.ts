/** Headline trust numbers. `value` is shown as-is; `key` → messages → Stats.<key>. */
export interface Stat {
  key: string;
  value: string;
}

export const stats: Stat[] = [
  { key: "resorts", value: "200+" },
  { key: "years", value: "15" },
  { key: "response", value: "24/7" },
  { key: "certified", value: "100%" },
];
