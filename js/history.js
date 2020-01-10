function deletedHistory() {
    showHistory.innerHTML = "";
    deleteHistory.style.display = "none";
    pHistory.style.display = "flex";
}

function addedHistory() {
    showHistory.innerHTML += `
        <li id="answer">${showAns.innerHTML}</li>
        <li id="input">${showRes.value}</li>
    `;
    if (showHistory.innerHTML != "" && filter === 0) {
        pHistory.style.display = "none";
        showHistory.style.display = "block";
        deleteHistory.style.display = "block";
    }
}
