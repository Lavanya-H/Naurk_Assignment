const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const users = require('../test_data/user_Creds.json');
test.describe('Invalid login tests', () => {
  for (const user of users.invalidUsers) {
    test(`Invalid login: ${user.username || 'empty'}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.open();
      await loginPage.login(user.username, user.password);

      const isErrorVisible = await loginPage.isErrorDisplayed();
      expect(isErrorVisible).toBe(true);
    });
  }
});
