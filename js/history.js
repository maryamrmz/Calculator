// Delete history screen
function deletedHistory() {
    showHistory.innerHTML = "";
    trashHistory.style.display = "none";
    pHistory.style.display = "flex";
}

// Add history screen
function addedHistory() {
    showHistory.innerHTML += `
        <li id="answer">${showAns.innerHTML}</li>
        <li id="input">${showRes.value}</li>
    `;
    if (showHistory.innerHTML != "" && filter === 0) {
        pHistory.style.display = "none";
        showHistory.style.display = "block";
        trashHistory.style.display = "flex";
    }
}
