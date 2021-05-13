function getUserNames(arr) {
  let result = arr.map((prop) => prop.username);
  return result;
}

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

console.log(getUserNames(users));
