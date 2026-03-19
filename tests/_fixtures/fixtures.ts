import { mergeTests } from '@playwright/test';
import { test as authTest } from './fixtureAuth';
import { test as pageInstances } from './fixturesPageInstances';
import { test as removeAds } from './fixtureRemoveAds';
import { test as pageManager } from './fixturePageManager';

export const test = mergeTests(authTest, pageInstances, removeAds, pageManager);
