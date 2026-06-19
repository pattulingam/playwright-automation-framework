import { Page, Locator } from '@playwright/test';
import { Urls } from '../Utility/Urls';

export class Login {

    readonly email: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(private page: Page) {

        this.email = page.locator("//input[@data-qa='login-email']");
        this.password = page.locator("//input[@placeholder='Password']");
        this.loginButton = page.getByRole('button', { name: 'Login' });

    }

    async login(email: string, password: string) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async goto() {
        await this.page.goto(Urls.LOGIN);
    }
}