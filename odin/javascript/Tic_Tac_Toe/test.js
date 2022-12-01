const testList = [
    {
        1: [[[1, 2, 'x'],
        [4, 5, 'x'],
        [7, 8, 'x']], 'x']
    },
    {
        2: [[[1, 2, 3],
        [4, 5, 6],
        ['x', 'x', 'x']], 'x']
    },
    {
        3: [[['x', 2, 3],
        [4, 'x', 6],
        [7, 8, 'x']], 'x']
    },
    {
        4: [[[1, 2, 'x'],
        [4, 'x', 6],
        ['x', 8, 9]], 'x']
    },
    {
        5: [[['x', 'x', 3],
        [4, 5, 6],
        [7, 8, 'x']], 'next']
    }
]

let q = 1;
for (const prop in testList) {
    Gameboard.setGameBoard(testList[prop][q][0]);
    let result = Gameboard.checkResult();
    if (result == testList[prop][q][1])
        console.log('Test ' + (Number(prop) + 1) + ' return true');
    else console.log('Test ' + (Number(prop) + 1) + ' return false ', result);
    q++;
}