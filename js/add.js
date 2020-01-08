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

function addedMemory() {
    showMemory.innerHTML += `
        <li id="input">${showRes.value}</li>
    `;
    if (showMemory.innerHTML != "" && filter === 1) {
        pMemory.style.display = "none";
        showMemory.style.display = "block";
        deleteMemory.style.display = "block";
    }
}
