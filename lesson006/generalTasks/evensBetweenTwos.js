let num1 = 19;
let num2 = 42;

function evens(num1, num2) {
  let array = [];
  let newArray = [];
  for (let i = num1; i <= num2; i++) {
    array.push(i);
  }
  for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 === 0 && Math.floor(array[j] / 10) % 2 === 0) {
      newArray.push(array[j]);
    }
  }
  return newArray;
}

console.log(evens(num1, num2));
