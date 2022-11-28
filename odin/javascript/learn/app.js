console.log('Hello');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read;
    this.info = () => {
        return '"' + this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read + '"';
    }
}

//Book[]
let myLibrary = [];

/**
 * @param {string[]} dataFromPerson
 * @return {boolean}
 */
function addBookToLibrary(dataFromPerson) {
    const elem = new Book(dataFromPerson[0], dataFromPerson[1], dataFromPerson[2], dataFromPerson[3]);
    myLibrary.push(elem)
    return elem;
}

/**
 * @param {string[]} indexBookByMyLibrary
 * @return {boolean}
 */
function returnBookToLibrary(indexBookByMyLibrary) {
    return myLibrary[indexBookByMyLibrary].info();
}

function deleteBookByLibrary(indexBookByMyLibrary) {
    myLibrary.splice(indexBookByMyLibrary, 1);
}

function changeReadStatusByBook(indexBookByMyLibrary) {
    const status = myLibrary[indexBookByMyLibrary].read;
    if (status == 'read') {
        myLibrary[indexBookByMyLibrary].read = 'no read';
    } 
    else myLibrary[indexBookByMyLibrary].read = 'read';
}

let listBook = [
    ['1984', 'Murakami1', 1900, 'read'],
    ['1984', 'Murakami2', 1900, 'read'],
    ['1984', 'Murakami3', 1900, 'read']
]

listBook.forEach(elem => {
    addBookToLibrary(elem);
})