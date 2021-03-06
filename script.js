const modal = document.getElementById("modal");
const btnNew = document.getElementById("btnNew");
const btnAdd = document.getElementById("btnAdd");
const closeBtn = document.getElementsByClassName("close")[0];
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

btnNew.addEventListener("click", function () {
  modal.style.display = "block";
  btnAdd.style.display = "flex";
})

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
})

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})

btnAdd.addEventListener("click", function () {
  const div = document.createElement("div");
  const span = document.createElement("span");
  const divBtns = document .createElement("div");
  const editRead = document.createElement("span");
  const delDiv = document.createElement("span");
  div.dataset.num = myLibrary.length;
  setClasses(div, span, divBtns, editRead, delDiv);
  setChilds(div, span, divBtns, editRead, delDiv);
  displayInfo(div, span, editRead, delDiv);
  clearModal();
  editBook(div, span, editRead);
  deleteBooks(delDiv, div);
});

function setClasses(div, span, divBtns, editRead, delDiv) {
  div.className = "bookInfo";
  span.className = "infoTxt";
  divBtns.className = "btnCont";
  editRead.className = "editRead";
  delDiv.className = "delBook";
}

function setChilds(div, span, divBtns, editRead, delDiv) {
  document.getElementById("container").appendChild(div);
  div.appendChild(span);
  div.appendChild(divBtns);
  divBtns.appendChild(editRead);
  divBtns.appendChild(delDiv);
}

function displayInfo(div, span, editRead, delDiv) {
  myLibrary[myLibrary.length] = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
  span.innerText = myLibrary[myLibrary.length - 1].info();
  editRead.innerHTML = "&#128366;";
  delDiv.innerHTML = "&times";
}

function clearModal() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.value = "";
  modal.style.display = "none";
}

function editBook(div, span, editRead) {
  editRead.addEventListener("click", function () {
    if (myLibrary[div.dataset.num].read === "read") {
      myLibrary[div.dataset.num].read = "not read yet";
      span.textContent = myLibrary[div.dataset.num].info();
    } else {
      myLibrary[div.dataset.num].read ="read";
      span.textContent = myLibrary[div.dataset.num].info();
    }
  })
}

function deleteBooks(delDiv, div) {
  delDiv.addEventListener("click", function () {
    div.remove();
  })
}