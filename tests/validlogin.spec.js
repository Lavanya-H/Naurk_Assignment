// tests/login.spec.js
import {test,expect} from"@playwright/test"
import { LoginPage } from '../pages/loginPage'
import users from '../test_data/user_Creds.json'

test('Valid user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(
    users.validUser.username,
    users.validUser.password
  );

  await expect(page).toHaveURL(/inventory/);
  await page.close()
});
