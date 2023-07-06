import {expect} from 'chai';

describe("ChromeBrowser",async()=>{
    it("drgree",async ()=>{
        await browser.url("https://www.irctc.co.in/nget/train-search");
        let aUrl=await browser.getUrl();
        expect(aUrl).contain('irctc');
        await browser.pause(4000);
        
    })
})