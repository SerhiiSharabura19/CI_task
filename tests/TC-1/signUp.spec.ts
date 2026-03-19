import { generateUser, User } from '../../utils/genegateUser';
import { validUserData } from '../data/userCredentialsDataset';
import { test } from '../_fixtures/fixtures';

let user: User;

test.beforeEach(async () => {
  user = generateUser();
});

test('Successful Sign up of a user', async ({ pageManagerV2, removeAds: _removeAds }) => {
  await pageManagerV2.homePage.open();
  await pageManagerV2.homePage.clickSignUpLogin();
  await pageManagerV2.signUpLoginPage.assertLogInFormTitle();
  await pageManagerV2.signUpLoginPage.assertSignUpFormTitle();
  await pageManagerV2.signUpLoginPage.fillSignUpName(user.username);
  await pageManagerV2.signUpLoginPage.fillSignUpEmail(user.email);
  await pageManagerV2.signUpLoginPage.clickSignUpButton();
  await pageManagerV2.accountInformationPage.checkRadioBtn();
  await pageManagerV2.accountInformationPage.fillPasswordField(user.password);
  await pageManagerV2.accountInformationPage.selectRandomDay();
  await pageManagerV2.accountInformationPage.selectRandomMonth();
  await pageManagerV2.accountInformationPage.selectRandomYear();
  await pageManagerV2.accountInformationPage.checkSignUpForNewsLetter();
  await pageManagerV2.accountInformationPage.enterFirstName(user.firstName);
  await pageManagerV2.accountInformationPage.enterLastName(user.lastName);
  await pageManagerV2.accountInformationPage.enterAddress(user.address);
  await pageManagerV2.accountInformationPage.selectCountry();
  await pageManagerV2.accountInformationPage.enterState(user.state);
  await pageManagerV2.accountInformationPage.enterCity(user.city);
  await pageManagerV2.accountInformationPage.enterZipCode(user.zipCode);
  await pageManagerV2.accountInformationPage.enterMobileNumber(user.mobileNumber);
  await pageManagerV2.accountInformationPage.clickCreateAccount();
  await pageManagerV2.accountCreatedPage.assertTitleIsVisible();
  await pageManagerV2.accountCreatedPage.clickContinueBtn();

  await pageManagerV2.homePage.assertLogoutLinkIsVisible();
});

test.describe('Verify signup validation', () => {
  validUserData.forEach(({ userName, email, description }) => {
    test(` of the email with ${description}`, async ({ pageManagerV2 }) => {
      await pageManagerV2.signUpLoginPage.open();
      await pageManagerV2.signUpLoginPage.verifyCredentials(userName, email);
    });
  });
});
