// ? Type Guard : functions or expressions that allow you to narrow down the type of a variable within a conditional block using 'typeof'.

// ? type checking so afterward statments
function processValue(value: string | number) {
    if (typeof value === "string") {
        console.log(`String value: ${value.toUpperCase()}`);
    } else {
        console.log(`Number value: ${value * 2}`);
    }
}
processValue("hello");
processValue(42);

type fnR = void | string[] | string | undefined
function hobbies(hobby: string | string[] | undefined): fnR {
    if (typeof hobby === "string") {
        return hobby
    }
    else if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map((e) => e.toLocaleUpperCase())
    } else {
        throw new Error("processing failed")
    }
}

console.log(hobbies("Coding"));
console.log(hobbies(["Coding", "Fighting", "Swimming"]));

