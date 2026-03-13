import { test } from '../_fixtures/fixtures';
import { WOMEN_TOPS_PAGE_TITLE, JEANS_PAGE_TITLE } from './constants';
import { categories } from './categories';

test('TC-18: Add Products in Cart', async({ pageManager }) => {
    await pageManager.onHomePage().open();
    await pageManager.onHomePage().assertWomenCategoryIsVisible();
    await pageManager.onHomePage().assertMenCategoryIsVisible();
    await pageManager.onHomePage().assertKidsCategoryIsVisible();
    await pageManager.onHomePage().clickWomenCategory();
    await pageManager.onHomePage().clickWomenTopSubCategory();
    await pageManager.onHomePage().assertCategoryURL(categories.women.tops);
    await pageManager.onHomePage().assertPageHasCorrectTitle(WOMEN_TOPS_PAGE_TITLE);
    await pageManager.onHomePage().clickMenCategory();
    await pageManager.onHomePage().clickJeansSubCategory();
    await pageManager.onHomePage().assertCategoryURL(categories.men.jeans);
    await pageManager.onHomePage().assertPageHasCorrectTitle(JEANS_PAGE_TITLE);
  }
);