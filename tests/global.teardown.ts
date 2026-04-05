import { test as teardown } from '@playwright/test';
import fs from 'fs';
import { DB_PATH } from './constants';


teardown('delete database', async ({ }) => {
  console.log('deleting test database...');
  fs.rmSync(DB_PATH, { force: true });
  console.log('Test database deleted.');
});