import { APIRequestContext } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
import { SignUpLoginPage } from '../../src/pages/SignupLoginPage';
import { AccountInformationPage } from '../../src/pages/EnterAccountInformationPage';
import { AccountCreatedPage } from '../../src/pages/AccountCreatedPage';
import { APIMethods } from '../../src/API/APImethods';
import { ProductsPage } from '../../src/pages/ProductsPage';
import { CartPage } from '../../src/pages/CartPage';
import type { Page } from '@playwright/test';

export class PageManager {
  private readonly page: Page;
  private request: APIRequestContext;
  private signUpLoginPage: SignUpLoginPage | null = null;
  private accountInformationPage: AccountInformationPage | null = null;
  private homePage: HomePage | null = null;
  private accountCreatedPage: AccountCreatedPage | null = null;
  private apiMethods: APIMethods | null = null;
  private productsPage: ProductsPage | null = null;
  private cartPage: CartPage | null = null;

  constructor(page: Page, request: APIRequestContext) {
    this.page = page;
    this.request = request;
  }

  onSignUpLoginPage(): SignUpLoginPage {
    this.signUpLoginPage = new SignUpLoginPage(this.page);

    return this.signUpLoginPage;
  }

  onAccountInformationPage(): AccountInformationPage {
    this.accountInformationPage = new AccountInformationPage(this.page);

    return this.accountInformationPage;
  }

  onHomePage(): HomePage {
    this.homePage = new HomePage(this.page);

    return this.homePage;
  }

  onAccountCreatedPage(): AccountCreatedPage {
    this.accountCreatedPage = new AccountCreatedPage(this.page);

    return this.accountCreatedPage;
  }

  onAPIMethods(): APIMethods {
    this.apiMethods = new APIMethods(this.request);

    return this.apiMethods;
  }

  onProductsPage(): ProductsPage {
    this.productsPage = new ProductsPage(this.page);

    return this.productsPage;
  }

  onCartPage(): CartPage {
    this.cartPage = new CartPage(this.page);

    return this.cartPage;
  }
}
