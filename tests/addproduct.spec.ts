import { test, expect } from '@playwright/test';
import { Addtocart } from '../Pages/Addtocart';

test.beforeAll(async () => {
    console.log('Login starts');
});

test('adding product', async ({ page }) => {

    const addingProduct = new Addtocart(page);

    await addingProduct.goto();
    await addingProduct.prodcut.click();
    await addingProduct.addbutton.click();
    await addingProduct.viewcart.click();
    

});