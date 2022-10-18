const panelWidth = 600;
const borderSize = 0;
const defaultTableSize = 3;
const defaultColorPanel = 'darkgrey';

let panelDiv = document.querySelector('#panel');

renderingTable(defaultTableSize);
addClickToGridButton();

const promptButton = document.querySelector('#promptButton');
promptButton.addEventListener('click', () => {
    const messageToPlayer = 'Enter window size from 1 to 50';
    let answerFromPlayer = prompt(messageToPlayer);
    if (checkAnswerFromPlayer(+answerFromPlayer)) {
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
    let gridButton = document.querySelector("#gridButton");
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
    let panelDivSize = (divTableSize + borderSize) * defaultTableSize;
    panelDiv.style.width = String(panelDivSize) + 'px';
    panelDiv.style.height = String(panelDivSize) + 'px';
    divTable.forEach((divTableElem) => {
        divTableElem.setAttribute('class', className);
    });
}