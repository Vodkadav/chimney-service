import { describe, it, expect } from "vitest";
import en from "./en.json";
import es from "./es.json";

function leafKeys(obj: Record<string, unknown>, prefix = ""): string[] {
  return Object.entries(obj).flatMap(([key, value]) =>
    typeof value === "object" && value !== null
      ? leafKeys(value as Record<string, unknown>, `${prefix}${key}.`)
      : [`${prefix}${key}`],
  );
}

const enKeys = leafKeys(en).sort();

describe("message catalogs", () => {
  it.each([["es", es]])(
    "%s has identical keys to en (no missing/extra translations)",
    (_name, msgs) => {
      expect(leafKeys(msgs as Record<string, unknown>).sort()).toEqual(enKeys);
    },
  );

  it.each([
    ["en", en],
    ["es", es],
  ])("%s has no empty string values", (_name, msgs) => {
    const empties = Object.entries(flatten(msgs as Record<string, unknown>)).filter(
      ([, v]) => v.trim() === "",
    );
    expect(empties).toEqual([]);
  });
});

function flatten(obj: Record<string, unknown>, prefix = ""): Record<string, string> {
  return Object.entries(obj).reduce<Record<string, string>>((acc, [key, value]) => {
    if (typeof value === "object" && value !== null) {
      Object.assign(acc, flatten(value as Record<string, unknown>, `${prefix}${key}.`));
    } else {
      acc[`${prefix}${key}`] = String(value);
    }
    return acc;
  }, {});
}
