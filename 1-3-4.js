let [name, ...rest] = ["JENNIE", 27, "SEOUL"];

console.log("name", name);
console.log("rest", rest);

let names = ["Steve", "John"];
let students = ["Tom", ...names, ...names];

console.log("students", students);

let tom = {
  name: "Tom",
  age: 10,
  region: "Seoul",
};

let steve = {
  ...tom,
  name: "Steve",
};

console.log(steve); // { name: 'Steve', age: 10, region: 'Seoul' }
