let trgtNum = 10;
let fib = [];
for (let i = 0; i <= trgtNum; i++) {
  if (i === 0) {
    fib.push(0);
  } else if (i === 1) {
    fib.push(1);
  } else {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
}
console.log(fib);
