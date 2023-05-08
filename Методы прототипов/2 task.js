function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); //Rabbit
Rabbit.prototype.sayHi(); //undefiend
Object.getPrototypeOf(rabbit).sayHi(); //undefiend
rabbit.__proto__.sayHi(); //undefiend
