//Task1

alert(null || 2 || undefined); // 2

//Task2

alert(alert(1) || 2 || alert(3)); // 2

//Task3

alert(1 && null && 2); // null

//Task4

alert(alert(1) && alert(2)); // undefined

//Task5

alert(null || (2 && 3) || 4); // 3

//Task6

let age = parseInt(prompt("Enter your age"));

if (age > 13 && age < 91) {
  alert("Right");
} else {
  alert("Wrong");
}

//Task7

let age = parseInt(prompt("Enter your age"));
if (!(age > 13) && !(age < 91)) {
  alert("Right");
} else {
  alert("Wrong");
}

//Task8

//Which of these alerts are going to execute?
if (-1 || 0) alert("first");
if (-1 && 0) alert("second");
if (null || (-1 && 1)) alert("third");
//first , third

//Task9
let login = prompt("Enter the login");
if (login === "Admin") {
  let pass = prompt("Enter the password");
  if (pass === "TheMaster") {
    alert("Welcome");
  } else if (pass !== "TheMaster") {
    alert("Wronng password");
  } else if (pass === null || "") {
    alert("Canceled");
  }
} else if (login === null || "") {
  alert("Canceled");
} else if (login !== "Admin") {
  alert("I don`t know you");
}
