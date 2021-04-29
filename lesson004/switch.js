//Task1

if (browser === "Edge") {
  alert("You`ve got the Edge!");
} else if (browser === "Chrome" || "Firefox" || "Safari" || "Opera") {
  alert("Okay we support these browsers too");
} else "We hope that this page looks ok!";

//Task2

let a = +prompt("a?", "");
switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2 || 3:
    alert("2,3");
    break;
}
