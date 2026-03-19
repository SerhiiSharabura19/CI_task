import { test } from '../_fixtures/fixturePageManager';

test('API-1 Verify "getAllProducts" API method', async ({ pageManagerV2 }) => {
  const response = await pageManagerV2.apiMethods.getAllProducts();
  await pageManagerV2.apiMethods.assertResponseHas200Code(response);
  await pageManagerV2.apiMethods.assertResponseBodyToHaveProperty(response, 'products');
});

test('API-2 Verify "getAllProducts" API method', async ({ pageManagerV2 }) => {
  const response = await pageManagerV2.apiMethods.postToAllProductsList();
  await pageManagerV2.apiMethods.assertResponseHas405Code(response);
  await pageManagerV2.apiMethods.assertResponseMessage(response);
});

test('API-3 Verify "getAllProducts" API method', async ({ pageManagerV2 }) => {
  const response = await pageManagerV2.apiMethods.putToAllBrandsList();
  await pageManagerV2.apiMethods.assertResponseHas405Code(response);
  await pageManagerV2.apiMethods.assertResponseMessage(response);
});

test('API-4 Verify "getAllProducts" API method', async ({ pageManagerV2 }) => {
  const response = await pageManagerV2.apiMethods.deleteToVerifyLogin();
  await pageManagerV2.apiMethods.assertResponseHas405Code(response);
  await pageManagerV2.apiMethods.assertResponseMessage(response);
});

