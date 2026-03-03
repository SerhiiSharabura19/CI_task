import { test } from '../../tests/_fixtures/fixturesAuth';
import { products } from '../helpers/productAttributes';

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
    await cartPage.assertPriceOfProduct(products.product1.serialNumber, products.product1.price);
    await cartPage.assertQuantityOfProduct(products.product1.serialNumber, products.product1.quantity);
    await cartPage.assertTotalPriceOfProduct(products.product1.serialNumber, products.product1.total);
    await cartPage.assertPriceOfProduct(products.product2.serialNumber, products.product2.price);
    await cartPage.assertQuantityOfProduct(products.product2.serialNumber, products.product2.quantity);
    await cartPage.assertTotalPriceOfProduct(products.product2.serialNumber, products.product2.total);
  }
)

/*async addProductToCart(index: number, times = 1) {
  for (let i = 0; i < times; i++) {
    await this.hoverOverProduct(index);
    await this.products.nth(index).locator('.add-to-cart').click();
    await this.clickContinueShoppingBtn();
  }
}*/