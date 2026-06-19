import {test, expect} from '@playwright/test'

test('api', async ({request})=>{

   const response= await request.get('https://automationexercise.com/api/productsList');
   //const responseoutput = await response.json();
   //console.log(responseoutput);
   const responsebody = await response.json()
   const productcount =responsebody.products.length;
   console.log('Total Product:', productcount)
})