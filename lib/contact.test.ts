import { describe, it, expect } from "vitest";
import fc from "fast-check";
import { validateContact, isValid } from "./contact";

const valid = { name: "Ada", email: "ada@example.com", message: "Hello there, this is a real message." };

describe("validateContact", () => {
  it("accepts well-formed input", () => {
    expect(isValid(validateContact(valid))).toBe(true);
  });

  it("flags a blank name", () => {
    expect(validateContact({ ...valid, name: "   " }).name).toBe("invalidName");
  });

  it("flags a malformed email", () => {
    expect(validateContact({ ...valid, email: "not-an-email" }).email).toBe("invalidEmail");
  });

  it("flags a too-short message", () => {
    expect(validateContact({ ...valid, message: "hi" }).message).toBe("invalidMessage");
  });

  it("never accepts input with an empty name (fuzzed)", () => {
    fc.assert(
      fc.property(fc.string(), fc.string(), (email, message) => {
        const errors = validateContact({ name: "   ", email, message });
        return errors.name === "invalidName";
      }),
    );
  });

  it("never throws on arbitrary input (fuzzed)", () => {
    fc.assert(
      fc.property(fc.string(), fc.string(), fc.string(), (name, email, message) => {
        expect(() => validateContact({ name, email, message })).not.toThrow();
      }),
    );
  });
});
