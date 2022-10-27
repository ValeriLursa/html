class Calculator {
    firstNumber = 0;
    secondNumber = 0;
    result = 0;

    constructor() {
    };

    add() {
        return this.firstNumber + this.secondNumber;
    }

    subtract() {
        return this.firstNumber - this.secondNumber;
    }

    multiply() {
        return this.firstNumber * this.secondNumber;
    }

    divide() {
        return this.firstNumber / this.secondNumber;
    }

    operate(operator) {
        switch (operator) {
            case '+': return this.add();
            case '-': return this.subtract();
            case '*': return this.multiply();
            case '/': return this.divide();
        }
    }
}