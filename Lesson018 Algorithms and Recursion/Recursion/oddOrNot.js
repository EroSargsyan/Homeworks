let array = "2232222".split("");

function odd(arr) {
  let result = false;
  if (arr.length === 1 && arr[0] % 2 === 0) {
    result = true;
  }

  if (arr.length > 1 && arr[0] % 2 === 0) {
    return odd(arr.slice(1));
  }
  return result;
}
console.log(odd(array));
