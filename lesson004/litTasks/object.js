// //Task1

// let user = {};
// user.name = "John";
// user["surname"] = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user);

//Task2

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (let item in salaries) {
  sum += salaries[item];
}
console.log(sum);
