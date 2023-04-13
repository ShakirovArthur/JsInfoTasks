let date = new Date(2012, 0, 3);
function getWeekDay(date) {
  let day = date.getDay();
  if (day === 0) {
    day = 7;
  }
  return day;
}
console.log(getWeekDay(date));
