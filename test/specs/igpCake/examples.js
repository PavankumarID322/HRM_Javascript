import {expect} from "chai";

describe("Google",async ()=>{
    it("website",async ()=>{
        await browser.url("");
        let aUrl=await browser.getUrl();
        expect(aUrl).equal("https://webdriver.io");
       await browser.pause(5000)
    })
})