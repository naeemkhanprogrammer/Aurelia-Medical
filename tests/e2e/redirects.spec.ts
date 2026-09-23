import { expect, test } from "@playwright/test";

test("booking CTAs hand off to the external platform in a new tab", async ({ page }) => {
  await page.goto("/book-appointment");
  const links = page.locator('main a[target="_blank"]');
  await expect(links.first()).toBeVisible();
  for (const link of await links.all()) {
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(await link.getAttribute("href")).toMatch(/^https:\/\//);
  }
});

test("quick booking bar pre-selects the chosen service", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Select a service").selectOption("respirology");
  const cta = page
    .getByRole("link", { name: /Book Appointment.*new tab/ })
    .filter({ hasText: "Book Appointment" });
  await expect(page.locator('a[href*="service=respirology"]').first()).toBeVisible();
  await expect(cta.first()).toBeVisible();
});
