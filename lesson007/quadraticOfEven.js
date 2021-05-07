function quadratic(numbers) {
  let evenNumbers = [];
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  for (let i = 0; i < evenNumbers.length; i++) {
    result = evenNumbers[i] * evenNumbers[i] + result;
  }
  console.log(result);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 14];
quadratic(numbers);
