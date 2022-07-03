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