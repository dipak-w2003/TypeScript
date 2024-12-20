console.log('Arrays');


const fruits: string[] = ["Apple", "Banana", "Carrot", "Dragon-fruit"]
// ? Nested Array
const IndexOfFruits: string[][] = [["Apple", "Banana"], ["Carrot", "Dragon-Fruit"], ["Emily"]]
// console.log(IndexOfFruits);
// console.log(IndexOfFruits[1]);
const marks: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const matrix: number[][] = [[0, 1], [3, 9], [4, 8], [0, 0]]
// ? Tupple : fixed length of an array & values are defined according to the position
const coord: [string, number, number] = ["coordination", 9911.2, 8888.111]
// ? complex tupples
const coords: [number, number[]][] = [
    [1, [33.1, 12]],
    [5, [44.1, 12]],
    [8, [4, 2]],
]
// ? Students record
const studentsRecord: [string, number[]][] = [
    ["Ram Hari", [99, 12, 88, 45, 43]],
    ["Sita Pandey", [95, 12, 99, 45, 73]],
    ["Hanuman G", [55, 12, 59, 45, 63]],
]
// console.log(studentsRecord[0][1]);



