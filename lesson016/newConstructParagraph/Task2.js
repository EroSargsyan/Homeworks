function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    return (this.value = startingValue + prompt("Enter number"));
  };
}

let acc = new Accumulator(0);
console.log(acc.read());
