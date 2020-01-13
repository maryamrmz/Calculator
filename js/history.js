+(function(app) {
    var elms = app.elements,
        vars = app.variables;

    // Add history screen
    app.addedHistory = function() {
        elms.showHistory.innerHTML += `
        <li class="answer">${elms.showAns.innerHTML}</li>
        <li class="input">${elms.showRes.value}</li>
    `;
        if (elms.showHistory.innerHTML != "" && vars.filter === 0) {
            elms.pHistory.style.display = "none";
            elms.showHistory.style.display = "block";
            elms.trashHistory.style.display = "flex";
        }
    };
})(app);
