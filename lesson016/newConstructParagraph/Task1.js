function Calculator(var1, var2) {
  this.read = function () {
    this.var1 = prompt("Enter num1");
    this.var2 = prompt("Enter num1");
  };
  this.sum = function () {
    return this.var1 + this.var2;
  };

  this.mult = function () {
    return this.var1 * this.var2;
  };
}

let obj = new Calculator();

console.log(obj.mult());
