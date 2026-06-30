import { test } from '@playwright/test';
import { FilterProduct } from '../Pages/filter';

test('Filter and add product', async ({ page }) => {
    const filter = new FilterProduct(page);

    await filter.goto();
    await filter.filterAndAddProduct();
});