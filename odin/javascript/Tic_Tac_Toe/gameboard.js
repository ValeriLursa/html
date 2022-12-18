const Gameboard = (() => {
    let gameboard = [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
    let rowGameBoard = gameboard.length;
    let columnGameBoard = gameboard[0].length;
    let count = 0;

    const setGameBoard = (gameboardConst) => gameboard = gameboardConst;

    const getGameBoard = () => gameboard;

    const getRowGameBoard = () => rowGameBoard;

    const checkResult = () => {
        ++count;
        let bool = true;

        //check rows
        for (let i = 0; i < rowGameBoard; i++) {
            bool = true;
            const firstElem = gameboard[i][0];
            for (let j = 1; j < columnGameBoard; j++) {
                if (gameboard[i][j] != firstElem) bool = false;
            }
            if (bool) return firstElem;
        }

        //check columns
        for (let i = 0; i < columnGameBoard; i++) {
            bool = true;
            const firstElem = gameboard[0][i];
            for (let j = 1; j < rowGameBoard; j++) {
                if (gameboard[j][i] != firstElem) bool = false;
            }
            if (bool) return firstElem;
        }

        //check diagonals
        let firstElem = gameboard[0][0];
        bool = true;
        for (let i = 1; i < rowGameBoard; i++) {
            if (gameboard[i][i] != firstElem) bool = false;
        }
        if (bool) return firstElem;

        firstElem = gameboard[rowGameBoard - 1][0];
        bool = true;
        for (let i = 1; i < columnGameBoard; i++) {
            if (gameboard[rowGameBoard - i - 1][i] != firstElem) bool = false;
        }
        if (bool) return firstElem;

        //check draw

        if (count == 9) {
            return 'draw';
        }

        return 'next';
    }

    const setElemByGameBoard = (elem, x, y) => {
        if (x > 3 || x < 0) return 'error';
        if (y > 3 || y < 0) return 'error';

        gameboard[x][y] = elem;
    }

    return {
        setGameBoard, getGameBoard, checkResult, setElemByGameBoard, getRowGameBoard
    }
})();
