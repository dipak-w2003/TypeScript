"use strict";
console.log("unknown any typecast");
// ? any value can be stored 
// ? Used when the value is unable or complex to precdict type of it 
let x;
x = "Hari";
x = true;
// ? safer than any
let y = "Bakery";
if (typeof y === "number")
    console.log(y + 10);
if (typeof y === "string")
    console.log(y.length);
const y_ = 100;
if (typeof y_ === "number")
    console.log(y_ + 78);
if (typeof y_ === "string")
    console.log(y_);
// TODO : Note, value type should be checked for further operations
// ? Usecases
// ? Any
function processFeedback_0(input) {
    // ? Assume we can perform ay operation without explicit type checks
    console.log(`Processing : ${input}`);
    // ? further processing logic..
}
// ? This can be a string, number, file, boolean etc
// processFeedback_0("Great Service")
// processFeedback_0(409)
// processFeedback_0(new Blob())
// ? Unknown
function processFeedback_1(input = "Apple") {
    // ? we can identify the unknown type of value using typeof method
    if (typeof input === "string")
        console.log(`Processing text: ${input}`);
    else if (typeof input === "number")
        console.log(`Processing rating: ${input}`);
    else if (typeof input === "number")
        console.log(`Processing rating: ${input}`);
    else if (input instanceof Blob)
        console.log(`Processing file :`);
    else
        console.log('Unsupported type of input');
    // TODO : so, after type is identified we can write that specified logic afterward
}
// processFeedback_1("Great Service")
// processFeedback_1(409)
// processFeedback_1(new Blob())
// ? Typecast
// ! Not working concept not loading
const _ = 11;
const outputa = _ + 100;
console.log(outputa);
