let myLibrary = [];
let retrievedObj;

// Sets myLibrary to start with anything that is saved in localStorage from before

if (window.localStorage.length !== 0) {

    retrievedObj = localStorage.getItem('books');
    myLibrary = JSON.parse(retrievedObj);

    for (let key in myLibrary) {
        
        myLibrary[key].toggleClass = () => {

            myLibrary[key].read = !myLibrary[key].read;
            
        }

    }
    displayPage();
}



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
// Creates Form input

function formSubmit() {

    const formHeading = document.createElement('h2');
    const books = document.querySelectorAll('.card');
            for (let book of books) {
                book.remove();
            }
    const myList = document.getElementById('myList');
    myList.style.display = 'block';
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
    readText.style.color = '#173e43';
            
    // deactive newBook button
    newBook.style.display = 'none';

    // Heading
    formHeading.innerHTML = 'Book Form';

    // input author
    author.setAttribute('type', 'text');
    author.setAttribute('id', 'author');
    author.setAttribute('name', 'author');
    author.setAttribute('placeholder', 'Author');
    author.required = true;

    // input title
    title.setAttribute('type', 'text');
    title.setAttribute('id', 'title');
    title.setAttribute('name', 'title');
    title.setAttribute('placeholder', 'Title');
    title.required = true;

    // input read
    read.setAttribute('type', 'checkbox');
    read.setAttribute('id', 'read');
    read.setAttribute('name', 'read');
    

    // input pages
    pages.setAttribute('type', 'number');
    pages.setAttribute('id', 'pages');
    pages.setAttribute('name', 'pages');
    pages.setAttribute('placeholder', 'Pages');
    pages.setAttribute('required', '');

    //input year
    year.setAttribute('type', 'number');
    year.setAttribute('id', 'year');
    year.setAttribute('name', 'year');
    year.setAttribute('placeholder', 'Year');
    year.required = true;

    // addBook button
    addBook.setAttribute('type', 'button');
    addBook.setAttribute('id', 'addButton');
    addBook.setAttribute('name', 'addButton');
    addBook.setAttribute('value', 'ADD');

    // addBook.onclick = addBookToLibrary;
    addBook.addEventListener('click', () => {

        addBookToLibrary();
        // const main_div = document.getElementById('main');

        // // Shows My List button once first book is added
        // if (myLibrary.length > 0) {
            
        //     const myList = document.getElementById('myList');
        //     myList.style.display = 'block';
        //     document.getElementsByTagName('BODY')[0].insertBefore(myList, main_div);

        // } else {
            
        //     const newBook = document.getElementById('newBook');
        //     newBook.style.display = 'block';
        //     mainDiv.appendChild(newBook);
            
        // }
    })

   

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

// Add book to library after submission and to local store
function addBookToLibrary() {

    const author_v = document.getElementById('author').value;
    const title_v = document.getElementById('title').value;
    const pages_v = document.getElementById('pages').value;
    const read_v = document.getElementById('read').checked;
    const year_v = document.getElementById('year').value;
    const deleteForm = document.getElementById('book-form');
    
    const book = new Book(author_v, title_v, pages_v, read_v, year_v);
    
    // checks if input is clicked


    if (author_v == '' || title_v == '' || pages_v == '' || year_v == '') {
       
        console.log("Error, fullfill all input fields");
       
    } else {
        // stores values into array and in localstorage
        myLibrary.push(book);
        
        // Shows My List button once first book is added
        if (myLibrary.length > 0) {
            
            const main_div = document.getElementById('main');
            const myList = document.getElementById('myList');
            myList.style.display = 'block';
            document.getElementsByTagName('BODY')[0].insertBefore(myList, main_div);

        } else {
            
            const newBook = document.getElementById('newBook');
            newBook.style.display = 'block';
            mainDiv.appendChild(newBook);
            
        }
        
        localStorage.setItem('books', JSON.stringify(myLibrary));  
    }
    
    deleteForm.reset();
}


// Display all books from myLibrary

function listOfBooks() {

    const div = document.getElementById('library-card');
    const cards = document.getElementsByClassName('.card');
    const myList = document.getElementById('myList');
    const newBook = document.getElementById('newBook');

    for (let card of cards) {
        card.remove();
    }

    myList.style.display = 'none';
    div.remove();
    newBook.style.display = 'block';
    displayPage();
    
}



// Main page with list of books

function displayPage() {

    const library = myLibrary;
    const body = document.body;
    const main_div = document.querySelector('#main');

    // main div 
    main_div.style.width = '100%';
    main_div.style.height = '100%';
    main_div.style.flexDirection = 'row';
     
    // Changing style for body before showing list of books
    body.appendChild(main_div);
    
    for (let book in library) {

        // Book card

        const div = document.createElement('div');
        div.setAttribute('class', `card`);
    
        // Delete button for each book card
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'delete');
        deleteButton.addEventListener('click', () => {

            deleteButton.parentElement.remove();
            myLibrary.splice(book, book + 1);
            localStorage.setItem('books', JSON.stringify(myLibrary));

        });
        
        deleteButton.innerHTML = 'DELETE';

        for (let key in library[book]) {

            const p = document.createElement('p');

            if (key === 'author') {
                
                p.innerHTML = 'Author: ';

            } else if (key === 'title') {
                
                p.innerHTML = 'Title: ';

            } else if (key === 'pages') {
                
                p.innerHTML = 'Pages: ';

            } else if (key === 'read') {

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
                    // try to update each object in localStorage when read button pressed
                    localStorage.setItem('books', JSON.stringify(myLibrary));
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
    }
}


