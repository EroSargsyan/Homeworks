let array = [
  [2, -9, -3, 0],
  [1, 2],
  [-4, -11, 0],
];
function maxes(array) {
  let onlyMinuses = [];
  let onlyMax = [];
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length === undefined) {
      return "Invalid array";
    } else {
      let arr = [];
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] < 0) {
          arr.push([array[i][j]]);
        }
      }
      onlyMinuses.push(arr);
      arr = [];
    }
  }

  for (let i = 0; i < onlyMinuses.length; i++) {
    for (let j = 0; j < onlyMinuses[j].length; j++) {
      onlyMax.push(Math.max(...onlyMinuses[i]));
    }
  }

  for (let i = 0; i < onlyMax.length; i++) {
    if (onlyMax[i] != -Infinity) {
      result *= onlyMax[i];
    }
  }

  return result;
}
console.log(maxes(array));
