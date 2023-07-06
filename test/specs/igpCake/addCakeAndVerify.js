describe('igp Cake',()=>{
    it('addCake',async () => {
        let igpURL="https://www.igp.com/";
       await browser.url(igpURL);
       await browser.$("//a[@data-item-name='Cakes' and @class='tile-8 cakes']/descendant::span[.='Cakes']").click();
        await browser.$("//a[@data-item-name='Butterscotch']/descendant::span[.='Butterscotch']").click();
        await browser.$("//p[.='Hearty Butterscotch Cake (Half Kg)']").click();
        await browser.$("//button[@id='add-cart']/descendant::span[.='ADD TO CART']").click();
        let pincode=560085;
        await browser.$("#location-input").setValue(pincode);
        await browser.$("//span[contains(.,'Tomorrow,')]").click();
        await browser.$("//span[.='Standard']").click();
        (await browser.$("#timepicker")).selectByVisibleText("13:00 hrs - 17:00 hrs");
        await browser.$("//span[.='ADD TO CART']").click();
       await browser.$("//span[.='CONTINUE WITHOUT ADDONS']").click();
       await browser.$("//img[@alt='Cart'][1]").click();
       await browser.pause(4000);
       console.log("Done");


    })
})