import crd from "./loginCred.js"

describe("LoginApp",async()=>{
    it("Lg",async()=>{
        await browser.url(crd.baseUrl);
        await browser.maximizeWindow();
        // await browser.$("#imgProfileIcon").click();
        // await browser.$("input[placeholder='Email']").setValue(crd.eMail);
        // await browser.$("#inputPassword").setValue(crd.pwd);
        // await browser.$("#buttonSignUp").click();
        // await browser.pause(5000);
    });

    it('lg',async()=>{
        await browser.url(crd.baseUrl);
        await browser.maximizeWindow();
        await browser.$("#imgProfileIcon").click();
    })
})