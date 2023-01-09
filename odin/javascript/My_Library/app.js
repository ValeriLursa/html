console.log('Hello');

class Book{
    
    constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read;
    }

    info = () => {
        return this.title + "\nby " + this.author + ', ' + this.pages + ' pages, ' + this.read;
    }
};

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
    ['Библиотекарь', 'Михаил Елизаров', 448, 'no read'],
    ['Пройти сквозь стены. Автобиография', 'Марина Абрамович', 400, 'read'],
    ['Школа жён', 'Жан-Батист Мольер', 88, 'read']
]

listBook.forEach(elem => {
    addBookToLibrary(elem);
})