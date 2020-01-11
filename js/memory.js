// Delete memory screen
function deletedMemory() {
    showMemory.innerHTML = "";
    trashMemory.style.display = "none";
    pMemory.style.display = "flex";
    opacity.forEach(el => {
        el.classList.add("disabled");
        el.classList.add("opacity");
    });
}

// Clear memory button
function clearMemory() {
    deletedMemory();
}

// Add memory screen
function addedMemory() {
    if (showMemory.innerHTML === "") {
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
        trashMemory.style.display = "flex";
    }
}

// Recall memory button
function recallMemory() {
    showRes.value = document.querySelector(".inputMemory").innerHTML;
}

// Store memory button
function storeMemory() {
    if (showMemory.innerHTML !== "") {
        showMemory.innerHTML += `
        <li id="input" class="inputMemory">${showRes.value}</li>
    `;
    }
}
