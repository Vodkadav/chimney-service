import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("joins multiple class names", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("resolves conflicting Tailwind utilities, last wins", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
  });

  it("drops falsy conditional values", () => {
    expect(cn("a", false && "b", undefined, null, "c")).toBe("a c");
  });
});
