function outerFn(outer) {
  return function innerFn(inner) {
    console.log("outer fn: " + outer);
    console.log("inner fn: " + inner);
  };
}

const newFn = outerFn("outside");
newFn("inside");

// outer fn: outside
// inner fn: inner

let a = "a"; // Script

function functionA() {
  let b = "b"; // Closure

  function functionB() {
    let c = "c"; // Local
    console.log(a, b, c);
  }
  functionB();
  console.log(a, b);
}

functionA();
