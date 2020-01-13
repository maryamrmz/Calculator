+(function(app) {
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

    // Switch between memory and history pages
    elms.changePage.forEach(page => {
        page.onclick = function changePage(event) {
            var e = event.target.innerText;
            console.log(typeof e);
            console.log(e);
            switch (e) {
                case "history":
                    console.log(1);
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
                case "memory":
                    vars.filter = 1;
                    elms.memoryBorder.classList.add("border");
                    elms.historyBorder.classList.remove("border");
                    elms.pHistory.style.display = "none";
                    elms.pMemory.style.display = "flex";
                    elms.trashHistory.style.display = "none";
                    elms.showHistory.style.display = "none";
                    elms.showMemory.style.display = "flex";
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
    };

    // Add memory screen
    elms.addedMemory.onclick = function addedMemory() {
        if (elms.showMemory.innerHTML === "") {
            elms.showMemory.innerHTML = `
        <li class="input inputMemory">${elms.showRes.value}</li>
    `;
        }
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

    // Recall memory button
    elms.recallMemory.onclick = function recallMemory() {
        elms.showRes.value = document.querySelector(".inputMemory").innerHTML;
    };

    // Delete memory screen
    elms.deleteMemory.onclick = function deletedMemory() {
        elms.showMemory.innerHTML = "";
        elms.trashMemory.style.display = "none";
        elms.pMemory.style.display = "flex";
        elms.opacity.forEach(el => {
            el.classList.add("disabled");
            el.classList.add("opacity");
        });
    };

    // Clear memory button
    elms.clearMemory.onclick = function clearMemory() {
        app.deletedMemory();
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

    document.addEventListener(
        "click",
        function(e) {
            if (
                elms.navigation != e.target &&
                isDescendant(elms.navigation, e.target)
            ) {
                elms.navigation.style.width = "0";
                elms.navigation.style.padding = "0";
            }
        },
        false
    );

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
