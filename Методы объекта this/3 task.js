let obj = {};
let one = 1;
function A() {
  return one;
}
function B() {
  return one;
}

let a = new A();
let b = new B();
console.log(a === b);
