import { expect, test } from "@playwright/test";

test.describe("navigation", () => {
  test("home renders the hero and primary landmarks", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Advanced care");
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("main")).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();
  });

  test("doctor card navigates to the profile", async ({ page }) => {
    await page.goto("/doctors");
    await page.getByRole("link", { name: "Dr. Priya Sharma" }).click();
    await expect(page).toHaveURL(/\/doctors\/priya-sharma$/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Dr. Priya Sharma");
  });

  test("unknown routes show the 404 page", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("couldn't find");
  });
});

test.describe("mobile menu", () => {
  test.skip(({ isMobile }) => !isMobile, "mobile only");

  test("opens and closes with the global-state toggle", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
  });
});
