let rndmNum = " -05454.5.46px5.555.pasfsd6px";
rndmNum = rndmNum.trim();
let valArr = rndmNum.split("");
let newValArr = [];
let bool = false;
for (let i = 0; i < valArr.length; i++) {
  if (valArr[i] === "-") {
    newValArr.unshift(valArr[i]);
  } else if (valArr[i] == "." && !bool) {
    newValArr.push(valArr[i]);
    bool = !bool;
  } else if (valArr[i] == Number(valArr[i]) && valArr[i] != " ") {
    newValArr.push(valArr[i]);
  } else if (valArr[i] == String(valArr[i])) {
    break;
  }
}
let valStr = Number(newValArr.join(""));
console.log(valStr);
