function max(numbers) {
  let product = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    product.push(numbers[i] * numbers[i + 1]);
  }
  console.log(Math.max(...product));
}
let numbers = [-6, -4, -3, -2, -1, 0, 1, 2, 3, 11];
max(numbers);
