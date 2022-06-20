let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let reset = false

const prev = document.querySelector('.prev')
const curr = document.querySelector('.curr')
const numbers = document.querySelectorAll('[data-number]')
const operatorBtn = document.querySelectorAll('[data-operation]')
const clear = document.querySelector('.clear')
const del = document.querySelector('.delete')
const equals = document.querySelector('#equals-button')

// events
numbers.forEach((button) => {
    button.addEventListener('click', () => appendNum(button.textContent))
})
clear.addEventListener('click', () => clearScreen())
del.addEventListener('click', () => deleteNum())
operatorBtn.forEach((button) => {
    button.addEventListener('click', () => setOperation(button.textContent))
})
equals.addEventListener('click', () => evaluate())


/* functions */

// clears everything and reset and leave 0
function clearScreen() {
    curr.textContent = "0"
    prev.textContent = ""
    firstOperand = ''
    secondOperand = ''
    currentOperation = null
}
// deletes the 0 and override with number
function resetScreen() {
    curr.textContent = "";
    reset = false
}
// slice off last number 
function deleteNum() {
    curr.textContent = curr.textContent
        .toString()
        .slice(0, -1)
}

function appendNum(num) {
    // base case: if screen is 0, reset it to exclude 0
    if (curr.textContent === '0' || reset) {
        resetScreen()
    }
    curr.textContent += num
}
// when you first press an operator, ignore if statement because currentOperation is null initially
// if curr is 1, firstoperand is 1
// currentOperation set to operator
// prev text is 1 + 
// curr text set to _
function setOperation(operator) {
    if (currentOperation !== null) evaluate() // pressing an operator when you pressed an operator is like equals button
    firstOperand = curr.textContent
    currentOperation = operator
    prev.textContent = `${firstOperand} ${currentOperation}` // 1 + _ 
    curr.textContent = ''
    reset = true
} 
// now we have firstoperand and operator, curr = secondoperand
// now all 3 to operate, and set curr text to answer
// prev text is 1 + 1 =
// reset currentoperation
function evaluate() {
    // base case: press equals button without operator, do nothing
    if (currentOperation == null || reset) return
    // edge case: divide by 0 error
    if (currentOperation === '÷' && curr.textContent === '0') {
        alert("You can't divide by 0")
        return
    }
    secondOperand = curr.textContent
    curr.textContent = roundResult(operate(currentOperation, firstOperand, secondOperand))
    prev.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null
}
function roundResult(number) {
    return Math.round(number * 1000) / 1000
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
