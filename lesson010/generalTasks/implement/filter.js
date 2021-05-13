let array = [1, 2, 3, 45, 6, 78, "abcd"];

function filter(arr, foo) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (foo(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filter(array, (el) => el >= 3));
