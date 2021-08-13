const myLibrary = [];
const author = document.getElementById('author').value;
const title = document.getElementById('title').value;
const pages = document.getElementById('read').value;
const read = Document.getElementById('read');

function Book(author, title, pages, read, year) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.year = year;
}
// Add book to library after submission

function addBookToLibrary(book) {
    if (book.author == '' || book.title == '' || book.pages == '' || book.read == '' || book.year == '') {
        throw("Error, fulfill all fields!");
    } else {
        myLibrary.push(book);
    }
    
}

// Display all books from myLibrary

function listOfBooks(library) {
    for (let book in library) {
        console.log(book);
    }
}
