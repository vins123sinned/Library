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

addBookToLibrary('Harry Potter and the Sorcerer\'s Stone', 'J. K. Rowling', 223, true);
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('The Millionaire Fastlane', 'M. J. DeMarco', 334, true);
addBookToLibrary('Atomic Habits', 'James Clear', 320, true);
addBookToLibrary('The Richest Man in Babylon', 'George S. Clason', 99, false);
addBookToLibrary('The Perks of Being a Wallflower', 'Stephen Chbosky', 237, false);

displayBooks();