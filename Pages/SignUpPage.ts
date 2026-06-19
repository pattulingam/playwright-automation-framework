import { Page, Locator } from "@playwright/test";

export class SignUp {
    readonly url: string = "https://automationexercise.com/login"
    //usrname:playwrighte2e12@gmail.com and pwd:Googlepixel@8a
    readonly name: Locator;
    readonly email: Locator;
    readonly signUpButton: Locator;
    async goto() {
        await this.page.goto(this.url);
    }

    constructor(private page: Page) {
        //this.url = this.page.goto("url")    
        this.name = this.page.getByPlaceholder("Name")
        this.email = this.page.locator('[data-qa="signup-email"]')
        this.signUpButton = this.page.getByRole('button', { name: 'Signup' })
    }

    async newuser(newname: string, newemail: string) {
        await this.name.fill(newname)
        await this.email.fill(newemail)
        await this.signUpButton.click()
    }
}