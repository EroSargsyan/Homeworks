function findSum(inputStr) {
  let num = "";
  let total = 0;
  for (let i = 0; i < inputStr.length; i++) {
    if (isNaN(+inputStr[i])) {
      total += +num;
      num = "";
      continue;
    } else {
      num += inputStr[i];
    }
  }
  return total;
}
console.log(findSum("Fw2r2t2Y45KHL120mn10P"));
