class LoginPage {
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
    return await this.page.locator('[data-test="error"]').isVisible();
  }
}

module.exports = { LoginPage };

