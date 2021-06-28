const resultContainer = document.getElementById("resultContainer");
const showButton = document.getElementById("showButton");

showButton.addEventListener("click", () => {
  fetching(
    "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
  );
});

function fetching(url) {
  fetch(url)
    .then((result) => result.json())
    .then((jsonData) => {
      // console.log(jsonData);
      getTitle(jsonData);
      getDescription(jsonData);
      getDirector(jsonData);
      getProducer(jsonData);
      getReleaseDate(jsonData);
    });
}

function getTitle(param) {
  const title = document.createElement("p");
  title.textContent = `Title: ${param.title}`;
  resultContainer.append(title);
}
function getDescription(param) {
  const des = document.createElement("p");
  des.textContent = `Description:  ${param.description}`;
  resultContainer.append(des);
}
function getDirector(param) {
  const director = document.createElement("p");
  director.textContent = `Director: ${param.director}`;
  resultContainer.append(director);
}
function getProducer(param) {
  const producer = document.createElement("p");
  producer.textContent = `Producer: ${param.producer}`;
  resultContainer.append(producer);
}
function getReleaseDate(param) {
  const release_date = document.createElement("p");
  release_date.textContent = `Release date: ${param.release_date}`;
  resultContainer.append(release_date);
}
