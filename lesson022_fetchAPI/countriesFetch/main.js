const inputField = document.getElementById("inputField");
const searchButton = document.getElementById("searchButton");
const address = "https://restcountries.eu/rest/v2/all";
const showButton = document.getElementById("showButton");
const resultContainer = document.getElementById("resultContainer");

searchButton.addEventListener("click", () => {
  resultContainer.innerHTML = "";
  fetchSearch(`https://restcountries.eu/rest/v2/name/${inputField.value}`);
});

showButton.addEventListener("click", () => {
  resultContainer.innerHTML = "";
  fetchingAll(address);
});

function fetchingAll(param) {
  fetch(param)
    .then((result) => result.json())
    .then((jsonData) => {
      showAll(jsonData);
    });
}
function fetchSearch(param) {
  fetch(param)
    .then((result) => result.json())
    .then((jsonData) => {
      makeSearch(jsonData);
    });
}

inputField.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    searchButton.click();
  }
});

function showAll(param) {
  param.forEach((element) => {
    const eachCountryContainer = document.createElement("div");
    eachCountryContainer.id = "eachCountryContainer";
    const countryName = document.createElement("a");
    eachCountryContainer.id = element.name;
    const imgContainer = document.createElement("div");
    imgContainer.id = "imgContainer";
    const img = document.createElement("img");
    img.setAttribute("src", element.flag);
    img.setAttribute("width", 300);
    img.setAttribute("height", 200);
    countryName.setAttribute(
      "href",
      `https://en.wikipedia.org/wiki/${element.name}`
    );
    const br = document.createElement("br");
    countryName.textContent = element.name;
    resultContainer.appendChild(eachCountryContainer);
    eachCountryContainer.appendChild(countryName);
    eachCountryContainer.appendChild(imgContainer);
    imgContainer.append(img);
    resultContainer.appendChild(br);
  });
}

function makeSearch(param) {
  const eachCountryContainer = document.createElement("div");
  eachCountryContainer.id = "eachCountryContainer";
  const countryName = document.createElement("a");

  const imgContainer = document.createElement("div");
  imgContainer.id = "imgContainer";
  const img = document.createElement("img");
  img.setAttribute("src", param[0].flag);
  img.setAttribute("width", 300);
  img.setAttribute("height", 200);

  countryName.setAttribute(
    "href",
    `https://en.wikipedia.org/wiki/${param[0].name}`
  );
  const br = document.createElement("br");
  countryName.textContent = param[0].name;
  resultContainer.appendChild(eachCountryContainer);
  resultContainer.appendChild(imgContainer);
  eachCountryContainer.appendChild(countryName);
  imgContainer.append(img);

  resultContainer.appendChild(br);
}
