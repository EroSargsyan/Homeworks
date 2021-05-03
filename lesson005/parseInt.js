let rndmNum = " -055454.46841hghx.4656.31px.kn087px5100558.px  10px";
rndmNum = rndmNum.trim();
let valArr = rndmNum.split("");
let newValArr = [];
for (let i = 0; i < valArr.length; i++) {
  if (valArr[i] === "-") {
    newValArr.unshift(valArr[i]);
  } else if (valArr[i] == Number(valArr[i]) && valArr[i] != " ") {
    newValArr.push(valArr[i]);
  } else if (valArr[i] === "." || valArr[i] == String(valArr[i])) {
    break;
  }
}
let result = Number(newValArr.join(""));
console.log(result);
