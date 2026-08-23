import { describe, it, expect } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SpeedVideo, type SpeedOption } from "./SpeedVideo";

const speedOptions: SpeedOption[] = [1, 2, 3, 4].map((rate) => ({
  rate,
  label: `${rate}×`,
  ariaLabel: `Play at ${rate}× speed`,
}));

function renderPlayer() {
  return render(
    <SpeedVideo
      src="/videos/before-cleaning.mp4"
      poster="/videos/before-cleaning-poster.jpg"
      caption="Duct before cleaning"
      speedLabel="Speed"
      speedOptions={speedOptions}
    />,
  );
}

function video() {
  return screen.getByLabelText("Duct before cleaning") as HTMLVideoElement;
}

describe("SpeedVideo", () => {
  it("starts at 1x with that option pressed", () => {
    renderPlayer();
    expect(screen.getByRole("button", { name: "Play at 1× speed" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: "Play at 4× speed" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("sets playbackRate on the video when a speed is chosen", async () => {
    renderPlayer();
    await userEvent.click(screen.getByRole("button", { name: "Play at 4× speed" }));
    expect(video().playbackRate).toBe(4);
  });

  it("moves the pressed state to the chosen speed", async () => {
    renderPlayer();
    await userEvent.click(screen.getByRole("button", { name: "Play at 3× speed" }));

    expect(screen.getByRole("button", { name: "Play at 3× speed" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: "Play at 1× speed" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("re-applies the chosen rate after the source reloads", async () => {
    renderPlayer();
    await userEvent.click(screen.getByRole("button", { name: "Play at 2× speed" }));

    const el = video();
    el.playbackRate = 1; // what a fresh source does
    el.dispatchEvent(new Event("loadedmetadata"));

    expect(el.playbackRate).toBe(2);
  });

  it("follows a rate change made through the browser's own speed menu", () => {
    renderPlayer();
    const el = video();

    act(() => {
      el.playbackRate = 2;
      el.dispatchEvent(new Event("ratechange"));
    });

    expect(screen.getByRole("button", { name: "Play at 2× speed" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: "Play at 1× speed" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("groups the controls under an accessible label", () => {
    renderPlayer();
    expect(screen.getByRole("group", { name: "Speed" })).toBeInTheDocument();
  });
});
