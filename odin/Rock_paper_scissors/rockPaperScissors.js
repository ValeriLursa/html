var arrayChoice = ["Rock", "Paper", "Scissors"];
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
        case "RockScissors":
        case "ScissorsPaper":
        case "PaperRock": return resultWin;
        case "RockRock":
        case "ScissorsScissors":
        case "PaperPaper": return resultDraw;
        default: return resultLose;
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
    console.log(round("Rock", "Scissors"));
    console.log(round("Scissors", "Rock"));
}

//проверка перебором
function testRoundArray() {
    for (let choice of arrayChoice) {
        for (let choice2 of arrayChoice) {
            console.log("Player: " + choice + " Computer: " + choice2 + " = " + round(choice, choice2));
        }
    }
}
