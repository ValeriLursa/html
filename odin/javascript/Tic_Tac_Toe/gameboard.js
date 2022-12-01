const Gameboard = (() => {
    let gameboard = [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
    let rowGameBoard = gameboard.length;
    let columnGameBoard = gameboard[0].length;

    const setGameBoard = (gameboardConst) => gameboard = gameboardConst;

    const getGameBoard = () => gameboard;

    const checkResult = () => {
        let bool = true;

        //check rows
        for (let i = 0; i < rowGameBoard; i++) {
            bool = true;
            const firstElem = gameboard[i][0];
            for (let j = 1; j < columnGameBoard; j++) {
                if (gameboard[i][j] != firstElem) bool = false;
            }
            if (bool) return 'Win';
        }

        //check columns
        for (let i = 0; i < columnGameBoard; i++) {
            bool = true;
            const firstElem = gameboard[0][i];
            for (let j = 1; j < rowGameBoard; j++) {
                if (gameboard[j][i] != firstElem) bool = false;
            }
            if (bool) return 'Win';
        }

        //check diagonals
        const firstElem = gameboard[0][0];
        bool = true;
        for (let i = 1; i < rowGameBoard; i++) {
            if (gameboard[i][i] != firstElem) bool = false;
        }
        if (bool) return 'Win';

        return 'Lose';
    }

    const setElemByGameNoard = (elem, x, y) => {
        if (x > 3 || x < 0) return 'error';
        if (y > 3 || y < 0) return 'error';

        gameboard[x][y] = elem;
    }

    return {
        setGameBoard, getGameBoard, checkResult, setElemByGameNoard
    }
})();
