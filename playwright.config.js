import { defineConfig } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests',

  reporter: [
    ['list'],
    [
      '@testomatio/reporter/lib/adapter/playwright.js',
      {
        apiKey: process.env.TESTOMATIO_API_KEY,
      },
    ],
  ],

  use: {
    baseURL: process.env.BASE_URL,
    testIdAttribute: 'data-qa',
    headless: true,
    launchOptions: {
      args: [
        '--disable-features=InterestFeedContentSuggestions',
      ],
    },
  },
});