const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

function average(obj) {
  let countAge = obj.filter((item) => item.age).length;
  let averageYears = obj.reduce((sum, item) => {
    return sum + item["age"];
  }, 0);
  let result = averageYears / countAge;
  return result;
}
console.log(average(users));
