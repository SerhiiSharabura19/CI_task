import { mergeTests } from '@playwright/test';
import { test as authTest } from './fixtureAuth';
import { test as pageInstances } from './fixturesPageInstances';
import { test as killAds } from './fixtureKillAds';
import { test as pageManager } from './fixtureKillAds';

export const test = mergeTests(authTest, pageInstances, killAds, pageManager);
