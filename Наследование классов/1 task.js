class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name); // конструктор дочернего класса должен вызывать super()
    this.name = name;
    this.created = Date.now();
  }
}

let pig = new Rabbit("Pig");
console.log(pig.name);
