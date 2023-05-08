function f(a, b) {
  console.log(a + b);
}
Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};
f.defer(1000)(1, 2);
