import { test, expect } from '@playwright/test';
import type { Page, Locator } from '@playwright/test';

export class AccountCreatedPage {
  readonly page: Page;
  readonly url: string;
  readonly title: Locator;
  readonly continueBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = '/account_created';
    this.title = page.getByTestId('account-created');
    this.continueBtn = page.getByTestId('continue-button');
  }

  async assertTitleIsVisible() {
    await test.step(`Verify that "ACCOUNT CREATED!" title is visible`, async() => {
      await expect(this.title).toBeVisible({timeout: 7000});
    });
  }

  async waitForAccountCreatedPage() {
  await test.step(`Wait until the Account Created page is loaded`, async() => {
    //await this.page.waitForURL(this.url);
    //await this.page.waitForLoadState('load');
  });
}

async clickContinueBtn() {
    await test.step(`Click [Continue] button`, async() => {
      await this.continueBtn.click();
    });
  }

}