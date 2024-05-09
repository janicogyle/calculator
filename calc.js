let displayValue = '';
let operator = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    document.getElementById('display').value = displayValue;
}

function operate(op) {
    operator = op;
    displayValue += operator;
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString();
        operator = '';
    } catch (error) {
        document.getElementById('display').value = 'syntax error';
    }
}
