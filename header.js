function verticalMenuClick() {
    var verticalBar = document.getElementById("vertical-menu-bar");
    var horMenu = document.getElementById("vertical-menu");


    if (verticalBar.style.display === "none") {
        verticalBar.style = "display: fixed";

    } else {
        verticalBar.style = "display: none";

    }
}

generateGr();

function generateGr() {
    fetch('./data/annonces.json')
    .then(response => response.text())
    .then((data) => {
      console.log(data)
    })
}

function copyMailInClipboard() {
    navigator.clipboard.writeText("hegoberria64@gmail.com");

    var newDiv = document.createElement("div");
    var newContent = document.createTextNode('Adresse mail copiée');


    newDiv.style = "padding-bottom: 10px; padding-top: 10px; white-space: nowrap; color: white; border-radius: 10px; overflow: hidden; transition: all 1s; font-weight: 500; font-family: 'Roboto', sans-serif, monospace; font-size: 15px; z-index: 10; width: 0px; top: calc(50% - 150px); left: calc(50% - 150px); position: fixed; background-color: black; text-align: center;";

    newDiv.appendChild(newContent);

    var currentDiv = document.getElementById('page-content');
    document.body.insertBefore(newDiv, currentDiv);

    setTimeout(() => {
        newDiv.style.width = "300px";
    }, 0);

    setTimeout(() => {
        newDiv.style.width = "0px";
    }, 2000);

    setTimeout(() => {
        newDiv.remove();
    }, 3000);
    
}