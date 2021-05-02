let rndNum1 = prompt("Enter the number");
let rndNum2 = prompt("Enter the number");
let rndNum3 = prompt("Enter the number");
if (rndNum1 > rndNum2 && rndNum2 > rndNum3) {
  alert(`${rndNum3} , ${rndNum2} , ${rndNum1}`);
} else if (rndNum1 < rndNum2 && rndNum2 < rndNum3) {
  alert(`${rndNum1} , ${rndNum2} , ${rndNum3}`);
} else if (rndNum3 < rndNum2 && rndNum1 < rndNum3) {
  alert(`${rndNum1} , ${rndNum3} , ${rndNum2}`);
} else if (rndNum1 < rndNum2 && rndNum1 > rndNum3) {
  alert(`${rndNum3} , ${rndNum1} , ${rndNum2}`);
} else if (rndNum1 > rndNum2 && rndNum1 < rndNum3) {
  alert(`${rndNum2} , ${rndNum1} , ${rndNum3}`);
} else {
  alert(`${rndNum2} , ${rndNum3} , ${rndNum1}`);
}
