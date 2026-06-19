# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apipost.spec.ts >> postapi
- Location: tests\apipost.spec.ts:4:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import { request } from 'node:http'
  3  | 
  4  | test('postapi', async ({ request }) => {
  5  | 
  6  |     const response = await request.delete('https://thinking-tester-contact-list.herokuapp.com/contacts/${6a2b71bba255220015ed5e18}', {
  7  |         headers: {
  8  |             authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTJiNmY1NGEyNTUyMjAwMTVlZDVlMGQiLCJpYXQiOjE3ODEyMzE1MTZ9.sEob6Zj1W6xYkYJk1Hr6KGvcbXRdPaAroJBYZAvrkW8',
  9  |         }
  10 | 
  11 | 
  12 |     })
> 13 |      expect(response.ok()).toBeTruthy();
     |                            ^ Error: expect(received).toBeTruthy()
  14 |   expect(response.status()).toBe(200);
  15 |    // const responseoupt = await response.json();
  16 |     //console.log(responseoupt)
  17 | 
  18 | 
  19 | 
  20 | })
```