// ? Union & Intersect
console.log("Union and Intersect");

// ? . Union Type (|) : pipe operator
// A union type allows a value to be one of several types.It means the value can hold any one of the types listed. A union type means "this value can be one of these types."
// ? Key Points:
// Definition: A value can be one of several types.
// Syntax: Type1 | Type2 | Type3
// Usage: Useful when a variable or function parameter can accept different types.
// Behavior: The value can be any one of the specified types.

let foodFeedback: string | number;
foodFeedback = "super"
foodFeedback = 10
// foodFeedback = false : wrong cause this option is not provided

// ?  function : accept param from with two option (number or string) and same for returning type
const foodFeedback_1 = (v: string | number): string | number | void => {
    if (typeof v === "string") console.log(`comment processing : ${v}`);
    else if (typeof v === "number") console.log(`Rating : ${v}`);
    else throw new Error("Input Invalid")
}
foodFeedback_1("Food was amazing !")
foodFeedback_1(100)

type Human = {
    name: string,
    age: number
}
type Employee = {
    emp_id: number
    department: string
}

// ? Can use both but first objt type value all should be full filled
type EmployeeDEtails = Human | Employee
const employee88: EmployeeDEtails = {
    name: "Dipak Tamang",
    age: 12,
    department: "Front End"
}



// ?  Intersection Type (&) Ampersand
// An intersection type requires a value to have all the properties of the types.It means the value must satisfy every type listed.
// An intersection type means "this value must have all the properties of these types."

// ? Key Points:
// Definition: A value must satisfy all the types combined.
// Syntax: Type1 & Type2 & Type3
// Usage: Useful when a value should have properties from multiple types.
// Behavior: The value must include all the properties from the combined types.

type PS2 = {
    model: string,
    releasedYear: number
}
type PS2_ISO = {
    game_name: string,
    size: number
}

type PS2_DATA = PS2 & PS2_ISO
// ? All type obj value should be fullfilled unlike union type
const PS2_DATA_1: PS2_DATA = {
    model: "VA12",
    releasedYear: 2000,
    game_name: "God Of War 2",
    size: 6150
}
