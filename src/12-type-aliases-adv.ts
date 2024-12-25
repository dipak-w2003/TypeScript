console.log("Type Aliases");
// ? In TS, a type aliases is a way to give a name to a specific type 

// Todo : return simple tupple
const rawCoords = (p1: [number, number], p2: [number, number]): [number, number] => [p1[0], p2[1]]
const coord_1: [number, number] = [33.3, 11]
const coord_2: [number, number] = [5.3, 6.9]
const rawCoords_ouput = rawCoords(coord_1, coord_2)
console.log(rawCoords_ouput);

// Todo: Note we are repeating the same type of params for two and returning as well
// ? To minimize that code we can use Type
type Coordinate = [number, number]
const rawCoords_1 = (p1: Coordinate, p2: Coordinate): Coordinate => [p1[0], p2[1]]
// ? As you can see have simplied the same function with same logic with simple line of type aliases




// ? Type aliase with object
type labStd = {
    name: string,
    rollno: number,
    course: string,
}
const labStd1: labStd = {
    name: "Ram Bahadur",
    rollno: 1,
    course: "C Programming"
}
const labStd2: labStd = {
    name: "Shyam Bhandari",
    rollno: 2,
    course: "C Programming"
}

// ? Simple task create a product detail (name, qty, rate) the calcualte
type receipt = {
    name: string,
    qty: number,
    rate: number
}

const receiptId88: receipt = {
    name: "Litchee Juice",
    qty: 10,
    rate: 25
}

const receiptId88_calculate = (item: receipt): {} => {
    const calcualte: number = item.qty * item.rate
    return { name: item.name, qty: item.qty, rate: item.rate, bill: calcualte }
}

const receiptId88_output = receiptId88_calculate(receiptId88)
console.log(receiptId88_output);
