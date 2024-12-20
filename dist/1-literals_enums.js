"use strict";
// ! literals v/s enums
// ? literals : instance of primitive types like number,string,boolean
// ? passing multiple string literals to choose only one of them 
let direction;
direction = "south";
let httpResponseCode;
// ? Enums : enables developers to establish a collection of named constants(enumerators), each linked with an integer value.
var Size;
(function (Size) {
    // ? default values
    Size[Size["small"] = 0] = "small";
    Size[Size["medium"] = 1] = "medium";
    Size[Size["large"] = 2] = "large"; // 2
})(Size || (Size = {}));
// let size: Size = 0
let size = Size.small;
// if (size === Size.small) console.log(true);
// ? enum with values
var Direction;
(function (Direction) {
    Direction["up"] = "UP";
    Direction["down"] = "DOWN";
    Direction["Left"] = "LEF";
    Direction["right"] = "Right";
})(Direction || (Direction = {}));
const choosenDirection = Direction.Left;
var cssValues;
(function (cssValues) {
    cssValues["sm"] = "10px";
    cssValues["md"] = "50px";
    cssValues["lg"] = "100px";
    cssValues["xl"] = "150px";
    cssValues["xxl"] = "200px";
})(cssValues || (cssValues = {}));
let cssValue = cssValues.sm;
if (cssValues.sm === cssValue)
    console.log(true);
// ? So Enum can be very useful if the optional option has to be included value for more options
