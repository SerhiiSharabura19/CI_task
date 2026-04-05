import { test as setup, expect } from '@playwright/test';
import { generateUser } from '../utils/genegateUser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const USER_PATH = path.resolve(__dirname, '.data/user.json');

setup('register a user via API', async ({ request }) => {
  const user = generateUser();

  const response = await request.post('https://automationexercise.com/api/createAccount', {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    form: {
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
    },
  });

  const body = await response.json();
  console.log('Register response:', body);
  expect(body.responseCode).toBe(201);

  // Save user to file so teardown can read it
  fs.mkdirSync(path.dirname(USER_PATH), { recursive: true });
  fs.writeFileSync(USER_PATH, JSON.stringify(user, null, 2));

  const loginResponse = await request.post('https://automationexercise.com/api/verifyLogin', {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    form: {
      email: user.email,
      password: user.password,
    },
  });

  const loginBody = await loginResponse.json();
  console.log('Login response:', loginBody);
  expect(loginBody.responseCode).toBe(200);
});