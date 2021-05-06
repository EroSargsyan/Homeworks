function filter(numbers, toSearchIn) {
  let filteredArray = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < toSearchIn.length; j++) {
      if (numbers[i] === toSearchIn[j]) {
        filteredArray.push(numbers[i]);
      } else continue;
    }
  }
  if (filteredArray.length === 0) {
    filteredArray = "No matches";
  }

  return filteredArray;
}

console.log(filter([1, 2, 3, 4], [1, 2, 3, 5, 6, 7, 8, 9]));
