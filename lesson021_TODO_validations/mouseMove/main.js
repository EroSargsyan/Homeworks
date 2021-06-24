let body = document.querySelector(".body");
window.addEventListener("mousemove", (event) => {
  console.log(event);
  let div = document.createElement("div");
  div.className = "dot";
  div.style.backgroundColor = "red";
  div.style.height = "3px";
  div.style.width = "3px";
  div.style.position = "absolute";
  div.style.left = event.pageX + "px";
  div.style.top = event.pageY + "px";
  body.append(div);
});
