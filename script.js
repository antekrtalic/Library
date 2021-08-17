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
    const body = document.body;
    const main_div = document.createElement('div');

    // main div 
    main_div.setAttribute('id', 'main');
    main_div.style.width = '100%';
    main_div.style.height = '100%';
    main_div.style.display = 'flex';
    main_div.style.flexDirection = 'row';
    main_div.style.justifyContent = 'space-around';


    div.remove();
    btn.remove();
    
    // changing style for body before showing list of books
    body.appendChild(main_div);
    

    for (let book in library) {

        const div = document.createElement('div');
        div.style.width = '300px';
        div.style.height = '600px';
        div.style.backgroundColor = 'grey';
        div.style.border = '1px solid black';
        div.style.textAlign = 'center';
        

        

        for (let key in library[book]) {
            
            const p = document.createElement('p');
            const deleteButton = document.createElement('button');
            
            deleteButton.onclick = deleteCard(library[book]);
            deleteButton.innerHTML = 'Remove book';
            p.style.marginTop = '5px';
            p.style.fontSize = '2rem';
            p.style.fontFamily = '"Times New Roman", Times, serif';

            if (key === 'author') {
                p.innerHTML = 'Author: ';
            } else if (key === 'title') {
                p.innerHTML = 'Title: ';
            } else if (key === 'pages') {
                p.innerHTML = 'Pages: ';
            } else if (key === 'read') {
                const readButton = document.createElement('button');
                readButton.innerHTML += library[book][key];
                div.appendChild(readButton);
                continue;
            } else if (key === 'year') {
                p.innerHTML = 'Year: ';
            }

            p.innerHTML += library[book][key];
            div.appendChild(p);
            
            
            
        }

        main_div.appendChild(div);
        console.log(library[book]);
    }
}

function displayContent() {
    
    
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

    
}

// Deleting book card

function deleteCard(currentBook) {
    document.getElementById('main').remove(currentBook);
}