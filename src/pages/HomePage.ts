import { test, expect } from '@playwright/test';
import type { Page, Locator } from '@playwright/test';
import { categories } from '../../tests/data/categories';
import { BasePage } from '../base/BasePage';

export class HomePage extends BasePage {
  readonly loginLink: Locator;
  readonly logoutLink: Locator;
  readonly deleteAccountLink: Locator;
  readonly carousel: Locator;
  readonly products: Locator;
  readonly womenCategory: Locator;
  readonly menCategory: Locator;
  readonly kidsCategory: Locator;
  readonly womenTopsSubCategory: Locator;
  readonly pageTitle: Locator;
  readonly jeansSubCategory: Locator;

  constructor(page: Page) {
    super(page);
    this.loginLink = page.locator('[href="/login"]');
    this.logoutLink = page.locator('[href="/logout"]');
    this.deleteAccountLink = page.locator('[href="/delete account"]');
    this.carousel = page.locator('.col-sm-12');
    this.products = page.locator('[href="/products"]');
    this.womenCategory = page.locator('[href="#Women"]');
    this.menCategory = page.locator('[href="#Men"]');
    this.kidsCategory = page.locator('[href="#Kids"]');
    this.womenTopsSubCategory = page.locator(
      `[href="/category_products/${categories.women.tops}"]`
    );
    this.jeansSubCategory = page.locator(`[href="/category_products/${categories.men.jeans}"]`);
    this.pageTitle = page.locator('.title.text-center');
  }

  async open() {
    await test.step(`Open the Homepage`, async () => {
      await this.page.goto(this.url);
      //return this;
    });
  }

  async clickSignUpLogin() {
    await test.step(`Click 'Signup / Login' link`, async () => {
      await this.loginLink.click();
    });
  }

  async assertLogoutLinkIsVisible() {
    await test.step(`Verify the "Logout" link is visible`, async () => {
      await expect(this.logoutLink).toBeVisible();
    });
  }

  async assertCarouselIsVisible() {
    await test.step(`Verify the carousel is visible`, async () => {
      await expect(this.carousel).toBeVisible();
    });
  }

  async clickProductsLink() {
    await test.step(`Click 'Products' link`, async () => {
      await this.products.click();
    });
  }

  async assertWomenCategoryIsVisible() {
    await test.step(`Verify the Women category is visible`, async () => {
      await expect(this.womenCategory).toBeVisible();
    });
  }

  async assertMenCategoryIsVisible() {
    await test.step(`Verify the Men category is visible`, async () => {
      await expect(this.menCategory).toBeVisible();
    });
  }

  async assertKidsCategoryIsVisible() {
    await test.step(`Verify the Kids category is visible`, async () => {
      await expect(this.kidsCategory).toBeVisible();
    });
  }

  async clickWomenCategory() {
    await test.step(`Click the Women category`, async () => {
      await this.womenCategory.click();
    });
  }

  async clickMenCategory() {
    await test.step(`Click the Men category`, async () => {
      await this.menCategory.click();
    });
  }

  async clickKidsCategory() {
    await test.step(`Click the Kids category`, async () => {
      await this.kidsCategory.click();
    });
  }

  async clickWomenTopSubCategory() {
    await test.step(`Click the Women/Tops subcategory`, async () => {
      await this.womenTopsSubCategory.click();
    });
  }

  async clickJeansSubCategory() {
    await test.step(`Click the Jeans subcategory`, async () => {
      await this.jeansSubCategory.click();
    });
  }

  async assertCategoryURL(categoryNumber: string) {
    await test.step(`Verify the Jeans subcategory page has correct URL`, async () => {
      await expect(this.page).toHaveURL(`/category_products/${categoryNumber}`);
    });
  }

  async assertPageHasCorrectTitle(title: string) {
    await test.step(`Verify the page has correct title`, async () => {
      await expect(this.pageTitle).toHaveText(title);
    });
  }

  // async assertJeansPageHasCorrectTitle(title: string) {
  //   await test.step(`Verify the Jeans subcategory page has correct title`, async() => {
  //     await expect(this.jeansSubCategory).toHaveText(title);
  //   });
  // }
}
