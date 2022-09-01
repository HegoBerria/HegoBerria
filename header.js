function verticalMenuClick() {
    var verticalBar = document.getElementById("vertical-menu-bar");
    var horMenu = document.getElementById("vertical-menu");


    if (verticalBar.style.display === "none") {
        verticalBar.style = "display: fixed";

    } else {
        verticalBar.style = "display: none";

    }
}

function showMessage(message) {

    var newDiv = document.createElement("div");
    var newContent = document.createTextNode(message);

    if (window.matchMedia("(orientation: landscape)").matches) {
        newDiv.style = "padding-bottom: 10px; padding-top: 10px; white-space: nowrap; color: white; border-radius: 10px; overflow: hidden; transition: all 1s; font-weight: 500; font-family: 'Roboto', sans-serif, monospace; font-size: 15px; z-index: 10; width: 0px; top: calc(50% - 150px); left: calc(50% - 150px); position: fixed; background-color: black; text-align: center;";
    } else {
        newDiv.style = "padding-bottom: 10px; padding-top: 10px; white-space: nowrap; color: white; border-radius: 10px; overflow: hidden; transition: all 1s; font-weight: 500; font-family: 'Roboto', sans-serif, monospace; font-size: 40px; z-index: 10; width: 0px; top: calc(50% - 150px); left: calc(50% - 300px); position: fixed; background-color: black; text-align: center;";
    }
    newDiv.appendChild(newContent);

    var currentDiv = document.getElementById('page-content');
    document.body.insertBefore(newDiv, currentDiv);

    setTimeout(() => {
        if (window.matchMedia("(orientation: landscape)").matches) {
            newDiv.style.width = "300px";
        } else {
            newDiv.style.width = "600px";
        }
    }, 0);

    setTimeout(() => {
        newDiv.style.width = "0px";
    }, 2000);

    setTimeout(() => {
        newDiv.remove();
    }, 3000);

}

/* contacter.html */

function contacterMenuClick(id) {
    var clickedLabel = document.getElementById(id);
    var labelContacter = document.getElementById("contacter-bouton-contacter-label");
    var labelTrouver = document.getElementById("contacter-bouton-trouver-label");
    var labelMembres = document.getElementById("contacter-bouton-membres-label");

    var contentContacter = document.getElementById("contacter-content-contacter");
    var contentTrouver = document.getElementById("contacter-content-trouver");
    var contentMembres = document.getElementById("contacter-content-membres");

    var hn = document.getElementById("contacter-content-box");

    hn.style = "box-shadow: 1px 117px 0px 200px rgb(220,220,220) inset;";

    if (id === "contacter-bouton-membres-label" && ["white", ""].indexOf(labelMembres.style.backgroundColor) > -1) {
        labelContacter.style = "background-color: white; color: black;";
        labelTrouver.style = "background-color: white; color: black;";
        clickedLabel.style = "background-color: #BB5A46; color: white; transform: translateX(0px ) translateY(0px); box-shadow: 0px 0px rgb(71, 71, 71); border-color: #BB5A46";


        setTimeout(() => {
            contentContacter.style.display = "none";
            contentTrouver.style.display = "none";
            contentMembres.style.display = "block";

            hn.style = "box-shadow: 0px 0px 0px 0px rgb(220,220,220) inset;";
        }, 200);

    } else if (id === "contacter-bouton-contacter-label" && ["white", ""].indexOf(labelContacter.style.backgroundColor) > -1) {
        clickedLabel.style = "background-color: #BB5A46; color: white; transform: translateX(0px ) translateY(0px); box-shadow: 0px 0px rgb(71, 71, 71); border-color: #BB5A46";
        labelTrouver.style = "background-color: white; color: black;";
        labelMembres.style = "background-color: white; color: black;";

        setTimeout(() => {
            contentContacter.style.display = "block";
            contentTrouver.style.display = "none";
            contentMembres.style.display = "none";

            hn.style = "box-shadow: 0px 0px 0px 0px rgb(220,220,220) inset;";
        }, 200);

    } else if (id === "contacter-bouton-trouver-label" && ["white", ""].indexOf(labelTrouver.style.backgroundColor) > -1) {
        labelContacter.style = "background-color: white; color: black;";
        clickedLabel.style = "background-color: #BB5A46; color: white; transform: translateX(0px ) translateY(0px); box-shadow: 0px 0px rgb(71, 71, 71); border-color: #BB5A46";
        labelMembres.style = "background-color: white; color: black;";

        setTimeout(() => {
            contentContacter.style.display = "none";
            contentTrouver.style.display = "block";
            contentMembres.style.display = "none";

            hn.style = "box-shadow: 0px 0px 0px 0px rgb(220,220,220) inset;";
        }, 200);

    } else {
        labelContacter.style = "background-color: white; color: black;";
        labelTrouver.style = "background-color: white; color: black;";
        labelMembres.style = "background-color: white; color: black;";

        setTimeout(() => {
            contentMembres.style.display = "none";
            contentContacter.style.display = "none";
            contentTrouver.style.display = "none";

            hn.style = "box-shadow: 0px 0px 0px 0px rgb(220,220,220) inset;";
        }, 200);

    }
}

// CANVAS DECO



var canvas = document.getElementById('background-anim');
canvas.style = "z-index: 5;";
var ctx = canvas.getContext('2d');

var circleList = [];

fitToContainer();

window.addEventListener('resize', fitToContainer);

function fitToContainer() {
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}


function getMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function canvasClick(e) {

    var pos = getMousePos(e);

    circleList.push([pos.x, pos.y, 1]);

    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 1, 0, 2 * Math.PI);
    ctx.stroke();

}

let start, previousTimeStamp;
let done = false

function updateCirclePos(timestamp) {


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < circleList.length; i++) {

        circleList[i][2] = circleList[i][2] + 1;

        ctx.strokeStyle = "rgba(0, 0, 0, "+(1 - 0.01 * circleList[i][2]).toString()+")"; 
        ctx.lineWidth=1;

        ctx.beginPath();
        ctx.arc(circleList[i][0], circleList[i][1], circleList[i][2], 0, 2 * Math.PI, false);
        ctx.stroke();

        if (circleList[i][2] > 100) {
            circleList.splice(i, 1); 
        }
    }


    window.requestAnimationFrame(updateCirclePos);

}

window.requestAnimationFrame(updateCirclePos);