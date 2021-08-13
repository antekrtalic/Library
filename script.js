let myLibrary = [];

function Book(author, title, pages, read, year) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.year = year;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}
