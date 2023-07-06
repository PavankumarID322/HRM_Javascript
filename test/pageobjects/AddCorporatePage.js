class AddCorporatePage{
    get getAddCorporate(){
        return $("//button[contains(.,' Add Corporate')]");
    }

    get getCorporateName(){
        return $("input[name='corporate_name']");
    }

    get getSaveBtn(){
        return $("button[name='corp']");
    }

    get getSearchTxtBtx(){
        return $("//input[@aria-controls='example1']");
    }


    async deleteCorporateName(corporateName){
        await browser.$("//td[.='"+corporateName+"']/../descendant::button[.='Delete']").click();
          await browser.$("//input[@value='"+corporateName+"']/ancestor::div[@class='modal-content']/descendant::div[@class='modal-footer justify-content-between']/descendant::button[@name='delete']").click();

        //await browser.$("//input[@value='"+corporateName+"']/../..//div[3]//button[@name='delete']").click();
        //  await browser.$("//input[@value='"+corporateName+"' ]/ancestor::div[@class='modal-content']/descendant::button[@name='delete']").click();
    }

    async addNewCorporateName(corporateName){
        await this.getAddCorporate.click();
        await this.getCorporateName.setValue(corporateName);
        await this.getSaveBtn.click();
    }

    async modifyCorporateName(corporateName,updatedCorporateName){
        await this.getSearchTxtBtx.setValue(corporateName);
        await browser.$("//td[.='"+corporateName+"']/../descendant::button[.='Edit']").click()
        await browser.$("//h4[.='Edit Corporate']/ancestor::div[@class='modal-content']/descendant::input[@value='"+corporateName+"']").setValue(updatedCorporateName);
        await browser.$("//input[@value='"+corporateName+"']/ancestor::div[@class='modal-content']/descendant::button[.='Update']").click()

    }
}

export default new AddCorporatePage();


