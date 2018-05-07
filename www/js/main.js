var screenHeight = 0;
var screenWidth = 0;
var canvas;
function getsetScreenSize() {
    screenWidth = window.screen.width;
    screenHeight = window.screen.height;

    canvas = document.getElementById("mainCanvas");
    canvas.style.height = screenHeight + "px";

    var canvasBody = canvas.querySelector(".canvasBody");
    //canvasBody.style.height = (screenHeight - 50 - 40) + "px"; //Remove TitleHeight and FooterHeight from body height
}

function goPage(pageName) {
    alert(pageName)
    window.location.href = pageName;
}