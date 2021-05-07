function oneToThird(givenString) {
  let newString = "";
  let twoLengthString = "";
  let oneLengthString = "";
  if (givenString.length % 3 === 0) {
    for (let i = 0; i < givenString.length; i += 3) {
      newString += givenString[i + 1] + givenString[i + 2] + givenString[i];
    }
  }
  if (givenString.length % 3 === 2) {
    for (let j = 0; j < givenString.length - 2; j += 3) {
      {
        twoLengthString +=
          givenString[j + 1] + givenString[j + 2] + givenString[j];
      }
      newString =
        twoLengthString +
        givenString[givenString.length - 2] +
        givenString[givenString.length - 1];
    }
  }
  if (givenString.length % 3 === 1) {
    for (let i = 0; i < givenString.length - 1; i += 3) {
      oneLengthString +=
        givenString[i + 1] + givenString[i + 2] + givenString[i];
    }
    newString = oneLengthString + givenString[givenString.length - 1];
  }
  return newString;
}
let givenString = "abcdefg";
console.log(oneToThird(givenString));
