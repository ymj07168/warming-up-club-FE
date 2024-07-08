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