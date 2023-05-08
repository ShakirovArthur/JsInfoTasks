function User(name) {
  this.name = name;
}
let user = new User("Vasya");
let user2 = new user.constructor("vasya2");

console.log(user.name);
console.log(user2.name);
