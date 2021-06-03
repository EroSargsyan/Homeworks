function collatz(n) {
  let result = [];
  result.push(n);
  function inner(n) {
    if (n === 1) {
      return;
    }
    if (n % 2 === 0) {
      result.push(n / 2);
      inner(n / 2);
    } else if (n % 2 === 1) {
      result.push(n * 3 + 1);
      inner(n * 3 + 1);
    }
    return result;
  }
  return inner(n);
}

console.log(collatz(10));
