let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; /// adding 'return this' for chaining
  },
  down() {
    this.step--;
    return this; /// adding 'return this' for chaining
  },
  showStep: function () {
    console.log(this.step);
    return this; /// adding 'return this' for chaining
  },
};

ladder.up().up().down().showStep();
