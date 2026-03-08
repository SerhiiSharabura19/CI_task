import { test } from '../_fixtures/fixtures';
import { generateUser, User } from '../../utils/genegateUser';
import { validUserData } from '../../utils/userCredentialsDataset';

let user: User;

test.beforeEach(async () => {
  user = generateUser();
})

test('Successful Sign up of a user', async ({
  homePage, 
  signUpLoginPage, 
  accountInformationPage,
  accountCreatedPage
}) => {
  await homePage.open();
  await homePage.clickSignUpLogin();
  await signUpLoginPage.assertLogInFormTitle();
  await signUpLoginPage.assertSignUpFormTitle();
  await signUpLoginPage.fillSignUpName(user.username);
  await signUpLoginPage.fillSignUpEmail(user.email);
  await signUpLoginPage.clickSignUpButton();
  await accountInformationPage.checkRadioBtn();
  await accountInformationPage.fillPasswordField(user.password);
  await accountInformationPage.selectRandomDay();
  await accountInformationPage.selectRandomMonth();
  await accountInformationPage.selectRandomYear();
  await accountInformationPage.checkSignUpForNewsLetter();
  await accountInformationPage.enterFirstName(user.firstName);
  await accountInformationPage.enterLastName(user.lastName);
  await accountInformationPage.enterAddress(user.address);
  await accountInformationPage.selectCountry();
  await accountInformationPage.enterState(user.state);
  await accountInformationPage.enterCity(user.city);
  await accountInformationPage.enterZipCode(user.zipCode);
  await accountInformationPage.enterMobileNumber(user.mobileNumber);
  await accountInformationPage.clickCreateAccount();
  await accountCreatedPage.assertTitleIsVisible();
  await accountCreatedPage.clickContinueBtn();
  
  await homePage.assertLogoutLinkIsVisible();
});

test.describe('Verify signup validation', () => {
  validUserData.forEach(({ userName, email, description }) => {
    test(` of the email with ${description}`, async({signUpLoginPage}) => {
      await signUpLoginPage.open();
      await signUpLoginPage.verifyCredentials(userName, email);
    });
  });
});

