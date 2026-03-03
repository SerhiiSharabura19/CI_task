import { test } from '../../tests/_fixtures/fixturesAuth';

test('TC-12: Add Products in Cart', async({
  homePage,
  productsPage,
  cartPage }) => {
    await homePage.open();
    await homePage.assertCarouselIsVisible();
    await homePage.clickProductsLink();
    await productsPage.hoverOverProduct(0);
    await productsPage.addFirstProductToCart();
    await productsPage.clickContinueShoppingBtn();
    await productsPage.hoverOverProduct(1);
    await productsPage.addSecondProductToCart();
    await productsPage.clickviewCartLink();
    await cartPage.assertFirstProduct();
    await cartPage.assertSecondProduct();
    await cartPage.assertPriceOfProduct(0, 'Rs. 500');
    await cartPage.assertQuantityOfProduct(0, '1');
    await cartPage.assertTotalPriceOfProduct(0, 'Rs. 500');
    await cartPage.assertPriceOfProduct(1, 'Rs. 400');
    await cartPage.assertQuantityOfProduct(1, '1');
    await cartPage.assertTotalPriceOfProduct(1, 'Rs. 400');
  }
)

/*async addProductToCart(index: number, times = 1) {
  for (let i = 0; i < times; i++) {
    await this.hoverOverProduct(index);
    await this.products.nth(index).locator('.add-to-cart').click();
    await this.clickContinueShoppingBtn();
  }
}*/