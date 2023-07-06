import excel from "exceljs";
class excelData{

 async addDataToExcel(sheetname,rowNum,cellNum,data){
    let workbook=new excel.Workbook();
    let sheet=workbook.addWorksheet(sheetname);
    let row=sheet.addRow(rowNum);
    let cell=row.getCell(cellNum)
    cell.value=data;
   await workbook.xlsx.writeFile("excelUtility.xlsx");
}

async getExcelData(sheetname,rowNum,cellNum){
   let workbook=new excel.Workbook();
   await workbook.xlsx.readFile("excelUtility.xlsx");
   let sheet=workbook.getWorksheet(sheetname);
   let row=sheet.getRow(rowNum);
   let cell=row.getCell(cellNum);
   let data=cell.toString();
   return data;
}

}

export default new excelData();

