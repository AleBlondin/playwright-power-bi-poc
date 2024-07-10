import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});


test.describe("Dashboard title", () => {
  test("should let me see dashboard title", async ({ page }) => {
    // create a new todo locator
    const dashboardTitle = page.frameLocator('iframe').getByText('Tea Café Sales Analysis 2017-2021');

    await expect(dashboardTitle).toHaveCount(1);
  });
});
