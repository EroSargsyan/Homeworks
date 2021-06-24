let inputMain = document.querySelector(".inputMain");
let listClass = document.querySelector(".list");

let button = document.querySelector(".AddButton");
let unorderedList = document.querySelector(".unorderedList");
let inputLists = document.querySelectorAll("#listDiv");
let clearItems = document.querySelector(".clearButton");
let flag = false;
button.addEventListener("click", () => {
  addElement();
  inputMain.value = "";
});
inputMain.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addElement();
    inputMain.value = "";
  }
});

function addElement() {
  if (inputMain.value != "") {
    flag = true;
  }

  while (flag) {
    let div = document.createElement("div");
    div.className = "listDiv";

    let li = document.createElement("li");

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "submit");
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "delete";

    /////complete button added

    let completeButton = document.createElement("button");
    completeButton.setAttribute("type", "submit");
    completeButton.className = "completeButton";
    completeButton.textContent = "Complete";

    //////////////

    let inputList = document.createElement("input");
    inputList.setAttribute("type", "text");
    inputList.setAttribute("id", "inputList");

    li.className = "list";
    unorderedList.append(div);
    div.append(li);
    li.append(inputList);
    inputList.value = inputMain.value;
    div.append(completeButton);
    div.append(deleteButton);
    flag = false;
  }

  let deleteButtons = document.querySelectorAll(".deleteButton");

  deleteButtons.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (event) => {
      event.target.parentNode.remove();
    });
  });

  let completeButtons = document.querySelectorAll(".completeButton");
  completeButtons.forEach((completeBtn) => {
    completeBtn.addEventListener("click", (event) => {
      event.target.previousSibling.firstChild.style.textDecoration =
        "line-through";
    });
  });
}

clearItems.addEventListener("click", () => {
  unorderedList.innerHTML = "";
});
