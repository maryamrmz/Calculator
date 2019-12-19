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
}

// Get operands
function getOperand(operation) {
    switch (operation) {
        case "+":
            showRes.value += " + ";
            showAns.innerHTML = showRes.value;
            showRes.value = "";
            break;
        case "-":
            showRes.value += " - ";
            showAns.innerHTML = showRes.value;

            break;
        case "*":
            showRes.value += " * ";
            showAns.innerHTML = showRes.value;

            break;
        case "/":
            showRes.value += " / ";
            showAns.innerHTML = showRes.value;

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
                showAns.innerHTML = `1 / (${showRes.value})`;
                showRes.value = 1 / showRes.value;
            }
            break;
        case "⌦":
            if (showRes.value != "") {
                showRes.value = showRes.value.substring(
                    0,
                    showRes.value.length - 1
                );
            }
            break;
    }
}

// Get compute
function computed() {
    var answer = Math.max(+eval(showRes.value));
    showAns.innerHTML = `${showRes.value} = `;
    showRes.value = answer;
}

// Get percent
function getPercent() {
    if (
        (showAns.innerHTML != "" && showAns.innerHTML.includes("=")) ||
        showAns.innerHTML.includes("√") ||
        showAns.innerHTML.includes("sqrt") ||
        showAns.innerHTML.includes("cube")
    ) {
        showRes.value = showRes.value / 100;
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
