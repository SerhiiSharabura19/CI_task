import { defineConfig, devices } from '@playwright/test';
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

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  use: {
    baseURL: process.env.BASE_URL,
    testIdAttribute: 'data-qa',
    headless: true,
    launchOptions: {
      args: [
        '--disable-features=InterestFeedContentSuggestions,TranslateUI'
      ],
    },
  },
});