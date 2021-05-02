let rndmStr = [
  "Antiestablishmentarian",
  "hakob",
  "vazgen",
  "wish",
  "slightly",
  "understand",
  "longer",
  "unexpected",
  "heart",
  "human",
];
let newArray = [];
for (let items of rndmStr) {
  newArray.push(items.length);
}
let maxNumber = Math.max(...newArray);
let minNumber = Math.min(...newArray);
console.log(`Maximum length is ${maxNumber}`);
console.log(`Minimum length is ${minNumber}`);
console.log(`The sum of lengths is ${minNumber + maxNumber}`);
