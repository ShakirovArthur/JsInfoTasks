function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

// Rabbit.prototype = {}; //true влияет на создание новых объектов, но не на существующие

// Rabbit.prototype.eats = false; //false меняем по одной ссылке

//delete rabbit.eats;//true  так как в rabbit нету св-ва eats , то оно ничего не удалит

// delete Rabbit.prototype.eats; //undefiend св-во удаленно из прототипа
console.log(rabbit.eats);
