import {test,expect} from '@playwright/test'
import { Login } from '../Pages/Login'

test.beforeAll(async () => {
    console.log('Login starts');
});

test ('login', async ({page})=>{

    const email='playwrighte2e12@gmail.com', password='Googlepixel@8a'

  const loginPage = new Login(page);

    await loginPage.goto();
    await loginPage.login(email, password);



})

