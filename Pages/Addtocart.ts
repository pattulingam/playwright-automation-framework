import {Page ,Locator} from '@playwright/test';
import { Urls } from '../Utility/Urls';

export class Addtocart {
    readonly page:Page
    readonly prodcut:Locator
    readonly addbutton:Locator
    readonly viewcart:Locator

    async goto() {
        await this.page.goto(Urls.PRODUCTS);
    }
 constructor(private Page: Page) {
    this.page = Page;

    this.prodcut =  Page.locator("a[href='/product_details/1']");
    this.addbutton =Page.getByRole('button', { name: 'Add to cart' });
    this.viewcart = Page.getByText('View Cart', { exact: true })
  }

 
  }


