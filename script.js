let firstOperand = ''
let secondOperand = ''
let currentOperation = null

const prev = document.querySelector('.prev')
const curr = document.querySelector('.curr')
const numbers = document.querySelectorAll('[data-number]')
const operations = document.querySelectorAll('[data-operation]')
const clear = document.querySelector('.clear')
const del = document.querySelector('.delete')
const equals = document.querySelector('#equals-button')

// events
numbers.forEach((button) => {
    button.addEventListener('click', () => appendNum(button.textContent))
})
clear.addEventListener('click', () => clearScreen())
del.addEventListener('click', () => deleteNum())
operations.forEach((button) => {
    button.addEventListener('click', setOperation(button.textContent))
})
equals.addEventListener('click', evaluate())


// functions
function clearScreen() {
    curr.textContent = "";
    prev.textContent = "";
}
function deleteNum() {
    curr.textContent = curr.textContent
        .toString()
        .slice(0, -1)
}
function appendNum(num) {
    curr.textContent += num
}
function setOperation(operator) {
    if (currentOperation !== null) evaluate()
    firstOperand = currentOperationScreen.textContent
    currentOperation = operator
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`
    shouldResetScreen = true
}
function evaluate() {
    if (currentOperation == null) return
    if (currentOperation === '÷' && curr.textContent === '0') {
        alert("You can't divide by 0")
        return
    }
    curr.textContent = operate(currentOperation, firstOperand, secondOperand)
    secondOperand = curr.textContent
    prev.textContent = curr.textContent;
    curr.textContent = `=${1+1}`;
    currentOperation = null
}
function operate(op, a, b) {
    a = Number(a)
    b = Number(b)
    switch (op) {
        case '+':
            return add(a, b)
        case '-':
            return substract(a, b)
        case 'x':
            return multiply(a, b)
        case '÷':
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null
    }
}
function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}
