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

test("home clinic-hours panel shows live status, weekly hours and actions", async ({ page }) => {
  await page.goto("/");
  const panel = page.locator("section", {
    has: page.getByRole("heading", { name: "Clinic hours" }),
  });
  await expect(panel.getByRole("status")).toHaveText(/Open now|Closed now/);
  await expect(panel.getByRole("listitem")).toHaveCount(4);
  await expect(panel.locator('[aria-current="date"]')).toHaveCount(1);
  await expect(panel.getByRole("link", { name: /Book Appointment/ })).toHaveAttribute(
    "target",
    "_blank",
  );
  await expect(panel.getByRole("link", { name: /Call/ })).toHaveAttribute("href", /^tel:/);
});
