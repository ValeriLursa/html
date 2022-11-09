array = [
    [['Mi-ke', 'invalid'], ['Mike&', 'invalid'], ['M3ike', 'invalid'], ['mikE', 'invalid'], ['Mike', 'valid']],
    [['mail', 'invalid'], ['mail@', 'invalid'], ['mail@yandex', 'invalid'], ['mail@yandex.', 'invalid'], ['mail@yandex.ru', 'valid']],
    [['1', 'invalid'], ['123456', 'invalid'], ['123456b890', 'invalid'], ['12345678901', 'invalid'], ['1234567890', 'valid']]
]

let button = document.getElementById('button');
let email = document.getElementById('email');

function testElem(elem, row, colEnd) {
    console.log(elem);
    for (let i = 0; i < colEnd; i++) {
        elem.value = array[row][i][0];
        elem.focus();
        elem.blur();
        button.click();        
        // console.log(array[row][i][1]);
        let q = elem.classList.value.match(array[row][i][1]);
        if (q && q.input.match(array[row][i][1]))
            console.log('test number ' + row + '.' + i + ' return true');
        else {
            console.log('ERROR ' + q);
            console.log('test number ' + row + '.' + i + ' return false');
        }
    }
    return true;
}

function testForm() {
    let start;
    // let end = array[0].length;
    let end = 1;
    testElem(firstName, 0, end);
    // testElem(lastName, 0, end);
    // end = array[1].length;
    // console.log(array[1]);
    // testElem(email, 1, end);
    // end = array[2].length;
    // testElem(phone, 2, end);
}