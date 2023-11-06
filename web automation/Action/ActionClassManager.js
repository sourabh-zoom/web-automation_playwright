const{SAHome}=require('../Action/ActionsClass/SA_Home');
const{SignIn}=require('../Action/ActionsClass/SignIn');
const{SignUp}=require('../Action/ActionsClass/SignUp');

exports.actionclassmanager=class actionclassmanager{
    constructor(context,page){
    this.page=page;
    this.context=context;
    this.signin=new SignIn(this.context,this.page);
    this.SignUp=new SignUp(this.context,this.page);
    this.sahome=new SAHome(this.context,this.page);


    }

    async get_sahome(){
     return this.sahome;
    }

    async get_signin(){
        return this.signin;
       }
   
    async get_signup(){
        return this.SignUp;
       }
   




}