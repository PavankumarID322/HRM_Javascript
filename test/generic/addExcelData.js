import exUl from "./excelData.js";
import exCr from "../test/specs/ExcelFiles/excelCred.js";

describe('addd',async()=>{
    it('vsdd v',async()=>{
let data=await exUl.getExcelData(exCr.sheetname,exCr.rowNum,exCr.cellNum);
console.log(data);

//  exUl.addDataToExcel(exCr.sheetname,exCr.rowNum,exCr.cellNum,exCr.data);
})
})


 