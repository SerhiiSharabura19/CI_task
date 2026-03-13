import { generateUser, User } from '../../utils/genegateUser';
import { validUserData } from '../../utils/userCredentialsDataset';
import { test } from '../_fixtures/fixturePageManager';

let user: User;

test.beforeEach(async () => {
  user = generateUser();
});

test('Successful Sign up of a user', async ({ pageManager }) => {
  await pageManager.onHomePage().open();
  await pageManager.onHomePage().clickSignUpLogin();
  await pageManager.onSignUpLoginPage().assertLogInFormTitle();
  await pageManager.onSignUpLoginPage().assertSignUpFormTitle();
  await pageManager.onSignUpLoginPage().fillSignUpName(user.username);
  await pageManager.onSignUpLoginPage().fillSignUpEmail(user.email);
  await pageManager.onSignUpLoginPage().clickSignUpButton();
  await pageManager.onAccountInformationPage().checkRadioBtn();
  await pageManager.onAccountInformationPage().fillPasswordField(user.password);
  await pageManager.onAccountInformationPage().selectRandomDay();
  await pageManager.onAccountInformationPage().selectRandomMonth();
  await pageManager.onAccountInformationPage().selectRandomYear();
  await pageManager.onAccountInformationPage().checkSignUpForNewsLetter();
  await pageManager.onAccountInformationPage().enterFirstName(user.firstName);
  await pageManager.onAccountInformationPage().enterLastName(user.lastName);
  await pageManager.onAccountInformationPage().enterAddress(user.address);
  await pageManager.onAccountInformationPage().selectCountry();
  await pageManager.onAccountInformationPage().enterState(user.state);
  await pageManager.onAccountInformationPage().enterCity(user.city);
  await pageManager.onAccountInformationPage().enterZipCode(user.zipCode);
  await pageManager.onAccountInformationPage().enterMobileNumber(user.mobileNumber);
  await pageManager.onAccountInformationPage().clickCreateAccount();
  await pageManager.onAccountCreatedPage().assertTitleIsVisible();
  await pageManager.onAccountCreatedPage().clickContinueBtn();

  await pageManager.onHomePage().assertLogoutLinkIsVisible();
});

test.describe('Verify signup validation', () => {
  validUserData.forEach(({ userName, email, description }) => {
    test(` of the email with ${description}`, async ({ pageManager }) => {
      await pageManager.onSignUpLoginPage().open();
      await pageManager.onSignUpLoginPage().verifyCredentials(userName, email);
    });
  });
});
