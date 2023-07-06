describe("Scroll Bar",async ()=>{
    it("scroll by element",async()=>{
        await browser.url("https://www.google.com/search?q=scroll+examples&oq=scroll+example&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIHCAIQABiABDIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIICAkQABgWGB7SAQg3ODYxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8");
        // await browser.$("//h3[.='Today']").click();
        await browser.maximizeWindow();
        await browser.scroll(0,3000);
        await browser.pause(2000);
       let ele= await browser.$("(//span[.='People also ask'])[1]");
       await ele.scrollIntoView({block:'center'});

        await browser.pause(4000);
        // await browser.view
    
    })
})