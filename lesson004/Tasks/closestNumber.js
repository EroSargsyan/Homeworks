let rndmArray = [36, -12, 47, -58, 148, -55, -19, 10];
const givenNmbr = "56";
let diff = [];

for (let i = 0; i < rndmArray.length; i++) {
  diff.push(Math.abs(givenNmbr - rndmArray[i]));
}
let targetNum;
for (let j = 0; j < diff.length; j++) {
  if (+givenNmbr - +diff[j] === +Math.min(...diff)) {
    targetNum = j;
  }
}
console.log(targetNum);
