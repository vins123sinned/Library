const myLibrary = [];

function Book(title, author, pageCount, readStatus) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus ? 'read' : 'not read yet';
}

function addBookToLibrary(title, author, pageCount, readStatus) {
    myLibrary.push(new Book(title, author, pageCount, readStatus));
}

function displayBooks() {
    for (const book of myLibrary) {
        const tableRow = document.createElement('tr');
        
        for (const property in book) {
            const tableData = document.createElement('td');
            tableData.textContent = book[property];
            
            tableRow.appendChild(tableData);
        }

        tableBody.appendChild(tableRow);
    }
}

function clearDisplay() {
    tableBody.replaceChildren();
}

function showModal() {
    dialog.showModal();
}

function hideModal() {
    dialog.close();
}

function submitClicked(event) {
    event.preventDefault();

    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const readStatus = document.querySelector('#readStatus');

    addBookToLibrary(title.value, author.value, pages.value, readStatus.checked);
    clearDisplay();
    displayBooks();

    title.value = '';
    author.value = '';
    pages.value = '';
    readStatus.checked = false;
    hideModal();
}

function cancelClicked() {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const readStatus = document.querySelector('#readStatus');

    title.value = '';
    author.value = '';
    pages.value = '';
    readStatus.checked = false;
    hideModal();
}

const tableBody = document.querySelector('tbody');

const dialog = document.querySelector('dialog');
const addBookButton = document.querySelector('.add-book-button');
const cancelButton = document.querySelector('.cancel-button');
addBookButton.addEventListener('click', showModal);
cancelButton.addEventListener('click', cancelClicked);

const form = document.querySelector('form');

form.addEventListener('submit', submitClicked);

addBookToLibrary('Harry Potter and the Sorcerer\'s Stone', 'J. K. Rowling', 223, true);
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('The Millionaire Fastlane', 'M. J. DeMarco', 334, true);
addBookToLibrary('Atomic Habits', 'James Clear', 320, true);
addBookToLibrary('The Odyssey', 'Homer', 592, false);
addBookToLibrary('The Richest Man in Babylon', 'George S. Clason', 99, false);
addBookToLibrary('The Perks of Being a Wallflower', 'Stephen Chbosky', 237, false);
addBookToLibrary('Fahrenheit 451', 'Ray Bradbury', 249, true);
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, false);

displayBooks();