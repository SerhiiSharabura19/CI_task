import { test as base, request } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { SignUpLoginPage } from '../../pages/SignupLoginPage';
import { AccountInformationPage } from '../../pages/EnterAccountInformationPage';
import { AccountCreatedPage } from '../../pages/AccountCreatedPage';
import { APIMethods } from '../../pages/APImethods';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { PageManager } from '../../pages/PageManager';
import { APImanager } from '../../pages/APImanager';

export const test = base.extend<{
  signUpLoginPage: SignUpLoginPage;
  accountInformationPage: AccountInformationPage;
  homePage: HomePage;
  accountCreatedPage: AccountCreatedPage;
  apiMethods: APIMethods;
  productsPage: ProductsPage;
  cartPage: CartPage;
  pageManager: PageManager; 
  apiManager: APImanager;

}>({
  signUpLoginPage: async ({ page }, use) => {
    const signUpLoginPage = new SignUpLoginPage(page);

    await use(signUpLoginPage);
  },
  accountInformationPage: async ({ page }, use) => {
    const accountInformationPage = new AccountInformationPage(page);

    await use(accountInformationPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);

    await use(homePage);
  },
  accountCreatedPage: async ({ page }, use) => {
    const accountCreatedPage = new AccountCreatedPage(page);
    
    await use(accountCreatedPage);
  },
  apiMethods: async ({ request }, use) => {
    const apiMethods = new APIMethods(request);

    await use(apiMethods);
  },
  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);
    
    await use(productsPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    
    await use(cartPage);
  },
  pageManager: async ({ page, request }, use) => {
    const pageManager = new PageManager(page);
    
    await use(pageManager);
  },
  apiManager: async ({ request }, use) => {
    const apiManager = new APImanager(request);
    
    await use(apiManager);
  }

});
