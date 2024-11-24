let myLibrary = [];

class Book {
  constructor(bookName, pages, bookTopic) {
    this.bookName = bookName;
    this.bookPages = pages;
    this.bookTopic = bookTopic;
  }
}

function addBookToLibrary(bookName, pages, bookTopic) {
  myLibrary.push(new Book(bookName, pages, bookTopic));
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
}

addBookToLibrary("El Principito", 233, "Pendejadas y asi");
addBookToLibrary("Caramelo Adventures", 34, "Las aventuras de Caramelo en los estadios");
displayBooks();
