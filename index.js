let myLibrary = [];

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

        const deleteCell = document.createElement('td');
        deleteCell.classList.add('delete-td');
        const deleteSVG = document.createElement('img');
        deleteSVG.src = './assets/delete-outline.svg';
        deleteSVG.classList.add('table-svg');
        deleteSVG.setAttribute('alt', 'Delete Icon');
        deleteSVG.setAttribute('width', '24px');

        deleteCell.appendChild(deleteSVG);
        tableRow.appendChild(deleteCell);

        deleteCell.addEventListener('click', deleteCellClicked);

        tableBody.appendChild(tableRow);
    }
}

function deleteCellClicked(event) {
    const bookTitle = event.currentTarget.parentNode.firstChild.textContent;
    // Add hidden input for reference to book
    const reference = document.createElement('input');
    reference.classList.add('reference-input');
    reference.setAttribute('type', 'hidden');
    reference.setAttribute('value', bookTitle);

    deleteDialog.appendChild(reference);
    deleteDialog.showModal();
}

function deleteCancel() {
    hideDeleteDialog();
}

function deleteBook() {
    const reference = document.querySelector('.reference-input');
    
    const newLibrary = myLibrary.filter((book) => {
        return !(book.title === reference.value);
    });
    myLibrary = newLibrary;

    clearDisplay();
    displayBooks();
    hideDeleteDialog();
}

function hideDeleteDialog() {
    deleteDialog.removeChild(document.querySelector('.reference-input'));
    deleteDialog.close();
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

const dialog = document.querySelector('.main-dialog');

const deleteDialog = document.querySelector('.delete-dialog');
const deleteButton = document.querySelector('.delete-button');
const deleteCancelButton = document.querySelector('.delete-cancel-button');
deleteButton.addEventListener('click', deleteBook);
deleteCancelButton.addEventListener('click', deleteCancel);

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