function truncate(str, maxLength) {
  str = str.substr(0, maxLength - 1);
  return str + "...";
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
