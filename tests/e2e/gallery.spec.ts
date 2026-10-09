import { expect, test } from "@playwright/test";

test.describe("gallery", () => {
  test("filters by category", async ({ page }) => {
    await page.goto("/gallery");
    await expect(page.getByText("12 photos")).toBeVisible();
    await page.getByRole("button", { name: "Our Team" }).click();
    await expect(page.getByRole("button", { name: "Our Team" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await expect(page.getByText("1 photo", { exact: true })).toBeVisible();
  });

  test("lightbox opens, navigates with arrow keys and closes with Escape", async ({ page }) => {
    await page.goto("/gallery");
    await page
      .getByRole("button", { name: "Open image: Clinic exterior" })
      .locator("visible=true")
      .click();
    const dialog = page.getByRole("dialog", { name: "Image viewer" });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText("1 / 12")).toBeVisible();
    await page.keyboard.press("ArrowRight");
    await expect(dialog.getByText("2 / 12")).toBeVisible();
    await page.keyboard.press("ArrowLeft");
    await page.keyboard.press("ArrowLeft");
    await expect(dialog.getByText("12 / 12")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
  });
});
