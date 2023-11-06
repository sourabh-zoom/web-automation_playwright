const{test,expect}=require('@playwright/test');
const{IAMVar}=require('../Action/IAMVar');
const{actionclassmanager}=require('../Action/ActionClassManager');




test.describe('Launch samsung alication',async()=> {

    var page,context,iamvar,actionmanager,sahome;

    test.beforeAll(async({browser}) =>{
      context = await browser.newContext();
      page = await context.newPage();
      actionmanager=new actionclassmanager(context,page);
      sahome=actionmanager.get_sahome();


      iamvar=new IAMVar(context,page);
    });

   test('SAHome page',async()=>{
   
    await page.goto('https://stg-account.samsung.com/');
    await expect(iamvar.signInbtn).toBeVisible();
    await sahome.click_signInbtn();
    });











});