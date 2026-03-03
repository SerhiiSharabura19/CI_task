import {test, expect} from '@playwright/test';
import type { Page, Locator } from '@playwright/test';

export class HomePage {
readonly page: Page;
readonly url: string;
readonly loginLink: Locator;
readonly logoutLink: Locator;
readonly deleteAccountLink: Locator;
readonly carousel: Locator;
readonly products: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = '/';
    this.loginLink = page.locator('[href="/login"]');
    this.logoutLink = page.locator('[href="/logout"]');
    this.deleteAccountLink = page.locator('[href="/delete account"]');
    this.carousel = page.locator('.col-sm-12');
    this.products = page.locator('[href="/products"]');
  }
 
async open() {
  await test.step(`Open the Homepage`, async () => {
    await this.page.goto(this.url);
  });
}

async clickSignUpLogin() {
  await test.step(`Click 'Signup / Login' link`, async () => {
    await this.loginLink.click();
  });
}

async assertLogoutLinkIsVisible() {
  await test.step(`Verify the "Logout" link is visible`, async() => {
    await expect(this.logoutLink).toBeVisible();
  });
}

async assertCarouselIsVisible() {
  await test.step(`Verify the carousel is visible`, async() => {
    await expect(this.carousel).toBeVisible();
  });
}

async clickProductsLink() {
  await test.step(`Click 'Products' link`, async () => {
    await this.products.click();
  });
}

}