function test1(){
    //1+1=
    clearElem.click();
    numElems[0].click();
    operateButton[0].click();
    numElems[0].click();
    resultButton.click();
    if (resultElem.textContent == '1 + 1 = 2') console.log('Тест 1 прошел успешно')
    else console.log('Тест 1 провалился ', result.textContent);
}

function test2(){
    clearElem.click();
    numElems[0].click();
    operateButton[0].click();
    resultButton.click();
    if (resultElem.textContent == '1 + ') console.log('Тест 2 прошел успешно')
    else console.log('Тест 2 провалился ', result.textContent);
}

function test3(){
    clearElem.click();
    numElems[0].click();
    resultButton.click();
    if (resultElem.textContent == '1 = 1') console.log('Тест 3 прошел успешно')
    else console.log('Тест 3 провалился ', result.textContent);
}

function test4(){
    clearElem.click();
    numElems[0].click();
    operateButton[0].click();
    numElems[0].click();
    operateButton[0].click();
    numElems[0].click();
    if (resultElem.textContent == '2 + 1') console.log('Тест 4 прошел успешно')
    else console.log('Тест 4 провалился ', result.textContent);
}

function test5(){
    clearElem.click();
    numElems[0].click();
    operateButton[0].click();
    numElems[0].click();
    resultButton.click();
    operateButton[0].click();
    if (resultElem.textContent == '2 + ') console.log('Тест 5 прошел успешно')
    else console.log('Тест 5 провалился ', result.textContent);
}

function test6(){
    clearElem.click();
    operateButton[0].click();
    if (resultElem.textContent == '') console.log('Тест 6 прошел успешно')
    else console.log('Тест 6 провалился ', result.textContent);
}

function test7(){
    clearElem.click();
    numElems[0].click();
    operateButton[0].click();
    operateButton[1].click();
    if (resultElem.textContent == '1 - ') console.log('Тест 7 прошел успешно')
    else console.log('Тест 7 провалился ', result.textContent);
}

function test8(){
    clearElem.click();
    resultButton.click();
    if (resultElem.textContent == '') console.log('Тест 8 прошел успешно')
    else console.log('Тест 8 провалился ', result.textContent);
}

function test9(){
    clearElem.click();
    resultButton.click();
    resultButton.click();
    if (resultElem.textContent == '') console.log('Тест 9 прошел успешно')
    else console.log('Тест 9 провалился ', result.textContent);
}

function test10(){
    clearElem.click();
    numElems[0].click();
    operateButton[3].click();
    numElems[9].click();
    resultButton.click();
    if (resultElem.textContent == '') console.log('Тест 10 прошел успешно')
    else console.log('Тест 10 провалился ', result.textContent);
}

function test11(){
    clearElem.click();
    numElems[0].click();
    resultButton.click();
    operateButton[0].click();
    numElems[0].click();
    if (resultElem.textContent == '1 + 1') console.log('Тест 11 прошел успешно')
    else console.log('Тест 11 провалился ', result.textContent);
}

function test12(){
    clearElem.click();
    numElems[0].click();
    operateButton[3].click();
    numElems[9].click();
    resultButton.click();
    operateButton[0].click();
    if (resultElem.textContent == '') console.log('Тест 12 прошел успешно')
    else console.log('Тест 12 провалился ', result.textContent);
}

test1();
test2();
test3();
test4();
test5();
test6();
test7();
test8();
test9();
test10();
test11();
test12();
clearElem.click();