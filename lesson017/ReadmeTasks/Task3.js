class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }

  get getters() {
    return `${this._firstName} ${this._lastName}, ${this._age} years old`;
  }

  set firstName(value) {
    if (typeof value === "string") {
      this._firstName = value;
    } else {
      throw new Error("No string type");
    }
  }

  set lastName(value) {
    if (typeof value === "string") {
      this._lastName = value;
    } else {
      throw new Error("No string type");
    }
  }
  set gender(value) {
    if (typeof value === "string") {
      this._gender = value;
    } else {
      throw new Error("No string type");
    }
  }
  set age(value) {
    if (typeof value === "number") {
      this._age = value;
    } else {
      throw new Error("No number type");
    }
  }

  toString() {
    return `${this._firstName} ${this._lastName}, ${this._age} years old`;
  }
}

class Student extends Person {
  constructor(_firstName, _lastName, _gender, _age, year, fee, programm) {
    super(_firstName, _lastName, _gender, _age);
    this._year = year;
    this._fee = fee;
    this._programm = programm;
    this._passedExams = [];
  }
  set year(value) {
    if (typeof value === "number") {
      this._year = value;
    } else {
      throw new Error("No number type");
    }
  }
  set fee(value) {
    this._fee = value;
  }
  set programm(value) {
    this._programm = value;
  }
  passExam() {
    for (let item of this._programm) {
      if (item.grade >= 50) {
        this._passedExams.push(item.programName);
      }
    }
    return this._passedExams;
  }
  isAllPassed() {
    if (this._programm.every((item) => item.grade >= 50)) {
      return "Exam passed";
    } else {
      return "Exam isn`t passed";
    }
  }
  toString() {
    return `${super.toString()},  ${this._year},  ${this._fee}`;
  }
}

let person = new Person();
let student = new Student("Hovhannes", "Mkrtchyan", "male", 25, 1, "$1000", [
  { programName: "math", grade: 49 },
  { programName: "english", grade: 100 },
  { programName: "german", grade: 100 },
]);

////////////////testing//////////////////
console.log(student.passExam());
console.log(student.isAllPassed());
console.log(student.toString());
