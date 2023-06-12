// 1. 상수와 변수
// 상수 : const(constant : 변함없는 수)
// 변수 : let
const a = 1;
let b = 3;

// a = 3; // (var) 오류
b = 1;

console.log("a", a);
console.log("b", b);

// 2. var
if (1 === 1) {
  // 항상 이 scope
  var a = 3;
  console.log("a", a);
}
console.log("a_out", a);

// 3. 객체 선언
// javascript에서 말하는 object
// key - value pair

const age = 21;

const testObj = {
  name: "JENNIE",
  age, // => age: age
  company: "Team Sparta",
  doSomthing: () => {},
};
