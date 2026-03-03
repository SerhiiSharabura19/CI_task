import { test as base } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
import { SignUpLoginPage } from '../../src/pages/SignupLoginPage';
import { AccountInformationPage } from '../../src/pages/EnterAccountInformationPage';
import { AccountCreatedPage } from '../../src/pages/AccountCreatedPage';
import { APIMethods } from '../../src/API/APImethods';
import { ProductsPage } from '../../src/pages/ProductsPage';
import { CartPage } from '../../src/pages/CartPage';

export const test = base.extend<{
  signUpLoginPage: SignUpLoginPage;
  accountInformationPage: AccountInformationPage;
  homePage: HomePage;
  accountCreatedPage: AccountCreatedPage;
  apiMethods: APIMethods;
  productsPage: ProductsPage;
  cartPage: CartPage; 
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
  }

});
