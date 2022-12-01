const testList = [
    {
        1: [[[0, 0, 'x'],
        [0, 0, 'x'],
        [0, 0, 'x']], 'Win']
    },
    {
        2: [[[0, 0, 0],
        [0, 0, 0],
        ['x', 'x', 'x']], 'Win']
    },
    {
        3: [[['x', 0, 0],
        [0, 'x', 0],
        [0, 0, 'x']], 'Win']
    },
    {
        4: [[['x', 'x', 0],
        [0, 0, 0],
        [0, 0, 'x']], 'Lose']
    }
]

let  q = 1;
for (const prop in testList) {
    Gameboard.setGameBoard(testList[prop][q][0]);
    if (Gameboard.checkResult() == testList[prop][q][1])
        console.log(`Test $prop return true`);
    else console.log(`Test $prop return false`);
    q++;
}