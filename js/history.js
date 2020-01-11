// Delete history screen
function deletedHistory() {
    showHistory.innerHTML = "";
    trashHistory.style.display = "none";
    pHistory.style.display = "flex";
}

// Add history screen
function addedHistory() {
    showHistory.innerHTML += `
        <li class="answer">${showAns.innerHTML}</li>
        <li class="input">${showRes.value}</li>
    `;
    if (showHistory.innerHTML != "" && filter === 0) {
        pHistory.style.display = "none";
        showHistory.style.display = "block";
        trashHistory.style.display = "flex";
    }
}
