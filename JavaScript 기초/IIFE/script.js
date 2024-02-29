(function () {
  var aName = "Barry";
})();

// IIFE 내부에서 정의된 변수 외부 범위에서 접근 불가
console.log(aName);

var result = (function () {
    var aName = "Barry";
    return aName;
})();

console.log(result)
// Barry

// 함수에 이름이 없으려면 2가지 조건 충족
// 1. 함수를 할당받을 변수를 지정해야함
// 2. 함수를 즉시 호출해야함

// 앞에 연산자를 붙여서 사용도 가능


// const score = () => {
//     let count = 0;
//     return {
//         current: () => { return count },
//         increment: () => { count++ },
//         reset: () => {count = 0},
//     }
// }

// console.log(score)
// // 함수식

// console.log(score().current());
// score().increment();
// console.log(score().current());
// 값 변화 없음 => count 0으로 초기화하기 때문


// 즉시 실행 함수로 변환
const score = (() => {
  let count = 0;
  return {
    current: () => {
      return count;
    },
    increment: () => {
      count++;
    },
    reset: () => {
      count = 0;
    },
  };
})();

console.log(score.current());
score.increment();
console.log(score.current());


const increment = (() => {
    let counter = 0;
    const number = (num) => console.log(`it is ${num} number`);
    return () => { counter++; number(counter); }
})();

increment();
increment();
// It is 2 number