let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function topSalaries(obj) {
  let max = 0;
  let maxName = null;
  for (const [name, salaries] of Object.entries(obj)) {
    if (max < salaries) {
      max = salaries;
      maxName = name;
    }
  }
  return maxName;
}

console.log(topSalaries(salaries));
