let num1 = 4;
let num2 = 66;
function outer(num1) {
  return function inner(num2) {
    return num1 + num2;
  };
}

let partialSum = outer(num1);
console.log(partialSum(num2));
