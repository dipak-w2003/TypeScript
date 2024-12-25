"use strict";
console.log("Type Aliases");
// ? In TS, a type aliases is a way to give a name to a specific type 
// Todo : return simple tupple
const rawCoords = (p1, p2) => [p1[0], p2[1]];
const coord_1 = [33.3, 11];
const coord_2 = [5.3, 6.9];
const rawCoords_ouput = rawCoords(coord_1, coord_2);
console.log(rawCoords_ouput);
const rawCoords_1 = (p1, p2) => [p1[0], p2[1]];
const labStd1 = {
    name: "Ram Bahadur",
    rollno: 1,
    course: "C Programming"
};
const labStd2 = {
    name: "Shyam Bhandari",
    rollno: 2,
    course: "C Programming"
};
const receiptId88 = {
    name: "Litchee Juice",
    qty: 10,
    rate: 25
};
const receiptId88_calculate = (item) => {
    const calcualte = item.qty * item.rate;
    return { name: item.name, qty: item.qty, rate: item.rate, bill: calcualte };
};
const receiptId88_output = receiptId88_calculate(receiptId88);
console.log(receiptId88_output);
