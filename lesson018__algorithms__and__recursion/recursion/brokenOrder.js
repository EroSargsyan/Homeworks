let array = [-9, -4, -4, 3, 12];
let result;
function order(arr) {
  let [first, second, ...rest] = arr;
  if (first > second) {
    return (result = first);
  } else if (arr.length === 0) {
    return (result = -1);
  }

  order(arr.slice(1));

  if (result === -1) {
    return result;
  } else {
    return arr.indexOf(result);
  }
}

console.log(order(array));
