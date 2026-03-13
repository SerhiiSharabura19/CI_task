import { test } from '../_fixtures/fixtures';
import { products } from './productAttributes';

test('TC-12: Add Products in Cart by logged out user', async({ pageManager }) => {
    await pageManager.onHomePage().open();
    await pageManager.onHomePage().assertCarouselIsVisible();
    await pageManager.onHomePage().clickProductsLink();
    await pageManager.onProductsPage().hoverOverProduct(products.product1.serialNumber);
    await pageManager.onProductsPage().addFirstProductToCart();
    await pageManager.onProductsPage().clickContinueShoppingBtn();
    await pageManager.onProductsPage().hoverOverProduct(products.product2.serialNumber);
    await pageManager.onProductsPage().addSecondProductToCart();
    await pageManager.onProductsPage().clickviewCartLink();
    await pageManager.onCartPage().assertFirstProduct();
    await pageManager.onCartPage().assertSecondProduct();
    await pageManager.onCartPage().assertPriceOfProduct(products.product1.serialNumber, products.product1.price);
    await pageManager.onCartPage().assertQuantityOfProduct(products.product1.serialNumber, products.product1.quantity);
    await pageManager.onCartPage().assertTotalPriceOfProduct(products.product1.serialNumber, products.product1.total);
    await pageManager.onCartPage().assertPriceOfProduct(products.product2.serialNumber, products.product2.price);
    await pageManager.onCartPage().assertQuantityOfProduct(products.product2.serialNumber, products.product2.quantity);
    await pageManager.onCartPage().assertTotalPriceOfProduct(products.product2.serialNumber, products.product2.total);
    await pageManager.onCartPage().assertTotalPriceOfProduct(products.product2.serialNumber, products.product2.total);
  }
);

test('TC-12: Add Products in Cart by logged in user', async({
  user: _user,
  killAds: _killAds,
  pageManager }) => {
    await pageManager.onHomePage().open();
    await pageManager.onHomePage().assertCarouselIsVisible();
    await pageManager.onHomePage().clickProductsLink();
    await pageManager.onProductsPage().hoverOverProduct(products.product1.serialNumber);
    await pageManager.onProductsPage().addFirstProductToCart();
    await pageManager.onProductsPage().clickContinueShoppingBtn();
    await pageManager.onProductsPage().hoverOverProduct(products.product2.serialNumber);
    await pageManager.onProductsPage().addSecondProductToCart();
    await pageManager.onProductsPage().clickviewCartLink();
    await pageManager.onCartPage().assertFirstProduct();
    await pageManager.onCartPage().assertSecondProduct();
    await pageManager.onCartPage().assertPriceOfProduct(products.product1.serialNumber, products.product1.price);
    await pageManager.onCartPage().assertQuantityOfProduct(products.product1.serialNumber, products.product1.quantity);
    await pageManager.onCartPage().assertTotalPriceOfProduct(products.product1.serialNumber, products.product1.total);
    await pageManager.onCartPage().assertPriceOfProduct(products.product2.serialNumber, products.product2.price);
    await pageManager.onCartPage().assertQuantityOfProduct(products.product2.serialNumber, products.product2.quantity);
    await pageManager.onCartPage().assertTotalPriceOfProduct(products.product2.serialNumber, products.product2.total);
    await pageManager.onCartPage().assertTotalPriceOfProduct(products.product2.serialNumber, products.product2.total);
  }
);