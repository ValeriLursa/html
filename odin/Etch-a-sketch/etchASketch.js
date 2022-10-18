const panelWidth = 600;
const borderSize = 2;
const defaultTableSize = 16;
const defaultColorPanel = 'darkgrey';

const panelDiv = document.querySelector('#panel');

renderingTable(defaultTableSize);

const promptButton = document.querySelector('button');
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

function addClickToDivTable(divTable){
    divTable.addEventListener('click', () => {
        let stringDivTableBackColor = String(divTable.style.backgroundColor);
        let paintColor = "rgb(0, 0, 0)";
        if (stringDivTableBackColor == paintColor) {
            divTable.style.backgroundColor = defaultColorPanel;
            return;
        }
        divTable.style.backgroundColor = paintColor;
    })
}