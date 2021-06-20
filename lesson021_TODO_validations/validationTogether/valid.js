//////NumberValidation////////////
let text = document.querySelector(".textTel");
let tel = document.querySelector("#tel");
let arrNumber = [];

tel.addEventListener("input", (event) => {
  if (event.data != null && (Number(event.data) || event.data === "+")) {
    arrNumber.push(event.data);
  } else if (event.data == null) {
    arrNumber.pop();
  }
  console.log(arrNumber);
  if (
    arrNumber[0] === "+" &&
    arrNumber[1] === "3" &&
    arrNumber[2] === "7" &&
    arrNumber[3] === "4" &&
    arrNumber.length === 12
  ) {
    text.textContent = "Valid number";
  } else {
    text.textContent = "Invalid number";
  }
});

//////////////EmailValidation///////////
let regexp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let email = document.querySelector("#email");
let textEmail = document.querySelector(".textEmail");
let arrEmail = [];
email.addEventListener("input", (event) => {
  if (event.data != null) {
    arrEmail.push(event.data);
  } else if (event.data == null) {
    arrEmail.pop();
  }
  console.log(arrEmail);

  if (String(arrEmail.join("")).match(regexp)) {
    textEmail.textContent = "Valid Email";
  } else {
    textEmail.textContent = "Invalid Email";
  }
});
