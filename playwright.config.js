import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://automationexercise.com',
    testIdAttribute: 'data-qa',
    headless: true,
  },
});
