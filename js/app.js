// Define Variables
const showRes = document.getElementById("input"),
    showAns = document.getElementById("answer"),
    navigation = document.querySelector(".navigation");

// Get numbers
function getNumber(e) {
    if (
        showRes.value.includes("NaN") ||
        showRes.value.includes("Infinity") ||
        showRes.value.includes("undefined") ||
        showRes.value == 0
    )
        showRes.value = "";

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
    }
}

// Get decimal numbers
function getDecimal() {
    showRes.value += ".";
}

// Clear Screen
function clearScreen() {
    showRes.value = 0;
    showAns.innerHTML = "";
}

// Get operation
function getOperation(operation) {
    if (showRes.value.includes("=")) showRes.value = "";

    switch (operation) {
        case "+":
            showRes.value += " + ";
            break;
        case "-":
            showRes.value += " - ";
            break;
        case "*":
            showRes.value += " * ";
            break;
        case "/":
            showRes.value += " / ";
            break;
        case "+/-":
            showAns.innerHTML = `negate(${showRes.value})`;
            showRes.value = showRes.value * -1;
            break;
        case "root":
            if (showRes.value != "") {
                showAns.innerHTML = `√(${showRes.value})`;
                showRes.value = Math.sqrt(showRes.value);
            }
            break;
        case "pow":
            if (showRes.value != "") {
                showAns.innerHTML = `sqrt(${showRes.value})`;
                showRes.value = Math.pow(showRes.value, 2);
            }
            break;
        case "cube":
            if (showRes.value != "") {
                showAns.innerHTML = `cube(${showRes.value})`;
                showRes.value = Math.pow(showRes.value, 3);
            }
            break;
        case "inverse":
            if (showRes.value != "") {
                showAns.innerHTML = `1/(${showRes.value})`;
                showRes.value = 1 / showRes.value;
            }
    }
}

// Get compute
function computed() {
    var answer = Math.max(+eval(showRes.value));
    showAns.innerHTML = `${showRes.value} = `;
    showRes.value = answer;
}

// Show navigation
function showNav() {
    navigation.style.display = "block";
    navigation.style.marginTop = "20px";
}

// Hide navigation
function hideNav() {
    navigation.style.display = "none";
}
