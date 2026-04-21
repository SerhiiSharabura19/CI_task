import { test } from '../_fixtures/fixtures';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const USER_PATH = path.resolve(__dirname, '../.data/user.json');

test('Successful Log in of a user @Login', async ({ pageManager, removeAds: _removeAds }) => {
  const user = JSON.parse(fs.readFileSync(USER_PATH, 'utf-8'));
  
  await pageManager.homePage.open();
  await pageManager.homePage.clickSignUpLogin();
  await pageManager.signUpLoginPage.assertLogInFormTitle();
  await pageManager.signUpLoginPage.assertSignUpFormTitle();
  await pageManager.signUpLoginPage.fillLogInEmail(user.email);
  await pageManager.signUpLoginPage.fillPassword(user.password);
  await pageManager.signUpLoginPage.clickLoginButton();
});