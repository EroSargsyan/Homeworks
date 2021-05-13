const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
  {
    username: "Vic Darcinyan",
    lang: "arm",
  },
];

function getUserNameLengths(arr) {
  let result = arr.map((prop) => prop.username.length);
  return result;
}

console.log(getUserNameLengths(users));
