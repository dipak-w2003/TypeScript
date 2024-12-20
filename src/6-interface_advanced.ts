console.log("Advanced Interface");
interface Person_ {
  name: string;
  age: number;
  heightFt?: number;
}

// ? parameter interface obj and return obj
function getPerson(p: Person_): Person_ {
  return {
    name: p.name,
    age: p.age,
    heightFt: p.heightFt,
  };
}

// Call the function and assign the returned object to `get`
const get = getPerson({ name: "Sallu", age: 30, heightFt: 5.8 });

console.log(get);
