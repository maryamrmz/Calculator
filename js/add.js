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
    if (showMemory.innerHTML === "" && showRes.value != 0) {
        showMemory.innerHTML = `
        <li id="input" class="inputMemory">${showRes.value}</li>
    `;
    }
    if (showMemory.innerHTML !== "") {
        opacity.forEach(el => {
            el.classList.remove("disabled");
            el.classList.remove("opacity");
        });
    }

    if (showMemory.innerHTML != "" && filter === 1) {
        pMemory.style.display = "none";
        showMemory.style.display = "block";
        deleteMemory.style.display = "block";
    }
}

function recallMemory() {
    showRes.value = document.querySelector(".inputMemory").innerHTML;
}

function storeMemory() {
    showMemory.innerHTML += `
        <li id="input" class="inputMemory">${showRes.value}</li>
    `;
}
