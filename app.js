(function(app) {
    var elms = app.elements,
        vars = app.variables;

    // Get numbers
    elms.numbers.forEach(number => {
        number.onclick = function getNumber(event) {
            if (
                elms.showRes.value.includes("NaN") ||
                elms.showRes.value.includes("Infinity") ||
                elms.showRes.value.includes("undefined") ||
                elms.showRes.value == 0 ||
                vars.isComputed
            ) {
                elms.showRes.value = "";
                vars.isComputed = false;
            }
            if (
                elms.showAns.innerHTML.includes("√") ||
                elms.showAns.innerHTML.includes("sqrt") ||
                elms.showAns.innerHTML.includes("cube") ||
                elms.showAns.innerHTML.includes("1 /")
            ) {
                elms.showRes.value = "";
                elms.showAns.innerHTML = "";
            }
            var e = event.target.innerText;
            switch (e) {
                case "1":
                    elms.showRes.value += 1;
                    break;
                case "2":
                    elms.showRes.value += 2;
                    break;
                case "3":
                    elms.showRes.value += 3;
                    break;
                case "4":
                    elms.showRes.value += 4;
                    break;
                case "5":
                    elms.showRes.value += 5;
                    break;
                case "6":
                    elms.showRes.value += 6;
                    break;
                case "7":
                    elms.showRes.value += 7;
                    break;
                case "8":
                    elms.showRes.value += 8;
                    break;
                case "9":
                    elms.showRes.value += 9;
                    break;
                case "0":
                    elms.showRes.value += 0;
                    break;
                case ".":
                    if (!elms.showRes.value.includes(".")) {
                        elms.showRes.value += ".";
                    }
                    break;
            }
        };
    });

    // Get operands
    elms.operations.forEach(operation => {
        operation.onclick = function getOperand(event) {
            var result = elms.showRes.value;
            elms.showRes.value = "";
            vars.fullPhrase += result;
            var e = event.target.getAttribute("value"),
                condition =
                    vars.fullPhrase.charAt(vars.fullPhrase.length - 2) !==
                        "+" &&
                    vars.fullPhrase.charAt(vars.fullPhrase.length - 2) !==
                        "-" &&
                    vars.fullPhrase.charAt(vars.fullPhrase.length - 2) !==
                        "*" &&
                    vars.fullPhrase.charAt(vars.fullPhrase.length - 2) !== "/";
            switch (e) {
                case "+":
                    if (condition) {
                        elms.showAns.innerHTML += result + " + ";
                        vars.fullPhrase += " + ";
                    } else if (result.includes("-")) {
                        elms.showAns.innerHTML += result + " + ";
                        vars.fullPhrase += " + ";
                    }
                    break;
                case "-":
                    if (condition) {
                        elms.showAns.innerHTML += result + " - ";
                        vars.fullPhrase += " - ";
                    } else if (result.includes("-")) {
                        elms.showAns.innerHTML += result + " - ";
                        vars.fullPhrase += " - ";
                    }
                    break;
                case "*":
                    if (condition) {
                        elms.showAns.innerHTML += result + " * ";
                        vars.fullPhrase += " * ";
                    } else if (result.includes("-")) {
                        elms.showAns.innerHTML += result + " * ";
                        vars.fullPhrase += " * ";
                    }
                    break;
                case "/":
                    if (condition) {
                        elms.showAns.innerHTML += result + " / ";
                        vars.fullPhrase += " / ";
                    } else if (result.includes("-")) {
                        elms.showAns.innerHTML += result + " / ";
                        vars.fullPhrase += " / ";
                    }
                    break;
                case "+/-":
                    cases = "minusPlus";
                    elms.showRes.value = result * -1;
                    vars.fullPhrase += elms.showRes.value + " ";
                    break;
                case "root":
                    elms.showAns.innerHTML = `√(${result})`;
                    elms.showRes.value = Math.sqrt(result);
                    vars.fullPhrase = "";
                    app.addedHistory();
                    break;
                case "pow":
                    elms.showAns.innerHTML = `sqrt(${result})`;
                    elms.showRes.value = Math.pow(result, 2);
                    vars.fullPhrase = "";
                    app.addedHistory();
                    break;
                case "cube":
                    elms.showAns.innerHTML = `cube(${result})`;
                    elms.showRes.value = Math.pow(result, 3);
                    vars.fullPhrase = "";
                    app.addedHistory();
                    break;
                case "inverse":
                    elms.showAns.innerHTML = `1 / (${result})`;
                    elms.showRes.value = 1 / result;
                    vars.fullPhrase = "";
                    app.addedHistory();
                    break;
                case "⌦":
                    elms.showRes.value = result.substring(0, result.length - 1);
                    vars.fullPhrase = "";
                    break;
            }
        };
    });

    // Get percent
    elms.percentage.onclick = function getPercent() {
        var result = elms.showRes.value;
        elms.showRes.value = "";
        vars.fullPhrase += elms.showRes.value;
        if (elms.showHistory.innerHTML != "") {
            elms.showRes.value = (result / 100) * result;
            elms.showAns.innerHTML = elms.showRes.value;
        } else {
            elms.showRes.value = 0;
        }
        vars.fullPhrase = "";
        elms.showAns.innerHTML = "";
    };

    // Get compute
    elms.computing.onclick = function computed() {
        if (
            elms.showAns.innerHTML.includes("+") ||
            elms.showAns.innerHTML.includes("-") ||
            elms.showAns.innerHTML.includes("*") ||
            elms.showAns.innerHTML.includes("/")
        ) {
            if (vars.cases === "minusPlus") {
                vars.fullPhrase = elms.showAns.innerHTML;
                elms.showAns.innerHTML += elms.showRes.value;
            }
            vars.fullPhrase += elms.showRes.value;
            vars.isComputed = true;
            var answer = Math.max(+eval(vars.fullPhrase));
            elms.showAns.innerHTML = `${vars.fullPhrase} = `;
            elms.showRes.value = answer;
            app.addedHistory();
            vars.fullPhrase = "";
            elms.showAns.innerHTML = "";
        }
    };

    // Switch between memory and history pages
    elms.changePage.forEach(page => {
        page.onclick = function changePage(event) {
            var e = event.target.innerText;
            switch (e) {
                case "History":
                    vars.filter = 0;
                    elms.historyBorder.classList.add("border");
                    elms.memoryBorder.classList.remove("border");
                    elms.pHistory.style.display = "flex";
                    elms.trashMemory.style.display = "none";
                    elms.pMemory.style.display = "none";
                    elms.showMemory.style.display = "none";
                    if (elms.showHistory.innerHTML) {
                        elms.showMemory.style.display = "none";
                        elms.showHistory.style.display = "block";
                        elms.pHistory.style.display = "none";
                        elms.trashHistory.style.display = "flex";
                        elms.trashMemory.style.display = "none";
                    }
                    break;
                case "Memory":
                    vars.filter = 1;
                    elms.memoryBorder.classList.add("border");
                    elms.historyBorder.classList.remove("border");
                    elms.pHistory.style.display = "none";
                    elms.pMemory.style.display = "flex";
                    elms.trashHistory.style.display = "none";
                    elms.showHistory.style.display = "none";
                    if (elms.showMemory.innerHTML) {
                        elms.showHistory.style.display = "none";
                        elms.showMemory.style.display = "block";
                        elms.pMemory.style.display = "none";
                        elms.trashMemory.style.display = "flex";
                        elms.trashHistory.style.display = "none";
                    }
                    break;
            }
        };
    });

    // Delete history screen
    elms.deleteHistory.onclick = function deletedHistory() {
        elms.showHistory.innerHTML = "";
        elms.trashHistory.style.display = "none";
        elms.pHistory.style.display = "flex";
        elms.showHistory.style.display = "none";
    };

    // Add history screen
    app.addedHistory = function() {
        elms.showHistory.innerHTML += `
        <li class="answer">${elms.showAns.innerHTML}</li>
        <li class="input">${elms.showRes.value}</li>
    `;
        if (elms.showHistory.innerHTML != "" && vars.filter === 0) {
            elms.pHistory.style.display = "none";
            elms.showHistory.style.display = "block";
            elms.trashHistory.style.display = "flex";
        }
    };

    // Delete memory screen
    app.deletedMemory = function() {
        elms.showMemory.innerHTML = "";
        elms.trashMemory.style.display = "none";
        elms.pMemory.style.display = "flex";
        elms.showMemory.style.display = "none";
        if (vars.filter === 0) {
            elms.pMemory.style.display = "none";
        }
        elms.opacity.forEach(el => {
            el.classList.add("disabled");
            el.classList.add("opacity");
        });
    };

    // Add memory function
    app.addedMemory = function() {
        if (elms.showMemory.innerHTML === "") {
            elms.showMemory.innerHTML = `
        <li class="input inputMemory">${elms.showRes.value}</li>
        <div class="listMemory">
            <a class="clearMemoryButton" href="#">MC</a>
            <a class="addedMemoryButton" href="#">M+</a>
            <a class="subtractButton" href="#">M-</a>
        </div>
    `;
        }

        document.querySelector(".clearMemoryButton").onclick =
            app.deletedMemory;

        document.querySelector(".addedMemoryButton").onclick = app.addedMemory;

        if (elms.showMemory.innerHTML !== "") {
            elms.opacity.forEach(el => {
                el.classList.remove("disabled");
                el.classList.remove("opacity");
            });
        }

        if (elms.showMemory.innerHTML != "" && vars.filter === 1) {
            elms.pMemory.style.display = "none";
            elms.showMemory.style.display = "block";
            elms.trashMemory.style.display = "flex";
        }
    };

    // Delete memory screen
    elms.deleteMemory.onclick = function deletedMemory() {
        app.deletedMemory();
    };

    // Clear memory button
    elms.clearMemory.onclick = function clearMemory() {
        app.deletedMemory();
    };

    // Recall memory button
    elms.recallMemory.onclick = function recallMemory() {
        elms.showRes.value = document.querySelector(".inputMemory").innerHTML;
    };

    // Add memory screen
    elms.addedMemory.onclick = function() {
        app.addedMemory();
    };

    // Subtract Memory
    elms.subtractMemory.onclick = function() {
        if (elms.showMemory.innerHTML !== "") {
            var input = document.querySelectorAll(".inputMemory");
            input.forEach(el => {
                var a = el.innerHTML;
                var b = eval(a - a);
                el.innerHTML = b;
            });
        }
    };

    // Store memory button
    elms.storeMemory.onclick = function storeMemory() {
        if (elms.showMemory.innerHTML !== "") {
            elms.showMemory.innerHTML += `
        <li class="input inputMemory">${elms.showRes.value}</li>
        <div class="listMemory">
            <a class="clearMemoryButton" href="#">MC</a>
            <a class="addedMemoryButton" href="#">M+</a>
            <a class="subtractButton" href="#">M-</a>
        </div>
    `;
        }

        document.querySelectorAll(".clearMemoryButton").forEach(el => {
            el.onclick = app.deletedMemory;
        });

        document.querySelectorAll(".addedMemoryButton").forEach(el => {
            el.onclick = app.addedMemory;
        });
    };

    // Clear Screen
    elms.clearScreen.onclick = function clearScreen() {
        elms.showRes.value = 0;
        elms.showAns.innerHTML = "";
        vars.fullPhrase = "";
    };

    // Clear input
    elms.clearResult.onclick = function clearResult() {
        elms.showRes.value = "";
    };

    // Close navbar when click on window
    document.onclick = function(e) {
        if (
            elms.navigation != e.target &&
            isDescendant(elms.navigation, e.target)
        ) {
            elms.navigation.style.width = "0";
            elms.navigation.style.padding = "0";
        }

        return false;
    };

    function isDescendant(parent, child) {
        var node = child.parentNode;
        while (node != null) {
            if (node == parent) {
                return false;
            }
            node = node.parentNode;
        }
        return true;
    }

    // Show navigation
    elms.showNav.onclick = function showNav(e) {
        e.stopPropagation();
        elms.navigation.style.width = "244px";
    };

    // Hide navigation
    elms.closeNav.onclick = function hideNav(e) {
        e.stopPropagation();
        elms.navigation.style.width = "0";
        elms.navigation.style.padding = "0";
    };
})(app);
