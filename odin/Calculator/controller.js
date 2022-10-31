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
    calculator.firstNumber = 0;
    calculator.secondNumber = 0;
    calculator.oper = '';
    console.log('Click Clear', numberString + resultMessage);
})

const resultButton = document.querySelector(".result");
resultButton.addEventListener("click", () => {
    console.log("numberString " + numberString, "resultMessage " + resultMessage, calculator);
    if (!checkNumberString()) {
        alert("So cool!");
        return;
    }
    if (calculator.oper == ''){
        resultMessage = numberString + ' = ' + numberString;
        resultTextContent(resultMessage);
        return;
    }
    calculator.secondNumber = Number(numberString);
    numberString = '';
    let result = calculator.operate(calculator.oper);
    calculator.firstNumber = result;
    calculator.secondNumber = 0;
    calculator.oper = resultButton.textContent;
    resultMessage += ' = ' + result;
    resultTextContent(resultMessage);
    console.log("numberString " + numberString, "resultMessage " + resultMessage, calculator);
})

let countClickOperate = 0;

const operateButton = document.querySelectorAll(".operate");
operateButton.forEach((elem) => {
    elem.addEventListener('click', () => {
        console.log("numberString " + numberString, "resultMessage " + resultMessage, calculator);
        countClickOperate++;
        
        if (countClickOperate > 1) {
            // console.log('numberString '+ numberString);
            if (!checkNumberString()) {
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
        calculator.secondNumber = 0;
        resultMessage = calculator.firstNumber + ' ' + elem.textContent + ' ';
        resultTextContent(resultMessage);
        numberString = '';
        // console.log('click' + elem.textContent, 'firstNumber = ' + calculator.firstNumber, 'countClickOperate = ' + countClickOperate);
    })
})

function checkNumberString() {
    if (numberString !== '') return true; else return false;
}