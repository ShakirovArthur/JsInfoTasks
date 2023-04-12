function Calculator(a, b) {
  (this.read = function () {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  }),
    (this.a = a);
  this.b = b;
  (this.sum = function () {
    return this.a + this.b;
  }),
    (this.mul = function () {
      return this.a * this.b;
    });
}

let calculator = new Calculator(2, 3);
calculator.read();

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());
