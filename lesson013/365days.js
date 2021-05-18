function countDays(value) {
  let date1 = new Date(value.getFullYear(), 0, 1);
  let getTime2 = value.getTime();
  let getTime1 = date1.getTime();
  let diffGetTime = getTime2 - getTime1;
  let result = diffGetTime / (1000 * 3600 * 24);
  return result;
}

let date = new Date("12/13/2020");
console.log(countDays(date));

// the result should be 347 (not 348), because we are in different time zone (UTC +4)
