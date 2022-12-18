console.log('app.js connect');

const displayController = (() => {
    let player = [];
    const newBoard = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    const panelPlayer = document.querySelector('.panelPlayer');
    const startButton = document.getElementById('start');
    startButton.style.display = 'none';

    const messageMoveHTML = document.querySelector('.messageMove');
    messageMoveHTML.style.display = 'none';

    let gameBoardHTML = document.querySelector('.gameBoard');

    const winnerHTML = document.querySelector('.winner');
    winnerHTML.style.display = 'none';
    const player1HTML = document.querySelector('.player1');
    const player2HTML = document.querySelector('.player2');

    const messageMove = (index) => {
        messageMoveHTML.textContent = player[index].getName() + '\'s move';
    }

    const oneMove = (indexPlayer, x, y) => {
        player[indexPlayer].setMove(false);
        const indexOtherPlayer = Math.abs(indexPlayer - 1)
        player[indexOtherPlayer].setMove(true);
        Gameboard.setElemByGameBoard(player[indexPlayer].getElem(), x, y);
        const result = Gameboard.checkResult();
        if (result != 'next') {
            player[indexPlayer].setMove(false);
            player[indexOtherPlayer].setMove(false);
            // alert('Stop! Winner - ' + player[indexPlayer].getName());
            messageMoveHTML.textContent = player[indexPlayer].getName() + ' won';
            messageMoveHTML.style.color = 'red';
            return;
        }
        messageMove(indexOtherPlayer);
        return;
    }

    const creatPanelGameBoard = () => {
        for (let i = 0; i < Gameboard.getRowGameBoard(); i++) {
            let rowElemGameBoard = document.createElement('div');
            rowElemGameBoard.setAttribute('class', 'rowElemGameBoard');
            for (let j = 0; j < Gameboard.getRowGameBoard(); j++) {
                let elemGameBoard = document.createElement('div');
                elemGameBoard.addEventListener('click', () => {
                    if (elemGameBoard.textContent == '') {
                        for (let z = 0; z < 2; z++) {
                            if (player[z].getMove() && !elemGameBoard.hasChildNodes()) {
                                elemGameBoard.value = player[z].getElem();
                                const elemImage = ElementImage(player[z].getElem());
                                elemGameBoard.appendChild(elemImage.getElem());
                                oneMove(z, i, j);
                                return;
                            }
                        }
                    }
                });
                rowElemGameBoard.appendChild(elemGameBoard);
            }
            gameBoardHTML.appendChild(rowElemGameBoard);
        }
    }

    const start = () => {
        startButton.style.display = 'none';
        messageMoveHTML.style.display = 'block';

        const firstPlayer = Math.floor(Math.random() * 2);
        messageMove(firstPlayer);
        player[firstPlayer].setMove(true);

        Gameboard.setGameBoard(newBoard);

        creatPanelGameBoard();
    }

    const addPlayer = () => {
        let messageByPanelPlayer = document.querySelector('.messageByPanelPlayer');
        const name = document.getElementById('name');

        if (!player[0]) {
            messageByPanelPlayer.textContent = 'Enter second player name';
            player.push(Player(name.value, 'x'));
            name.value = '';
            name.focus();
            return;
        }

        if (player[0] && !player[1]) {
            player[1] = Player(name.value, 'o');
            panelPlayer.style.display = 'none';
            startButton.style.display = 'block';
            startButton.focus();
            winnerHTML.style.display = 'block';
            player1HTML.textContent = 'First player: ' + player[0].getName() + ' - ' + player[0].getElem();
            player2HTML.textContent = 'Second player: ' + player[1].getName()  + ' - ' + player[1].getElem();
            return;
        }
    }

    let addPlayerButton = document.getElementById('addPlayer');
    addPlayerButton.addEventListener('click', addPlayer);

    startButton.addEventListener('click', start);

    return {

    }
})();