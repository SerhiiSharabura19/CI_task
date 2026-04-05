import { test } from '../_fixtures/fixtures';

test('Successful Sign up of a user @SignUp', async ({ pageManager, userFromDB }) => {
  const user = userFromDB('1');
  await pageManager.homePage.open();
  await pageManager.homePage.clickSignUpLogin();
  await pageManager.signUpLoginPage.assertLogInFormTitle();
  await pageManager.signUpLoginPage.assertSignUpFormTitle();
  await pageManager.signUpLoginPage.fillSignUpName(user.name);
  await pageManager.signUpLoginPage.fillSignUpEmail(user.email);
  await pageManager.signUpLoginPage.clickSignUpButton();
  
  await pageManager.accountInformationPage.assertAccountInformationPageTitle();
});

