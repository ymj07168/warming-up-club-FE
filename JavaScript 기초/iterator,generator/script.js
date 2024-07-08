function makeIterator(numbers) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < numbers.length
        ? { value: numbers[nextIndex++], done: false }
        : { value: undefined, done: true };
    },
  };
}

// 숫자 배열 생성
const numbersArray = [1, 2, 3];
// const numbersIterator = makeIterator(numbersArray);

// Symbol.iterator 이용
const numbersIterator = numbersArray[Symbol.iterator]()

console.log(numbersIterator.next()); // {value: 1, done: false}
console.log(numbersIterator.next()); // {value: 2, done: false}
console.log(numbersIterator.next()); // {value: 3, done: false}
console.log(numbersIterator.next()); // {value: undefined, done: true}

const numbersIterable = [1, 2, 3];
const numbersNotIterable = { a: 1, b: 2 };
console.log(typeof numbersIterable);
console.log(typeof numbersNotIterable);
for (const n of numbersIterable) {
    console.log(n)
}

const set = new Set([1, 2, 3, 4]);
console.log('set', set)
const map = new Map([['a', 1], ['b', 2]]);

console.log(set[Symbol.iterator]()); // SetIterator {1, 2, 3, 4}
console.log(map[Symbol.iterator]()); // MapIterator {'a' => 1, 'b' => 2}


// 제너레이터 함수
function* sayNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

// 제너레이터 함수의 반환이 제너레이터
const number = sayNumbers();

console.log(number.next()); // {value: 1, done: false}
console.log(number.next()); // {value: 2, done: false}

number = number[Symbol.iterator]();

// Lazy Evaluation: 계산의 결과값이 필요할 때까지 계산을 늦춰서 필요한 데이터를 필요한 순간에 생성
function* createIds() {
    let index = 1;
    while (true) {
        yield index++;
    }
}

const gen = createIds();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.return(10)); // {value: 10, done: true}