import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests',

  reporter: [
    ['list'],
    [
      '@testomatio/reporter/lib/adapter/playwright.js',
      {
        apiKey: process.env.TESTOMATIO,
      },
    ],
  ],

  projects: [
    {
      name: 'register a user via API',
      testMatch: /global\.setup\.ts/,
      teardown: 'delete the user via API',
    },
    {
      name: 'delete the user via API',
      testMatch: /global\.teardown\.ts/,
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['register a user via API'],
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    //   dependencies: ['register a user via API'],
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    //   dependencies: ['register a user via API'],
    // },
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

