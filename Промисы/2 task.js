// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), ms);
//   });
// }
// delay(3000)
//   .then(() => {
//     throw new Error("ошибка");
//     console.log(`Выполнилось через 1 sec`);
//   })
//   .catch(() => console.log(" не ok1"));
// delay(3000).then(
//   () => {
//     throw new Error("ошибка");
//     console.log(`Выполнилось через 2 sec`);
//   },
//   () => console.log(" не ok2")
// );

new Promise(function (resolve, reject) {
  throw new Error("Whoops!");
}).catch(() => console.log("1"));
