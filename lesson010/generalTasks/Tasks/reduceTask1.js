const array = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
function reduce(arr) {
  let bigger = arr.filter((item) => item > 18);
  let result = bigger.reduce((sum, item) => sum + item, 0);
  return result;
}
console.log(reduce(array));
