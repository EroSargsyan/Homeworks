function getWeekOfMonth(value) {
  if (value.getDate() >= 1 && value.getDate() <= 7) {
    return 1;
  } else if (value.getDate() > 7 && value.getDate() <= 14) {
    return 2;
  } else if (value.getDate() > 14 && value.getDate() <= 21) {
    return 3;
  } else {
    return 4;
  }
}

let date = new Date(2017, 10, 21);

console.log(getWeekOfMonth(date));
