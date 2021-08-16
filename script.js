const myLibrary = [];
const form = document.getElementById('book-form');


function Book(author, title, pages, read, year) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.year = year;
}


// Add book to library after submission
function addBookToLibrary() {

    const author_v = document.getElementById('author').value;
    const title_v = document.getElementById('title').value;
    const pages_v = document.getElementById('pages').value;
    const read_v = document.getElementById('read').checked;
    const year_v = document.getElementById('year').value;
    
    const book = new Book(author_v, title_v, pages_v, read_v, year_v);

    if (author_v == '' || title_v == '' || pages_v == '' || year_v == '') {
        console.log("Error, fullfill all input fields");
    } else {
        myLibrary.push(book);
    }
    
    form.reset();
}



// Display all books from myLibrary

function listOfBooks(library) {

    const div = document.getElementById('library-card');
    const form = document.getElementById('book-form');
    const author = document.createElement('p');
    author.setAttribute('id', 'author');


    div.removeChild(form);

    for (let book in library) {
        console.log(library[book]);
    }
}

