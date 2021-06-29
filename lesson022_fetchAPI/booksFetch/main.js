const inputField = document.getElementById("inputField");
const searchButton = document.getElementById("searchButton");
const numFound = document.getElementById("numOfResults");
const resultsDiv = document.getElementById("resultsContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let page = 1;

searchButton.addEventListener("click", () => {
  resultsDiv.innerHTML = "";

  fetching(createURL(page));

  if (page === 6) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
  if (page === 1) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }
});

function createURL(page) {
  const srchWithPluses = inputField.value.trim().split(" ").join("+");
  return `http://openlibrary.org/search.json?q=${srchWithPluses}&page=${page}`;
}

function fetching(url) {
  fetch(url)
    .then((result) => result.json())
    .then((jsonData) => {
      countOfSearches(jsonData);
      allFunctions(jsonData);
    });
}

inputField.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    searchButton.click();
  }
});

nextBtn.addEventListener("click", () => {
  if (page < 6 && page >= 1) {
    page++;
    resultsDiv.innerHTML = "";

    fetching(createURL(page));
  }
  if (page === 6) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
  if (page === 1) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }
});

prevBtn.addEventListener("click", () => {
  if (page <= 6 && page > 1) {
    page--;
    resultsDiv.innerHTML = "";
    fetching(createURL(page));
  }
  if (page === 6) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
  if (page === 1) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }
});

function countOfSearches(param) {
  const pNumFound = document.createElement("p");
  pNumFound.setAttribute("id", "numOfResults");
  pNumFound.textContent = `Total count of results: ${param.numFound}`;
  resultsDiv.appendChild(pNumFound);
  const br = document.createElement("br");
  resultsDiv.appendChild(br);
}

function title(param, i) {
  const pTitle = document.createElement("p");
  pTitle.setAttribute("id", "title");
  pTitle.textContent = `Title: ${param.docs[i].title}`;
  resultsDiv.appendChild(pTitle);
}

function authorName(param, i) {
  const pAuthor = document.createElement("p");
  pAuthor.setAttribute("id", "author");
  pAuthor.textContent = `Author name: ${param.docs[i].author_name}`;
  resultsDiv.appendChild(pAuthor);
}

function publishYear(param, i) {
  const pPublishyear = document.createElement("p");
  pPublishyear.setAttribute("id", "publishYear");
  pPublishyear.textContent = `First publish year: ${param.docs[i].first_publish_year}`;
  resultsDiv.appendChild(pPublishyear);
}

function subjects(param, i) {
  const pSubject = document.createElement("p");
  pSubject.setAttribute("id", "subject");
  if (param.docs[i].hasOwnProperty("subject")) {
    for (let j = 0; j < 4; j++) {
      if (
        param.docs[i].subject[j] !== undefined &&
        param.docs[i].subject[j] != "Protected DAISY"
      ) {
        if (j === 0) {
          pSubject.textContent = `Subject: ${param.docs[i].subject[j]} `;
        } else {
          pSubject.textContent += `, ${param.docs[i].subject[j]}`;
        }
      }
      resultsDiv.appendChild(pSubject);
    }
  }
}

/////////add results to different divs ////
function allFunctions(param) {
  // const allFuncDiv = document.createElement("div");
  // allFuncDiv.setAttribute("id", "allFuncDiv");
  // resultsDiv.append(allFuncDiv);

  // let eachFunc = function (param) {
  for (let i = 0; i < param.docs.length; i++) {
    title(param, i);
    authorName(param, i);
    publishYear(param, i);
    subjects(param, i);
  }
  // };
  // allFuncDiv.append(eachFunc(param));
}
