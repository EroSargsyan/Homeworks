function sum(...args) {
  return args.reduce((sum, current) => {
    return sum + current;
  });
}
console.log(sum(7, 2));
