let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
  const result = {};
  for (let value of arr) {
    result[value.id] = value;
  }
  return result;
}

console.log(groupById(users));
