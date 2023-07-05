// 값과 스스로를 순환 참조하는 객체 생성
const original = { name: "MDN" };
original.itself = original;

// 복제
const clone = structuredClone(original);

console.log(clone !== original); // 동일하지 않은 객체 (같지 않은 동일성)
console.log(clone.name === "MDN"); // 같은 값을 가집니다.
console.log(clone.itself === clone); // 순환 참조가 보존됩니다.
