import { expect, test } from "@playwright/test";

import { galleryCategories, galleryImages } from "../../src/data/gallery";

// Derived from the data file so swapping photos never breaks these tests.
const total = galleryImages.length;
const first = galleryImages[0]!;
const team = galleryCategories.find((c) => c.id === "team")!;
const teamCount = galleryImages.filter((image) => image.categoryId === team.id).length;
const plural = (n: number) => `${n} ${n === 1 ? "photo" : "photos"}`;

test.describe("gallery", () => {
  test("filters by category", async ({ page }) => {
    await page.goto("/gallery");
    await expect(page.getByText(plural(total), { exact: true })).toBeVisible();
    await page.getByRole("button", { name: team.label }).click();
    await expect(page.getByRole("button", { name: team.label })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await expect(page.getByText(plural(teamCount), { exact: true })).toBeVisible();
  });

  test("lightbox opens, navigates with arrow keys and closes with Escape", async ({ page }) => {
    await page.goto("/gallery");
    await page
      .getByRole("button", { name: `Open image: ${first.caption}` })
      .locator("visible=true")
      .click();
    const dialog = page.getByRole("dialog", { name: "Image viewer" });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText(`1 / ${total}`)).toBeVisible();
    await page.keyboard.press("ArrowRight");
    await expect(dialog.getByText(`2 / ${total}`)).toBeVisible();
    await page.keyboard.press("ArrowLeft");
    await page.keyboard.press("ArrowLeft");
    await expect(dialog.getByText(`${total} / ${total}`)).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
  });
});
