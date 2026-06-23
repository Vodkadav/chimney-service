import { describe, it, expect } from "vitest";
import { toSiteOrigin } from "./site-url";

describe("toSiteOrigin", () => {
  it("returns a bare origin unchanged", () => {
    expect(toSiteOrigin("https://example.com")).toBe("https://example.com");
  });

  it("strips a stray locale path segment", () => {
    // Guards the real bug: a NEXT_PUBLIC_SITE_URL copied from the address bar as
    // ".../en" would otherwise double into /en/en canonicals and sitemap URLs.
    expect(toSiteOrigin("https://example.com/en")).toBe("https://example.com");
  });

  it("strips a trailing slash", () => {
    expect(toSiteOrigin("https://example.com/")).toBe("https://example.com");
  });

  it("strips a deeper path with a trailing slash", () => {
    expect(toSiteOrigin("https://example.com/en/")).toBe("https://example.com");
  });
});
