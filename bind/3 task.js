function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

console.log(bound.test); // что выведет? почему?
//undefiend так как у объекта нету св-ва test
