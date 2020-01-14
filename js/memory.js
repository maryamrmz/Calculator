(function(app) {
    var elms = app.elements,
        vars = app.variables;

    // Delete memory screen
    app.deletedMemory = function() {
        elms.showMemory.innerHTML = "";
        elms.trashMemory.style.display = "none";
        elms.pMemory.style.display = "flex";
        if (vars.filter === 0) {
            elms.pMemory.style.display = "none";
        }
        elms.opacity.forEach(el => {
            el.classList.add("disabled");
            el.classList.add("opacity");
        });
    };
})(app);
