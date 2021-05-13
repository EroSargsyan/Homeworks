function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, "abc", "acd"];
console.log(forEach(array, (item) => console.log(item)));
