let regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let form = document.querySelector(".form");

let text = document.querySelector(".text");

let email = document.querySelector(".email");

email.addEventListener("input", () => {
  if (email.value.match(regex)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.textContent = "Valid email";
    text.style.color = "rgb(25, 204, 25)";
  } else if (!email.value.match(regex)) {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.textContent = "Invalid email";
    text.style.color = "rgb(236, 8, 8)";
  } else if (email.value === "") {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.textContent = "The input field is ";
    text.style.color = "rgb(236, 8, 8)";
  }
});
