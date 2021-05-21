function Calculator() {
  this.adds = function (var1, var2) {
    this.num1 = var1;
    this.num2 = var2;
  };
  this.subtract = function (var1, var2) {
    return var1 - var2;
  };
  this.mult = function (var1, var2) {
    return var1 * var2;
  };
  this.divide = function (var1, var2) {
    return var1 / var2;
  };
}

let calc = new Calculator();

// calc.adds(5, 4);
// console.log(calc.num1, calc.num2);
console.log(calc.subtract(18, 3));
