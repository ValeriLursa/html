function test1(){
    //1+1=
    clearElem.click();
    numElems[0].click();
    operateButton[0].click();
    numElems[0].click();
    resultButton.click();
}

function test2(){
    clearElem.click();
    numElems[0].click();
    operateButton[0].click();
    resultButton.click();
    let input = document.querySelector("#result");
    console.log(input.textContent)
}

test1();
test2();