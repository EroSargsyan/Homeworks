let date1 = new Date(2017, 0, 1);
let date2 = new Date(2017, 9, 1);

function intervals(var1, var2) {
  let month2 = var2.getMonth();
  let month1 = var1.getMonth();
  let year1 = date1.getFullYear();
  let year2 = date2.getFullYear();
  let diffYears = year2 - year1;
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let result = [];

  if (diffYears === 1) {
    for (let i = 0; i < 1; i++) {
      result.push(months);
    }
  } else if (diffYears === 0) {
    for (let i = month1; i <= month2; i++) {
      result.push(months[i]);
    }
  }

  return result;
}

console.log(intervals(date1, date2));
