function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// console.log(sumTo(10));

function secondSumTo(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + secondSumTo(n - 1);
  }
}
// console.log(secondSumTo(10));

function thirdSumTo(n) {
  return (n * (n + 1)) / 2;
}
// console.log(thirdSumTo(10));
