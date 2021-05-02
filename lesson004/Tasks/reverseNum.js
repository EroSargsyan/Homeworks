let number = prompt("Enter the number");
let arrNumber = number.toString().split("");
let firstDigit = arrNumber[0];
let lastDigit = arrNumber[arrNumber.length - 1];
arrNumber.shift(firstDigit);
arrNumber.unshift(lastDigit);
arrNumber.pop(lastDigit);
arrNumber.push(firstDigit);
console.log(+arrNumber.join(""));
