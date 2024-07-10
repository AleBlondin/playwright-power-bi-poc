import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});


test.describe("Dashboard interraction", () => {
  test("should let me interract with the dashboard", async ({ page }) => {
    // create a new todo locator
    const profitMargin = page.frameLocator('iframe').getByText('5.27%');

    await expect(profitMargin).toHaveCount(1);

    const firstCountry = page.frameLocator('iframe').getByLabel('0.8151842345136088');
    await firstCountry.click();

    // create a new todo locator
    const firstCountryProfitMargin = page.frameLocator('iframe').getByText('1.94%');

    await expect(firstCountryProfitMargin).toHaveCount(1);
  });
});
