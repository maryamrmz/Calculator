// Define Variables
var showRes = document.getElementById("input"),
    showAns = document.getElementById("answer"),
    navigation = document.querySelector(".navigation"),
    openNav = document.querySelector(".nav"),
    closeNav = document.querySelector(".closeNav"),
    historyBorder = document.querySelector(".history"),
    memoryBorder = document.querySelector(".memory"),
    showHistory = document.querySelector(".historyLi"),
    showMemory = document.querySelector(".memoryLi"),
    pHistory = document.querySelector(".paragraphHistory"),
    pMemory = document.querySelector(".paragraphMemory"),
    deleteHistory = document.querySelector(".deleteHistory"),
    deleteMemory = document.querySelector(".deleteMemory"),
    opacity = document.querySelectorAll(".opacity"),
    filter = 0,
    fullPhrase = "",
    isComputed = false;
