let calculator = {
  num1: 5,
  num2: 14,

  read() {
    return [this.num1, this.num2];
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  },
};

console.log(calculator.mul());
