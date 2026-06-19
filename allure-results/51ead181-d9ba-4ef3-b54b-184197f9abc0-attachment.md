# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> login
- Location: tests\Login.spec.ts:8:5

# Error details

```
Error: locator.fill: Error: strict mode violation: getByRole('textbox', { name: 'Email Address' }) resolved to 3 elements:
    1) <input value="" required="" type="email" name="email" data-qa="login-email" placeholder="Email Address"/> aka locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
    2) <input value="" required="" type="email" name="email" data-qa="signup-email" placeholder="Email Address"/> aka locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
    3) <input required="" type="email" id="susbscribe_email" placeholder="Your email address"/> aka getByRole('textbox', { name: 'Your email address' })

Call log:
  - waiting for getByRole('textbox', { name: 'Email Address' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - generic: 9tDHSVPSDne9wjo82CNbsuMnDSILaQ8Aa6uxFG7JrHJ72PrU7pp10b8oltX7tNrt
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - generic: 9tDHSVPSDne9wjo82CNbsuMnDSILaQ8Aa6uxFG7JrHJ72PrU7pp10b8oltX7tNrt
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - generic: signup
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e73]:
    - iframe [ref=e75]:
      
  - insertion [ref=e76]:
    - iframe [ref=e79]:
      - iframe [ref=f8e1]:
        - generic [ref=f9e1]:
          - generic [ref=f9e2]:
            - generic:
              - img [ref=f9e6] [cursor=pointer]
              - button [ref=f9e8] [cursor=pointer]:
                - img [ref=f9e9]
          - insertion [ref=f9e17]
```

# Test source

```ts
  1  | import {Page , Locator } from '@playwright/test'
  2  | export class Login {
  3  | 
  4  |     readonly url : string ='https://automationexercise.com/login';
  5  |     readonly email:Locator;
  6  |     readonly password:Locator;
  7  |     readonly Loginbutton:Locator;
  8  | 
  9  |     async goto() {
  10 |         await this.page.goto(this.url);
  11 |     }
  12 | constructor (private page:Page){
  13 |     this.email =this.page.getByRole('textbox', { name: 'Email Address' });
  14 |     this.password =this.page.getByRole('textbox', { name: 'Password' });
  15 |     this.Loginbutton=this.page.getByRole('button', { name: 'Login' });
  16 | }
  17 | 
  18 | async login(email:string , password:string) {
> 19 |     await this.email.fill(email);
     |                      ^ Error: locator.fill: Error: strict mode violation: getByRole('textbox', { name: 'Email Address' }) resolved to 3 elements:
  20 |     await this.password.fill(password);
  21 |     await this.Loginbutton.click();
  22 | 
  23 | }
  24 | 
  25 | }
```