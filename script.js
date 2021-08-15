const myLibrary = [];
const author = document.getElementById('author').value;
const title = document.getElementById('title').value;
const pages = document.getElementById('read').value;
const read = document.getElementById('read').checked;
const year = document.getElementById('year').value;
const form = document.getElementById('book-form');
const book = new Book(author, title, pages, read, year);
let action;

function Book(author, title, pages, read, year) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.year = year;
}


// Add book to library after submission
function addBookToLibrary() {
    
    if (author == '' || title == '' || pages == '' || year == '') {
        console.log("Error, fullfill all input fields");
    } else {
        myLibrary.push(book);
        return myLibrary;    
    }
    
    form.reset();
}


console.log(myLibrary);
// Display all books from myLibrary

function listOfBooks(library) {
    for (let book in library) {
        console.log(book);
    }
}


// listOfBooks(addBookToLibrary());