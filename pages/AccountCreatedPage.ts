import { test, expect } from '@playwright/test';
import type { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountCreatedPage extends BasePage {
  readonly url: string;
  readonly title: Locator;
  readonly continueBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.url = '/account_created';
    this.title = page.getByTestId('account-created1');
    this.continueBtn = page.getByTestId('continue-button');
  }

  async assertTitleIsVisible() {
    await test.step(`Verify that "ACCOUNT CREATED!" title is visible`, async () => {
      await expect(this.title).toBeVisible({ timeout: 7000 });
    });
    return this;
  }

  async clickContinueBtn() {
    await test.step(`Click [Continue] button`, async () => {
      await this.continueBtn.click();
    });
  }
}
