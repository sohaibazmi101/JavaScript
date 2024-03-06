/*
    Conversion is Most important part in programming language
    we must care of data types in javascript before conversion
*/

let num = 33;
console.log(num);
let stringNum = String(num);
console.table([typeof stringNum, stringNum]);
let boolean, isLoggedIn = false;    //  Conversion of boolean to number is 0 and 1 and vice versa
console.log(isLoggedIn);
let numIsloggedIn = Number(isLoggedIn);
console.table([typeof isLoggedIn, typeof numIsloggedIn, numIsloggedIn]);

/* 

Possible outputs are

    33
┌─────────┬──────────┐
│ (index) │ Values   │
├─────────┼──────────┤
│ 0       │ 'string' │
│ 1       │ '33'     │
└─────────┴──────────┘
false
┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ 'boolean' │
│ 1       │ 'number'  │
│ 2       │ 0         │
└─────────┴───────────┘

*/


let hasValue = "123abs";
console.log(hasValue);

let stringHasValue = Number(hasValue);

console.table([hasValue, typeof hasValue, stringHasValue, typeof stringHasValue]);

/* 

outputs

    123abs
┌─────────┬──────────┐
│ (index) │ Values   │
├─────────┼──────────┤
│ 0       │ '123abs' │
│ 1       │ 'string' │
│ 2       │ NaN      │
│ 3       │ 'number' │
└─────────┴──────────┘

*/