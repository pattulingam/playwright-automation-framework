import { test } from '@playwright/test';
import { SignUp } from '../Pages/SignUpPage';
import { readCSV } from '../Utility/Csvreader';

test.beforeAll(async () => {
    console.log('Run once before all tests');
});

test('@smoke @regression  Signup with CSV data', async ({ page }) => {
    //  console.log('Run once before all')
    const users = await readCSV('./Testdata/TestData.csv');

    const signUpPage = new SignUp(page);
    await page.screenshot({
        path: 'screenshot/homepage.png',
        fullPage: true
    })

    for (const user of users) {

        await signUpPage.goto();

        await signUpPage.newuser(
            user.NewUser,
            user.MailID
        );
    }
});