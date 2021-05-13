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
    username: "Johnny Depp",
    lang: "ARM",
  },
];
function filterUsers(arr) {
  let result = arr.filter((item) => item.lang != "ru");
  return result;
}
console.log(filterUsers(users));
