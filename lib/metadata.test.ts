import { describe, it, expect } from "vitest";
import { pageAlternates } from "./metadata";

describe("pageAlternates", () => {
  it("builds a per-page canonical instead of inheriting the homepage one", () => {
    // Guards the real bug: the layout's canonical "/en" leaked to every subpage,
    // marking them all as duplicates of the home page.
    expect(pageAlternates("en", "/services")).toEqual({
      canonical: "/en/services",
      languages: { en: "/en/services", es: "/es/services" },
    });
  });

  it("handles the es locale", () => {
    expect(pageAlternates("es", "/contact")?.canonical).toBe("/es/contact");
  });
});
