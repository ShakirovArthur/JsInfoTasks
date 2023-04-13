function getDayAgo(date, day) {
  date.setDate(date.getDate() - day);
  return date.getDate();
}

console.log(getDayAgo(new Date(), 1));
