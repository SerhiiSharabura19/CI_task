import type { Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { SignUpLoginPage } from './SignupLoginPage';
import { AccountInformationPage } from './EnterAccountInformationPage';
import { AccountCreatedPage } from './AccountCreatedPage';
import { ProductsPage } from './ProductsPage';
import { CartPage } from './CartPage';

export class PageManager {
  homePage: HomePage;
  readonly signUpLoginPage: SignUpLoginPage;
  readonly accountInformationPage: AccountInformationPage;
  readonly accountCreatedPage: AccountCreatedPage;

  readonly productsPage: ProductsPage;
  readonly cartPage: CartPage;

  constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.signUpLoginPage = new SignUpLoginPage(page);
    this.accountInformationPage = new AccountInformationPage(page);
    this.accountCreatedPage = new AccountCreatedPage(page);

    this.productsPage = new ProductsPage(page);
    this.cartPage = new CartPage(page);
  }
}
