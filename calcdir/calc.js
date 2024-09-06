let display = document.getElementById('display');
let firstinput = '0';
let secondinput = '';
let operator = '';
let selectedOperatorButton = null;

display.value = firstInput


function appendNumber(number) {
    if (!selectedOperatorButton && firstinput === '0') {
        firstinput = number;
        display.value = firstinput; 
    } else if (){
        currentInput += number
    }
    if (selectedOperatorButton) {}
    
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