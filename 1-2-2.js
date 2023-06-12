const obj1 = {
  value1: 10,
};

const obj2 = obj1; // 얕은 복사
const obj3 = JSON.parse(JSON.stringify(obj1));

// 만약에 우리가 복사한 obj2를 바꾼다면
// 예상 : obj2가 바뀜
// 실제 : obj1도 함께 바뀜

obj2.value1 += 1;

console.log("obj1", obj1);
console.log("obj2", obj2);
console.log("obj3", obj3);
