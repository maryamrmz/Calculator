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

function changePage(event) {
    switch (event) {
        case "history":
            filter = 0;
            historyBorder.classList.add("border");
            memoryBorder.classList.remove("border");
            pHistory.style.display = "flex";
            deleteMemory.style.display = "none";
            pMemory.style.display = "none";
            showMemory.style.display = "none";
            if (showHistory.innerHTML) {
                showMemory.style.display = "none";
                showHistory.style.display = "block";
                pHistory.style.display = "none";
                deleteHistory.style.display = "block";
                deleteMemory.style.display = "none";
            }
            break;
        case "memory":
            filter = 1;
            memoryBorder.classList.add("border");
            historyBorder.classList.remove("border");
            pHistory.style.display = "none";
            pMemory.style.display = "flex";
            deleteHistory.style.display = "none";
            showHistory.style.display = "none";
            showMemory.style.display = "flex";
            if (showMemory.innerHTML) {
                showHistory.style.display = "none";
                showMemory.style.display = "block";
                pMemory.style.display = "none";
                deleteMemory.style.display = "block";
                deleteHistory.style.display = "none";
            }
            break;
    }
}

// Clear Screen
function clearScreen() {
    showRes.value = 0;
    showAns.innerHTML = "";
    fullPhrase = "";
}

function clearResult() {
    showRes.value = "";
}
