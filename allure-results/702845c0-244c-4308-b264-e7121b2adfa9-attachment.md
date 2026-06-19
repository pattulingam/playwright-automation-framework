# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AutomationE2E.spec.ts >> @smoke @regression  Signup with CSV data
- Location: tests\AutomationE2E.spec.ts:9:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Name')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "This website is under heavy load (queue full)" [level=2] [ref=e2]
  - paragraph [ref=e3]: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | 
  3  | export class SignUp {
  4  |     readonly url: string = "https://automationexercise.com/login"
  5  |     readonly name: Locator;
  6  |     readonly email: Locator;
  7  |     readonly signUpButton: Locator;
  8  |     async goto() {
  9  |         await this.page.goto(this.url);
  10 |     }
  11 | 
  12 |     constructor(private page: Page) {
  13 |         //this.url = this.page.goto("url")    
  14 |         this.name = this.page.getByPlaceholder("Name")
  15 |         this.email = this.page.locator('[data-qa="signup-email"]')
  16 |         this.signUpButton = this.page.getByRole('button', { name: 'Signup' })
  17 |     }
  18 | 
  19 |     async newuser(newname: string, newemail: string) {
> 20 |         await this.name.fill(newname)
     |                         ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  21 |         await this.email.fill(newemail)
  22 |         await this.signUpButton.click()
  23 |     }
  24 | }
```