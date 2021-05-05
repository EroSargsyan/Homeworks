function largerThanGiven(numbers, givenValue) {
  let targetArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 16) {
      targetArr.push(numbers[i]);
    }
  }
  if (targetArr == "") {
    targetArr.push("No such a number");
  }
  return targetArr;
}

console.log(largerThanGiven([1, 2, 16, 100, 18], 16));
