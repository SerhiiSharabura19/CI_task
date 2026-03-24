import { test as base } from '@playwright/test';
import { PageManager } from '../../pages/PageManager';
import { APImanager } from '../../pages/APImanager';

export const test = base.extend<{ pageManager: PageManager; apiManager: APImanager }>({
  pageManager: async ({ page }, use) => {
    const pageManager = new PageManager(page);

    await use(pageManager);
  },
  apiManager: async ({ request }, use) => {
    const apiManager = new APImanager(request);

    await use(apiManager);
  },
});
