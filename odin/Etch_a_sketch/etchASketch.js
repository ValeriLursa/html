const panelWidth = 600;
const borderSize = 0;
const defaultTableSize = 3;
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
        let paintColor = "rgb(0, 0, 0)";
        if (stringDivTableBackColor == paintColor) {
            divTable.style.backgroundColor = '';
            return;
        }
        divTable.style.backgroundColor = paintColor;
    })
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

//