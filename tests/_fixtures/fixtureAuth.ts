import { test as base } from './fixturesPageInstances';
import { generateUser } from '../../src/helpers/genegateUser';

export const test = base.extend<{ user }>({
  user: async ({
    homePage,
    signUpLoginPage,
    accountInformationPage,
    accountCreatedPage
  }, use) => {

    const user = generateUser();

    await homePage.open();
    await homePage.clickSignUpLogin();
    await signUpLoginPage.fillSignUpName(user.username);
    await signUpLoginPage.fillSignUpEmail(user.email);
    await signUpLoginPage.clickSignUpButton();
    await accountInformationPage.fillPasswordField(user.password);
    await accountInformationPage.enterFirstName(user.firstName);
    await accountInformationPage.enterLastName(user.lastName);
    await accountInformationPage.enterAddress(user.address);
    await accountInformationPage.selectCountry();
    await accountInformationPage.enterState(user.state);
    await accountInformationPage.enterCity(user.city);
    await accountInformationPage.enterZipCode(user.zipCode);
    await accountInformationPage.enterMobileNumber(user.mobileNumber);
    await accountInformationPage.clickCreateAccount();
    await accountCreatedPage.clickContinueBtn();

    await use(user);
  },
});

