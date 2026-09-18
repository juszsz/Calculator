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

// number buttons
const numBtns = {
    btn0: document.querySelector("#btn0"),
    btn2: document.querySelector("#btn2"),
    btn3: document.querySelector("#btn3"),
    btn1: document.querySelector("#btn1"),
    btn4: document.querySelector("#btn4"),
    btn5: document.querySelector("#btn5"),
    btn6: document.querySelector("#btn6"),
    btn7: document.querySelector("#btn7"),
    btn8: document.querySelector("#btn8"),
    btn9: document.querySelector("#btn9"),
}

numBtns.btn0.addEventListener("click", () => {
    alert("Clicked!");
})