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
      name: 'setup db',
      testMatch: /global\.setup\.ts/,
      teardown: 'cleanup db',
    },
    {
      name: 'cleanup db',
      testMatch: /global\.teardown\.ts/,
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup db'],
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    //   dependencies: ['setup db'],
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    //   dependencies: ['setup db'],
    // },
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