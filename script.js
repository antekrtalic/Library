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
    const btn = document.querySelector('button');


    div.remove();
    btn.remove();
    displayContent();

    for (let book in library) {
        console.log(library[book]);
    }
}

function displayContent() {
    
    const body = document.body;
    const author = document.createElement('p');
    author.setAttribute('id', 'author');
    author.innerHTML = 'Author:';
    const title = document.createElement('p');
    title.setAttribute('id', 'title');
    title.innerHTML = 'Title:';
    const pages = document.createElement('p');
    pages.setAttribute('id', 'pages');
    pages.innerHTML = 'Pages:';
    const read = document.createElement('p');
    read.setAttribute('id', 'pages');
    read.innerHTML = 'Read:';
    const year = document.createElement('p');
    pages.setAttribute('id', 'year');
    year.innerHTML = 'Year:';

    // add all p elements inside div

    const paragraphs = document.getElementsByTagName('p');

    for (let paragraph in paragraphs) {

        const div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';

        div.append(paragraph);
        body.appendChild(div);
    }
}
