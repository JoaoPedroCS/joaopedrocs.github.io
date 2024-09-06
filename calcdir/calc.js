let display = document.getElementById('display');
let firstinput = '0';
let secondinput = '';
let answer = '0';
let operator = '';
let selectedOperatorButton = null;
let txt = 'ac';

display.value = firstinput;

function appendNumber(number) {
    if (!selectedOperatorButton && firstinput === '0') {
        firstinput = number;
        display.value = firstinput; 
        if (number != '0') {
            toC();
        }
    } else if (!selectedOperatorButton){
        firstinput += number;
        display.value = firstinput;
    } else if (selectedOperatorButton && secondinput === '') {
        secondinput = number;
        display.value = secondinput;
        selectedOperatorButton.classList.remove('btn-operator-selected');
    } else if (selectedOperatorButton && secondinput != '') {
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
    if (!selectedOperatorButton && secondinput === '') {
        operator = x;
        highlightOperatorButton(x);
    } else if(!selectedOperatorButton && secondinput != '') {
        operator = x;
        highlightOperatorButton(x);
        secondinput = '0'
        firstinput = answer
    } else if (selectedOperatorButton && secondinput === '') {
        operator = x;
        highlightOperatorButton(x);
    } else if (selectedOperatorButton && secondinput != '') {
        calculateResult()
        operator = x;
        highlightOperatorButton(x);

    }
}

function clearDisplay() {
    if (txt === 'ac') {
        firstinput = '0';
        secondinput = '';
        display.value = firstinput;
        selectedOperatorButton.classList.remove('btn-operator-selected');
        selectedOperatorButton = null;
    } else if (!selectedOperatorButton) {
        firstinput = '0';
        display.value = firstinput;
        toAC();
    } else if (selectedOperatorButton) {
        secondinput = '0';
        display.value = secondinput;
        toAC();
        selectedOperatorButton.classList.add('btn-operator-selected');
    }


}

function negative() {
    
}


function calculateResult() {
    try {
        if (operator != '') {
            if (secondinput != '') {
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
            display.value = answer;
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