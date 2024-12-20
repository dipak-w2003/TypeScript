"use strict";
console.log("Optional Chaining & Bang");
// ?  eg : 1
// ? optional chaining (if exists execute or undefined ) : ' ? '
const arr_0 = [{ name: "tim" }, { name: "joe" }, { name: "jane" }];
// last : pop
const arr_rm = arr_0.pop()?.name;
// ? next eg : 2
const arr_1 = [[{ name: "tim" }]];
const arr_1_rm = arr_1.pop()?.pop()?.name;
// console.log(arr_1);
// ? bang : ' ! ' exclamation
// ? ignores undefined problem or the value should be string or else except undefined
const arr_2 = [{ money: 500 }, { money: 1000 }];
const arr_2_rm = arr_2.pop();
console.log(arr_2);
// ! this bang operator can crash the code
//  TODO : use optional_chaining rather than bang operator
