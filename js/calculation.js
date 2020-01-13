+(function(app) {
    var elms = app.elements,
        vars = app.variables;

    // Get operands
    elms.operations.forEach(operation => {
        operation.onclick = function getOperand(event) {
            var result = elms.showRes.value;
            elms.showRes.value = "";
            vars.fullPhrase += result;
            var e = event.target.getAttribute("value");
            var ans = elms.showAns.innerHTML;
            switch (e) {
                case "+":
                    if (elms.showAns.innerHTML.match(/ - $/)) {
                        ans.charAt(ans.length - 2).replace("-", "+");
                    }
                    if (
                        vars.fullPhrase.charAt(vars.fullPhrase.length - 2) !==
                        "+"
                    ) {
                        elms.showAns.innerHTML += result + " + ";
                        vars.fullPhrase += " + ";
                    } else if (result.includes("-")) {
                        elms.showAns.innerHTML += result + " + ";
                        vars.fullPhrase += " + ";
                    }
                    break;
                case "-":
                    if (
                        vars.fullPhrase.charAt(vars.fullPhrase.length - 2) !==
                        "-"
                    ) {
                        elms.showAns.innerHTML += result + " - ";
                        vars.fullPhrase += " - ";
                    } else if (result.includes("-")) {
                        elms.showAns.innerHTML += result + " - ";
                        vars.fullPhrase += " - ";
                    }
                    break;
                case "*":
                    if (
                        vars.fullPhrase.charAt(vars.fullPhrase.length - 2) !==
                        "*"
                    ) {
                        elms.showAns.innerHTML += result + " * ";
                        vars.fullPhrase += " * ";
                    } else if (result.includes("-")) {
                        elms.showAns.innerHTML += result + " * ";
                        vars.fullPhrase += " * ";
                    }
                    break;
                case "/":
                    if (
                        vars.fullPhrase.charAt(vars.fullPhrase.length - 2) !==
                        "/"
                    ) {
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
                    break;
                case "root":
                    elms.showAns.innerHTML = `√(${result})`;
                    elms.showRes.value = Math.sqrt(result);
                    app.addedHistory();
                    vars.fullPhrase = "";
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
    };
})(app);
