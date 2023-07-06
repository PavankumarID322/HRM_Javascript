import excel from 'exceljs';

var excelFilePath='C:/Users/hp/OneDrive/Desktop/HRM/ForHrm.xlsx';
class excelUtilities{
getExcelData=(sheetName,rowNum,cellNum)=>{
    var wb=new excel.Workbook();
    wb.xlsx.readFile(excelFilePath);
    let cellvalue=wb.getWorksheet(sheetName).getRow(rowNum).getCell(cellNum).toString();
    return cellvalue;
}

async setExcelData(sheetName,rowNum,cellNum,writeData){
    let wb=new excel.Workbook();
   wb.addWorksheet(sheetName).addRow(rowNum).getCell(cellNum).value=writeData;
    await wb.xlsx.writeFile(excelFilePath);
}

// set1ExcelData(sheetName,rowNum,cellNum,writeData){
//     let wb=new excel.Workbook();
//     wb.addWorksheet(sheetName).addRow(rowNum).getCell(cellNum).value=writeData;
//     wb.xlsx.writeFile(excelFilePath);
// }
}


export default new excelUtilities();