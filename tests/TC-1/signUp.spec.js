import { test } from '../../tests/_fixtures/fixturesPageInstances';
import { generateUser } from '../../src/helpers/genegateUser';
import { VALID_NAMES, VALID_EMAILS } from '../../src/helpers/userCredentialsDataset';

let user;

test.beforeEach(async ({page}) => {
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

test('Verify validation of "Name" and "Email" fields - positive', 
  async({signUpLoginPage}) => {
    test.setTimeout(90 * 1000);
    await signUpLoginPage.open();
    await signUpLoginPage.verifyCredentials(VALID_NAMES, VALID_EMAILS);
});



