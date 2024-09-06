let display = document.getElementById('display');
let firstInput = '0';
let secondInput = '';
let operator = '';
let selectedOperatorButton = null;

display.value = currentInput


function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number
    }
    display.value = currentInput;
}

function performOperation(operator) {
    currentInput += operator;
    display.value = currentInput;

    highlightOperatorButton(operator);
}

function highlightOperatorButton(operator) {
    if (selectedOperatorButton) {
        selectedOperatorButton.classList.remove('btn-operator-selected');
    }

    selectedOperatorButton = document.getElementById(operator);
    selectedOperatorButton.classList.add('btn-operator-selected');
}

function negative() {
    currentInput += '*-1'
    display.value = '-' + display.value
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = '';
    display.value = currentInput;

    if (selectedOperatorButton) {
        selectedOperatorButton.classList.remove('btn-operator-selected');
        selectedOperatorButton = null;
    }
}

function calculateResult() {
    try {
        display.value = eval(currentInput);
        currentInput = display.value;

        if (selectedOperatorButton) {
            selectedOperatorButton.classList.remove('btn-operator-selected');
            selectedOperatorButton = null;
        }
    } catch (error) {
    display.value = 'Error';
    currentInput = '0';  // Reseta após erro
}
}
function calculateIntermediateResult() {
    try {
        if (operator === '+') {
            previousInput = String(Number(previousInput) + Number(currentInput));
        } else if (operator === '-') {
            previousInput = String(Number(previousInput) - Number(currentInput));
        } else if (operator === '*') {
            previousInput = String(Number(previousInput) * Number(currentInput));
        } else if (operator === '/') {
            if (currentInput === '0') throw new Error('Error');
            previousInput = String(Number(previousInput) / Number(currentInput));
        }
        display.value = previousInput;
        currentInput = '0';
    } catch (error) {
        display.value = 'Error';
        currentInput = '0';
        previousInput = '';
        operator = '';
    }
}