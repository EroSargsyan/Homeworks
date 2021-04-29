//Task_1

let js_name = prompt("What is the “official” name of JavaScript?");
if (js_name == "ECMAScript") {
  alert("Right");
} else {
  alert("You don`t know? ECMAScript");
}

//Task_2
let random_number = prompt("Enter number");
if (random_number > 0) {
  alert(1);
} else if (random_number < 0) {
  alert(-1);
} else {
  alert(0);
}

//Task_3
let result = a + b < 4 ? alert("Below") : alert("Over");

//Task_4
let message =
  login == "Employee"
    ? (message = "Hello")
    : login == "Director"
    ? (message = "Greetings")
    : login == ""
    ? (message = "No login")
    : (message = "");
