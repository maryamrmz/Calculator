function getNumber(e) {
    var showRes = document.getElementById("input");

    if (showRes.value.includes("=")) return (showRes.value = "");

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

function getDecimal() {
    document.getElementById("input").value += ".";
}

function clearScreen() {
    document.getElementById("input").value = "";
}

function getOperation(operation) {
    var showRes = document.getElementById("input");
    switch (operation) {
        case "+":
            showRes.value += "+";
            break;
        case "-":
            showRes.value += "-";
            break;
        case "*":
            showRes.value += "*";
            break;
        case "/":
            showRes.value += "/";
            break;
        case "+/-":
            showRes.value += "-" + showRes.value;
            break;
        case "√":
            if (showRes.value != "") {
                showRes.value =
                    "√" + showRes.value + "= " + Math.sqrt(showRes.value);
            }
            break;
        case "pow":
            if (showRes.value != "") {
                showRes.value = "= " + Math.pow(showRes.value, 2);
            }
            break;
        case "cube":
            if (showRes.value != "") {
                showRes.value = "= " + Math.pow(showRes.value, 3);
            }
            break;
        case "inverse":
            if (showRes.value != "") {
                showRes.value = "= " + 1 / showRes.value;
            }
    }
}

function complete() {
    var showRes = document.getElementById("input"),
        answer = Math.max(+eval(showRes.value));
    showRes.value = "= " + answer;
}

function showNav() {
    document.querySelector(".navigation").style.display = "block";
    document.querySelector(".navigation").style.marginTop = "20px";
}

function hideNav() {
    document.querySelector(".navigation").style.display = "none";
}
