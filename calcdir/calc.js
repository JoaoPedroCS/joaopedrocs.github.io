let display = document.getElementById('display');
let firstinput = '0';
let secondinput = '';
let answer = '0';
let selectedoperator = '';
let selectedOperatorButton = null;
let txt = 'ac';
let stage = 1;
let decimaltimes = 0
let firstInt = 0
let secondInt = 0
let summrounding = 0


display.value = firstinput;

function appendNumber(number) {
    if (stage === 1 && firstinput === '0') {
        firstinput = number;
        display.value = firstinput; 
        if (number != '0') {
            toC();
        }
    } else if (stage === 1){
        firstinput += number;
        display.value = firstinput;
    } else if (stage === 2 && secondinput === '') {
        secondinput = number;
        display.value = secondinput;
        selectedOperatorButton.classList.remove('btn-operator-selected');
    } else if (stage === 2 && secondinput != '') {
        if (secondinput != '0') {
            secondinput += number;
            display.value = secondinput;
        } else {
            secondinput = number;
            display.value = secondinput;
        }
        selectedOperatorButton.classList.remove('btn-operator-selected');
    }
}

function performOperation(x) {
    if (stage === 1) {
        operator = x;
        highlightOperatorButton(x);
        secondinput = ''
    } else if(stage === 2 && secondinput === '') {
        operator = x;
        highlightOperatorButton(x);
    } else if (stage === 2 && secondinput != '') {
        calculateResult();
        operator = x;
        highlightOperatorButton(x);
    }
    stage = 2;
}

function clearDisplay() {
    if (txt === 'ac') {
        firstinput = '0';
        secondinput = '';
        display.value = firstinput;
        selectedOperatorButton.classList.remove('btn-operator-selected');
        selectedOperatorButton = null;
        stage = 1;
    } else if (stage === 1) {
        firstinput = '0';
        display.value = firstinput;
        toAC();
    } else if (stage === 2) {
        secondinput = '0';
        display.value = secondinput;
        selectedOperatorButton.classList.add('btn-operator-selected');
        toAC();
    }
}

function calculateResult() {
    try {
        if (secondinput != '' && operator != '') {stage = 2}
        if (stage === 2) {
            firstInt = parseInt(firstinput.toString().replace('.', ''))
            secondInt = parseInt(secondinput.toString().replace('.', ''))
            if ((firstInt/firstinput)>=(secondInt/secondinput)){summrounding = (firstInt/firstinput)}else{summrounding = (secondInt/secondinput)}
            decimaltimes = firstInt/Number(firstinput);
            decimaltimes *= secondInt/Number(secondinput);
            if (secondinput != '') {
                if (operator === '+') {
                    answer = String((Number(firstinput)*summrounding + Number(secondinput)*summrounding)/summrounding);
                } else if (operator === '-') {
                    answer = String((Number(firstinput)*summrounding - Number(secondinput)*summrounding)/summrounding);
                } else if (operator === '*') {
                    answer = String(Number(firstInt) * Number(secondInt) / decimaltimes);
                } else if (operator === '/') {
                    if (secondinput === '0') throw new Error('Error');
                    answer = String(Number(firstinput) / Number(secondinput));
                }
                firstinput = answer
                if (selectedOperatorButton) {
                    selectedOperatorButton.classList.remove('btn-operator-selected');
                }
            } else {
                secondinput = firstinput
                if (operator === '+') {
                    answer = String(Number(firstinput) + Number(secondinput));
                } else if (operator === '-') {
                    answer = String(Number(firstinput) - Number(secondinput));
                } else if (operator === '*') {
                    answer = String(Number(firstinput) * Number(secondinput));
                } else if (operator === '/') {
                    if (secondinput === '0') throw new Error('Error');
                    answer = String(Number(firstinput) / Number(secondinput));
                }
                firstinput = answer
                selectedOperatorButton.classList.remove('btn-operator-selected');
            }
            display.value = firstinput;
            stage = 1
        } else {
            display.value = firstinput;
        }

        if (selectedOperatorButton) {
            selectedOperatorButton = null
        }
        
    } catch (error) {
        display.value = 'Error';
        answer = '0';
        firstinput = '0';
        secondinput = '0';
        operator = '';
    }
}

function negative() {
    if (!selectedOperatorButton) {
        firstinput = String(-1* Number(firstinput))
        display.value = firstinput
    } else {
        secondinput = String(-1 * Number(secondinput));
        display.value = secondinput
    }
}

function percentage() {
    if (!selectedOperatorButton) {
        firstinput = String(0.01* Number(firstinput))
        display.value = firstinput
    } else {
        secondinput = String(0.01 * Number(secondinput));
        display.value = secondinput
    }
}

function decimal() {
    if (!selectedOperatorButton) {
        if (!firstinput.includes('.')) {
            firstinput += '.';
            display.value = firstinput;
        }
    } else {
        if (!secondinput.includes('.')) {
            secondinput += '.';
            display.value = secondinput;
        }
    }
}

function highlightOperatorButton(operator) {
    if (selectedOperatorButton) {
        selectedOperatorButton.classList.remove('btn-operator-selected');
    }

    selectedOperatorButton = document.getElementById(operator);
    selectedOperatorButton.classList.add('btn-operator-selected');
}
function toC() {
    document.getElementById("ac").textContent="C";
    txt = 'c';
}
function toAC() {
    document.getElementById("ac").textContent="AC";
    txt = 'ac';
}