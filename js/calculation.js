(function(app) {
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
})(app);
