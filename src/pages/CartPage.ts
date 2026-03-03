import {test, expect} from '@playwright/test';
import type { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly url: string;
  readonly firstProduct: Locator;
  readonly secondProduct: Locator;
  readonly cartPrice: Locator;
  readonly cartQuantity: Locator;
  readonly cartTotal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = '/view_cart';
    this.firstProduct = page.locator('#product-1');
    this.secondProduct = page.locator('#product-2');
    this.cartPrice = page.locator('.cart_price');
    this.cartQuantity = page.locator('.cart_quantity');
    this.cartTotal = page.locator('.cart_total');
  }

  async open() {
  await test.step(`Open the Cart page`, async () => {
    await this.page.goto(this.url);
    });
  }

  async assertFirstProduct() {
    await test.step(`Verify that the first product is added to cart`, async () => {
    await expect(this.firstProduct).toBeVisible();
    });
  }

  async assertSecondProduct() {
    await test.step(`Verify that the second product is added to cart`, async () => {
    await expect(this.secondProduct).toBeVisible();
    });
  }

  async assertPriceOfProduct(serialNumber: number, price: string) {
    await test.step(`Verify the ${serialNumber} product price in the cart`, async () => {
    await expect(this.cartPrice.nth(serialNumber)).toHaveText(price);
    });
  }

  async assertQuantityOfProduct(serialNumber: number, quantity: string) {
    await test.step(`Verify the ${serialNumber} product quantity in the cart`, async () => {
    await expect(this.cartQuantity.nth(serialNumber)).toHaveText(quantity);
    });
  }

  async assertTotalPriceOfProduct(serialNumber: number, total: string) {
    await test.step(`Verify the ${serialNumber} product total price in the cart`, async () => {
    await expect(this.cartTotal.nth(serialNumber)).toHaveText(total);
    });
  }

}