const {test}=require('@playwright/test');

exports.IAMVar=class IAMVar{


    constructor(context,page){
     this.page=page;   
     this.signInbtn=this.page.locator('signin_button');
     this.signupbtn=this.page.locator();

 }

}
