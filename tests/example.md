import { test, expect } from '../_fixtures/fixturePageManager';

test('example - user registers a new account', async ({ pageManager }) => {
  await pageManager.homePage.navigate();
  await pageManager.homePage.clickSignUpLogin();

  await pageManager.signUpLoginPage.fillSignUpName('John Doe');
  await pageManager.signUpLoginPage.fillSignUpEmail('john@example.com');
  await pageManager.signUpLoginPage.clickSignUpButton();

  await pageManager.accountInformationPage.fillAccountDetails({
    password: 'SecurePass123',
    day: '1',
    month: 'January',
    year: '1990',
  });
  await pageManager.accountInformationPage.clickCreateAccount();

  await pageManager.accountCreatedPage.assertAccountCreated();
  await pageManager.accountCreatedPage.clickContinue();

  await pageManager.homePage.assertUserIsLoggedIn('John Doe');
});
