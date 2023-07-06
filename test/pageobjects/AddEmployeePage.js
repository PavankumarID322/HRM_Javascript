class AddEmployeePage{
    get getAddEmployeeBtn(){
        return $("//button[contains(.,' Add Employee')]");
    }

    get getCompanyIdTxt(){
        return $("//div[@id='modal-overlay']/descendant::input[@name='employee_companyid']");
    }
    get getFirstNameTxt(){
        return $("//div[@id='modal-overlay']/descendant::input[@name='employee_firstname']");
    }
    get getLastNameTxt(){
        return $("//div[@id='modal-overlay']/descendant::input[@name='employee_lastname']");
    }
    get getMiddleNameTxt(){
        return $("//div[@id='modal-overlay']/descendant::input[@name='employee_middlename']");
    }
    get getBranchDate(){
        return $("//div[@id='modal-overlay']/descendant::input[@name='branches_datefrom']");
    }
    get getBranchRecentDate(){
        return $("//div[@id='modal-overlay']/descendant::input[@name='branches_recentdate']");
    }
    get getDepartmentSelectBox(){
        return $("//div[@id='modal-overlay']/descendant::select[@name='employee_department']");
    }
    get getBranchSelectBox(){
        return $("//div[@id='modal-overlay']/descendant::select[@name='employee_branches']");
    }
    get getPostionTxt(){
        return $("//div[@id='modal-overlay']/descendant::input[@name='employee_position']");
    }
    get getContactNoTxt(){
        return $("//div[@id='modal-overlay']/descendant::input[@name='employee_contact']");
    }
    get getEmployeeSSSNo(){
        return $("//div[@id='modal-overlay']/descendant::input[@name='employee_sss']");
    }
    get getTinNo(){
        return $("//div[@id='modal-overlay']/descendant::input[@name='employee_tin']");
    }
    get getHDMFNoTxt(){
        return $("//div[@id='modal-overlay']/descendant::input[@name='employee_hdmf_pagibig']");
    }
    get getGSISnoTxt(){
        return $("//div[@id='modal-overlay']/descendant::input[@name='employee_gsis']");
    }
    get getSoftCopyUploadFile(){
        return $("//div[@id='modal-overlay']/descendant::input[@name='employee_file201']");
    }
    get getEmployeeUploadImg(){
        return $("//div[@id='modal-overlay']/descendant::input[@name='employee_image']");
    }
    get getSaveBtn(){
        return $("//div[@id='modal-overlay']/descendant::button[@name='emplo']");
    }
    get getCloseBtn(){
        return $("//div[@id='modal-overlay']/descendant::button[text()='Close']");
    }


    //Business logics

    async createNewEmployee(companyId,firstName,lastName,middleName,branchDate,recentBranchDate,departmentName,branchName,employeePostion,contactNo,SSSno,TinNo,HDMFno,softCopyPath,employeeImgPath){
        await this.getAddEmployeeBtn.click();
        await this.getCompanyIdTxt.setValue(companyId);

        
        await this.getFirstNameTxt.setValue(firstName);
        await this.getLastNameTxt.setValue(lastName);
        await this.getMiddleNameTxt.setValue(middleName);
        await this.getBranchDate.setValue(branchDate);
        await this.getBranchRecentDate.setValue(recentBranchDate);
        await this.getDepartmentSelectBox.selectByVisibleText(departmentName);
        await this.getBranchSelectBox.selectByVisibleText(branchName);
        await this.getPostionTxt.setValue(employeePostion);
        await this.getContactNoTxt.setValue(contactNo);
        await this.getEmployeeSSSNo.setValue(SSSno);
        await this.getTinNo.setValue(TinNo);
        await this.getHDMFNoTxt.setValue(HDMFno);
        await this.getGSISnoTxt.setValue(GSISno);
        let softCopyFile=await browser.uploadFile(softCopyPath)
        await this.getSoftCopyUploadFile.setValue(softCopyFile);
        let employeeFile=await browser.uploadFile(employeeImgPath);
        await this.getEmployeeUploadImg.setValue(employeeFile)
        await this.getSaveBtn();
    }

    async createNewEmp(companyId,firstName){
        await this.getAddEmployeeBtn.click();
        await this.getCompanyIdTxt.setValue(companyId);
        await this.getFirstNameTxt.setValue(firstName);
    }
}


export default new AddEmployeePage();