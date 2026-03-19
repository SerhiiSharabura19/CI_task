import type { Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignUpLoginPage } from '../pages/SignupLoginPage';
import { AccountInformationPage } from '../pages/EnterAccountInformationPage';
import { AccountCreatedPage } from '../pages/AccountCreatedPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { APIMethods } from '../../src/API/APImethods';
import { APIRequestContext } from '@playwright/test';

export class PageManager {
  readonly homePage: HomePage;
  readonly signUpLoginPage: SignUpLoginPage;
  readonly accountInformationPage: AccountInformationPage;
  readonly accountCreatedPage: AccountCreatedPage;
  readonly apiMethods: APIMethods;
  readonly productsPage: ProductsPage;
  readonly cartPage: CartPage;

  constructor(page: Page, request: APIRequestContext) {
    this.homePage = new HomePage(page);
    this.signUpLoginPage = new SignUpLoginPage(page);
    this.accountInformationPage = new AccountInformationPage(page);
    this.accountCreatedPage = new AccountCreatedPage(page);
    this.apiMethods = new APIMethods(request);
    this.productsPage = new ProductsPage(page);
    this.cartPage = new CartPage(page);
  }
}
