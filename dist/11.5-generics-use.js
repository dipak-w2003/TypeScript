"use strict";
// ? Application of generic for overloading function
// ! Overloading function (same function more than 1)
// * function add(a: number, b: number): number
// * function add(a: string, b: string): string
// * function add(a: any, b: any): any
// TODO : solve overloading problem with generics
function addGenerics(a, b) {
    if (typeof a === "number" && typeof b === "number")
        return (a + b);
    if (typeof a === "string" && typeof b === "string")
        return (a + " " + b);
    if (typeof a !== typeof b)
        return a + b;
    else
        throw new Error("Provided Both Data should Same Type ⁉️");
}
console.log(addGenerics(1, 2));
console.log(addGenerics("Hello", "Dipak"));
// ! Not solved any + any -> 3rd overload func
