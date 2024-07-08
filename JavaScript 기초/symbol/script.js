const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol("hi");
console.log(sym1 === sym2); // 다름
console.log(sym3.description); // hi

let carA = {
    id: 1,
    name: 'morning',
    brand: 'kia',
    price: 1000,
    // [idSym]: 300
}

const idSym = Symbol('id');
carA[idSym] = 300;

// carA.id = 300;
console.log(carA); // { id: 300, ... }

// Symbol key는 출력 안함
for (const key in carA) {
    console.log(key)
}
// Symbol key 출력
console.log(Object.getOwnPropertySymbols(carA));

// Symbol.for을 이용하면 같은 description을 가졌을 경우, 같은 값으로 인지
// Symbol.for을 이용하여 생성한 값은 Symbol.keyFor 이용해서 검색
const key1 = Symbol.for('hihi');
console.log(Symbol.keyFor(key1));


const RED = Symbol('red');
const ORANGE = Symbol('orange');
const YELLOW = Symbol('yellow');
const BLUE = Symbol('blue');
const dog = 'blue';

function getImportantLevel(color) {
    switch (color) {
        case RED:
            return 'very important';
        case ORANGE:
            return 'important';
        case YELLOW:
            return 'little important';
        case BLUE:
            return 'not important';
        default:
            console.log(`${color} not included`)
    }
}

console.log(getImportantLevel(BLUE)); // not important
console.log(getImportantLevel(dog)); // not important => 나머지 Symbol로 바뀔 경우, blue not included
