// tests/negative.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
import users from "../test_data/user_Creds.json"

test('User cannot access dashboard without login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
   await loginPage.login(
    users.invalidCred.username,
    users.invalidCred.password
  );
  await loginPage.isErrorDisplayed()
  await page.close()
});
