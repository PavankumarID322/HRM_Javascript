import { expect } from "chai";
import crd from "../../../sixDegree13/loginCred.js";
describe("6D",async ()=>{
    it("signUp",async ()=>{
        await browser.url(crd.baseUrl);
        await browser.$("#imgProfileIcon").waitForClickable({timeout:3000});
        await browser.$("#imgProfileIcon").click();
        await browser.$("//div[.='New Customer' and @class='mat-tab-label-content']").waitForClickable({timeout:3000});
        await browser.$("//div[.='New Customer' and @class='mat-tab-label-content']").click();
        await browser.$("#buttonCreateAccount").waitForClickable({timeout:3000});
        await browser.$("#inputName").setValue("Ajay");
        await browser.$("//input[contains(@id,'Emai')]").setValue("akshay124@gmail.com");
        await browser.$("#inputNumber").setValue("8521479630");
        await browser.$("//input[contains(@id,'inputPassword')]").setValue("A@k85200");
        await browser.$("#inputConfirmPassword").setValue("A@k85200");
        await browser.$("#buttonCreateAccount").click();
        await browser.pause(4000);

        })

    })