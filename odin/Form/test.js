array = [
    [['Mi-ke', false], ['Mike&', false], ['M3ike', false], ['mikE', false], ['Mike', true]],
    [['mail', false], ['mail@', false], ['mail@yandex', false], ['mail@yandex.', false], ['mail@yandex.ru', true]],
    [['1', false], ['123456', false], ['123456b890', false], ['12345678901', false], ['1234567890', true]],
    [['1234567', false], ['qqqqqqq', false], ['1qQ%', false], ['1q2E%43w&', true]],
    [['1qQ%', false], ['1q2E%43w&', true]]
]


let email = document.getElementById('email');

function testElem(elem, row, colStart, colEnd) {
    let resultTesting = true;
    console.log(elem);
    for (let i = colStart; i < colEnd; i++) {
        elem.value = array[row][i][0];
        button.click();
        let q = elem.validity.valid;
        resultTesting = q;
        if (q === array[row][i][1])
            console.log('test number ' + row + '.' + i + ' return true');
        else {
            console.log('ERROR ' + array[row][i][0]);
            console.log('test number ' + row + '.' + i + ' return false');
        }
    }
    return resultTesting;
}

let i = 0;

function testForm() {
    let start = 0;
    let end;
    let row = 0;
    let resultTesting = true;
    inputArray.forEach(elem => {
        end = array[row].length;
        resultTesting = (resultTesting && testElem(elem, row, start, end));
        if (elem.id != 'first_name') row++;
    })
    // end = array[row].length;
    // resultTesting = (resultTesting && testElem(password_first, row++, start, end));
    return Boolean(resultTesting);
}

function testPassword() {
    let resultTesting = true;
    let start = 0;
    let end;
    let row = 3;
    end = array[row].length;
    resultTesting = (resultTesting && testElem(password_first, row++, start, end));
    end = array[row].length;
    resultTesting = (resultTesting && testElem(password_second, row, start, end));
    return Boolean(resultTesting);
}

function testAll(){
    let resultTesting = true;
    resultTesting = (resultTesting && testForm());
    firstName.value = '';
    resultTesting = (resultTesting && testPassword());
    return Boolean(resultTesting);
}