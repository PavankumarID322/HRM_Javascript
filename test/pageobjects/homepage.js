class homepage{

    get getCorporateModuleBtn(){
        return $("//p[contains(.,' CORPORATE')]");
    }
    get getAddCorporateBtn(){
        return $("//p[.='Add Corporate']");
    }

    get getEmployeeModuleBtn(){
        return $("//p[contains(.,'EMPLOYEE')]");
    }

    get getAddEmployeeBtn(){
        return $("//p[.='Add Employee']")
    }

    get getLogoutBtn(){
        return $("//a[@data-toggle='dropdown']");
    }
    get getLogoutBtn1(){
        return $("//a[contains(.,' Log Out')]");
    }



    /**
     * This method click on addCorporate btn 
     */
    async clickOnAddCorporateBtn(){
        await this.getCorporateModuleBtn.click();
        await this.getAddCorporateBtn.click();
    }


    async clickOnAddEmployee(){
        await this.getEmployeeModuleBtn.click();
        await this.getAddEmployeeBtn.click();
    }

   

    async logoutFromApp(){
        await this.getLogoutBtn.click();
        await this.getLogoutBtn1.click();
    }
}
// module.exports=new homepage();
export default new homepage();