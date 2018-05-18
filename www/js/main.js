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

function logStep(str,isNew)
{
    if (isNew == 1)
    {
        localStorage.clear();
        localStorage.setItem("logStep", "DateTime : " + getCurrentDateTime()) + "... \r\n";
    }
    str = localStorage.getItem("logStep") + "... \r\n" + str;
    localStorage.setItem("logStep", str);
}

function getCurrentDateTime()
{
    d = new Date();
    return d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds();
}