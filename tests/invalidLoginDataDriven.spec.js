const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const users = require('../test_data/user_Creds.json');
test.describe('Invalid login tests', () => {
  for (const user of users.invalidUsers) {
    test(`Invalid login with username: ${user.username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.open();
      await loginPage.login(user.username, user.password);
      await loginPage.isErrorDisplayed()
      await page.close()
    });
  }
});
