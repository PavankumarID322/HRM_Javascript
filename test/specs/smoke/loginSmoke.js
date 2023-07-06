// const  homepage  = require("../../pageobjects/homepage");
// const loginpage  = require("../../pageobjects/loginpage");

import loginCred from "./creds.js";
import loginpage from "../../pageobjects/loginpage.js";
import homepage from "../../pageobjects/homepage.js";



describe("corporateModule",async()=>{

    it("login as Hrhead",async()=>{
      let  baseUrl="http://rmgtestingserver/domain/HRM_System/";
      let  hrUsername1='pg@gmail.com';
      let hrpassword1='pg@123';
      let hrVisibleText='→ HR Head';

        //navigate to application login page
        await browser.url(loginCred.baseUrl);

        //login as hrhead
        await loginpage.loginApp(hrUsername1,hrpassword1,hrVisibleText);

        await browser.pause(1000);

        //print message and accept alert
        await loginpage.printAndAcceptAlert();

        
        
        //logout from the application
      await  homepage.logoutFromApp();

        //print message and accept alert
        await console.log(await browser.getAlertText());
        await browser.acceptAlert();
    })

    it.skip('login as Officer',async ()=>{
      let  baseUrl="http://rmgtestingserver/domain/HRM_System/";
        let hrofficer='hrofficer@gmail.com';
       let hrpassword='hrofficer@123';
       let offVisibleText='→ HR Officer';

        //navigate to application login page
        await browser.url(baseUrl);

        //login as hrhead
       await loginpage.loginApp(hrofficer,hrpassword,offVisibleText);

        //print message and accept alert
        // console.log(await browser.getAlertText());
        // await browser.acceptAlert();

        //logout from the application
       await homepage.logoutFromApp();

        //print message and accept alert
        console.log(await browser.getAlertText());
        await browser.acceptAlert();

    })
})