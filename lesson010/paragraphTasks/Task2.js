function filter(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

let arr = [5, 3, 8, 1, 2, 4];
console.log(filter(arr, 0, 5));
