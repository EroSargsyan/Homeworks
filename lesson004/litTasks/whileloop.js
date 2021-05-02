//Task1

for (let i = 2; i < 11; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Task2

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

//Task3
let num = prompt("Enter number");
for (;;) {
  if (num < 100) {
    continue;
  } else break;
}
alert("Done");

//Task4

let num = 169;

outer: for (let i = 3; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue outer;
  }
  console.log(i);
}
