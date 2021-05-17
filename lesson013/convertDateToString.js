function dayOfWeek(variable) {
  let date = variable.getDay();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "saturday",
  ];
  return week[date];
}

let time = new Date();
console.log(dayOfWeek(time));
