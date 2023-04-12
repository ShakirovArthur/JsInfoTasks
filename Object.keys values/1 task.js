let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(obj) {
  return Object.values(obj).reduce((a, b) => a + b);
}

console.log(sumSalaries(salaries));
