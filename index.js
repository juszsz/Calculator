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

let numOne = "";
let numTwo = "";
function maxNum(numOne, numTwo) {
    if (numOne.length > 12 || numTwo.length > 12) {
        alert("Error, Max digit limit!");
        numOne = ""
        display.numOne.textContent = 0
    }
}
function add(num1, num2) {
    return num1 + num2;
}

numBtns.btn0.addEventListener("click", () => {
    maxNum(numOne, numTwo)
    display.numOne.textContent += 0;
    numOne += "0";
    console.log(numOne);
})

numBtns.btn1.addEventListener("click", () => {
    display.numOne.textContent += 1;
    numOne += "1";
    console.log(numOne);
})

numBtns.btn2.addEventListener("click", () => {
    display.numOne.textContent += 2;
    numOne += 2;
    console.log(numOne);
})

numBtns.btn3.addEventListener("click", () => {
    display.numOne.textContent += 3;
    numOne += 3;
    console.log(numOne);
})

numBtns.btn4.addEventListener("click", () => {
    display.numOne.textContent += 4;
    numOne += 4;
    console.log(numOne);
})

numBtns.btn5.addEventListener("click", () => {
    display.numOne.textContent += 5;
    numOne += 5;
    console.log(numOne);
})

numBtns.btn6.addEventListener("click", () => {
    display.numOne.textContent += 6;
    numOne += 6;
    console.log(numOne);
})

numBtns.btn7.addEventListener("click", () => {
    display.numOne.textContent += 7;
    numOne += 7;
    console.log(numOne);
})

numBtns.btn8.addEventListener("click", () => {
    display.numOne.textContent += 8;
    numOne += 8;
    console.log(numOne);
})

numBtns.btn9.addEventListener("click", () => {
    display.numOne.textContent += 9;
    numOne += 9;
    console.log(numOne);
})

console.log(numOne)