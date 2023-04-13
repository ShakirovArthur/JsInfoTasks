function getSecondsToTomorrow() {
  let nowDate = new Date();
  let tomorow = new Date(
    nowDate.getFullYear(),
    nowDate.getMonth(),
    nowDate.getDate() + 1
  );
  return (tomorow - nowDate) / 1000;
}
console.log(getSecondsToTomorrow());
