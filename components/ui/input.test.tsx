import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Input } from "./input";

describe("Input", () => {
  it("associates the visible label with the field", () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("exposes the error via role=alert and aria-invalid", () => {
    render(<Input label="Email" error="Required" />);
    expect(screen.getByLabelText("Email")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByRole("alert")).toHaveTextContent("Required");
  });

  it("is not invalid when there is no error", () => {
    render(<Input label="Name" />);
    expect(screen.getByLabelText("Name")).toHaveAttribute("aria-invalid", "false");
  });

  it("renders a textarea when multiline", () => {
    render(<Input label="Message" multiline />);
    expect(screen.getByLabelText("Message").tagName).toBe("TEXTAREA");
  });
});
