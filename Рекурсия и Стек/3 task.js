function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
// console.log(fib(3));

function secondFib(n, cache = {}) {
  if (n in cache) {
    return cache[n];
  }
  if (n <= 1) {
    return n;
  }
  const result = secondFib(n - 1, cache) + secondFib(n - 2, cache);
  cache[n] = result;
  return result;
}
console.log(secondFib(77));
