let january2017 = new Date(2017, 0, 1);
let january2018 = new Date(2018, 1, 1);

function intervals(var1, var2) {
  let diffYear = var2.getFullYear() - var1.getFullYear();
  let diffMonth2 = var2.getMonth();
  let diffMonth1 = var1.getMonth();

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

  let result = "";
  for (let i = 0; i < diffYear; i++) {
    result += months;
  }

  for (let j = diffMonth1; j <= diffMonth2 - 1; j++) {
    if (diffYear === 0) {
      result += `${months[j]},`;
    } else {
      result += `,${months[j]}`;
    }
  }
  return result;
}

console.log(intervals(january2017, january2018));
