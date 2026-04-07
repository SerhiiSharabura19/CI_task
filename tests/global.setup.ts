import { test as setup } from './_fixtures/fixtures';

import { generateUser } from '../utils/genegateUser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const USER_PATH = path.resolve(__dirname, '.data/user.json');

const user = generateUser();
const userFormParameters = {
    name: user.username,
    email: user.email,
    password: user.password,
    title: user.title,
    firstname: user.firstName,
    lastname: user.lastName,
    address1: user.address,
    country: user.country,
    state: user.state,
    city: user.city,
    zipcode: user.zipCode,
    mobile_number: user.mobileNumber,
}

setup('register a user via API', async ({ apiManager }) => {
  await apiManager.apiMethods.signUpUser(userFormParameters);
  await apiManager.apiMethods.loginUser({name: user.username, email: user.email});

  // Save user to file so teardown can read it
  fs.mkdirSync(path.dirname(USER_PATH), { recursive: true });
  fs.writeFileSync(USER_PATH, JSON.stringify(user, null, 2));

  
});


