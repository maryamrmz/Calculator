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
            addedHistory();
            break;
        case "root":
            showAns.innerHTML = `√(${result}) =`;
            showRes.value = Math.sqrt(result);
            addedHistory();
            break;
        case "pow":
            showAns.innerHTML = `sqrt(${result}) =`;
            showRes.value = Math.pow(result, 2);
            addedHistory();
            break;
        case "cube":
            showAns.innerHTML = `cube(${result}) =`;
            showRes.value = Math.pow(result, 3);
            addedHistory();
            break;
        case "inverse":
            showAns.innerHTML = `1 / (${result}) =`;
            showRes.value = 1 / result;
            addedHistory();
            break;
        case "⌦":
            showRes.value = result.substring(0, result.length - 1);
            break;
    }
}

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

// Get compute
function computed() {
    fullPhrase += showRes.value;
    isComputed = true;
    var answer = Math.max(+eval(fullPhrase));
    showAns.innerHTML = `${fullPhrase} = `;
    showRes.value = answer;
    addedHistory();
    fullPhrase = "";
}
