let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat(); //rabbit так как this в данном случае ссылается на объект rabbit
