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
})(app);
