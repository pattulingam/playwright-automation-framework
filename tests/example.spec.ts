import {test, expect} from '@playwright/test'

test('api', async ({request})=>{

   const respone= await request.get('https://automationexercise.com/api/productsList');
   const responseoutput = respone.json();
   console.log(respone);

})