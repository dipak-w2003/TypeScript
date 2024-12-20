// ! literals v/s enums
// ? literals : instance of primitive types like number,string,boolean
// ? passing multiple string literals to choose only one of them 

let direction: "north" | "south" | "east" | "west"
direction = "south";
let httpResponseCode: 200 | 400 | 201;

// ? Enums : enables developers to establish a collection of named constants(enumerators), each linked with an integer value.
enum Size {
    // ? default values
    small,   // 0
    medium, // 1
    large  // 2
}
// let size: Size = 0
let size: Size = Size.small
// if (size === Size.small) console.log(true);

// ? enum with values
enum Direction {
    up = "UP",
    down = "DOWN",
    Left = "LEF",
    right = "Right",
}
const choosenDirection = Direction.Left;

enum cssValues {
    sm = "10px",
    md = "50px",
    lg = "100px",
    xl = "150px",
    xxl = "200px"
}

let cssValue: cssValues = cssValues.sm
if (cssValues.sm === cssValue) console.log(true);

// ? So Enum can be very useful if the optional option has to be included value for more options
