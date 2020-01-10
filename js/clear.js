// Clear Screen
function clearScreen() {
    showRes.value = 0;
    showAns.innerHTML = "";
    fullPhrase = "";
}

function clearResult() {
    showRes.value = "";
}

function deletedHistory() {
    showHistory.innerHTML = "";
    deleteHistory.style.display = "none";
    pHistory.style.display = "flex";
}

function deletedMemory() {
    showMemory.innerHTML = "";
    deleteMemory.style.display = "none";
    pMemory.style.display = "flex";
    opacity.forEach(el => {
        el.classList.add("disabled");
        el.classList.add("opacity");
    });
}

function clearMemory() {
    deletedMemory();
}
