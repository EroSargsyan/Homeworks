let rndNumber = 4568;
let arrNumber = rndNumber.toString().split("");
let firstDigit = arrNumber[0];
let lastDigit = arrNumber[arrNumber.length - 1];
if (lastDigit == 0) {
  console.log(rndNumber);
} else {
  arrNumber.pop(lastDigit);
  arrNumber.push(firstDigit);
  arrNumber.shift(firstDigit);
  arrNumber.unshift(lastDigit);
  console.log(+arrNumber.join(""));
}
