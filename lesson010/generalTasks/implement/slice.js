function slice(arr, position) {
  let result = [];
  for (let i = 0; i < position; i++) {
    result.push(arr[i]);
  }
  return result;
}

let array = [1, 2, "vaxinak", null, 3, 4, 5];
console.log(slice(array, 5));
