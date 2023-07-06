// 1.what are the projects you worked on and your roles and responsibilities in that


// 2. Diff between let var const with examples and expalination of each declaration works

var x=10; let y=20; const z=3.141;
console.log(x+" "+y+" "+z);


function outter (){
    var v='var declar';
    function inner (){
    var a=123;
    console.log(a+" @@@@@@@@@@ "+x+" @@@@@@@@@@ "+y+" @@@@@@@@@@@@@@@@@ "+z+" @@@@@@@@@@@@@@@@@ "+v);
    }
    inner();
    
}
outter();

 







// 3. Given a snippet and asked the output
// 4. difference between == and === operator with examples

// var q='abc';
// let w="abc";
// let ver=function (){
//     if(q==w){
//         console.log("same");
//     }
// }
// ver();







// 5.Given a snippet related to the above question and asked the output
// 6. difference filter and map method in array with examples
// 7. difference between for of loop and forEach method with syntax
// 8. difference between null and undefined
// 9. difference between null and Nan
// 10. Given a snippet related to null,undefined and Nan and asked the output with explaination
// 11. data types?
// 12. diff b/w undefined and null?
// 13.what is arrow function and its syntax
// 14. what is ternary operator and its syntax and how it works
// 15.what is hoisting in js





let obj={
    name:'pavan',
    last:'kumar',
    print:function (a,b){
        console.log(`${this.name} ${a}  ${b}   ${this.last}`);
    }
}

let obj1={
    name:'hi',
    last:'he'
}
let set = new Set(obj.name)
console.log(set);
console.log(Array.from(set));

obj.print.apply(obj1,set);
