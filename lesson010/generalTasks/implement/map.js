function mapper(arr, foo) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    result.push(foo(element, i, arr));
  }
  return result;
}

let array = [1, 2, 3, 45, 6, 78];
console.log(mapper(array, (el) => el * 5));
