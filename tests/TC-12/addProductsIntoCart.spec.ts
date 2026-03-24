import { test } from '../_fixtures/fixtures';
import { products } from '../data/productAttributes';

test('TC-12: Add Products in Cart by logged out user', async ({ pageManager }) => {
  await pageManager.homePage.open();
  await pageManager.homePage.assertCarouselIsVisible();
  await pageManager.homePage.clickProductsLink();
  await pageManager.productsPage.hoverOverProduct(products.product1.serialNumber);
  await pageManager.productsPage.addFirstProductToCart();
  await pageManager.productsPage.clickContinueShoppingBtn();
  await pageManager.productsPage.hoverOverProduct(products.product2.serialNumber);
  await pageManager.productsPage.addSecondProductToCart();
  await pageManager.productsPage.clickviewCartLink();
  await pageManager.cartPage.assertFirstProduct();
  await pageManager.cartPage.assertSecondProduct();
  await pageManager.cartPage.assertPriceOfProduct(
    products.product1.serialNumber, 
    products.product1.price
  );
  await pageManager.cartPage.assertQuantityOfProduct(
    products.product1.serialNumber, 
    products.product1.quantity
  );
  await pageManager.cartPage.assertTotalPriceOfProduct(
    products.product1.serialNumber,
    products.product1.total
  );
  await pageManager.cartPage.assertPriceOfProduct(
    products.product2.serialNumber,
    products.product2.price);
  await pageManager.cartPage.assertQuantityOfProduct(
    products.product2.serialNumber,
    products.product2.quantity
  );
  await pageManager.cartPage.assertTotalPriceOfProduct(
    products.product2.serialNumber,
    products.product2.total
  );
  await pageManager.cartPage.assertTotalPriceOfProduct(
    products.product2.serialNumber, 
    products.product2.total);
});

test('TC-12: Add Products in Cart by logged in user', async ({
  user: _user,
  removeAds: _removeAds,
  pageManager,
}) => {
  await pageManager.homePage.open();
  await pageManager.homePage.assertCarouselIsVisible();
  await pageManager.homePage.clickProductsLink();
  await pageManager.productsPage.hoverOverProduct(products.product1.serialNumber);
  await pageManager.productsPage.addFirstProductToCart();
  await pageManager.productsPage.clickContinueShoppingBtn();
  await pageManager.productsPage.hoverOverProduct(products.product2.serialNumber);
  await pageManager.productsPage.addSecondProductToCart();
  await pageManager.productsPage.clickviewCartLink();
  await pageManager.cartPage.assertFirstProduct();
  await pageManager.cartPage.assertSecondProduct();
  await pageManager.cartPage.assertPriceOfProduct(
    products.product1.serialNumber,
    products.product1.price
  );
  await pageManager.cartPage.assertQuantityOfProduct(
      products.product1.serialNumber,
      products.product1.quantity
    );
  await pageManager.cartPage.assertTotalPriceOfProduct(
    products.product1.serialNumber,
    products.product1.total
  );
  await pageManager.cartPage.assertPriceOfProduct(
    products.product2.serialNumber,
    products.product2.price
  );
  await pageManager.cartPage.assertQuantityOfProduct(
    products.product2.serialNumber,
    products.product2.quantity
  );
  await pageManager.cartPage.assertTotalPriceOfProduct(
    products.product2.serialNumber,
    products.product2.total
  );
  await pageManager.cartPage.assertTotalPriceOfProduct(
    products.product2.serialNumber,
    products.product2.total
  );
});
