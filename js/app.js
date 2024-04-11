let inputAdd = document.querySelector(".addbook");
let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let yearInput = document.querySelector("#year");
let theadelem = document.querySelector("#book-list");
let bookArray = [];

window.addEventListener("load", getLocalStorage);

inputAdd.addEventListener("click", function (event) {
  event.preventDefault();
  let titleValue = titleInput.value;
  let authorValue = authorInput.value;
  let yearValue = yearInput.value;

  if (titleValue === "" || authorValue === "" || yearValue === "") {
    alert("field is empty");
  } else {
    let objArray = {
      id: bookArray.length + 1,
      title: titleValue,
      author: authorValue,
      year: yearValue,
    };
    bookArray.push(objArray);
    console.log(bookArray);
    setLocalStorage(bookArray);
    newListGenerator(bookArray);
    titleInput.value = "";
    authorInput.value = "";
    yearInput.value = "";
    titleInput.focus();
  }
});

function setLocalStorage(bookArray) {
  localStorage.setItem("books", JSON.stringify(bookArray));
}

function newListGenerator(bookArray) {
  theadelem.innerHTML = "";

  bookArray.forEach((element) => {
    let newTrElem = document.createElement("tr");

    let newTdElem1 = document.createElement("td");
    newTdElem1.innerHTML = element.title;

    let newTdElem2 = document.createElement("td");
    newTdElem2.innerHTML = element.author;

    let newTdElem3 = document.createElement("td");
    newTdElem3.innerHTML = element.year;

    newTrElem.append(newTdElem1, newTdElem2, newTdElem3);
    theadelem.append(newTrElem);
  });
}

function getLocalStorage() {
  let localStorageData = localStorage.getItem("books");
  if (localStorageData) {
    bookArray = JSON.parse(localStorageData);
    newListGenerator(bookArray);
  }
}

