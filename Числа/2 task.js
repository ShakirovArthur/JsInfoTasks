function readNumber() {
  let num = prompt("число");
  if (isFinite(num)) {
    console.log(num);
  } else if (num === null || num === "") {
    console.log(null);
  } else {
    readNumber();
  }
}
readNumber();
