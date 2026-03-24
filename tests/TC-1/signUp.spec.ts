import { generateUser, User } from '../../utils/genegateUser';
import { test } from '../_fixtures/fixtures';

let user: User;

test.beforeEach(async () => {
  user = generateUser();
});

test('Successful Sign up of a user', async ({ pageManager, removeAds: _removeAds }) => {
  await pageManager.homePage.open();
  await pageManager.homePage.clickSignUpLogin();
  await pageManager.signUpLoginPage.assertLogInFormTitle();
  await pageManager.signUpLoginPage.assertSignUpFormTitle();
  await pageManager.signUpLoginPage.fillSignUpName(user.username);
  await pageManager.signUpLoginPage.fillSignUpEmail(user.email);
  await pageManager.signUpLoginPage.clickSignUpButton();
  await pageManager.accountInformationPage.checkRadioBtn();
  await pageManager.accountInformationPage.fillPasswordField(user.password);
  await pageManager.accountInformationPage.selectRandomDay();
  await pageManager.accountInformationPage.selectRandomMonth();
  await pageManager.accountInformationPage.selectRandomYear();
  await pageManager.accountInformationPage.checkSignUpForNewsLetter();
  await pageManager.accountInformationPage.enterFirstName(user.firstName);
  await pageManager.accountInformationPage.enterLastName(user.lastName);
  await pageManager.accountInformationPage.enterAddress(user.address);
  await pageManager.accountInformationPage.selectCountry();
  await pageManager.accountInformationPage.enterState(user.state);
  await pageManager.accountInformationPage.enterCity(user.city);
  await pageManager.accountInformationPage.enterZipCode(user.zipCode);
  await pageManager.accountInformationPage.enterMobileNumber(user.mobileNumber);
  await pageManager.accountInformationPage.clickCreateAccount();
  await pageManager.accountCreatedPage.assertTitleIsVisible();
  await pageManager.accountCreatedPage.clickContinueBtn();

  await pageManager.homePage.assertLogoutLinkIsVisible();
});

