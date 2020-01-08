// Clear Screen
function clearScreen() {
    showRes.value = 0;
    showAns.innerHTML = "";
    fullPhrase = "";
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
}
