import { test as teardown } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const USER_PATH = path.resolve(__dirname, '.data/user.json');

teardown('delete user via API', async ({ request }) => {
  const user = JSON.parse(fs.readFileSync(USER_PATH, 'utf-8'));

  const response = await request.delete(process.env.DELETE_USER_ENDPOINT, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    form: {
      email: user.email,
      password: user.password,
    },
  });

  const body = await response.json();
  console.log('Delete response:', body);

  // Clean up the file
  fs.rmSync(USER_PATH, { force: true });
});