const { IAMVar } = require("../IAMVar");

exports.SAHome=class SAHome extends IAMVar{
//     constructor(context,page){
//         //IAMVar(page);
//         this.page=page;
   
//    }

   async click_signInbtn(){

    this.signInbtn.click();
   }

   async click_signUpbtn(){

    this.signInbtn.click();
   }
   






}