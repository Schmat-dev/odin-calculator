let currentNum = 0
let lastResult = 0
let result = 0
const display = document.querySelector("#display")
let operator = ""

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
        return a / b
};

function operate(operator, lastResult, currentNum) {
    if (operator === "add") {
        return add(lastResult, currentNum);
    };

    if(operator === "subtract") {
        return subtract(lastResult, currentNum);
    };

    if(operator === "multiply") {
        return multiply(lastResult, currentNum);
    };

    if(operator === "divide") {
        if (currentNum === 0) {
            return "A Snarky Message"
        } else {
            return divide(lastResult, currentNum);
        };
    };
}

document.querySelector("#clear").addEventListener("click", () => {
    currentNum = 0;
    lastResult = 0;
    result = 0;
    displayContent = "";
    display.innerHTML = "";
    currentOp = "";
});

document.querySelector("#one").addEventListener("click", () => {
    currentNum = currentNum * 10 + 1;
    display.innerHTML = currentNum;
    console.log(currentNum);
});

document.querySelector("#two").addEventListener("click", () => {
    currentNum = currentNum * 10 + 2;
    display.innerHTML = currentNum;
    console.log(currentNum);
});

document.querySelector("#three").addEventListener("click", () => {
    currentNum = currentNum * 10 + 3;
    display.innerHTML = currentNum;
    console.log(currentNum);
});

document.querySelector("#four").addEventListener("click", () => {
    currentNum = currentNum * 10 + 4;
    display.innerHTML = currentNum;
    console.log(currentNum);
})

document.querySelector("#five").addEventListener("click", () => {
    currentNum = currentNum * 10 + 5;
    display.innerHTML = currentNum;
    console.log(currentNum);
});

document.querySelector("#six").addEventListener("click", () => {
    currentNum = currentNum * 10 + 6;
    display.innerHTML = currentNum;
    console.log(currentNum);
});

document.querySelector("#seven").addEventListener("click", () => {
    currentNum = currentNum * 10 + 7;
    display.innerHTML = currentNum;
    console.log(currentNum);
})

document.querySelector("#eight").addEventListener("click", () => {
    currentNum = currentNum * 10 + 8;
    display.innerHTML = currentNum;
    console.log(currentNum);
});

document.querySelector("#nine").addEventListener("click", () => {
    currentNum = currentNum * 10 + 9;
    display.innerHTML = currentNum;
    console.log(currentNum);
});

document.querySelector("#zero").addEventListener("click", () => {
    currentNum = currentNum * 10 + 0;
    display.innerHTML = currentNum;
    console.log(currentNum);
});

document.querySelector("#add").addEventListener("click", () => {
    if (operator === "add" || operator === "subtract" || operator === "divide" || operator === "multiply") {
            result = (operate(operator, lastResult, currentNum));
            display.innerHTML = result;
            lastResult = result
            console.log("why")
    } else if (operator === "") {
        lastResult = currentNum;
    }
    currentNum = 0;
    operator = "add";
});

document.querySelector("#subtract").addEventListener("click", () => {
    if (operator === "add" || operator === "subtract" || operator === "divide" || operator === "multiply") {        result = (operate(operator, lastResult, currentNum));
        display.innerHTML = result;
        lastResult = result
        console.log("why")
} else if (operator === "") {
    lastResult = currentNum;
}
currentNum = 0;
operator = "subtract";
});

document.querySelector("#multiply").addEventListener("click", () => {
    if (operator === "add" || operator === "subtract" || operator === "divide" || operator === "multiply") {        result = (operate(operator, lastResult, currentNum));
        display.innerHTML = result;
        lastResult = result
        console.log("why")
} else if (operator === "") {
    lastResult = currentNum;
}
currentNum = 0;
operator = "multiply";
});

document.querySelector("#divide").addEventListener("click", () => {
    if (operator === "add" || operator === "subtract" || operator === "divide" || operator === "multiply") {        result = (operate(operator, lastResult, currentNum));
        display.innerHTML = result;
        lastResult = result
        console.log("why")
} else if (operator === "") {
    lastResult = currentNum;
}
currentNum = 0;
operator = "divide";
});


document.querySelector('#equals').addEventListener("click", () => {
    result = (operate(operator, lastResult, currentNum));
    display.innerHTML = result;
    lastResult = result
    operator = "equals";
});

document.querySelector('#clear').addEventListener("click", () => {
    lastResult = 0;
    currentNum = 0;
    operator = "";
    display.innerHTML = "";
    displayContent = 0
})