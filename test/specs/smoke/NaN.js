import lp from "../../pageobjects/loginpage.js";

///Difference between == and ===
//rest and spread operater explain
//NaN
//filter and map
//difference between null and undefined
//promise
//promise.all
//this keyword
//setTimeOut
//Detail control statement{}
//prototype inheritance

//NaN
// let c='4c';
// let b=1;
// let d=c+b;
// let e=c*2;       //null false number undefined string
// console.log(typeof(b)  +"   "+typeof(e)  +" "+typeof(d));
// console.log(`${b}  ${e}   ${d} `); //


// const ax=[10,20,40,50];
// for (const v of ax) {
    // 
// }
// for(let a of ax){
//     console.log(a);
// }
// let abc=ax.map((ele)=>{
//     ele*4;
// });
// for(let x of abc){
//     console.log(x);
// }

describe('ex',async ()=>{
    it('j',async ()=>{
        console.log(await lp.returnType());
        // console.log(x);
    })
})