import { test as base } from '@playwright/test';

export const test = base.extend({});

test.beforeEach(async ({ context }) => {
  await context.route(
    /googlesyndication|doubleclick|googleads|adsbygoogle|gstatic/,
    route => route.abort()
  );

  await context.addInitScript(() => {
    Object.defineProperty(window, 'adsbygoogle', {
      value: [],
      writable: false,
    });
  });
});