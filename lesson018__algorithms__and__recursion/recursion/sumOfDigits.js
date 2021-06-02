let number = 29;
function digitSum(numb) {
  let sum;
  function inner(numb) {
    if (String(sum).length === 1) {
      return (sum = numb);
    } else if (String(sum).length > 1) {
      sum = String(numb)
        .split("")
        .reduce((acc, item) => +acc + +item, 0);
    }
    inner(sum);

    return sum;
  }
  return inner(numb);
}

console.log(digitSum(number));
