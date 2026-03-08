import { test, expect } from '@playwright/test';
import type { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class SignUpLoginPage extends BasePage {

  readonly url: string;
  readonly signUpFormTitle: Locator;
  readonly loginFormTitle: Locator;
  readonly signUpName: Locator;
  readonly signUpEmail: Locator;
  readonly signUpButton: Locator;
  readonly accountInformationTitle: Locator;

  constructor(page: Page) {
    super (page);
    this.url = '/login';
    this.signUpFormTitle = page.locator('.signup-form h2');
    this.loginFormTitle = page.locator('.login-form h2');
    this.signUpName = page.getByTestId('signup-name');
    this.signUpEmail = page.getByTestId('signup-email');
    this.signUpButton = page.getByTestId('signup-button');
    this.accountInformationTitle = page.locator('.title.text-center').nth(1);
  }

  async open() {
  await test.step(`Open the SignUp/Login page`, async () => {
    await this.page.goto(this.url);
  });
}

  async assertLogInFormTitle() {
    await test.step('Assert Log In form title is visible', async () => {
      await expect(this.loginFormTitle).toBeVisible();
    });
  }

  async assertSignUpFormTitle() {
    await test.step('Assert Sign Up form title is visible', async () => {
      await expect(this.signUpFormTitle).toBeVisible();
    });
  }

  async fillSignUpName(name: string) {
    await test.step('Fill in Sign up name', async () => {
      await this.signUpName.fill(name);
    });
  }

  async fillSignUpEmail(email: string) {
    await test.step('Fill in Sign up email', async () => {
      await this.signUpEmail.fill(email);
    });
  }

  async clickSignUpButton() {
    await test.step('Click Sign up button', async () => {
      await this.signUpButton.click();
    });
  }

  async verifyCredentials(userName: string, email: string) {
    await test.step(`Verify valid combinations of the name: ${userName},
       and email: ${email}`, async () => {
      await this.page.goto(this.url);
      await this.signUpName.fill(userName);
      await this.signUpEmail.fill(email);
      await this.signUpButton.click();
      await this.page.waitForLoadState('load');
      await expect(this.accountInformationTitle).toBeVisible();
    });
  }
}