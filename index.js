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
    const tableBody = document.querySelector('tbody');

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

addBookToLibrary('Harry Potter and the Sorcerer\'s Stone', 'J. K. Rowling', 223, true);
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('The Millionaire Fastlane', 'M. J. DeMarco', 334, true);
addBookToLibrary('Atomic Habits', 'James Clear', 320, true);
addBookToLibrary('The Richest Man in Babylon', 'George S. Clason', 99, false);
addBookToLibrary('The Perks of Being a Wallflower', 'Stephen Chbosky', 237, false);

displayBooks();