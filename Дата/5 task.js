function getLastDay(years, month) {
  let day = new Date(years, month + 1, 0);
  return day.getDate();
}

console.log(getLastDay(2012, 1));
