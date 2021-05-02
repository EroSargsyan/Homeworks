let rndmArray = [
  1,
  "10",
  "hi",
  2,
  3,
  "How you doing?",
  true,
  null,
  1558,
  "Dyson",
  77,
];
let numbers = [];
let strings = [];
for (let items of rndmArray) {
  if (typeof items === "number") {
    numbers.push(items);
  } else if (typeof items === "string") {
    strings.push(items);
  }
}
let countNum = numbers.length;
let countStr = strings.length;
console.log(countNum);
console.log(countStr);
