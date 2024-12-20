// ? default param 0
function add(x: number = 0, y: number = 0) {
  if ((x && y) === 0) return -1;
  else return x + y;
}
const add_output = add();
// console.log(add_output);

// ? We want to make middleName Param optional, so we don't get error
const makeName = (firstName: string, lastName: string, middleName?: string) => {
  return firstName + " " + lastName;
};
const madeName_0 = makeName("Dipak", "Tamang");
// console.log(madeName_0);

// ! ===== Complex function useCase
function mul(x: number, y: number): number {
  return x * y;
}
function div(x: number, y: number): number {
  return x / y;
}
function applyFunc(
  funcs: ((a: number, b: number) => number)[],
  values: [number, number][]
): number[] {
  const results = [] as number[];
  for (let i = 0; i < funcs.length; i++) {
    const args = values[i];
    const result = funcs[i](args[0], args[1]);
    results.push(result);
  }
  return results;
}
const output_applyFunc = applyFunc(
  [mul, div],
  [
    [1, 2],
    [4, 5],
  ]
);
console.log(output_applyFunc);
