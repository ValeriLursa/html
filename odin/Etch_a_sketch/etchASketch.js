const panelWidth = 600;
const borderSize = 0;
const defaultTableSize = 16;
const defaultColorPanel = 'darkgrey';
let answerFromPlayer = defaultTableSize;

let panelDiv = document.querySelector('#panel');
let gridButton = document.querySelector("#gridButton");

renderingTable(defaultTableSize);
addClickToGridButton();

const promptButton = document.querySelector('#promptButton');
promptButton.addEventListener('click', () => {
    const messageToPlayer = 'Enter window size from 1 to 50';
    answerFromPlayer = prompt(messageToPlayer);
    if (checkAnswerFromPlayer(+answerFromPlayer)) {
        panelDiv.style.width = panelWidth + 'px';
        panelDiv.style.height = panelWidth + 'px';
        gridButton.textContent = 'Show grid';
        clearPanel();
        renderingTable(answerFromPlayer);
    } else return;
})

function checkAnswerFromPlayer(answerFromPlayer) {
    if (answerFromPlayer == '') {
        return false;
    }
    if (!Number.isInteger(answerFromPlayer)) {
        return false;
    }
    if (0 > answerFromPlayer || answerFromPlayer > 50) {
        alert("Enter a value from 1 to 50")
        return false;
    }
    return true;
}

function clearPanel() {
    let divTable = document.querySelectorAll('.square');
    if (divTable.length == 0) divTable = document.querySelectorAll('.border');
    divTable.forEach(devTableElem => {
        panelDiv.removeChild(devTableElem);
    });
}

function renderingTable(answerFromPlayer) {
    for (let i = 0; i < answerFromPlayer; i++) {
        for (let j = 0; j < answerFromPlayer; j++) {
            let divTable = document.createElement('div');
            divTable.setAttribute('class', 'square');
            let divTableSize = String(panelWidth / answerFromPlayer - borderSize) + 'px';
            divTable.style.width = divTableSize;
            divTable.style.height = divTableSize;
            addClickToDivTable(divTable);
            panelDiv.appendChild(divTable);
        }
    }
}

function addClickToDivTable(divTable) {
    divTable.addEventListener('click', () => {
        let stringDivTableBackColor = String(divTable.style.backgroundColor);
        console.log(stringDivTableBackColor);
        // let paintColor = randomColor();
        if (stringDivTableBackColor === "rgb(0, 0, 0)") {
            divTable.style.backgroundColor = '';
            return;
        }
        if (stringDivTableBackColor != '') {
            let index = stringDivTableBackColor.indexOf(')');
            let str = stringDivTableBackColor.slice(4, index);
            str = str.split(',');
            let newColor = [];
            str.forEach((elem) =>{
                newColor.push(checkColor(elem, 23));
            });
            newColor = 'rgb(' + newColor[0] + ', '+ newColor[1] + ', '+ newColor[2]+ ')'
            divTable.style.backgroundColor = newColor;
            console.log(newColor);
            return;
        }
        const paintColor = randomColor();
        divTable.style.backgroundColor = paintColor;
    })
}

function checkColor(color, differenc){
    console.log('checkColor', color, differenc);
    if (color == 0) return color;
    if (Number(color) < differenc) return 0;
    return Number(color) - differenc;
}

function addClickToGridButton() {
    gridButton.addEventListener('click', () => {
        let messageButton = gridButton.textContent;
        if (messageButton == 'Remove grid') {
            showGrid(0, 'square')
            gridButton.textContent = 'Show grid';
            return;
        }
        showGrid(2, 'border');
        gridButton.textContent = 'Remove grid';
    })
}

function showGrid(borderSize, className) {
    let divTable;
    if (className == 'border') divTable = document.querySelectorAll('.square');
    else divTable = document.querySelectorAll('.border');
    let divTableSize = Number(divTable[0].style.width.slice(0, divTable[0].style.width.indexOf('px', 0)));
    let panelDivSize = (divTableSize + borderSize) * answerFromPlayer;
    panelDiv.style.width = String(panelDivSize) + 'px';
    panelDiv.style.height = String(panelDivSize) + 'px';
    divTable.forEach((divTableElem) => {
        divTableElem.setAttribute('class', className);
    });
}

function randomColor() {
    let RGBColor = "rgb(";
    let randomColor;
    for (let i = 0; i < 2; i++) {
        randomColor = Math.round(Math.random() * 255) + 1;
        RGBColor += randomColor + ', ';
    }
    randomColor = Math.round(Math.random() * 255) + 1;
    RGBColor += randomColor + ')';
    return RGBColor;
}