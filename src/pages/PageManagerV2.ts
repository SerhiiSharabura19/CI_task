import type { Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { SignUpLoginPage } from './SignupLoginPage';
import { AccountInformationPage } from './EnterAccountInformationPage';
import { AccountCreatedPage } from './AccountCreatedPage';
import { ProductsPage } from './ProductsPage';
import { CartPage } from './CartPage';
import { APIMethods } from '../API/APImethods';
import { APIRequestContext } from '@playwright/test';

export class PageManagerV2 {
  homePage: HomePage;
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
