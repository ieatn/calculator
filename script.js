let prev = document.querySelector('.prev')
let curr = document.querySelector('.curr')
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
    button.addEventListener('click', () => calculate(button.textContent))
})
equals.addEventListener('click', () => {
    prev.textContent = curr.textContent;
    curr.textContent = `=${1+1}`;
})


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
function calculate(op) {
    if (op === "+") {
        curr.textContent += "+"
        add()
    }
    if (op === "-") {
        curr.textContent += "-"
        subtract()
    }
    if (op === "x") {
        curr.textContent += "x"
        multiply()
    }
    if (op === "÷") {
        curr.textContent += "÷"
        divide()
    }
}
function add() {
    console.log('add')
}
function subtract() {
    console.log('sub')
}
function multiply() {
    console.log('multiply')
}
function divide() {
    console.log('divide')
}
