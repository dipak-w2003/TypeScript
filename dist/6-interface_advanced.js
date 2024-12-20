"use strict";
console.log("Advanced Interface");
// ? parameter interface obj and return obj
function getPerson(p) {
    return {
        name: p.name,
        age: p.age,
        heightFt: p.heightFt,
    };
}
// Call the function and assign the returned object to `get`
const get = getPerson({ name: "Sallu", age: 30, heightFt: 5.8 });
console.log(get);
