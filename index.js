// For the display
const display = {
    numOne: document.querySelector("#numOne"),
    operatorType: document.querySelector("#operatorType"),
    numTwo: document.querySelector("#numTwo"),
    equalSign: document.querySelector("#equalSign"),
    answer: document.querySelector("#answer"),
}

// Clear and Backspace Button
const clearBackSpace = {
    clearBtn: document.querySelector("#clearBtn"),
    backSpaceBtn: document.querySelector("#backSpaceBtn"),
}

// Operators amd the equal buttons
const operatorEqual = {
    addition: document.querySelector("#addition"),
    subtract: document.querySelector("#subtract"),
    multiply: document.querySelector("#multiply"),
    division: document.querySelector("#division"),
    equals: document.querySelector("#equals"),
}

let numOne = "";
let numTwo = "";
let operator = null;
let equal = null;

const btnCon = document.querySelector(".btnCon");
btnCon.addEventListener("click", (event) => {
    if(event.target.tagName === "BUTTON") {
        console.log(`You Clicked: ${event.target.textContent}`);
    }
    const value = event.target.textContent;
    if(!isNaN(value)) {
        if(operator === null) {
            if(numOne.length < 12 ) {
            numOne += value
            console.log(numOne)
            display.numOne.textContent += value
            }
        } else if(operator === "+" || operator === "-" || operator === "x" || operator === "/") {
            if(equal === null) {
                if(numTwo.length < 12 ) {
                numTwo += value
                console.log(numTwo)
                display.numTwo.textContent += value
                }
            }
        }
    }

    if(value === "+" || value === "-" || value === "x" || value === "/") {
            operator = value;
            display.operatorType.textContent = operator;
    }

    operate(operator, value, numOne, numTwo)

})

function operate(operator, value, numOne, numTwo) {
    if(value === "=") {
        equal = value;
        display.equalSign.textContent = value
        if(numOne != '' && numTwo != '') {
            if(operator === "+") {
            add(numOne, numTwo)
            } else if(operator === "-") {
                subtract(numOne, numTwo)
            } else if(operator === "x") {
                multiply(numOne, numTwo)
            } else if(operator === "/") {
                divide(numOne, numTwo)
            }
        }
    }
}

function add(num1, num2) {
    display.answer.textContent = Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    display.answer.textContent = Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    display.answer.textContent = Number(num1) * Number(num2);
}

function divide(num1, num2) {
    if(num2 === "0") {
        alert("Nice try!");
    } else {
        display.answer.textContent = Number(num1) / Number(num2);
    }
}