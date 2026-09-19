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
        } else if(operator === "+" || operator === "-" || operator === "x" || operator === "/" ) {
            if(numTwo.length < 12 ) {
            numTwo += value
            console.log(numTwo)
            display.numTwo.textContent += value
            }
        }
        
    }

    if(value === "+") {
            operator = value;
            display.operatorType.textContent = operator;
    }
})

function add(num1, num2) {
    return num1 + num2;
}