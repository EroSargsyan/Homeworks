const array = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

function filter1(arr) {
  let newArr = arr.filter((item) => Number(item) === item);
  return newArr;
}
console.log(filter1(array));
