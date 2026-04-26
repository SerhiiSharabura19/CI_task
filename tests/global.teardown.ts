import { test as teardown } from './_fixtures/fixtures';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const USER_PATH = path.resolve(__dirname, '.data/user.json');

teardown('delete user via API', async ({ apiManager }) => {
  const user = JSON.parse(fs.readFileSync(USER_PATH, 'utf-8'));
  await apiManager.apiMethods.deleteUser(user);
  // Clean up the file
  fs.rmSync(USER_PATH, { force: true });
});