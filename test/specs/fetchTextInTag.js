describe('j',()=>{
    it('a',async ()=>{
       await browser.url("http://rmgtestingserver/domain/Online_Tourism_Management_System/");
       await browser.maximizeWindow();
        let ele=await browser.$("//h4[.='Package Name: Kerala Trip238']");
        let tx=await ele.getElementTagName;
        console.log(tx);
    } )
})