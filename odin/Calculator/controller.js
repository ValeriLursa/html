let calculator = new Calculator();
const numElems = document.querySelectorAll(".num");
const resultElem = document.querySelector("#result");
let numberString = '';
let resultMessage = '';

function resultTextContent(message) {
    resultElem.textContent = message;
}

numElems.forEach((elem) => {
    elem.addEventListener('click', () => {
        let elemText = elem.textContent;
        numberString += elemText;
        resultMessage += elemText;
        resultTextContent(resultMessage);
        console.log('numberString = ' + numberString, 'resultMessage = ' + resultMessage);
    })
})

const clearElem = document.querySelector(".clear");
clearElem.addEventListener('click', () => {
    resultTextContent('')
    numberString = '';
    resultMessage = '';
    countClickOperate = 0;
    console.log('Click Clear', numberString + resultMessage);
})

const resultButton = document.querySelector(".result");
resultButton.addEventListener("click", () => {

})

let countClickOperate = 0;

const operateButton = document.querySelectorAll(".operate");
operateButton.forEach((elem) => {
    elem.addEventListener('click', () => {
        countClickOperate++;
        resultMessage += ' ' + elem.textContent + ' ';
        resultTextContent(resultMessage);
        if (countClickOperate > 1) {
            // console.log('numberString '+ numberString);
            if (!checkNumberString()){
                calculator.oper = elem.textContent;
                resultMessage = calculator.firstNumber + ' ' + elem.textContent + ' ';
                resultTextContent(resultMessage);
                return;
            }
            calculator.secondNumber = Number(numberString);
            numberString = '';
            let result = calculator.operate(calculator.oper);
            calculator.firstNumber = result;
            calculator.secondNumber = 0;
            calculator.oper = elem.textContent;
            resultMessage = result + ' ' + elem.textContent + ' ';
            resultTextContent(resultMessage);
            // console.log('countClickOperate = '+ countClickOperate, 'result = '+ result, 'resultMessage = ' + resultMessage);
            return;
        }
        if (!checkNumberString()) {
            console.log("Нет первого аргумента");
            alert("I don't have first number");
            clearElem.click();
            return;
        }
        calculator.firstNumber = Number(numberString);
        calculator.oper = elem.textContent;
        numberString = '';
        // console.log('click' + elem.textContent, 'firstNumber = ' + calculator.firstNumber, 'countClickOperate = ' + countClickOperate);
    })
})

function checkNumberString() {
    if (numberString !== '') return true; else return false;
}