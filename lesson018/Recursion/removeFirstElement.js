let array = [1, 2, 3, 4, 5, 6, "abc", null];
let newArray = [];
function remove(arr, i) {
  if (arr.length === 0) {
    return [];
  }
  if (i != 0) {
    newArray.push(arr[0]);
  }

  remove(arr.slice(1), i + 1);

  return newArray;
}

console.log(remove(array, 0));
