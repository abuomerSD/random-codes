"use strict";
function greet(personName, date) {
    console.log(`hello ${personName} the date is: ${date.toDateString()}`);
}
greet('Eltayeb', new Date());
let msg = 'test';
let fname;
// primitives types
// string , number and boolean
// arrays
let arr;
let arr2;
let dd;
let n = null;
let kfd;
function printName(obj) {
    var _a, _b;
    console.log(obj.firstName);
    console.log((_a = obj.firstName) === null || _a === void 0 ? void 0 : _a.toLowerCase);
    console.log((_b = obj.lastName) === null || _b === void 0 ? void 0 : _b.toLowerCase);
}
printName({ firstName: "test", lastName: undefined });
