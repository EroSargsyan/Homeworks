function dater(value) {
  let year = value.getFullYear();
  let monthIndex = value.getMonth();
  let day = value.getDate();
  let monthsArray = [
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

  let monthString = monthsArray[monthIndex];
  return `${day} ${monthString} ${year} `;
}

let date = new Date("2020-05-14");

console.log(dater(date));
