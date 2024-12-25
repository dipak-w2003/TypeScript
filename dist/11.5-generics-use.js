"use strict";
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
console.log(addGenerics(false, "Dipak"));
