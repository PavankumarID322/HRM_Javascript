
class loginpage{
        get getUsernameTxt(){
            return $("[name='hr_email']");
        }

        get getPasswordTxt(){
            return $("[name='hr_password']");
        }

        get selectDropDown(){
            return $("#hr_type");
        }
        get loginBtn(){
            return $("//button[@name='login_hr']");
        }

        async loginApp(username,password,visibleText){
            await  this.getUsernameTxt.setValue(username);
            await this.getPasswordTxt.setValue(password);
            await this.selectDropDown.selectByVisibleText(visibleText);
            await this.loginBtn.click();
        }
        async printAndAcceptAlert(){
            let al=await browser.isAlertOpen();
            if(al==true){
               let msg= await browser.getAlertText();
               console.log(msg);
               await browser.acceptAlert();
            }
        }

        async returnType(){
            return 'hi';
        }
    }

    // module.exports=new loginpage();
    export default new loginpage();