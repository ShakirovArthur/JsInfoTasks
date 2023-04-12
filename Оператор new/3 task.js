function makeUser() {
  console.log(this);
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name);
