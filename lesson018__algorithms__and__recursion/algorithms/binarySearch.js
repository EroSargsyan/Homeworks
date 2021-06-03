let array = [1, 3, 4, 5, 6, 10, 12];

function finder(arr, value) {
  if (arr.length === 0) {
    return -1;
  }
  let index = Math.floor(arr.length - 1 / 2);

  if (value === arr[index]) {
    return index;
  }
  if (value < arr[index]) {
    return finder(arr.slice(0, index), value);
  } else {
    return finder(arr.slice(index), value);
  }
}
console.log(finder(array, 0));
