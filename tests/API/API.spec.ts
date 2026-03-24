import { test } from '../_fixtures/fixturePageManager';

test('API-1 Verify "getAllProducts" API method', async ({ pageManager }) => {
  const response = await pageManager.apiMethods.getAllProducts();
  await pageManager.apiMethods.assertResponseHas200Code(response);
  await pageManager.apiMethods.assertResponseBodyToHaveProperty(response, 'products');
});

test('API-2 Verify "getAllProducts" API method', async ({ pageManager }) => {
  const response = await pageManager.apiMethods.postToAllProductsList();
  await pageManager.apiMethods.assertResponseHas405Code(response);
  await pageManager.apiMethods.assertResponseMessage(response);
});

test('API-3 Verify "getAllProducts" API method', async ({ pageManager }) => {
  const response = await pageManager.apiMethods.putToAllBrandsList();
  await pageManager.apiMethods.assertResponseHas405Code(response);
  await pageManager.apiMethods.assertResponseMessage(response);
});

test('API-4 Verify "getAllProducts" API method', async ({ pageManager }) => {
  const response = await pageManager.apiMethods.deleteToVerifyLogin();
  await pageManager.apiMethods.assertResponseHas405Code(response);
  await pageManager.apiMethods.assertResponseMessage(response);
});

