let numArr = [45, 12, 3, 6, 17, 0];
let oddArr = [];
let evenArr = [];

function separator() {
  for (i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 == 0) {
      evenArr.push(numArr[i]);
    } else {
      oddArr.push(numArr[i]);
    }
  }
  return `Even array: ${evenArr}    Odd Array: ${oddArr}`;
}

console.log(separator());
