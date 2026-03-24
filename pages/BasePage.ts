
import { test, expect} from '@playwright/test';
import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly expect: typeof expect;
  readonly url: string;

  constructor(page: Page) {
    this.page = page;
    this.expect = expect;
    this.url = '/';
  }

  async open() {
    await test.step(`Open the Homepage`, async () => {
      await this.page.goto(this.url);
    });
  }

}