let array = [1, 2, 3, 45, 6, 78, "abcd", null];

function find(arr, foo) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (foo(element, i, arr)) {
      result = i;
      break;
    }
  }
  return result;
}

console.log(find(array, (el) => el === 6));
