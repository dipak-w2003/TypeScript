// ? Generics

// ? Return a Union type value -> String | Number 
// ! Note we cannot pass any other than string and number data type as param
const returnUnion = (value: number | string): number | string => value
const stringValue = returnUnion("Apple")
const numberValue = returnUnion(7)
console.log(stringValue);
console.log(numberValue);
// ! cause read line no.4
// const arrayValue =  returnUnion([]) ❎ 

// TODO Note: It's kinda used when we are confused over data type we getting from certains types so we make the params to accept possibles types by using union operator. It runs unless we provide data type beyond posibilites (LINE.NO.4).


// ? Generics : In TS, it allows you to create resuable components or functions that can work with multiple data types
// ? Generics 
// ! TODO : So overcome the problem of union operator or beyond possibles types getting, we use generics
function returnGeneric<Type>(value: Type): Type {
    // ? initialize <Type> which accepts any data types
    // ? accept the param type as 'Type' : which accepts any data types
    return value
}
const numberPass = returnGeneric(900)
const stringPass = returnGeneric("Dipak Tamang")
const booleanPass = returnGeneric(true)
const arrayPass = returnGeneric([1, 2, 3, 4, 5, 6, 7, 8])
console.log(numberPass);
console.log(numberPass,
    stringPass,
    booleanPass,
    arrayPass);




