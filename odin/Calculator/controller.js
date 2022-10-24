const numElems = document.querySelectorAll(".num");
const resultElem = document.querySelector("#result");
const operator = ["+", '-', '*', "/", '=', "Clear"];
let numberString = '';
let firstNumber = 0;
let secondNumber = 0;
let operateValue = '';
let resultMessage = '';

numElems.forEach((elem) => {
    elem.addEventListener('click', () => {
        let elemText = elem.textContent;
        numberString += elemText;
        resultMessage += elemText;
        console.log(operateValue, firstNumber, secondNumber);
        resultElem.textContent = resultMessage;
    })
})

const clearElem = document.querySelector(".clear");
clearElem.addEventListener('click', () => {
    resultElem.textContent = '';
    firstNumber = 0;
    secondNumber = 0;
    operateValue = '';
    checkResultButtonClick = false;
    result = 0;
    numberString = '';
    resultMessage = '';
})

let checkResultButtonClick = false;
let checkOperateButton = false;
let result;

const resultButton = document.querySelector(".result");
resultButton.addEventListener("click", () => {
    if (checkResultButtonClick) {
        resultElem.textContent = firstNumber + ' = ' + firstNumber;
        console.log("click double click =", firstNumber);
        return;
    }
    if (!checkOperateButton){
        firstNumber = Number(numberString);
        resultElem.textContent = firstNumber + ' = ' + firstNumber;
        console.log("click = without operator", firstNumber);
        return;
    }
    checkResultButtonClick = true;
    secondNumber = Number(numberString);
    numberString = '';
    firstNumber = operate(operateValue, firstNumber, secondNumber);
    resultMessage += ' = ' + firstNumber;
    resultElem.textContent = resultMessage;
    console.log("click =");
})

const operateButton = document.querySelectorAll(".operate");
operateButton.forEach((elem) => {
    elem.addEventListener('click', () => {
        checkOperateButton = true;
        checkResultButtonClick = false;
        firstNumber = Number(numberString);
        operateValue = elem.textContent;
        numberString = '';
        resultMessage += ' ' + operateValue + ' ';
        resultElem.textContent = resultMessage;
        console.log("click" + operateValue);
    })
})