//////NumberValidation////////////
let text = document.querySelector(".textTel");
let tel = document.querySelector("#tel");
let numPattern = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

tel.addEventListener("input", () => {
  if (tel.value.match(numPattern)) {
    text.textContent = "Valid number";
  } else {
    text.textContent = "Invalid number";
  }
});

//////////////EmailValidation///////////
let emailPattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let email = document.querySelector("#email");
let textEmail = document.querySelector(".textEmail");

email.addEventListener("input", () => {
  if (email.value.match(emailPattern)) {
    textEmail.textContent = "Valid Email";
  } else {
    textEmail.textContent = "Invalid Email";
  }
});
