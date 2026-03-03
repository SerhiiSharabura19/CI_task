import { generateUser } from "../../src/helpers/genegateUser";
import { test as base } from '@playwright/test';

export const test = base.extend<{
  loggedInUser;
}>({
  loggedInUser: async ({ page }, use) => {
      
  
      await use(loggedInUser);
    },
});

