import { expect } from "@playwright/test";
exports.LoginPage =class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  async isErrorDisplayed() {
    await expect(this.page.locator('[data-test="error"]')).toBeVisible();
  }
}


