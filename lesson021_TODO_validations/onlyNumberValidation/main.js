let telValue = document.querySelector(".tel").value;
let text = document.querySelector(".text");
let tel = document.querySelector(".tel");
let arr = [];

tel.addEventListener("input", (event) => {
  if (event.data != null && (Number(event.data) || event.data === "+")) {
    arr.push(event.data);
  } else if (event.data == null) {
    arr.pop();
  }
  if (
    arr[0] === "+" &&
    arr[1] === "3" &&
    arr[2] === "7" &&
    arr[3] === "4" &&
    arr.length === 12
  ) {
    text.textContent = "Valid number";
  } else {
    text.textContent = "Invalid number";
  }
});
