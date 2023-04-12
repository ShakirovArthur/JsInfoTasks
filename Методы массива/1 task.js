function camelize(str) {
  const result = str
    .split("-")
    .map((item, index) =>
      index !== 0 ? item[0].toUpperCase() + item.slice(1) : item
    )
    .join("");
  console.log(result);
}
camelize("background-color");
