// tests/negative.spec.js
const { test, expect } = require('@playwright/test');

test('User cannot access inventory without login', async ({ page }) => {
  await page.goto('/inventory.html');
  await expect(page).toHaveURL(/saucedemo.com\/$/);
});
