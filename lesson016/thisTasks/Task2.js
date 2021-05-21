function Compare(name, age) {
  this.name = name;
  this.age = age;
  this.compareAge = function (variab) {
    if (this.age > variab.age) {
      console.log(`"${this.name} is older than ${variab.name} "`);
    } else if (this.age < variab.age) {
      console.log(`"${this.name} is younger than ${variab.name} "`);
    } else if (this.age === variab.age) {
      console.log(`"${this.name} is the same age as ${variab.name} "`);
    }
  };
}

let p1 = new Compare("Samuel", 24);
let p2 = new Compare("Joel", 36);
let p3 = new Compare("Lily", 24);
p3.compareAge(p2);
