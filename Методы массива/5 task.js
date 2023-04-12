function copySorted(arr) {
  // return arr.slice().sort();
  return [...arr].sort();
}
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);
console.log(sorted);
