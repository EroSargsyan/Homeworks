function Car(model, milesPergallon) {
  this.model = model;
  this.milesPergallon = milesPergallon;
  this.tank = 0;
  this.odometer = 0;
  this.fill = function (gallons) {
    return (this.tank += gallons);
  };
  this.drive = function (distance) {
    if (this.tank * milesPergallon >= distance) {
      this.odometer = distance;
      this.tank = this.tank * milesPergallon - distance;
    } else if (this.tank * milesPergallon < distance) {
      this.odometer = this.tank * milesPergallon;
      this.tank = 0;
    }
    if (this.tank === 0) {
      console.log(`I ran out of fuel at ${this.odometer} miles!`);
    }
  };
}

let car = new Car("BMW", 2);
car.fill(3);
car.drive(8);
