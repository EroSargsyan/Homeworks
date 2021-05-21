function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  this.eat = function () {
    if (this.stomach.length < 10) {
      this.stomach.push("Some food");
    }
  };
  this.poop = function () {
    this.stomach = [];
  };
  this.toString = function () {
    return `${this.name},${this.age}`;
  };
}

let user = new Person("Mary", 50);
user.eat();
user.eat();
user.eat();
user.eat();
user.eat();
user.eat();
user.eat();
user.eat();
user.eat();
user.eat();
user.eat();
// console.log(user.stomach);
user.poop();
console.log(user.toString());
