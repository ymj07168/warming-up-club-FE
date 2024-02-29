const sum = (x, y) => x + y;

const curriedSum = (x) => (y) => x + y;

console.log(sum(10));
console.log(curriedSum(10));
// y => x + y
console.log(curriedSum(10)(20));

const makeFood = (ingredient) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient} ${ingredient2} ${ingredient3}`;
    };
  };
};

const hamburger = makeFood("bread")("ham")("tomato");
console.log(hamburger);

const clearMakeFood = (ingredient) => (ingredient2) => (ingredient3) =>
  `${ingredient} ${ingredient2} ${ingredient3}`;

const hamburger2 = clearMakeFood("bread")("ham")("tomato");
console.log(hamburger2);

// log
function log(date, importance, message) {
  alert(
    `[${date.getHours()}: ${date.getMinutes()}]: [${importance}] ${message}`
  );
}

log(new Date(), "DEBUG", "some bug");

// currying log

// function curry(f) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return f(a, b, c);
//       };
//     };
//   };
// }

// const curriedLog = curry(log);
// curriedLog(new Date())("DEBUG")("some bug");

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
const sum2 = (x, y, z, j) => x + y + z + j;

const curriedSum2 = curry(sum2);
console.log(curriedSum2(1)(2)(3)(4));
