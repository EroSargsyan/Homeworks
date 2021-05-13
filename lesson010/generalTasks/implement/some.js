let array = [1, 2, 3, 45, 6, 78];

function every(arr, foo) {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (foo(element, i, arr)) {
      result = true;
    }
  }
  return result;
}

console.log(every(array, (n) => n > 77));
