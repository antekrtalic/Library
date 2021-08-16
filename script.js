const myLibrary = [];



function Book(author, title, pages, read, year) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.year = year;
}


// Add book to library after submission
function addBookToLibrary() {

    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    const year = document.getElementById('year').value;
    const form = document.getElementById('book-form');
    const book = new Book(author, title, pages, read, year);

    if (author == '' || title == '' || pages == '' || year == '') {
        console.log("Error, fullfill all input fields");
    } else {
        myLibrary.push(book);
    }
    
    form.reset();
}



// Display all books from myLibrary

function listOfBooks(library) {
    for (let book in library) {
        console.log(book);
    }
}


// listOfBooks(addBookToLibrary());