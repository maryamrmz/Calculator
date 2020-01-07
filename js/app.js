// Define Variables
var showRes = document.getElementById("input"),
    showAns = document.getElementById("answer"),
    navigation = document.querySelector(".navigation"),
    showHistory = document.querySelector(".historyLi"),
    showMemory = document.querySelector(".memoryLi"),
    p = document.querySelector(".paragraph"),
    deleteHistory = document.querySelector(".deleteHistory"),
    filter = 0,
    fullPhrase = "",
    isComputed = false;

// Get numbers
function getNumber(e) {
    if (
        showRes.value.includes("NaN") ||
        showRes.value.includes("Infinity") ||
        showRes.value.includes("undefined") ||
        showRes.value == 0 ||
        isComputed
    ) {
        showRes.value = "";
        isComputed = false;
    }

    switch (e) {
        case 1:
            showRes.value += 1;
            break;
        case 2:
            showRes.value += 2;
            break;
        case 3:
            showRes.value += 3;
            break;
        case 4:
            showRes.value += 4;
            break;
        case 5:
            showRes.value += 5;
            break;
        case 6:
            showRes.value += 6;
            break;
        case 7:
            showRes.value += 7;
            break;
        case 8:
            showRes.value += 8;
            break;
        case 9:
            showRes.value += 9;
            break;
        case 0:
            showRes.value += 0;
            break;
        case ".":
            if (!showRes.value.includes(".")) {
                showRes.value += ".";
            }
    }
}

// Clear Screen
function clearScreen() {
    showRes.value = 0;
    showAns.innerHTML = "";
    fullPhrase = "";
}

// Get operands
function getOperand(operation) {
    var result = showRes.value;
    showRes.value = "";
    fullPhrase += result;
    switch (operation) {
        case "+":
            showAns.innerHTML = result + " + ";
            if (showAns.innerHTML.includes("+")) {
                showRes.value = "";
            }
            fullPhrase += " + ";
            break;
        case "-":
            showAns.innerHTML = result + " - ";
            if (showAns.innerHTML.includes("-")) {
                showRes.value = "";
            }
            fullPhrase += " - ";
            break;
        case "*":
            showAns.innerHTML = result + " * ";
            if (showAns.innerHTML.includes("*")) {
                showRes.value = "";
            }
            fullPhrase += " * ";
            break;
        case "/":
            showAns.innerHTML = result + " / ";
            if (showAns.innerHTML.includes("/")) {
                showRes.value = "";
            }
            fullPhrase += " / ";
            break;
        case "+/-":
            showAns.innerHTML = `negate(${result})`;
            showRes.value = result * -1;
            break;
        case "root":
            showAns.innerHTML = `√(${result})`;
            showRes.value = Math.sqrt(result);
            break;
        case "pow":
            showAns.innerHTML = `sqrt(${result})`;
            showRes.value = Math.pow(result, 2);
            break;
        case "cube":
            showAns.innerHTML = `cube(${result})`;
            showRes.value = Math.pow(result, 3);
            break;
        case "inverse":
            showAns.innerHTML = `1 / (${result})`;
            showRes.value = 1 / result;
            break;
        case "⌦":
            showRes.value = result.substring(0, result.length - 1);
            break;
    }
}

function list(event) {
    switch (event) {
        case "history":
            filter = 0;
            showMemory.style.display = "none";
            if (showHistory.innerHTML != "") {
                showHistory.style.display = "block";
                p.style.display = "none";
                deleteHistory.style.display = "block";
            } else {
                p.innerHTML = `<p>There's no history yet</p>`;
            }
            break;
        case "memory":
            filter = 1;
            p.innerHTML = `<p>There's nothing saved in memory</p>`;
            deleteHistory.style.display = "none";
            showHistory.style.display = "none";
            showMemory.style.display = "flex";
            if (p) {
                showMemory.style.display = "flex";
            }
            break;
    }
}

// Get compute
function computed() {
    fullPhrase += showRes.value;
    isComputed = true;
    var answer = Math.max(+eval(fullPhrase));
    showAns.innerHTML = `${fullPhrase} = `;
    showRes.value = answer;
    showHistory.innerHTML += `
        <li id="answer">${showAns.innerHTML}</li>
        <li id="input">${showRes.value}</li>
    `;
    if (showHistory.innerHTML != "") {
        showHistory.style.display = "block";
        deleteHistory.style.display = "block";
    }

    fullPhrase = "";
}

function deletedHistory() {
    showHistory.innerHTML = "";
    deleteHistory.style.display = "none";
}

function addMemory() {
    showMemory.innerHTML += `
        <li id="input">${showRes.value}</li>
    `;
}

function deleteMemory(params) {}

// Get percent
function getPercent() {
    var result = showRes.value;
    showRes.value = "";
    if (
        (showAns.innerHTML != "" && showAns.innerHTML.includes("=")) ||
        showAns.innerHTML.includes("√") ||
        showAns.innerHTML.includes("sqrt") ||
        showAns.innerHTML.includes("cube")
    ) {
        showRes.value = result / 100;
        showAns.innerHTML = showRes.value;
    } else {
        showRes.value = 0;
    }
}

// Show navigation
function showNav() {
    navigation.style.width = "214px";
}

// Hide navigation
function hideNav() {
    navigation.style.width = "0";
    navigation.style.padding = "0";
}
