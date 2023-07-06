import excelUtilities from './excelUtilities.js'
describe('a',()=>{
    it('c',async()=>{


let sheetName='Sheet1';

let baseUrl="http://rmgtestingserver/domain/HRM_System/index.html";
        let hrUsername="pg@gmail.com";
        let hrPassword='pg@123';
        let visibleText="→ HR Head";

// excelUtilities.set1ExcelData()

await excelUtilities.setExcelData(sheetName,2,2,hrUsername);
// excelUtilities.setExcelData(sheetName,3,2,hrPassword);
// excelUtilities.setExcelData(sheetName,4,2,visibleText);
// excelUtilities.setExcelData(sheetName,5,2,baseUrl);
})
})