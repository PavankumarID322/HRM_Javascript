import excel from 'exceljs';

describe("Excel Example",()=>{
    it("write Data",async()=>{
        let wb=new excel.Workbook();
       let sheetName= wb.addWorksheet('Sheet1');
       let rowNum=sheetName.addRow(2);
       let cellNum=rowNum.getCell(2);
       let val='WRITEexcelData';
       cellNum.value =val;
       await wb.xlsx.writeFile("C:/Users/hp/OneDrive/Desktop/HRM/ForHrm.xlsx")

    })

    it.skip("fetchData" ,async ()=>{
        let wb=new excel.Workbook();
       await wb.xlsx.readFile('C:/Users/hp/OneDrive/Desktop/HRM/HRM_TC.xlsx');
       let sheetName=wb.getWorksheet('Sheet1');
        let rowNum=sheetName.getRow(1);
        let cellNum=rowNum.getCell(2);
        let val=cellNum.toString();
        console.log(val);
    })    
})