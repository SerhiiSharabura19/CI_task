import { test } from '@playwright/test';
import type { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly url: string;
  readonly product: Locator;
  readonly firstProductAddToCartBtn: Locator;
  readonly secondProductAddToCartBtn: Locator;
  readonly continueShoppingBtn: Locator;
  readonly viewCartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = '/products';
    this.product = page.locator('.single-products');
    this.firstProductAddToCartBtn = page.locator('[data-product-id="1"]').nth(1);
    this.secondProductAddToCartBtn = page.locator('[data-product-id="2"]').nth(1);
    this.continueShoppingBtn = page.locator('.btn.btn-success.close-modal.btn-block');
    this.viewCartLink = page.locator('[href="/view_cart"]').filter({ hasText: 'View Cart' });
  }

async open() {
  await test.step(`Open the Products page`, async () => {
    await this.page.goto(this.url);
  });
}

async hoverOverProduct(number: number) {
  await test.step(`Hover over the ${number} product`, async () => {
    await this.page.route(/(doubleclick|googlesyndication|googleads)/, route =>
    route.abort());
    await this.product.nth(number).hover();
  });
}

async addFirstProductToCart() {
  await test.step(`Add the first product to cart`, async () => {
    await this.firstProductAddToCartBtn.click();
  });
}

async addSecondProductToCart() {
  await test.step(`Add the second product to cart`, async () => {
    await this.secondProductAddToCartBtn.click();
  });
}

async clickContinueShoppingBtn() {
  await test.step(`Click [Continue Shopping] button`, async () => {
    await this.continueShoppingBtn.click();
  });
}

async clickviewCartLink() {
  await test.step(`Click "View Cart" link`, async () => {
    await this.viewCartLink.click();
  });
}

}