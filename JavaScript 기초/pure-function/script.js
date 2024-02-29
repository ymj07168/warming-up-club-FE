// impure
// let x = 0;
// const numberUp = () => (x += 1);
// console.log(numberUp());
// console.log(x);

// pure
// let x = 0;
// const numberUp = (num) => (num += 1);
// console.log(numberUp(x));
// console.log(x);

const alphaArray = ["A", "B"];
// const addItemToArray = (originArray, newItem) => {
//   originArray.push(newItem);
//   return originArray;
// };

// console.log(addItemArray(alphaArray, "C"));
console.log(alphaArray);

// pure
const pureAddItemToArray = (originArray, newItem) => {
  return [...originArray, newItem];
};

console.log(pureAddItemToArray(alphaArray, "C"));
console.log(alphaArray);
