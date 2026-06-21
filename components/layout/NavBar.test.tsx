import { describe, it, expect, vi } from "vitest";
import type { ComponentProps } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NextIntlClientProvider } from "next-intl";
import messages from "@/messages/en.json";

vi.mock("@/i18n/navigation", () => ({
  Link: ({ href, children, ...props }: ComponentProps<"a">) => (
    <a href={typeof href === "string" ? href : "/"} {...props}>
      {children}
    </a>
  ),
  usePathname: () => "/",
  useRouter: () => ({ replace: vi.fn() }),
}));

import { NavBar } from "./NavBar";

function renderNav() {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      <NavBar />
    </NextIntlClientProvider>,
  );
}

describe("NavBar", () => {
  it("renders the brand and page links", () => {
    renderNav();
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Riviera Hearth" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute("href", "/services");
    expect(screen.getByRole("link", { name: "Gallery" })).toHaveAttribute("href", "/gallery");
  });

  it("exposes a quote call-to-action linking to contact", () => {
    renderNav();
    expect(screen.getByRole("link", { name: "Get a quote" })).toHaveAttribute("href", "/contact");
  });

  it("toggles the mobile menu open and closed", async () => {
    renderNav();
    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(toggle);
    const closeButton = screen.getByRole("button", { name: "Close menu" });
    expect(closeButton).toHaveAttribute("aria-expanded", "true");

    await userEvent.click(closeButton);
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});
