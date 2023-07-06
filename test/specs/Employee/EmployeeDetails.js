import creds from "../smoke/creds.js";

class EmployeeDetails{
    companyId=creds.ranNum();
    firstName=creds.ranString();
    lastName=creds.ranString();
    middleName=creds.ranString();
    branchDate="10-10-2022";
    recentBranchDate="21-11-22";
    departmentName="AI Tech13";
    branchName="Vijayapura,Karnataka";
    employeePostion="Automation Engg";
    contactNo="9632587411";
    SSSno=creds.ranNum();
    TinNo=creds.ranNum();
    HDMFno=creds.ranNum();
    softCopyPath="./C:/Users/hp/OneDrive/Desktop/HRM/forTesting.docx";
    employeeImgPath="./C:/Usershp/OneDrive/Pictures/Screenshots/Screenshot (93).png";
}

export default new EmployeeDetails();