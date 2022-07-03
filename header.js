function verticalMenuClick() {
    var verticalBar = document.getElementById("vertical-menu-bar");
    var horMenu = document.getElementById("vertical-menu");


    if (verticalBar.style.display === "none") {
        verticalBar.style = "display: fixed";

    } else {
        verticalBar.style = "display: none";

    }
}

/*generateGr();*/

function generateGr() {

    var x = 0;
    var y = 0;

    var currentDiv = document.getElementById('animationDivHan');

    while (y < window.innerHeight - 100) {
        while (x < window.innerWidth - 100) {
            var newDiv = document.createElement("div");
            newDiv.style.position = "absolute";
            newDiv.style.top = (y).toString() + "px";
            newDiv.style.left = (x).toString() + "px";
            newDiv.style.height = "20px";
            newDiv.style.width = "20px";
            newDiv.style.backgroundColor = "#924738";
            newDiv.style.zIndex = "0";

            newDiv.className = "deco";

            newDiv.setAttribute("mouvementX", "0");
            newDiv.setAttribute("mouvementY", "0");

            document.body.insertBefore(newDiv, currentDiv);

            x = x + 100
        }

        x = 0;
        y = y + 100;
    }

}

function coordinatesFunc(e) {

    /* var decoList = document.getElementsByClassName("deco");
 
     for (const deco in decoList) {
         if (decoList[deco].style != undefined) {
             var decaY = parseInt(decoList[deco].style.top) - e.clientY;
             var decaX = parseInt(decoList[deco].style.left) - e.clientX;
 
             var deca = Math.sqrt((decaX)**2 + (decaY)**2)
 
             if (deca < 100) {
                 decoList[deco].style.height = (Math.abs(deca)/4).toString()+"px";
                 decoList[deco].style.width = (Math.abs(deca)/4).toString()+"px";
 
             } else {
                 decoList[deco].style.height = "20px";
                 decoList[deco].style.width = "20px";
             }
 
             decoList[deco].setAttribute("mouvementX", (parseInt(decoList[deco].getAttribute("mouvementX"))+Math.random()*10-5).toString());
             decoList[deco].setAttribute("mouvementY", (parseInt(decoList[deco].getAttribute("mouvementY"))+Math.random()*10-5).toString());
 
             decoList[deco].style.top = (parseInt(decoList[deco].style.top) + parseInt(decoList[deco].getAttribute("mouvementX"))).toString()+"px";
             decoList[deco].style.left = (parseInt(decoList[deco].style.left) + parseInt(decoList[deco].getAttribute("mouvementY"))).toString()+"px";
 
         }*/
}