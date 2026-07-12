import { test, expect } from "@playwright/test";

test.describe("Nuevo Amanecer site", () => {
  test("home renders the hero and navigates to services", async ({ page }) => {
    await page.goto("/en");
    await expect(
      page.getByRole("heading", { name: /Industrial maintenance/i, level: 1 }),
    ).toBeVisible();

    await page.getByRole("link", { name: "Services", exact: true }).first().click();
    await expect(page).toHaveURL(/\/en\/services$/);
    await expect(page.getByRole("heading", { name: "Our services", level: 1 })).toBeVisible();
  });

  test("switches language to Spanish", async ({ page }) => {
    await page.goto("/en");
    await page.getByRole("button", { name: "Español" }).click();
    await expect(page).toHaveURL(/\/es$/);
    await expect(
      page.getByRole("heading", { name: /Mantenimiento industrial/i, level: 1 }),
    ).toBeVisible();
  });

  test("gallery carousel advances to the next image", async ({ page }) => {
    await page.goto("/en/gallery");
    await expect(page.getByText(/Camera duct inspection/i)).toBeVisible();
    await page.getByRole("button", { name: "Next image" }).click();
    await expect(page.getByText(/Grease-extraction cleaning/i)).toBeVisible();
  });

  test("contact form shows validation errors when empty", async ({ page }) => {
    await page.goto("/en/contact");
    await page.getByRole("button", { name: "Request inspection" }).click();
    await expect(page.getByText("Please enter your name.")).toBeVisible();
  });
});
