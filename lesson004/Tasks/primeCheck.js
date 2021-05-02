let number = prompt("Enter the number");
let isPrime = true;
for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  alert(`${number} is prime`);
} else alert("No");
