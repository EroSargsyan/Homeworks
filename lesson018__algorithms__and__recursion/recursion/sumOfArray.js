let arr = [1, 2, 3, 4, 5, 6, 7];
function sum(array) {
  if (array.length === 1) {
    return array[0];
  }
  let first = array.slice(0, 1);
  return +first + +sum(array.slice(1));
}
console.log(sum(arr));
