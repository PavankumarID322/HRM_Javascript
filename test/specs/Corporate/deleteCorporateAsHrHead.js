import loginpage from '../../pageobjects/loginpage.js'
import homepage from '../../pageobjects/homepage.js';
import AddCorporatePage from '../../pageobjects/AddCorporatePage.js';
import cred from '../smoke/creds.js';
import { expect } from 'chai';


describe("CorporateModule",()=>{
    it('addCorporate',async ()=>{

        //naviagting to application
       await browser.url(cred.baseUrl);
        expect(cred.baseUrl).to.include("http");

        //login as Hr head
        expect (await loginpage.loginBtn.waitForClickable({timeout:2000})).to.be.equal;
        await loginpage.loginApp(cred.hrHeadUs1,cred.hrHeadPwd1,cred.hrHeadVisibleText);

       await printAndAcceptAlert();
       let homeTitle=await browser.getTitle();
       (expect(homeTitle)).to.be.contains("Admin")

        //click on Corporate Module button and click on Add corporate button
        await homepage.clickOnAddCorporateBtn();

        //add a new corporate name
        let num=(Math.random(10,1000)+1)*101;
        let numR=Math.ceil(num);
       let corporateName='RaghuNath'+numR;
       await AddCorporatePage.addNewCorporateName(corporateName);
       await console.log(corporateName);

      await printAndAcceptAlert();

    //   await verifyCorporateName(corporateName);

      await homepage.logoutFromApp();

      await printAndAcceptAlert();
       
      await loginpage.loginApp(cred.hrHeadUs2,cred.hrHeadPwd2,cred.hrHeadVisibleText);

      await printAndAcceptAlert();

      await homepage.clickOnAddCorporateBtn();

      await AddCorporatePage.getSearchTxtBtx.setValue(corporateName);

      await AddCorporatePage.deleteCorporateName(corporateName);
      await printAndAcceptAlert();

      await homepage.logoutFromApp();
      




        




            await browser.pause(5000);
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

//verify the the corporate is created or not
var verifyCorporateName=(corporateName)=>{
    let allname=$$("//td[2]");
    let i=0;
        while(i>=0){
            if(allname!=corporateName)
                i++;
            if(i==allname.length){
                i=0;
             browser.$("//a[.='Next']").click()}
            else{
            console.log(corporateName+" is Present");
                break;
        }

        }
    }
        
    
////tr[@role='row']//td[contains(.,'RaghuNath105')]/..//td[4]//button[contains(.,'Delete')]

////div[@class='modal-content']//input[@value='RaghuNath105']/../..//div[3]//button[@name='delete']