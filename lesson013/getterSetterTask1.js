let str = "Vrezh,Artavazd";
let mapped = str.split(",").map((item) => [item, item.length]);

let person = {
  _name: [],
  set name(value) {
    this._name = value;
  },
  get getName() {
    return person._name;
  },
};
person.name = mapped;

console.log(person.getName);
