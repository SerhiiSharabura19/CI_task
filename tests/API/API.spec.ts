import { test } from '../_fixtures/fixtures';

test('API-1 Verify "getAllProducts" API method @Tabc1', async ({ apiManager }) => {
  const response = await apiManager.apiMethods.getAllProducts();
  await apiManager.apiMethods.assertResponseHas200Code(response);
  await apiManager.apiMethods.assertResponseBodyToHaveProperty(response, 'products');
});

test('API-2 Verify "getAllProducts" API method @Tabc2', async ({ apiManager }) => {
  const response = await apiManager.apiMethods.postToAllProductsList();
  await apiManager.apiMethods.assertResponseHas405Code(response);
  await apiManager.apiMethods.assertResponseMessage(response);
});

test('API-3 Verify "getAllProducts" API method @Tabc3', async ({ apiManager }) => {
  const response = await apiManager.apiMethods.putToAllBrandsList();
  await apiManager.apiMethods.assertResponseHas405Code(response);
  await apiManager.apiMethods.assertResponseMessage(response);
});

test('API-4 Verify "getAllProducts" API method @Tabc4', async ({ apiManager }) => {
  const response = await apiManager.apiMethods.deleteToVerifyLogin();
  await apiManager.apiMethods.assertResponseHas405Code(response);
  await apiManager.apiMethods.assertResponseMessage(response);
});

