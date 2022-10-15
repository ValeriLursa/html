var arrayChoice = ["rock", "paper", "scissors"];
/*
Камень > Ножницы
Ножницы > Бумага
Бумага > Камень
*/

/*Добавление функции к объекту Array,
которая случайным образом выбирает число от 0 до длины массива
и возвращает элемент массива со случайным индексом*/
Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

//возвращает случайное значение из массива
function getComputerChoice(arrayChoice) {
    return arrayChoice.random();
}

//функция раунда
function round(playerSelection, computerSelection) {
    var resultLose = `You lose! ${computerSelection} beats ${playerSelection}`;
    var resultWin = `You win! ${playerSelection} beats ${computerSelection}`;
    var resultDraw = `Draw! ${playerSelection}`;
    var q = playerSelection + computerSelection;
    switch (q) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock": return resultWin;
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper": return resultDraw;
        default: return resultLose;
    }
}

//проверка ввода пользователя
function checkAnswerFromPlayer(answer) {
    let newAnswer = answer.toLowerCase();
    let belonging = arrayChoice.indexOf(newAnswer) != -1;
    return [belonging, newAnswer];
}

//игра из заданного извне количества раундов
function game(amountRounds) {
    const messageToPlayer = "Введите свой вариант: ";
    for (let i = 0; i < amountRounds; i++) {
        let answerFromPlayer = prompt(messageToPlayer);
        let resultCheckAnswerFromPlayer = checkAnswerFromPlayer(answerFromPlayer);
        if (!resultCheckAnswerFromPlayer[0]) {
            i--;
            console.log("Такой вариант не рассматривается!");
        }
        else {
            console.log(round(resultCheckAnswerFromPlayer[1], getComputerChoice(arrayChoice)));
        }
    }
}

//--Testing--
//проверка функции getComputerChoice
function testGetComputerChoice() {
    console.log(getComputerChoice(arrayChoice));
}

//проверка функции round
var playerSelection = "Rock";
//проверка крайних значений
function testRound() {
    console.log(round("rock", "scissors"));
    console.log(round("scissors", "rock"));
}

//проверка перебором
function testRoundArray() {
    for (let choice of arrayChoice) {
        for (let choice2 of arrayChoice) {
            console.log("Player: " + choice + " Computer: " + choice2 + " = " + round(choice, choice2));
        }
    }
}

//функция для вывода сообщения о результате тестирования функции checkAnswerFromPlayer
function messageForTestCheckAnswerFromPlayer(bool) {
    return `Должно вернуться ${bool}. Результат: `;
};

//проверка функции checkAnswerFromPlayer
function testCheckAnswerFromPlayer() {
    console.log(messageForTestCheckAnswerFromPlayer(true) + checkAnswerFromPlayer("Rock")[0]);
    console.log(messageForTestCheckAnswerFromPlayer(true) + checkAnswerFromPlayer("RoCk")[0]);
    console.log(messageForTestCheckAnswerFromPlayer(false) + checkAnswerFromPlayer("RoCks")[0]);
}
// testCheckAnswerFromPlayer()

//проверка функции game для одного раунда
function testGame() {
    var amountRounds = 2;
    game(amountRounds);
}

testGame();