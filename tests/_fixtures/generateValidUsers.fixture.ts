import { generateUser } from "../../src/helpers/genegateUser";
import { test as base } from '@playwright/test';

export const test = base.extend<{
  validUser;
}>({

});

export const expect = test.expect;
