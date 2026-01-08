// tests/inventory.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const users = require('../test_data/user_Creds.json');

test('Products sorted by price low to high', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.open();
  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  await inventoryPage.sortLowToHigh();

  const prices = await inventoryPage.getPrices();
  const sortedPrices = [...prices].sort((a, b) => a - b);

  expect(prices).toEqual(sortedPrices);
});
