let input = document.querySelector(".input");
let listClass = document.querySelector(".list");

let button = document.querySelector(".button");
let unordered = document.querySelector(".unordered");
let divClasses = document.querySelectorAll(".divClass");
let clearItems = document.querySelector(".clearButton");
let flag = false;
button.addEventListener("click", () => {
  addElement();
});
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addElement();
});

function addElement() {
  flag = true;
  while (flag) {
    let div = document.createElement("div");
    div.className = "divClass";

    let li = document.createElement("li");
    let editButton = document.createElement("button");
    editButton.setAttribute("type", "submit");
    editButton.className = "editButton";
    editButton.textContent = "edit";

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "submit");
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "delete";

    li.textContent = input.value;

    li.className = "list";
    unordered.append(div);
    div.append(li);
    div.append(editButton);
    div.append(deleteButton);
    flag = false;
  }

  input.value = ""; ////delete input.value after "Enter"

  let deleteButtons = document.querySelectorAll(".deleteButton");

  deleteButtons.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (event) => {
      event.target.parentNode.remove();
    });
  });

  let editButtons = document.querySelectorAll(".editButton");
  editButtons.forEach((editBtn) => {
    editBtn.addEventListener("click", (event) => {
      if (
        event.target.previousSibling.getAttribute("contenteditable") ===
          "false" ||
        !event.target.previousSibling.hasAttribute("contenteditable")
      ) {
        event.target.previousSibling.setAttribute("contenteditable", "true");
      } else {
        event.target.previousSibling.setAttribute("contenteditable", "false");
      }
    });
  });
}

clearItems.addEventListener("click", () => {
  unordered.innerHTML = "";
});
