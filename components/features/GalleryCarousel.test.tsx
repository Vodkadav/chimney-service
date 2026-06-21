import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NextIntlClientProvider } from "next-intl";
import messages from "@/messages/en.json";
import { GalleryCarousel } from "./GalleryCarousel";

const FIRST = messages.Gallery.captions.cameraInspection;
const SECOND = messages.Gallery.captions.mechanicalRoom;
const LAST = messages.Gallery.captions.teamRooftop;
const THIRD = messages.Gallery.captions.ductMotor;

function renderCarousel() {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      <GalleryCarousel />
    </NextIntlClientProvider>,
  );
}

describe("GalleryCarousel", () => {
  it("shows the first image caption initially", () => {
    renderCarousel();
    expect(screen.getByText(FIRST)).toBeInTheDocument();
  });

  it("advances to the next image", async () => {
    renderCarousel();
    await userEvent.click(screen.getByRole("button", { name: "Next image" }));
    expect(screen.getByText(SECOND)).toBeInTheDocument();
  });

  it("wraps to the last image when going back from the first", async () => {
    renderCarousel();
    await userEvent.click(screen.getByRole("button", { name: "Previous image" }));
    expect(screen.getByText(LAST)).toBeInTheDocument();
  });

  it("jumps to an image via its dot indicator", async () => {
    renderCarousel();
    await userEvent.click(screen.getByRole("button", { name: "Go to image 3" }));
    expect(screen.getByText(THIRD)).toBeInTheDocument();
  });
});
