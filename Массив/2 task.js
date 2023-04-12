const arr = [];
function sumInput() {
  let num = prompt("Число", 0);
  if (num !== null && num !== "" && isFinite(num)) {
    arr.push(+num);
    sumInput();
  } else {
    let sum = 0;
    arr.forEach((item) => {
      sum += item;
    });
    console.log(sum);
  }
}

sumInput();
