import { test, expect } from '@playwright/test'
import { request } from 'node:http'

test('postapi', async ({ request }) => {

    const response = await request.delete('https://thinking-tester-contact-list.herokuapp.com/contacts/${6a2b71bba255220015ed5e18}', {
        headers: {
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTJiNmY1NGEyNTUyMjAwMTVlZDVlMGQiLCJpYXQiOjE3ODEyMzE1MTZ9.sEob6Zj1W6xYkYJk1Hr6KGvcbXRdPaAroJBYZAvrkW8',
        }


    })
     expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
   // const responseoupt = await response.json();
    //console.log(responseoupt)



})