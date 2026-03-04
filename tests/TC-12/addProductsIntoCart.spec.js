import { test } from '../../tests/_fixtures/fixtures';
import { products } from '../../src/helpers/productAttributes' 

test.beforeEach(async ({ context }) => {
  await context.route(
    /googlesyndication|doubleclick|googleads|adsbygoogle|gstatic/,
    route => route.abort()
  );
  await page.addInitScript(() => {
    Object.defineProperty(window, 'adsbygoogle', {
      value: [],
      writable: false,
    });
  });
});

test('TC-12: Add Products in Cart by logged out user', async({
  homePage,
  productsPage,
  cartPage }) => {
    await homePage.open();
    await homePage.assertCarouselIsVisible();
    await homePage.clickProductsLink();
    await productsPage.hoverOverProduct(products.product1.serialNumber);
    await productsPage.addFirstProductToCart();
    await productsPage.clickContinueShoppingBtn();
    await productsPage.hoverOverProduct(products.product2.serialNumber);
    await productsPage.addSecondProductToCart();
    await productsPage.clickviewCartLink();
    await cartPage.assertFirstProduct();
    await cartPage.assertSecondProduct();
    await cartPage.assertPriceOfProduct(products.product1.serialNumber, products.product1.price);
    await cartPage.assertQuantityOfProduct(products.product1.serialNumber, products.product1.quantity);
    await cartPage.assertTotalPriceOfProduct(products.product1.serialNumber, products.product1.total);
    await cartPage.assertPriceOfProduct(products.product2.serialNumber, products.product2.price);
    await cartPage.assertQuantityOfProduct(products.product2.serialNumber, products.product2.quantity);
    await cartPage.assertTotalPriceOfProduct(products.product2.serialNumber, products.product2.total);
    await cartPage.assertTotalPriceOfProduct(products.product2.serialNumber, products.product2.total);
  }
);

test('TC-12: Add Products in Cart by logged in user', async({
  user: _user,
  homePage,
  productsPage,
  cartPage }) => {
    await homePage.open();
    await homePage.assertCarouselIsVisible();
    await homePage.clickProductsLink();
    await productsPage.hoverOverProduct(products.product1.serialNumber);
    await productsPage.addFirstProductToCart();
    await productsPage.clickContinueShoppingBtn();
    await productsPage.hoverOverProduct(products.product2.serialNumber);
    await productsPage.addSecondProductToCart();
    await productsPage.clickviewCartLink();
    await cartPage.assertFirstProduct();
    await cartPage.assertSecondProduct();
    await cartPage.assertPriceOfProduct(products.product1.serialNumber, products.product1.price);
    await cartPage.assertQuantityOfProduct(products.product1.serialNumber, products.product1.quantity);
    await cartPage.assertTotalPriceOfProduct(products.product1.serialNumber, products.product1.total);
    await cartPage.assertPriceOfProduct(products.product2.serialNumber, products.product2.price);
    await cartPage.assertQuantityOfProduct(products.product2.serialNumber, products.product2.quantity);
    await cartPage.assertTotalPriceOfProduct(products.product2.serialNumber, products.product2.total);
    await cartPage.assertTotalPriceOfProduct(products.product2.serialNumber, products.product2.total);
  }
);