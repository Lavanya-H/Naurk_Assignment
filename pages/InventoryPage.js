class InventoryPage {
  constructor(page) {
    this.page = page;
  }

  async sortLowToHigh() {
    await this.page.selectOption('.product_sort_container', 'lohi');
  }

  async getPrices() {
    const pricesText = await this.page
      .locator('.inventory_item_price')
      .allTextContents();

    return pricesText.map(p => Number(p.replace('$', '')));
  }
}

module.exports = { InventoryPage };


