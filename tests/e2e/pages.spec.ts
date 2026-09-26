import { expect, test } from "@playwright/test";

const PAGES = [
  "/about",
  "/contact",
  "/faqs",
  "/insurance",
  "/patient-resources",
  "/careers",
  "/privacy-policy",
  "/referrals",
  "/new-patients",
  "/telemedicine",
  "/community-programs",
];

for (const path of PAGES) {
  test(`${path} renders with a single h1 and no console errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error" && !message.text().includes("404"))
        errors.push(message.text());
    });
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    expect(errors).toEqual([]);
  });
}

test("progressive pages are noindex until published", async ({ page }) => {
  await page.goto("/referrals");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
});

test("security headers are sent", async ({ request }) => {
  const response = await request.get("/");
  const headers = response.headers();
  expect(headers["content-security-policy"]).toContain("frame-ancestors 'none'");
  expect(headers["x-content-type-options"]).toBe("nosniff");
  expect(headers["x-powered-by"]).toBeUndefined();
});

test("Google Map only loads after the visitor asks for it", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.locator("iframe")).toHaveCount(0);
  await page.getByRole("button", { name: "Load map" }).click();
  await expect(page.locator("iframe")).toHaveAttribute("src", /google\.com\/maps/);
});

test("FAQ answers expand natively", async ({ page }) => {
  await page.goto("/faqs");
  const question = page.getByText("How do I book an appointment?");
  await question.click();
  await expect(page.getByText(/You can book online/)).toBeVisible();
});
