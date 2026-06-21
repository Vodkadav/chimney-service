import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NextIntlClientProvider } from "next-intl";
import messages from "@/messages/en.json";
import { ContactForm } from "./ContactForm";

function renderForm() {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      <ContactForm accessKey="test-key" />
    </NextIntlClientProvider>,
  );
}

async function fillValid() {
  await userEvent.type(screen.getByLabelText("Name"), "Ada Lovelace");
  await userEvent.type(screen.getByLabelText("Email"), "ada@example.com");
  await userEvent.type(
    screen.getByLabelText("How can we help?"),
    "We need our lobby fireplace and kitchen extraction serviced before the season.",
  );
}

afterEach(() => vi.unstubAllGlobals());

describe("ContactForm", () => {
  it("shows validation errors and does not submit when empty", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    renderForm();

    await userEvent.click(screen.getByRole("button", { name: "Send message" }));

    expect(await screen.findByText("Please enter your name.")).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("submits valid input to Web3Forms and shows success", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);
    renderForm();

    await fillValid();
    await userEvent.click(screen.getByRole("button", { name: "Send message" }));

    expect(await screen.findByText("Message sent")).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.web3forms.com/submit",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("shows an error message when the submission fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));
    renderForm();

    await fillValid();
    await userEvent.click(screen.getByRole("button", { name: "Send message" }));

    expect(await screen.findByText(/Something went wrong/)).toBeInTheDocument();
  });
});
