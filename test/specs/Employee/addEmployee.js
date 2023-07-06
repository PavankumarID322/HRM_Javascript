import { expect } from "chai";
import creds from "../smoke/creds.js";
import loginpage from "../../pageobjects/loginpage.js";
import homepage from "../../pageobjects/homepage.js";
import AddEmployeePage from "../../pageobjects/AddEmployeePage.js";
import ed from "./EmployeeDetails.js";
import excUt from "../../../generic/excelData.js";
import excelCred from "../ExcelFiles/excelCred.js";

describe('Corporate',()=>{
    it('AddEmployee By Hr Head',async ()=>{
        await browser.url(creds.baseUrl);
        let aUrl=await browser.getUrl();
        expect(aUrl).contain("rmgtestingserver");

        await browser.maximizeWindow();

        await loginpage.loginApp(creds.hrHeadUs1,creds.hrHeadPwd1,creds.hrHeadVisibleText);

        await loginpage.printAndAcceptAlert();

        await homepage.clickOnAddEmployee();

        await AddEmployeePage.createNewEmployee(ed.companyId,ed.firstName,ed.lastName,ed.middleName,ed.branchDate,ed.recentBranchDate,ed.departmentName,ed.branchName,ed.employeePostion,ed.contactNo,ed.SSSno,ed.TinNo,ed.HDMFno,ed.softCopyPath,ed.employeeImgPath);

        await AddEmployeePage.createNewEmp(ed.companyId,ed.firstName);
        await loginpage.printAndAcceptAlert();

        await browser.pause(5000);
        excUt.addDataToExcel(excelCred.sheetname,excelCred.rowNum,excelCred.cellNum,excelCred.data);

        
    })
    
})