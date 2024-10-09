let display = document.getElementById('display');
let currentOperand = '';
let expression = '';

function appendNumber(number) {
    currentOperand = currentOperand.toString() + number.toString();
    expression += number.toString();
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '' && op !== '-') return; // Allow negative numbers
    if (currentOperand !== '') {
        expression += ' ' + op + ' ';
        currentOperand = '';
    }
    updateDisplay();
}

function compute() {
    try {
        expression = eval(expression).toString();
        currentOperand = expression;
    } catch (error) {
        expression = 'Error';
    }
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    expression = '';
    updateDisplay();
}

function updateDisplay() {
    display.innerText = expression;
}
