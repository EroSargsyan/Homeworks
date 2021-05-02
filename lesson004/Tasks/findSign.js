let a = prompt("Enter a");
let b = prompt("Enter b");
let c = prompt("Enter c");
if (a === 0 || b === 0 || c === 0) {
  console.log("Unsigned");
} else if (
  (a > 0 && b > 0 && c > 0) ||
  (a > 0 && b < 0 && c < 0) ||
  (a < 0 && b < 0 && c > 0) ||
  (a < 0 && b > 0 && c < 0)
) {
  console.log("+");
} else {
  console.log("-");
}
