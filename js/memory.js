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
        deleteMemory.style.display = "block";
    }
}

function recallMemory() {
    showRes.value = document.querySelector(".inputMemory").innerHTML;
}

function storeMemory() {
    if (showMemory.innerHTML !== "") {
        showMemory.innerHTML += `
        <li id="input" class="inputMemory">${showRes.value}</li>
    `;
    }
}
