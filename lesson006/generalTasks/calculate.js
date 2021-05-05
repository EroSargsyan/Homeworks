function summary(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
function difference(arr) {
  let diff = arr[0];
  for (let i = 1; i < arr.length; i++) {
    diff = diff - arr[i];
  }
  return diff;
}
function multip(arr) {
  let mult = arr[0];
  for (let i = 1; i < arr.length; i++) {
    mult = mult * arr[i];
  }
  return mult;
}
function division(arr) {
  let div = arr[0];
  for (let i = 1; i < arr.length; i++) {
    div = div / arr[i];
  }
  return div;
}
function choose(arr, operator) {
  if (operator == "+") {
    return summary(arr);
  } else if (operator == "-") {
    return difference(arr);
  } else if (operator == "/") {
    return division(arr);
  } else if (operator == "*") {
    return multip(arr);
  }
}

console.log(choose([7, 2, 1, 14, 5, 55, 1], "*"));
