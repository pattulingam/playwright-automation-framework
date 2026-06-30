import { Page, Locator } from "@playwright/test";

export class FilterProduct {

    readonly gender: Locator;
    readonly typeOfWear: Locator;
    readonly brands: Locator;
    readonly viewProduct: Locator;
    readonly quantity: Locator;
    readonly addToCart: Locator;
    readonly continueShopping: Locator;
    readonly viewCart: Locator;

    constructor(private page: Page) {

        this.gender =page.locator("//a[normalize-space()='Men']");
        this.typeOfWear = page.getByRole('link', { name: 'Tshirts' });
        this.brands = page.locator("//a[@href='/brand_products/H&M']");
        this.viewProduct = page.locator('a').filter({ hasText: 'View Product' }).first();
        this.quantity = page.locator('#quantity');
        this.addToCart = page.getByRole('button', { name: 'Add to cart' });
        this.continueShopping = page.getByRole('button', { name: 'Continue Shopping' });
        this.viewCart = page.getByText('Cart', { exact: true });

    }

    async goto() {
        await this.page.goto('https://automationexercise.com/');
    }

    async filterAndAddProduct() {
        await this.gender.click();
        await this.typeOfWear.click();
        await this.brands.click();
        await this.viewProduct.click();
        await this.quantity.fill('2');
        await this.addToCart.click();
        await this.continueShopping.click();
        await this.viewCart.click();
    }
}