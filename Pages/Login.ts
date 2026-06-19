import {Page , Locator } from '@playwright/test'
import { Urls } from '../Utility/Urls';
export class Login {

   // readonly url : string ='https://automationexercise.com/login';
    readonly email:Locator;
    readonly password:Locator;
    readonly Loginbutton:Locator;

    async goto() {
        await this.page.goto(Urls.LOGIN);
    }
constructor (private page:Page){
    this.email =this.page.locator("//input[@data-qa='login-email']");
    this.password =this.page.locator("//input[@placeholder='Password']")
    this.Loginbutton=this.page.getByRole('button', { name: 'Login' });
}

async login(email:string , password:string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.Loginbutton.click();

}

}