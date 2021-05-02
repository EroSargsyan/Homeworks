// Task1
let num1 = prompt("Enter the number");
let num2 = prompt("Enter the second one");
let sum = num1 + num2;
alert(sum);

//Task2
function randomInteger(min, max) {
  return min + (Math.random() * max - min);
}

//Task3

function randomInteger(min, max) {
  let num1 = min + (Math.random() * max + 1 - min);
  return Math.floor(num1);
}
