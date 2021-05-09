let arr = [
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
];
let newArray = [];
let result = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    result += +[arr[i][j]];
  }
  newArray.push(result);
  result = 0;
}
console.log(newArray);
