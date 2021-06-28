const selectOuter = document.getElementById("selectOuter");
const imageContainer = document.getElementById("imageContainer");

let selectedBreedName = selectOuter.addEventListener("change", () => {
  imageContainer.innerHTML = "";
  //   const url = `https://dog.ceo/api/breed/${selectOuter.value}/images`; old-one
  // const url = `https://dog.ceo/api/breed/${selectOuter.value}/images/random`; old-one-random
  const url = `https://dog.ceo/api/breed/${selectOuter.value}/images/random/3`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then(addImageHTML)
    .catch(error);
});

function addImageHTML(jsonData) {
  let arr = jsonData.message;
  arr.map((el) => {
    let image = document.createElement("img");
    image.setAttribute("src", el);
    image.setAttribute("width", "300");
    image.setAttribute("height", "300");
    imageContainer.append(image);
  });

  console.log(jsonData);
}

function error() {
  let p = document.createElement("p");
  p.textContent = "No server response";
  imageContainer.append(p);
}
