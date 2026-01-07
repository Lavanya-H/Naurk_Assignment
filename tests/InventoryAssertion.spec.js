const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const users = require('../test_data/user_Creds.json');
test('Inventory page loads products', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  await expect(page.locator('.inventory_item')).toHaveCount(6);
});
