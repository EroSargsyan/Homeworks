function Baby(name, age, favToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favToy;
  this.play = function () {
    console.log(`Playing with a ${this.favoriteToy}`);
  };
}

let baby = new Baby("Gurgenchik", 2, "car");
baby.play();
