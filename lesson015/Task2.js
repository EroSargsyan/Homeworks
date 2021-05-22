let ability = {
  takeOff() {
    return (Airplane.isFlying = true);
  },
  land() {
    return (Airplane.isFlying = false);
  },
};

let Airplane = {
  name() {
    return "Boeing";
  },
  isFlying: false,
  __proto__: ability,
};

console.log(Airplane.land());
console.log(Airplane.isFlying);
