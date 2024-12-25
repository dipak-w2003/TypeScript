"use strict";
// ? Union & Intersect
console.log("Union and Intersect");
// ? . Union Type (|) : pipe operator
// A union type allows a value to be one of several types.It means the value can hold any one of the types listed. A union type means "this value can be one of these types."
// ? Key Points:
// Definition: A value can be one of several types.
// Syntax: Type1 | Type2 | Type3
// Usage: Useful when a variable or function parameter can accept different types.
// Behavior: The value can be any one of the specified types.
let foodFeedback;
foodFeedback = "super";
foodFeedback = 10;
// foodFeedback = false : wrong cause this option is not provided
// ?  function : accept param from with two option (number or string) and same for returning type
const foodFeedback_1 = (v) => {
    if (typeof v === "string")
        console.log(`comment processing : ${v}`);
    else if (typeof v === "number")
        console.log(`Rating : ${v}`);
    else
        throw new Error("Input Invalid");
};
foodFeedback_1("Food was amazing !");
foodFeedback_1(100);
const employee88 = {
    name: "Dipak Tamang",
    age: 12,
    department: "Front End"
};
// ? All type obj value should be fullfilled unlike union type
const PS2_DATA_1 = {
    model: "VA12",
    releasedYear: 2000,
    game_name: "God Of War 2",
    size: 6150
};
