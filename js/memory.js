+(function(app) {
    var elms = app.elements;

    // Delete memory screen
    app.deletedMemory = function() {
        elms.showMemory.innerHTML = "";
        elms.trashMemory.style.display = "none";
        elms.pMemory.style.display = "flex";
        elms.opacity.forEach(el => {
            el.classList.add("disabled");
            el.classList.add("opacity");
        });
    };

    // Store memory button
    function storeMemory() {
        if (showMemory.innerHTML !== "") {
            showMemory.innerHTML += `
        <li class="input inputMemory">${showRes.value}</li>
    `;
        }
    }
})(app);
