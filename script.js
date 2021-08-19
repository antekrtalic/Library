const myLibrary = [];


function Book(author, title, pages, read, year) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.toggleClass = () => {
        this.read = !this.read;
    };
    this.year = year;
}


// Add book to library after submission
function addBookToLibrary() {

    const author_v = document.getElementById('author').value;
    const title_v = document.getElementById('title').value;
    const pages_v = document.getElementById('pages').value;
    const read_v = document.getElementById('read').checked;
    const year_v = document.getElementById('year').value;
    const deleteForm = document.getElementById('book-form');
    
    const book = new Book(author_v, title_v, pages_v, read_v, year_v);
    

    if (author_v == '' || title_v == '' || pages_v == '' || year_v == '') {
        console.log("Error, fullfill all input fields");
    } else {
        myLibrary.push(book);
    }
    
    deleteForm.reset();
}


// Display all books from myLibrary

function listOfBooks() {

    const div = document.getElementById('library-card');
    const btn = document.querySelector('button');

    div.remove();
    btn.remove();
    
    displayPage();
}



// Main page with list of books

function displayPage() {

    const library = myLibrary;
    const body = document.body;
    //const main_div = document.createElement('div');
    const main_div = document.querySelector('#main');
    // main div 
    //main_div.setAttribute('id', 'main');
    main_div.style.width = '100%';
    main_div.style.height = '100%';
    // main_div.style.display = 'flex';
    // main_div.style.justifyContent = 'space-round';
    // main_div.style.alignItems = 'center';
    // main_div.style.flexDirection = 'row';
    

    // Changing style for body before showing list of books

    body.appendChild(main_div);
    
    for (let book in library) {

        // Book card

        const div = document.createElement('div');
        div.setAttribute('class', `card`);
        div.style.width = '300px';
        div.style.height = '500px';
        div.style.backgroundColor = '#383836';
        div.style.border = '1px solid black';
        div.style.textAlign = 'center';
        
        // Delete button for each book card
        const deleteButton = document.createElement('button');

        deleteButton.setAttribute('class', 'delete');
        deleteButton.setAttribute('onclick', 'return this.parentElement.remove()');
        deleteButton.innerHTML = 'Remove book';
        deleteButton.style.backgroundColor = 'red';
        deleteButton.style.marginTop = '20px'

        for (let key in library[book]) {

            const p = document.createElement('p');
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

                p.remove();
                const readButton = document.createElement('button');
                

                if (library[book][key] === true) {
                    readButton.setAttribute('class', 'readCheck readButton');
                    
                    readButton.innerHTML = 'Read';
                } else {
                    readButton.setAttribute('class', 'readCheck unreadButton');
                    readButton.innerHTML = 'Unread';
                }
                

                // changing style of readButton depending on status
                readButton.onclick = () => {
                    library[book].toggleClass();
                    const read = library[book].read;
                    if (read === true) {
                        readButton.setAttribute('class', 'readCheck readButton');
                        readButton.innerHTML = 'Read'
                    } else {
                        readButton.setAttribute('class', 'readCheck unreadButton');
                        readButton.innerHTML = 'Unread';
                    }
                }
                
                
                div.appendChild(readButton);
                continue;
            } else if (key === 'year') {
                
                p.innerHTML = 'Year: ';
                
            } else {
                continue;
            }

            if (key != 'toggleClass') {
                p.innerHTML += library[book][key];
            }
            
            

            div.appendChild(p);
            
        }

        div.appendChild(deleteButton);
        main_div.appendChild(div);
        console.log(library[book]);
    }
}


function formSubmit() {

    const formHeading = document.createElement('h2');
    const myList = document.getElementById('myList');
    const newBook = document.getElementById('newBook');
    const formDiv = document.createElement('div');
    formDiv.setAttribute('id', 'library-card');
    const form = document.createElement('form');
    form.setAttribute('id', 'book-form');
    const author = document.createElement('input');
    const title = document.createElement('input');
    const read = document.createElement('input');
    const pages = document.createElement('input');
    const year = document.createElement('input');
    const addBook = document.createElement('input');
    const mainDiv = document.getElementById('main');
    const readText = document.createElement('p');
    readText.innerHTML = 'Read: ';

    // Heading
    formHeading.innerHTML = 'Book Form';

    // input author
    author.setAttribute('type', 'text');
    author.setAttribute('id', 'author');
    author.setAttribute('name', 'author');
    author.setAttribute('value', 'Author');

    // input title
    title.setAttribute('type', 'text');
    title.setAttribute('id', 'title');
    title.setAttribute('name', 'title');
    title.setAttribute('value', 'Title');

    // input read
    read.setAttribute('type', 'checkbox');
    read.setAttribute('id', 'read');
    read.setAttribute('name', 'read');

    // input pages
    pages.setAttribute('type', 'text');
    pages.setAttribute('id', 'pages');
    pages.setAttribute('name', 'pages');
    pages.setAttribute('value', 'Pages');

    //input year
    year.setAttribute('type', 'text');
    year.setAttribute('id', 'year');
    year.setAttribute('name', 'year');
    year.setAttribute('value', 'Year');

    // addBook button
    addBook.setAttribute('type', 'button');
    addBook.setAttribute('id', 'addButton');
    addBook.setAttribute('name', 'addButton');
    addBook.setAttribute('value', 'ADD');
    addBook.onclick = addBookToLibrary;

    // mainDiv.removeChild(myList);
    mainDiv.removeChild(newBook);

    // check if input is clicked

    form.appendChild(formHeading);
    form.appendChild(author);
    form.appendChild(title);
    form.appendChild(pages);
    readText.appendChild(read);
    form.appendChild(readText);
    form.appendChild(year);
    form.appendChild(addBook);
    formDiv.appendChild(form);
    mainDiv.appendChild(formDiv);

}