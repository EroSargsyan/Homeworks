const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

function filterByField(obj, key) {
  let result = obj.filter((item) => item[key] === true);

  return result;
}

console.log(filterByField(users, "isAstronaut"));
