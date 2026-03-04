import { test as base } from '@playwright/test';

type Fixtures = {
  killAds: void;
};

export const test = base.extend<Fixtures>({
  killAds: async ({ context }, use) => {
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

    await use();

    await context.unroute(
      /googlesyndication|doubleclick|googleads|adsbygoogle|gstatic/
    );

    await context.addInitScript(() => {
  const removeAds = () => {
    document
      .querySelectorAll('iframe[id^="aswift"], ins.adsbygoogle')
      .forEach(el => el.remove());
  };

  new MutationObserver(removeAds).observe(document, {
    childList: true,
    subtree: true,
  });

  removeAds();
});
  },
});

