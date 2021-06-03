let array = [1, [2, [1, [44]]], 3]; //////find the sum of items

function sumarry(arr) {
  let sum = 0;
  let summ = (arr) => {
    if (arr.length === 0) {
      return;
    }

    arr.forEach((item) => {
      if (!Array.isArray(item)) {
        sum += item;
      } else if (Array.isArray(item)) {
        summ(item);
      }
    });
    return sum;
  };
  return summ(array);
}

console.log(sumarry(array));
