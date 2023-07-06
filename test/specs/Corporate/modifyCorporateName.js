import creds from "../smoke/creds.js";
import loginpage from "../../pageobjects/loginpage.js";
import homepage from "../../pageobjects/homepage.js";
import AddCorporatePage from "../../pageobjects/AddCorporatePage.js";
import {expect} from "chai";


describe("Corporate",async ()=>{

    it('modify',async()=>{
        await browser.url(creds.baseUrl);
        let aUrl= await browser.getUrl();
        expect(aUrl).equal(creds.baseUrl);

        await loginpage.loginApp(creds.hrHeadUs1,creds.hrHeadPwd1,creds.hrHeadVisibleText);

        printAndAcceptAlert();
        let homePageTitle=await browser.getTitle();
        expect(homePageTitle).to.include("Admin");

        await homepage.clickOnAddCorporateBtn();
        let corporateName='AI Tech'+creds.ranNum();
        await AddCorporatePage.addNewCorporateName(corporateName);

        printAndAcceptAlert();

        await homepage.logoutFromApp();

        printAndAcceptAlert();

        await loginpage.loginApp(creds.hrHeadUs2,creds.hrHeadPwd2,creds.hrHeadVisibleText);
        printAndAcceptAlert();

        await homepage.clickOnAddCorporateBtn();

        let updatedCorporateName="Tyss"+creds.ranNum();
        await AddCorporatePage.modifyCorporateName(corporateName,updatedCorporateName)

        printAndAcceptAlert();
        
        await homepage.logoutFromApp();
        
        printAndAcceptAlert();


    })
})

//this arrow function will verify,print and accept the alert popup
var printAndAcceptAlert= ()=>{
    console.log("I am i to printAndAcceptAlert method");
    let alert= browser.isAlertOpen();
    if(alert==true){
        console.log(browser.getAlertText()+""+"How are you");
        browser.acceptAlert();
    }
}