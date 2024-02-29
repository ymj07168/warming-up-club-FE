const aArray = [1, 2, 3];

// shallow copy with spread operator
const bArray = [...aArray, 4];

console.log(aArray);
console.log(bArray);

// shallow copy with Object.assign()
const cArray = Object.assign([], bArray);

// Nested Arrays and Objects
cArray.push([5, 6, 7]);
const dArray = [...cArray, 10];
// cArray : [1, 2, 3, 4, Array(3)]
// dArray : [1, 2, 3, 4, Array(3), 10]

dArray[4].push(8);
// cArray : [1, 2, 3, 4, Array(4)]
// dArray : [1, 2, 3, 4, Array(4), 10]


// 중첩된 배열이나 객체가 있다면 중첩된 부분만 변경됨 => 얕은 복사라서 깊은 부분은 복사가 안 되기 때문


// 얕은 동결
const aObject = {
    "a": "a",
    "b": "b",
    "cObject": {"a": 1, "b": 2}
}

Object.freeze(aObject);
aObject.a = "c";
// a 값 변경 안됨

aObject.cObject.a = 3;
// cObject 내의 a 값 변경됨


// deep copy with json.parse(json.stringify())
// const newAObject = JSON.parse(JSON.stringify(aObject))

// 중첩이 된 깊은 부분은 변하지 않음

// deep copy with nested spread operator
const newAObject = {...aObject, cObject: {...aObject.cObject}}


// structuredClone()