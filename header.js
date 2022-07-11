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

    if (document.title === "Hego Berria | Annonces") {
        fetch('./data/annonces.json')
            .then(response => response.text())
            .then((data) => {
                const json = data;
                const obj = JSON.parse(json);

                for (const annonceData of obj["liste"]) {
                    var currentDiv = document.getElementById('annonces-middle-part');

                    var titre = annonceData["titre"];
                    var description = annonceData["description"];

                    var annonceContainer = document.createElement("div");
                    var annoncesBoxHeader = document.createElement("div");
                    annoncesBoxHeader.id = "annonces-box-header";
                    var annoncesBoxHeaderInfo = document.createElement("div");
                    annoncesBoxHeaderInfo.id = "annonces-box-header-info";

                    var paragraphe = document.createElement("p");
                    var titreAnnonce = document.createElement("h2");

                    paragraphe.innerText = description;
                    titreAnnonce.innerText = titre;

                    annonceContainer.appendChild(annoncesBoxHeader);
                    annonceContainer.appendChild(paragraphe);

                    annoncesBoxHeader.appendChild(titreAnnonce);
                    annoncesBoxHeader.appendChild(annoncesBoxHeaderInfo);

                    for (const informationText of annonceData["info"]) {
                        var information = document.createElement("h3");
                        information.innerText = informationText;
                        annoncesBoxHeaderInfo.appendChild(information);
                    }

                    currentDiv.appendChild(annonceContainer);
                    
                }

                var footerElement = document.getElementById('footer');
                var containerElement = document.getElementById('page-content');
                footerElement.style = footerElement.style;
                containerElement.style = containerElement.style;
                console.log(typeof obj, obj.count, obj["liste"][0])
            })
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

    hn.style.backgroundColor = "black";
    console.log(hn.style.maxHeight);



    if (id === "contacter-bouton-membres-label" && ["white", ""].indexOf(labelMembres.style.backgroundColor) > -1) {
        labelContacter.style = "background-color: white; color: black;";
        labelTrouver.style = "background-color: white; color: black;";
        clickedLabel.style = "background-color: #BB5A46; color: white;";


        setTimeout(() => {
            contentContacter.style.display = "none";
            contentTrouver.style.display = "none";
            contentMembres.style.display = "block";

            hn.style.backgroundColor = "white";
        }, 200);

    } else if (id === "contacter-bouton-contacter-label" && ["white", ""].indexOf(labelContacter.style.backgroundColor) > -1) {
        clickedLabel.style = "background-color: #BB5A46; color: white;";
        labelTrouver.style = "background-color: white; color: black;";
        labelMembres.style = "background-color: white; color: black;";

        setTimeout(() => {
            contentContacter.style.display = "block";
            contentTrouver.style.display = "none";
            contentMembres.style.display = "none";

            hn.style.backgroundColor = "white";
        }, 200);

    } else if (id === "contacter-bouton-trouver-label" && ["white", ""].indexOf(labelTrouver.style.backgroundColor) > -1) {
        labelContacter.style = "background-color: white; color: black;";
        clickedLabel.style = "background-color: #BB5A46; color: white;";
        labelMembres.style = "background-color: white; color: black;";

        setTimeout(() => {
            contentContacter.style.display = "none";
            contentTrouver.style.display = "block";
            contentMembres.style.display = "none";

            hn.style.backgroundColor = "white";
        }, 200);

    } else {
        labelContacter.style = "background-color: white; color: black;";
        labelTrouver.style = "background-color: white; color: black;";
        labelMembres.style = "background-color: white; color: black;";

        setTimeout(() => {
            contentMembres.style.display = "none";
            contentContacter.style.display = "none";
            contentTrouver.style.display = "none";

            hn.style.backgroundColor = "white";
        }, 200);

    }


}