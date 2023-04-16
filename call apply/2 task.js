function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function f(x) {
  console.log(x);
}

let f1000 = delay(console.log, 1000);

f1000("test");
