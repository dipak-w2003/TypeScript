// rest parameters
function sum(...numbers: number[]) {
  let added: number = 0;
  for (let i = 0; i < numbers.length; i++) {
    added += numbers[i];
  }
  return added;
}
const sumOfAll = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// ? Union with function
// ? either single string or array of strings
function getItemLength(v1: string | string[], v2: string | string[]) {}

// ? Overloaded function
// function getItemLength(name: string): number;
// function getItemLength(names: string[]): number;
// function getItemLength(nameOrNames: unknown): unknown {
//   if (typeof nameOrNames === "string") return nameOrNames.length;
//   else if (Array.isArray(nameOrNames)) return nameOrNames.length;
//   else return "Hello World 🖕";
// }
// const overloadFunc = getItemLength();
// console.log(overloadFunc);
// TODO : overloaded function is a functions with same name with more than one, Not recommended

// ? usecase find student percentage
function studentPercentage(
  name: string,
  marks: [number, number, number, number, number, number, number, number]
): [{}] {
  // ? tupples used cause subjects should be 8
  let totalMarks: number = 0;
  for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];
  }
  const percentage = (totalMarks * 100) / (marks.length * 100);
  return [{ stdName: name, percent: percentage, obtainedMarks: totalMarks }];
}
const sita = studentPercentage("Sita Janaki", [88, 88, 88, 88, 44, 4, 55, 66]);
console.log(sita);
