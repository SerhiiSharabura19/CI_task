import { test as base } from '@playwright/test';
import { PageManagerV2 } from '../../src/pages/PageManagerV2';

export const test = base.extend<{ pageManagerV2: PageManagerV2 }>({
  pageManagerV2: async ({ page, request }, use) => {
    const pageManagerV2 = new PageManagerV2(page, request);

    await use(pageManagerV2);
  },
});
