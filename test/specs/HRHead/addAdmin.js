
describe('HRM domain',()=>{
                                                //setValue() or addValue()  (sendKeys())
    
    it('addAdmin',async () => {
        let baseUrl="http://rmgtestingserver/domain/HRM_System/";
        let hrUsername='pg@gmail.com';
        let hrPassword='pg@123';
        let visibleText='→ HR Head';
        await browser.url(baseUrl);
      //  await expect(browser).toHaveUrl(baseUrl);      //browser matches we have toHaveUrl(),toHaveUrlConatainting(),toHaveTitle(),toHaveTitleConatainting()
     //    const aTitle=await browser.getTitle();
     //    console.log(aTitle);
     //    const eTitle="Admin Log in";
     //     await expect(browser).toHaveTitle(eTitle);
        await browser.$("//input[@placeholder='HR Email']").setValue(hrUsername);
        await browser.$('[name="hr_password"]').setValue(hrPassword);
        await browser.$('#hr_type').selectByVisibleText(visibleText);
        await browser.$('[name="login_hr"]').click();
      let  b=await browser.isAlertOpen();
      if(b==true){
        console.log(await browser.getAlertText());
       await browser.acceptAlert();
    }
       let homePageId=await $('.d-block').getText();
       console.log(homePageId);
       if(homePageId==hrUsername){
            console.log("Sucessfully Home Page Displiayed");
       }
       else
            console.log("Failed to display home page");
       
       await browser.$("//p[contains(.,'ADMIN')]").click();
       await browser.$("//p[contains(.,'Add Admin')]").click();
       await browser.$("//button[contains(.,' Add Admin')]").click();
       let companyId='TR496'; let firstName='Sagar'; let lastName='Roy'; let middleName='s'
       let contactNum='96325874100'; let positionVisbleText='→ HR Head'; let emailAddress='sanju@gmail.com'
       let password='sanju@123';
       await browser.$("[name='hr_companyid']").setValue(companyId);
       await browser.$("[name='hr_firstname']").addValue(firstName);
       await browser.$("[name='hr_lastname'").setValue(lastName);
       await browser.$("[name='hr_middlename'").setValue(middleName);
       await browser.$("[name='hr_contactno'").setValue(contactNum);
       await browser.$("#hr_type").selectByVisibleText(positionVisbleText);
       await browser.$("[name='hr_email'").setValue(emailAddress);
       await browser.$("[name='hr_password'").setValue(password);
       await browser.pause(3000);
       await browser.$("//button[.='Save' and @name='hr_admin']");

    })
})


