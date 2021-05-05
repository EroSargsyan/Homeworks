///Task1

function checkAge1(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}

console.log(checkAge1(100));

///Task2

function checkAge2(age) {
  return age > 18 || confirm("Did parents allow you?");
}
console.log(checkAge2(100));
