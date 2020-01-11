// Get operands
function getOperand(operation) {
    var result = showRes.value;
    showRes.value = "";
    fullPhrase += result;
    if (
        showAns.innerHTML.includes("√") ||
        showAns.innerHTML.includes("sqrt") ||
        showAns.innerHTML.includes("cube") ||
        showAns.innerHTML.includes("1 /")
    ) {
        showRes.value = "";
        showAns.innerHTML = "";
    }

    switch (operation) {
        case "+":
            if (
                fullPhrase.charAt(fullPhrase.length - 2) !== "+" &&
                showAns.innerHTML.charAt(showAns.innerHTML.length - 2) !==
                    "-" &&
                showAns.innerHTML.charAt(showAns.innerHTML.length - 2) !==
                    "*" &&
                showAns.innerHTML.charAt(showAns.innerHTML.length - 2) !== "/"
            ) {
                showAns.innerHTML += result + " + ";
                fullPhrase += " + ";
            }
            break;
        case "-":
            if (
                fullPhrase.charAt(fullPhrase.length - 2) !== "-" &&
                showAns.innerHTML.charAt(showAns.innerHTML.length - 2) !==
                    "+" &&
                showAns.innerHTML.charAt(showAns.innerHTML.length - 2) !==
                    "*" &&
                showAns.innerHTML.charAt(showAns.innerHTML.length - 2) !== "/"
            ) {
                showAns.innerHTML += result + " - ";
                fullPhrase += " - ";
            }
            break;
        case "*":
            if (
                fullPhrase.charAt(fullPhrase.length - 2) !== "*" &&
                showAns.innerHTML.charAt(showAns.innerHTML.length - 2) !==
                    "+" &&
                showAns.innerHTML.charAt(showAns.innerHTML.length - 2) !==
                    "-" &&
                showAns.innerHTML.charAt(showAns.innerHTML.length - 2) !== "/"
            ) {
                showAns.innerHTML += result + " * ";
                fullPhrase += " * ";
            }
            break;
        case "/":
            if (
                fullPhrase.charAt(fullPhrase.length - 2) !== "/" &&
                showAns.innerHTML.charAt(showAns.innerHTML.length - 2) !==
                    "+" &&
                showAns.innerHTML.charAt(showAns.innerHTML.length - 2) !==
                    "-" &&
                showAns.innerHTML.charAt(showAns.innerHTML.length - 2) !== "*"
            ) {
                showAns.innerHTML += result + " / ";
                fullPhrase += " / ";
            }
            break;
        case "+/-":
            cases = "minusPlus";
            showRes.value = result * -1;
            break;
        case "root":
            showAns.innerHTML = `√(${result}) =`;
            showRes.value = Math.sqrt(result);
            addedHistory();
            fullPhrase = "";
            break;
        case "pow":
            showAns.innerHTML = `sqrt(${result}) =`;
            showRes.value = Math.pow(result, 2);
            fullPhrase = "";
            addedHistory();
            break;
        case "cube":
            showAns.innerHTML = `cube(${result}) =`;
            showRes.value = Math.pow(result, 3);
            fullPhrase = "";
            addedHistory();
            break;
        case "inverse":
            showAns.innerHTML = `1 / (${result}) =`;
            showRes.value = 1 / result;
            fullPhrase = "";
            addedHistory();
            break;
        case "⌦":
            showRes.value = result.substring(0, result.length - 1);
            fullPhrase = "";
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
    if (cases === "minusPlus") {
        fullPhrase = showAns.innerHTML;
        showAns.innerHTML += showRes.value;
    }
    fullPhrase += showRes.value;
    isComputed = true;
    var answer = Math.max(+eval(fullPhrase));
    showAns.innerHTML = `${fullPhrase} = `;
    showRes.value = answer;
    addedHistory();
    fullPhrase = "";
    showAns.innerHTML = "";
}
