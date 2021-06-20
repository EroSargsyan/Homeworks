let burger = document.querySelector(".burger");
let burgerOpen = false;
burger.addEventListener('click', () => {
  if (!burgerOpen) {
    burgerOpen = true;
    burger.classList.add("open");
  } else {
    burger.classList.remove("open");
    burgerOpen = false;
  }
});
