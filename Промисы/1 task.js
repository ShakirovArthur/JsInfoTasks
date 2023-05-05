let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => {
    resolve(2);
  }, 1000);
});

promise.then((value) => console.log(value));

// ответом будет 1 так как вторый вызов resolve будет проигнорирован
